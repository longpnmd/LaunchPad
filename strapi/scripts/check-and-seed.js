const { exec } = require("child_process");
const fetch = require("node-fetch");

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

async function checkAndSeed() {
  try {
    // Kiểm tra xem dữ liệu đã tồn tại hay chưa
    const response = await fetch(`${STRAPI_URL}/api/global`);
    if (response.ok) {
      const data = await response.json();
      if (data && data.data && data.data.length > 0) {
        console.log("Data already exists. Skipping seed.");
        return;
      }
    }

    // Nếu không có dữ liệu, thực hiện seed
    console.log("No data found. Seeding...");
    exec("yarn strapi import -f ./data/export_20250116105447.tar.gz --force", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error during seed: ${error.message}`);
        return;
      }
      console.log(stdout);
    });
  } catch (error) {
    console.error("Error checking data:", error);
  }
}

checkAndSeed();
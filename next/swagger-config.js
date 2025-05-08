module.exports = {
    input: "http://localhost:1337/content-api.yaml",
    output: "./lib/services",
    name: "api-service.ts",
    modular: false,
    httpClientType: "fetch", // hoặc "axios" tùy nhu cầu
    singleHttpClient: true
  };
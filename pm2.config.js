module.exports = {
  apps: [
    {
      name: "nextjs",
      script: "npm",
      args: "start",
      cwd: "/app/next",
      env: {
        PORT: 3000,
        NODE_ENV: "production",
      },
    },
    {
      name: "strapi",
      script: "npm",
      args: "start",
      cwd: "/app/strapi",
      env: {
        PORT: 1337,
        NODE_ENV: "production",
      },
    },
  ],
};
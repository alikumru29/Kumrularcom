module.exports = {
  apps: [
    {
      name: "kumrular-api",
      script: "./dist/server/index.js",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 4000,
      },
      watch: false,
      max_memory_restart: "1G",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      time: true,
    },
  ],
};

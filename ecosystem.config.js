module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "npm",
      args: "run start",
      instances: "max",       // or 1 if you don’t want clustering
      exec_mode: "cluster",   // enables load balancing across CPUs
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};

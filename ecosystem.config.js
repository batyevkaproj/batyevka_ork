module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      // The actual Node.js script that needs to be executed
      script: './node_modules/next/dist/bin/next',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};

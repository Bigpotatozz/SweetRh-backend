module.exports = {
  apps: [
    {
      name: 'api-nest',
      script: 'npm',
      args: 'run start', // o "run start:dev" si quieres que detecte cambios
      cwd: './tu-carpeta-de-nest', // CAMBIA ESTO por el nombre de tu carpeta
      watch: false,
      interpreter: 'shell', // Vital para que no se detenga en Windows
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'front-react',
      script: 'npm',
      args: 'run dev',
      cwd: './tu-carpeta-de-react', // CAMBIA ESTO por el nombre de tu carpeta
      watch: false,
      interpreter: 'shell',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};

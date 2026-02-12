const { spawn } = require('child_process');
const path = require('path');

const rootPath = __dirname;

// ⚠️ Cambia estos nombres si tus carpetas se llaman diferente
const backendPath = path.join(rootPath, 'SweetRh-backend');
const frontendPath = path.join(rootPath, 'SweetRh');

// Iniciar Backend (Nest)
spawn('node', ['dist/main.js'], {
  cwd: backendPath,
  stdio: 'inherit',
  shell: true,
});

// Esperar 3 segundos y luego iniciar Frontend
setTimeout(() => {
  spawn(
    'node',
    ['node_modules/http-server/bin/http-server', 'dist', '-p', '3000'],
    {
      cwd: frontendPath,
      stdio: 'inherit',
      shell: true,
    },
  );
}, 3000);

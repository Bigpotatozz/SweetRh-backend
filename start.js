const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootPath = __dirname;
const backendPath = path.join(rootPath, 'SweetRh-backend');
const frontendPath = path.join(rootPath, 'SweetRh');
const logPath = path.join(rootPath, 'logs', 'system.log');

function log(message) {
  const time = new Date().toISOString();
  const line = `[${time}] ${message}\n`;
  fs.appendFileSync(logPath, line);
  console.log(line.trim());
}

function startProcess(name, command, args, cwd) {
  function launch() {
    log(`Iniciando ${name}...`);

    const proc = spawn(command, args, {
      cwd,
      shell: true,
    });

    proc.stdout.on('data', (data) => {
      log(`${name}: ${data.toString().trim()}`);
    });

    proc.stderr.on('data', (data) => {
      log(`${name} ERROR: ${data.toString().trim()}`);
    });

    proc.on('close', (code) => {
      log(`${name} terminó con código ${code}. Reiniciando en 5 segundos...`);
      setTimeout(launch, 5000);
    });

    proc.on('error', (err) => {
      log(`Error iniciando ${name}: ${err.message}`);
      setTimeout(launch, 5000);
    });
  }

  launch();
}

// 🔹 Iniciar Backend
startProcess('NestAPI', 'node', ['dist/main.js'], backendPath);

// 🔹 Esperar 5 segundos y luego iniciar Frontend
setTimeout(() => {
  startProcess(
    'ReactFront',
    'node',
    ['node_modules/http-server/bin/http-server', 'dist', '-p', '3000'],
    frontendPath,
  );
}, 5000);

log('Sistema iniciado correctamente.');

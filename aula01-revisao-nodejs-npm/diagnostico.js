//! Importando o módulo 'os' do Node.js para obter informações sobre Servidor.
const os = require('os');

const plataforma = os.platform(); //! Obtendo a plataforma do sistema operacional (ex: 'win32', 'linux', 'darwin').
const memoriaTotal = (os.totalmem() / (1024 ** 3)).toFixed(2); //! Obtendo a memória total em GB.
const memoriaLivre = (os.freemem() / (1024 ** 3)).toFixed(2); //! Obtendo a memória livre em GB.
const cpus = os.cpus(); //! Obtendo informações sobre os processadores disponíveis.

//! Exibindo informações sobre o sistema operacional e hardware do servidor.
console.log('=== DIAGNÓSTICO DO SERVIDOR ===\n');
console.log(`Arquitetura OS: ${plataforma}`);
console.log(`Memória RAM Total: ${memoriaTotal} GB`);
console.log(`Memória RAM Livre: ${memoriaLivre} GB`);
console.log (`Cores da CPU: ${cpus.length}`);
console.log(`Processador: ${cpus[0].model}`);
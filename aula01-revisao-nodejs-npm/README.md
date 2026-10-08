# Aula 01: Revisão do Node.js e NPM

Este repositório contém o código e as anotações referentes à **Aula 01** da Unidade Curricular de **Codificação para Back-End** (SENAI - AMAPÁ).

---

## Objetivos da Aula

* Compreender os conceitos do ecossistema Node.js e sua execução *Server-Side*.
* Validar e configurar o ambiente de desenvolvimento local.
* Inicializar um projeto Node.js utilizando o **NPM** (*Node Package Manager*).
* Desenvolver um script de diagnóstico utilizando o módulo nativo `os` para acessar recursos diretos do sistema operacional.

---

## 💻 Conceitos Server-Side Aplicados

Diferente da execução no navegador (*Client-Side*), onde o código é limitado ao DOM e à interface visual:
* **Acesso Direto ao Sistema Operacional:** O Node.js permite interagir diretamente com o hardware, memória e sistema de arquivos.
* **Execução via Terminal:** O código é executado diretamente pelo runtime do Node.js através da linha de comando, sem necessidade de uma página HTML.
* **Arquitetura Non-blocking I/O:** Utilização do motor V8 e do Event Loop para processar instruções de forma performática.

---

## 🚀 Passo a Passo da Prática

### 1. Verificação do Ambiente
Antes de iniciar a aplicação, confirmamos a instalação do **Node.js** e do **NPM** via terminal[cite: 2]:

```bash
node -v
npm -v
```
### Inicialização do Projeto
Criamos o diretório do projeto e geramos o arquivo manifesto package.json:
```bash
# Criar diretório do projeto
mkdir aula01-diagnostico

# Navegar até a pasta
cd aula01-diagnostico

# Inicializar o projeto Node.js com configurações padrão
npm init -y
```

### Script de Diagnóstico do Sistema (diagnostico.js)
Criamos um arquivo de script para mapear e exibir informações de hardware e sistema operacional.
```bash
// Importação do módulo nativo OS (Operating System)
const os = require('os');

console.log('=== 🖥️ DIAGNÓSTICO DO SISTEMA ===\n');

// 1. Plataforma do Sistema Operacional
console.log('Plataforma:', os.platform());

// 2. Memória Total (convertida para GB)
const totalMemGB = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
console.log(`Memória Total: ${totalMemGB} GB`);

// 3. Memória Livre (convertida para GB)
const freeMemGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
console.log(`Memória Livre: ${freeMemGB} GB`);

// 4. Detalhes das CPUs
console.log('Quantidade de Núcleos (CPUs):', os.cpus().length);
console.log('Modelo do Processador:', os.cpus()[0].model);
```

## Mapeamento dos Métodos do Módulo os
- os.platform(): Retorna uma string identificando a plataforma do sistema operacional (ex: win32, linux, darwin).

- os.totalmem(): Retorna a quantidade total de memória RAM física do sistema em bytes.

- os.freemem(): Retorna a quantidade de memória RAM livre/disponível no sistema em bytes.

- os.cpus(): Retorna um array contendo informações detalhadas sobre cada núcleo/CPU do sistema.

### Como Executar o Script
Para rodar o script de diagnóstico, execute o comando abaixo no seu terminal:
```bash
node diagnostico.js
```
### Observações Técnicas
O módulo os é nativo do Node.js, ou seja, não há necessidade de instalá-lo via npm install[cite: 2].

Este módulo demonstra na prática a diferença do JavaScript no servidor: ele possui acesso que seria bloqueado por navegadores por motivos de segurança.
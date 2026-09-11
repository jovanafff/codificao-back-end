# 📝 Relatório da Atividade - Revisão Node.js e NPM

## 📌 Objetivo

Realizar uma revisão dos conceitos básicos de Node.js e NPM, criando um projeto e utilizando módulos nativos da plataforma para obter informações sobre o sistema operacional, memória RAM e processador.

## 🛠️ Tecnologias utilizadas

- Node.js
- NPM
- JavaScript
- Módulo nativo `os`
- Visual Studio Code

## 📂 Criação do projeto

Foi criado um projeto Node.js chamado:

`aula01-revisao-nodejs-npm`

Durante a criação do projeto, foi configurado o arquivo `package.json`, responsável por armazenar as informações e configurações do projeto.

## ⚙️ Configuração do package.json

O arquivo `package.json` foi configurado com as principais informações do projeto, como:

- Nome do projeto: `aula01-revisao-nodejs-npm`
- Versão: `1.0.0`
- Arquivo principal: `index.js`
- Autor: Jovana Vieira Miranda
- Licença: ISC
- Tipo de módulo: `commonjs`

Também foi criada a seção `scripts`, contendo o comando padrão de teste disponibilizado pelo NPM.

## 💻 Desenvolvimento do código

No arquivo `index.js`, foi utilizado o módulo nativo `os` do Node.js:

```js
const os = require('os');
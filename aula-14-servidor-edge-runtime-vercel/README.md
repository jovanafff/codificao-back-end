# Aula 14: Servidor Edge Runtime com Vercel — Guia Completo

![Node.js](https://img.shields.io/badge/Node.js-v26+-green?logo=node.js)
![Vercel](https://img.shields.io/badge/Vercel-CLI-black?logo=vercel)
![API](https://img.shields.io/badge/API-Serverless-blue)

Documentação da **Aula 14 da Unidade Curricular de Codificação para Back-End**.  
Nesta aula foi estudada a utilização da **Vercel** para execução e publicação de aplicações e APIs, utilizando uma estrutura simples baseada em **Serverless Functions / Edge Runtime**.

---

## 🎯 Objetivos da Aula

Durante esta aula, os principais objetivos foram:

1. Conhecer a plataforma Vercel.
2. Instalar e utilizar a Vercel CLI.
3. Realizar login através do terminal.
4. Criar uma API utilizando uma função de servidor.
5. Trabalhar com o conceito de Serverless.
6. Utilizar um runtime baseado em Edge.
7. Fazer o deploy de uma aplicação utilizando a Vercel.
8. Verificar a execução da aplicação através da plataforma.

---

## 📚 O que é a Vercel?

A **Vercel** é uma plataforma utilizada para hospedagem e publicação de aplicações web e APIs.

Ela permite realizar o deploy de aplicações diretamente a partir do projeto, facilitando o processo de disponibilização de aplicações na internet.

Nesta aula, a Vercel foi utilizada através da **Vercel CLI**, executada pelo terminal.

---

## 💻 Vercel CLI

A Vercel CLI permite controlar projetos da Vercel através do terminal.

Durante a aula foi utilizado o comando:

```bash
vercel
```

Também foi realizado o login utilizando:

```bash
vercel login
```

Após executar o comando, a CLI apresentou um endereço para autenticação da conta Vercel.

---

## 🔐 Login na Vercel

O processo de autenticação foi realizado pelo terminal.

Foi utilizado:

```bash
vercel login
```

A ferramenta apresentou uma opção de autenticação através do navegador.

Após a autenticação, o projeto passou a estar conectado à conta Vercel.

---

## ⚡ Edge Runtime

O **Edge Runtime** permite executar funções próximas aos usuários, utilizando uma infraestrutura distribuída.

Esse modelo é utilizado para aplicações que precisam de respostas rápidas e funções leves executadas no servidor.

Nesta aula foi criado um servidor utilizando esse conceito para retornar informações através de uma API.

---

## 🕐 API de Hora do Servidor

O projeto possui o arquivo:

```text
api/
└── hora-servidor.ts
```

Esse arquivo representa uma função da API responsável por trabalhar com a hora do servidor.

A ideia principal é permitir que uma requisição ao endpoint retorne informações relacionadas à data e hora atuais do servidor.

---

## 📂 Estrutura do Projeto

A estrutura apresentada durante a aula foi:

```text
aula-14-servidor-edge-runtime-vercel/
│
├── api/
│   └── hora-servidor.ts
│
├── .gitignore
├── package.json
└── README.md
```

### `api/`

Diretório utilizado para armazenar as funções da API.

### `hora-servidor.ts`

Arquivo responsável pela função que fornece a hora do servidor.

### `package.json`

Arquivo responsável pelas configurações e dependências do projeto.

### `.gitignore`

Arquivo utilizado para definir quais arquivos e pastas não devem ser enviados para o Git.

### `README.md`

Arquivo utilizado para documentar o conteúdo desenvolvido na aula.

---

## 🔄 Funcionamento da Aplicação

O funcionamento básico da aplicação pode ser representado assim:

```text
Cliente
   │
   │ Requisição HTTP
   ▼
Vercel
   │
   ▼
Edge / Serverless Function
   │
   ▼
hora-servidor.ts
   │
   ▼
Resposta da API
```

---

## 🚀 Deploy

Uma das práticas realizadas foi utilizar a **Vercel CLI** para trabalhar com o projeto.

O comando:

```bash
vercel
```

é utilizado para executar o processo relacionado ao projeto na plataforma.

A Vercel identifica a aplicação e disponibiliza as configurações necessárias para o deploy.

---

## 🛠️ Tecnologias e Ferramentas

- **Node.js**
- **TypeScript**
- **Vercel**
- **Vercel CLI**
- **Edge Runtime**
- **API**
- **Git**
- **GitHub**

---

## 🧠 Conceitos Aprendidos

Durante a aula foram trabalhados os seguintes conceitos:

- Vercel;
- Vercel CLI;
- Login pela CLI;
- Deploy;
- APIs;
- Serverless Functions;
- Edge Runtime;
- Execução de funções no servidor;
- Estrutura de uma API;
- Retorno de informações através de uma requisição HTTP.

---

## 📌 Comandos Utilizados

### Login

```bash
vercel login
```

Comando utilizado para autenticar a conta na Vercel.

### Executar a Vercel

```bash
vercel
```

Comando utilizado para trabalhar com o projeto através da Vercel CLI.

---

## 📋 Resumo da Aula

Nesta aula foi desenvolvido um projeto utilizando a **Vercel** para trabalhar com uma API baseada em funções executadas no servidor.

Foi criado o arquivo `hora-servidor.ts` dentro da pasta `api`, responsável pelo funcionamento do endpoint relacionado à hora do servidor.

Também foi praticado o uso da **Vercel CLI**, incluindo o processo de login e a execução do projeto pela plataforma.

Além disso, foram apresentados os conceitos de **Serverless Functions** e **Edge Runtime**, importantes para compreender novas formas de executar APIs e aplicações na nuvem.

---

## ✅ Conclusão

A Aula 14 permitiu compreender como utilizar a **Vercel** para executar e publicar funções de uma API.

O desenvolvimento da função `hora-servidor.ts` possibilitou colocar em prática a criação de um endpoint simples, enquanto o uso da Vercel CLI apresentou uma forma de realizar a configuração e o deploy do projeto diretamente pelo terminal.

Esse conhecimento é importante para o desenvolvimento de APIs modernas e para a utilização de serviços de hospedagem em nuvem.
<<<<<<< HEAD
# Aula 11: API de Upload de Imagens com NestJS — Guia Completo

![Node.js](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?logo=typescript)
![NPM](https://img.shields.io/badge/NPM-package-red?logo=npm)
![Codificação Back-End](https://img.shields.io/badge/Codificação%20para%20Back--End-SENAI-blue)

Documentação da **Aula 11 da Unidade Curricular de Codificação para Back-End**.  
Nesta aula foi desenvolvido o conceito de **upload de imagens utilizando uma API com NestJS**, trabalhando com recebimento de arquivos, armazenamento e organização dos recursos enviados para a aplicação.

---

## 🎯 Objetivos da Aula

Durante esta aula, os principais objetivos foram:

1. Compreender como funciona o upload de arquivos em uma API.
2. Criar uma API capaz de receber imagens.
3. Trabalhar com arquivos enviados através de requisições HTTP.
4. Utilizar recursos do NestJS para manipulação de arquivos.
5. Armazenar imagens recebidas pela aplicação.
6. Organizar os arquivos enviados em uma pasta específica.
7. Compreender o funcionamento de requisições `multipart/form-data`.

---

## 📚 O que é Upload de Arquivos?

O **upload** é o processo de enviar um arquivo do cliente para o servidor.

No caso desta aula, a aplicação foi preparada para receber **imagens** através de uma API.

O fluxo básico funciona da seguinte maneira:

```text
Cliente
   ↓
Seleciona uma imagem
   ↓
Envia uma requisição HTTP
   ↓
API NestJS
   ↓
Recebe o arquivo
   ↓
Processa o upload
   ↓
Armazena a imagem
```

---

## 🖼️ Upload de Imagem

Para enviar arquivos através de uma API, é utilizado o formato:

```text
multipart/form-data
```

Esse formato permite enviar arquivos juntamente com outros dados em uma requisição HTTP.

Um exemplo de requisição seria:

```http
POST /upload
Content-Type: multipart/form-data
```

A imagem é enviada no corpo da requisição e recebida pelo servidor.

---

## 🚀 API de Upload

A aplicação desenvolvida nesta aula possui uma estrutura preparada para receber imagens e armazená-las no servidor.

A pasta:

```text
uploads/
```

é utilizada para armazenar os arquivos enviados através da API.

Dessa forma, quando uma imagem é enviada, ela pode ser salva dentro dessa pasta.

---

## 📂 Pasta `uploads`

A pasta `uploads` possui a função de armazenar os arquivos enviados para a aplicação.

Exemplo:

```text
uploads/
├── imagem1.jpg
├── imagem2.png
└── imagem3.jpeg
```

Essa organização permite separar os arquivos enviados dos demais arquivos do projeto.

---

## 🧩 Controller

O Controller é responsável por receber as requisições HTTP relacionadas ao upload.

De forma geral, o Controller recebe o arquivo enviado pelo cliente e encaminha o processamento necessário.

O fluxo pode ser representado por:

```text
POST /upload
      ↓
Upload Controller
      ↓
Recebimento do arquivo
      ↓
Salvamento
      ↓
Resposta da API
```

---

## ⚙️ Funcionamento da API

O processo de upload acontece seguindo algumas etapas:

### 1. Seleção da imagem

O usuário seleciona uma imagem no computador ou dispositivo.

### 2. Envio da requisição

A imagem é enviada para a API através de uma requisição HTTP.

### 3. Recebimento do arquivo

O NestJS recebe o arquivo enviado pelo cliente.

### 4. Processamento

A aplicação processa o arquivo recebido.

### 5. Armazenamento

A imagem é armazenada na pasta:

```text
uploads/
```

### 6. Resposta

Depois do processamento, a API retorna uma resposta informando o resultado da operação.

---

## 🗂️ Estrutura do Projeto

A estrutura apresentada durante a aula possui os seguintes elementos:

```text
aula-11-api-upload-imagem/
│
├── dist/
├── node_modules/
├── src/
├── test/
├── uploads/
│
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
└── vitest.config.ts
```

### Principais diretórios

**`src/`**

Contém o código-fonte da aplicação NestJS.

**`uploads/`**

Diretório utilizado para armazenar as imagens enviadas através da API.

**`test/`**

Contém arquivos relacionados aos testes da aplicação.

**`dist/`**

Contém os arquivos gerados durante o processo de compilação.

**`node_modules/`**

Contém as dependências instaladas pelo NPM.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **NPM**
- **HTTP**
- **Multipart/form-data**

---

## 🔄 Fluxo da Aplicação

O funcionamento da API pode ser representado da seguinte maneira:

```text
        CLIENTE
           │
           │ POST /upload
           │
           ▼
      ┌───────────┐
      │   API     │
      │  NestJS   │
      └─────┬─────┘
            │
            ▼
       Recebe arquivo
            │
            ▼
       Processa upload
            │
            ▼
       ┌───────────┐
       │  uploads/ │
       └─────┬─────┘
             │
             ▼
        Arquivo salvo
             │
             ▼
        Resposta HTTP
```

---

## 🧠 Conceitos Aprendidos

Nesta aula foram trabalhados os seguintes conceitos:

- Upload de arquivos;
- Upload de imagens;
- APIs HTTP;
- Requisições `POST`;
- `multipart/form-data`;
- Recebimento de arquivos;
- Armazenamento de arquivos;
- Organização de diretórios;
- NestJS;
- TypeScript;
- Estrutura de uma API.

---

## 📌 Importância do Upload em APIs

O upload de arquivos é um recurso muito utilizado no desenvolvimento de sistemas.

Alguns exemplos de utilização são:

- Cadastro de fotos de usuários;
- Imagens de produtos;
- Documentos;
- Fotos de perfil;
- Arquivos para sistemas administrativos;
- Anexos em aplicações web.

Por isso, compreender como uma API recebe e armazena arquivos é importante para o desenvolvimento de aplicações completas.

---

## ⚠️ Cuidados com Arquivos Enviados

Ao trabalhar com upload, a aplicação deve considerar alguns cuidados, como:

- Verificar o tipo do arquivo;
- Controlar o tamanho do arquivo;
- Definir onde os arquivos serão armazenados;
- Evitar nomes de arquivos duplicados;
- Validar os arquivos recebidos;
- Não permitir o envio de arquivos inadequados.

Essas validações ajudam a tornar a API mais segura e organizada.

---

## 📝 Resumo da Aula

Nesta aula foi desenvolvida uma API utilizando **NestJS** com o objetivo de trabalhar com **upload de imagens**.

Foi estudado como uma aplicação pode receber arquivos através de requisições HTTP, processar esses arquivos e armazená-los em uma pasta específica chamada `uploads`.

Também foi reforçada a importância da organização dos diretórios e da utilização de Controllers para lidar com as requisições da API.

---

## ✅ Conclusão

A Aula 11 permitiu colocar em prática o desenvolvimento de uma API capaz de trabalhar com **upload de imagens**.

O conteúdo apresentou conceitos importantes sobre recebimento de arquivos, requisições `multipart/form-data`, armazenamento e organização dos arquivos dentro de uma aplicação NestJS.

Esse conhecimento pode ser aplicado em diversos tipos de sistemas que precisam permitir o envio de imagens e outros arquivos pelos usuários.
=======
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Observability

In production applications, observability is essential for understanding how your system behaves, detecting issues early, and maintaining reliable performance.

[NestJS Observe](https://observe.nestjs.com) automatically instruments your NestJS application, giving you deep visibility into your system with minimal setup:

- **Distributed tracing:** Follow requests across services and understand how they flow through your system.
- **Waterfall analysis:** Visualize request execution and identify slow operations, bottlenecks, and unexpected delays.
- **Performance analysis:** Analyze application performance in real time and quickly pinpoint areas that need optimization.
- **Metrics:** Track key application and infrastructure metrics to understand system health and performance trends.
- **Logging:** Centralize and correlate logs with traces and other telemetry to make debugging easier.
- **Error tracking:** Detect errors quickly and investigate their root causes with the surrounding context.
- **SLA monitoring:** Track service-level objectives and identify when your application is approaching or exceeding defined thresholds.
- **Alarms and alerts:** Set up alerts for critical errors, performance degradation, SLA violations, and other anomalies so your team can react quickly.

To add it to this project:

```bash
$ npm install @nestjs/observe
```

Then follow the [setup guide](https://docs.nestjs.com/observability/overview) - it takes a single import and an app key.

The free plan needs no payment details and covers 300,000 events a month. You can also browse the [live demo](https://www.observe-demo.nestjs.com/dashboard) first - the whole dashboard over a busy service's data, with nothing to install.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Auto-instrument your application with [NestJS Observe](https://observe.nestjs.com). Distributed tracing, metrics, and logging made easy. Error tracking and performance monitoring for your NestJS applications.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
>>>>>>> origin/main

<<<<<<< HEAD
# Aula 12: Request e Response Advanced no NestJS — Guia Completo

![Node.js](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?logo=typescript)
![NPM](https://img.shields.io/badge/NPM-package-red?logo=npm)
![Codificação Back-End](https://img.shields.io/badge/Codificação%20para%20Back--End-SENAI-blue)

Documentação da **Aula 12 da Unidade Curricular de Codificação para Back-End**.  
Nesta aula foram estudados recursos avançados de **Request e Response no NestJS**, aprofundando o controle das requisições recebidas pela API e das respostas enviadas ao cliente.

---

## 🎯 Objetivos da Aula

Durante esta aula, os principais objetivos foram:

1. Compreender o funcionamento de Request e Response.
2. Trabalhar com dados enviados pelo cliente.
3. Acessar informações da requisição HTTP.
4. Manipular respostas da API.
5. Utilizar recursos do NestJS para controlar requisições e respostas.
6. Trabalhar com diferentes informações presentes em uma requisição.
7. Compreender como personalizar respostas HTTP.

---

## 📚 Request e Response

Em uma API, a comunicação entre cliente e servidor acontece através de requisições e respostas HTTP.

### Request

A **Request (requisição)** representa os dados enviados pelo cliente para o servidor.

Uma requisição pode conter informações como:

- Parâmetros da URL;
- Query parameters;
- Headers;
- Body;
- Método HTTP;
- URL acessada.

### Response

A **Response (resposta)** representa os dados que o servidor devolve ao cliente após processar uma requisição.

Uma resposta pode conter:

- Status HTTP;
- Dados;
- Mensagens;
- Headers;
- JSON;
- Informações sobre o resultado da operação.

---

## 🔄 Fluxo de uma Requisição

O funcionamento básico pode ser representado da seguinte maneira:

```text
CLIENTE
   │
   │ Request
   ▼
API NestJS
   │
   │ Processamento
   ▼
Controller
   │
   ▼
Service
   │
   │ Response
   ▼
CLIENTE
```

---

## 📥 Request

A Request contém informações enviadas pelo cliente.

Exemplo de uma requisição:

```http
GET /jogos/10
```

Nesse caso:

```text
GET
```

é o método HTTP utilizado.

```text
/jogos/10
```

é a URL acessada.

O número:

```text
10
```

pode ser utilizado como um parâmetro da rota.

---

## 🔎 Informações da Request

Uma requisição HTTP pode fornecer diferentes tipos de informações.

### Params

São parâmetros presentes diretamente na URL.

Exemplo:

```text
/jogos/10
```

Podemos acessar o valor utilizando:

```typescript
@Param('id')
```

---

### Query

São informações adicionadas depois do `?` na URL.

Exemplo:

```text
/jogos?categoria=acao
```

O valor pode ser acessado utilizando:

```typescript
@Query('categoria')
```

---

### Body

O Body contém dados enviados no corpo da requisição.

É muito utilizado em requisições `POST`, `PUT` e `PATCH`.

Exemplo:

```json
{
  "nome": "Jogo de Aventura",
  "categoria": "Ação"
}
```

No NestJS, o conteúdo pode ser recebido utilizando:

```typescript
@Body()
```

---

### Headers

Os Headers carregam informações adicionais da requisição.

Exemplo:

```text
Authorization
Content-Type
Accept
```

Essas informações podem ser utilizadas para autenticação, identificação do formato dos dados e outras configurações da comunicação.

---

## 📤 Response

A Response é a resposta enviada pelo servidor para o cliente.

Exemplo:

```json
{
  "mensagem": "Jogo encontrado"
}
```

Além dos dados, a resposta também possui um **status HTTP**.

Exemplos:

| Status | Significado |
|---|---|
| 200 | Requisição realizada com sucesso |
| 201 | Recurso criado |
| 400 | Requisição inválida |
| 401 | Não autorizado |
| 404 | Recurso não encontrado |
| 500 | Erro interno do servidor |

---

## 🎛️ Controle da Response

O NestJS permite controlar as respostas da API utilizando recursos próprios do framework.

Em situações específicas, é possível trabalhar diretamente com o objeto de resposta HTTP.

Exemplo:

```typescript
import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('jogos')
export class JogosController {

  @Get()
  listar(@Res() response: Response) {
    return response.status(200).json({
      mensagem: 'Lista de jogos'
    });
  }
}
```

Nesse exemplo, o objeto `response` permite definir o status HTTP e o conteúdo retornado para o cliente.

---

## 🧩 Controller

O Controller é responsável por receber as requisições e definir como elas serão tratadas.

Exemplo:

```
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

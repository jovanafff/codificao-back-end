# Aula 13: Middlewares e Interceptors no NestJS — Guia Completo

![Node.js](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?logo=typescript)
![NPM](https://img.shields.io/badge/NPM-package-red?logo=npm)
![Codificação Back-End](https://img.shields.io/badge/Codificação%20para%20Back--End-SENAI-blue)

Documentação da **Aula 13 da Unidade Curricular de Codificação para Back-End**.  
Nesta aula foram estudados conceitos de **Middlewares e Interceptors no NestJS**, com a implementação de um middleware responsável por registrar informações das requisições e realizar uma verificação de acesso em rotas administrativas.

---

## 🎯 Objetivos da Aula

Durante esta aula, os principais objetivos foram:

1. Compreender o conceito de Middleware no NestJS.
2. Criar um Middleware personalizado.
3. Interceptar requisições HTTP antes que elas cheguem ao Controller.
4. Registrar informações das requisições realizadas.
5. Trabalhar com `Request`, `Response` e `NextFunction`.
6. Realizar uma verificação de autorização através de um Header.
7. Retornar uma resposta HTTP `403` quando o acesso não for permitido.
8. Conhecer o conceito de Interceptors no NestJS.

---

## 📚 O que é um Middleware?

Um **Middleware** é uma função executada durante o processamento de uma requisição HTTP.

Ele pode ser utilizado para:

- Registrar requisições;
- Validar informações;
- Verificar autenticação;
- Verificar autorização;
- Alterar dados da requisição;
- Interromper uma requisição;
- Encaminhar a requisição para o próximo estágio.

O funcionamento pode ser representado da seguinte maneira:

```text
Cliente
   ↓
Request
   ↓
Middleware
   ↓
Controller
   ↓
Service
   ↓
Response
```

---

## 📝 Middleware de Logger

Nesta aula foi criado um Middleware chamado `LoggerMiddleware`.

A estrutura do projeto apresenta uma pasta específica para esse Middleware:

```text
logger/
├── logger.middleware.spec.ts
└── logger.middleware.ts
```

O objetivo principal é registrar informações sobre as requisições recebidas pela aplicação.

---

## 📊 Registro das Requisições

O Middleware utiliza informações presentes no objeto `Request` para registrar:

- Método HTTP;
- Rota acessada;
- URL da requisição.

Exemplo:

```typescript
console.log(
  `[LOG] Método: ${req.method} | Rota: ${req.path}`
);
```

Uma requisição poderia gerar no terminal:

```text
[LOG] Método: GET | Rota: /jogos
```

Dessa forma, é possível acompanhar as requisições realizadas na aplicação.

---

## 🔐 Verificação de Acesso

Além do registro das requisições, o Middleware também realiza uma verificação para rotas administrativas.

O código verifica se a rota acessada começa com:

```text
/admin
```

Exemplo:

```typescript
if (currentUrl.startsWith('/admin')) {
```

Quando a rota é administrativa, o Middleware verifica um Header chamado:

```text
x-user-base
```

---

## 👤 Verificação do Usuário

O valor do Header é obtido através de:

```typescript
const base = req.headers['x-user-base'];
```

Em seguida, o Middleware verifica se o valor recebido corresponde a:

```text
Administrator
```

Caso o usuário não possua esse valor, a requisição é interrompida.

---

## 🚫 Resposta HTTP 403

Quando o acesso à área administrativa não é autorizado, a API retorna o status:

```text
403
```

O código utilizado possui uma estrutura semelhante a:

```typescript
return res.status(403).json({
  Codigo: 403,
  mensagem: 'Acesso Negado: Privilégio de Administrador necessário',
  registro: new Date,
});
```

O status HTTP `403` representa que o servidor entendeu a requisição, porém o acesso ao recurso solicitado não foi autorizado.

A resposta também apresenta:

- Código do erro;
- Mensagem informando o motivo;
- Data e hora do registro.

---

## 🔄 Funcionamento do Middleware

O fluxo implementado na aula pode ser representado da seguinte forma:

```text
             Requisição HTTP
                    ↓
              LoggerMiddleware
                    ↓
          ┌─────────┴─────────┐
          ↓                   ↓
      Rota normal         Rota /admin
          ↓                   ↓
        next()          Verifica Header
                              ↓
                    ┌─────────┴─────────┐
                    ↓                   ↓
              Administrator        Outro valor
                    ↓                   ↓
                  next()            403
                    ↓
               Controller
```

---

## ▶️ `next()`

O `next()` é utilizado para permitir que a requisição continue seu processamento.

Exemplo:

```typescript
next();
```

Quando as condições do Middleware são atendidas, a requisição continua para o próximo estágio da aplicação.

Quando uma condição de autorização não é atendida, o Middleware pode retornar uma resposta e impedir que a requisição continue.

---

## 📦 Request, Response e NextFunction

O Middleware trabalha com três elementos principais:

### Request

Representa a requisição recebida pelo servidor.

```typescript
req: Request
```

Permite acessar informações como:

```typescript
req.method
req.path
req.url
req.headers
```

### Response

Representa a resposta que será enviada ao cliente.

```typescript
res: Response
```

Pode ser utilizada para definir:

```typescript
res.status()
res.json()
```

### NextFunction

Permite continuar o processamento da requisição.

```typescript
next: NextFunction
```

---

## 🧩 Middleware x Interceptor

Os dois recursos permitem interferir no processamento das requisições, mas possuem finalidades diferentes.

| Recurso | Principal utilização |
|---|---|
| Middleware | Executar lógica antes do processamento da rota |
| Interceptor | Interceptar e modificar o fluxo antes ou depois da execução do Controller |
| Controller | Receber e tratar as requisições |
| Service | Concentrar a lógica da aplicação |

### Middleware

É utilizado para tarefas como:

- Logs;
- Validações;
- Autenticação;
- Processamento de requisições.

### Interceptor

Pode ser utilizado para:

- Transformar respostas;
- Adicionar informações;
- Medir tempo de execução;
- Executar lógica antes e depois do Controller.

---

## 🗂️ Estrutura do Projeto

A estrutura trabalhada na aula possui:

```text
aula-13-middlewares-interceptors/
│
├── dist/
├── node_modules/
│
├── src/
│   ├── logger/
│   │   ├── logger.middleware.spec.ts
│   │   └── logger.middleware.ts
│   │
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
│
├── test/
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **NPM**
- **HTTP**

---

## 🧠 Conceitos Aprendidos

Nesta aula foram trabalhados os seguintes conceitos:

- Middlewares;
- Interceptors;
- `Request`;
- `Response`;
- `NextFunction`;
- Métodos HTTP;
- Headers HTTP;
- Rotas administrativas;
- Status HTTP `403`;
- Controle de acesso;
- Registro de requisições;
- `next()`;
- Organização de arquivos no NestJS.

---

## 📌 Exemplo Prático

Uma requisição para uma rota administrativa:

```http
GET /admin
```

passa pelo Middleware.

O Middleware verifica:

```text
A rota começa com /admin?
        ↓
       SIM
        ↓
Existe o Header x-user-base?
        ↓
O valor é Administrator?
```

Se o usuário estiver autorizado:

```text
Middleware
    ↓
next()
    ↓
Controller
```

Caso contrário:

```text
Middleware
    ↓
403 Forbidden
    ↓
Acesso Negado
```

---

## 🔎 Importância dos Middlewares

Middlewares são importantes para aplicações porque permitem centralizar determinadas regras que precisam ser executadas antes do processamento das rotas.

Por exemplo, uma aplicação pode utilizar Middlewares para:

- Registrar acessos;
- Verificar autenticação;
- Controlar permissões;
- Validar informações;
- Processar requisições.

Isso evita colocar a mesma lógica repetidamente em vários Controllers.

---

## 📝 Resumo da Aula

Nesta aula foi criado um **Middleware de Logger** utilizando NestJS.

O Middleware registra o método HTTP e a rota acessada e também realiza uma verificação especial para as rotas administrativas.

Quando uma requisição acessa uma rota `/admin`, o Middleware verifica o Header `x-user-base`. Caso o valor não corresponda ao usuário autorizado, a API retorna uma resposta com status `403`.

Também foram apresentados os conceitos de **Interceptors**, permitindo compreender diferentes formas de interferir no processamento das requisições e respostas dentro do NestJS.

---

## ✅ Conclusão

A Aula 13 apresentou recursos importantes para o desenvolvimento de APIs com NestJS.

Com a implementação do **LoggerMiddleware**, foi possível praticar o controle de requisições, registro de informações e verificação de autorização.

O estudo de **Middlewares e Interceptors** contribui para a criação de aplicações mais organizadas, permitindo centralizar comportamentos que podem ser utilizados em diferentes partes da API.

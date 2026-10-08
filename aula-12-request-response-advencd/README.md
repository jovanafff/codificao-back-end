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
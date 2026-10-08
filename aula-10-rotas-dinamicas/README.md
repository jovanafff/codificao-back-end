# Aula 10: Rotas Dinâmicas no NestJS — Guia Completo

![Node.js](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?logo=typescript)
![NPM](https://img.shields.io/badge/NPM-package-red?logo=npm)
![Codificação Back-End](https://img.shields.io/badge/Codificação%20para%20Back--End-SENAI-blue)

Documentação da **Aula 10 da Unidade Curricular de Codificação para Back-End**.  
Nesta aula foram estudadas as **rotas dinâmicas no NestJS**, trabalhando com parâmetros recebidos através da URL e sua utilização dentro dos Controllers e Services.

---

## 🎯 Objetivos da Aula

Durante esta aula, os principais objetivos foram:

1. Compreender o conceito de **rotas dinâmicas**.
2. Aprender a receber parâmetros através da URL.
3. Utilizar parâmetros dentro dos **Controllers**.
4. Trabalhar com **Services** para organizar a lógica da aplicação.
5. Criar endpoints utilizando o NestJS.
6. Entender a comunicação entre Controller e Service.
7. Praticar a organização de uma aplicação NestJS.

---

## 📚 O que são Rotas Dinâmicas?

Rotas dinâmicas são rotas que possuem uma parte variável em seu endereço.

Por exemplo:

```text
/jogos/1
/jogos/2
/jogos/3
```

Nesse caso, o número pode representar o identificador de um jogo.

Em vez de criar uma rota diferente para cada jogo, podemos utilizar uma única rota dinâmica:

```text
/jogos/:id
```

O valor de `id` é recebido através da URL.

---

## 🔗 Parâmetros de Rota

No NestJS, podemos utilizar o decorator `@Param()` para acessar um parâmetro enviado pela URL.

Exemplo:

```typescript
@Get(':id')
buscarJogo(@Param('id') id: string) {
  return this.jogosService.buscarJogo(id);
}
```

Nesse exemplo:

- `:id` representa o parâmetro dinâmico.
- `@Param('id')` captura o valor enviado na URL.
- O valor é encaminhado para o Service.
- O Service realiza o processamento das informações.

---

## 🎮 Exemplo Prático

Considerando a rota:

```text
GET /jogos/10
```

O valor:

```text
10
```

será recebido pelo parâmetro `id`.

O Controller pode utilizar esse valor para buscar o jogo correspondente.

### Fluxo da requisição

```text
Cliente
   ↓
GET /jogos/10
   ↓
JogosController
   ↓
@Param('id')
   ↓
JogosService
   ↓
Processamento
   ↓
Resposta
```

---

## 🧩 Controller

O arquivo `jogos.controller.ts` é responsável por receber as requisições relacionadas aos jogos.

Exemplo:

```typescript
import { Controller, Get, Param } from '@nestjs/common';
import { JogosService } from './jogos.service';

@Controller('jogos')
export class JogosController {

  constructor(private readonly jogosService: JogosService) {}

  @Get(':id')
  buscarJogo(@Param('id') id: string) {
    return this.jogosService.buscarJogo(id);
  }
}
```

O decorator:

```typescript
@Controller('jogos')
```

define o caminho inicial das rotas.

Já:

```typescript
@Get(':id')
```

cria uma rota dinâmica.

---

## ⚙️ Service

O arquivo `jogos.service.ts` concentra a lógica relacionada aos jogos.

Exemplo:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class JogosService {

  buscarJogo(id: string) {
    return {
      id,
      mensagem: 'Jogo encontrado'
    };
  }
}
```

O Service recebe o parâmetro enviado pelo Controller e realiza o processamento necessário.

---

## 🔄 Controller x Service

A aplicação utiliza uma separação de responsabilidades:

| Componente | Responsabilidade |
|---|---|
| Controller | Receber as requisições |
| `@Param()` | Capturar parâmetros da URL |
| Service | Processar as informações |
| Module | Organizar os componentes |

Essa organização facilita a manutenção e o desenvolvimento da aplicação.

---

## 🗂️ Estrutura do Projeto

```text
aula-10-rotas-dinamicas/
│
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── jogos.controller.ts
│   └── jogos.service.ts
│
├── dist/
├── node_modules/
└── README.md
```

### Principais arquivos

**`jogos.controller.ts`**

Responsável pelas rotas relacionadas aos jogos.

**`jogos.service.ts`**

Responsável pela lógica e processamento dos dados dos jogos.

**`app.module.ts`**

Responsável pela organização dos componentes da aplicação.

**`app.controller.ts`**

Controller principal da aplicação.

**`app.service.ts`**

Service principal da aplicação.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **NPM**

---

## 💡 Conceitos Praticados

Durante a aula foram praticados os seguintes conceitos:

- Rotas dinâmicas;
- Parâmetros de URL;
- Decorator `@Param()`;
- Decorator `@Get()`;
- Controllers;
- Services;
- Injeção de dependências;
- Organização de uma aplicação NestJS;
- Criação de endpoints.

---

## 📌 Exemplo de Requisição

Uma requisição para buscar um jogo específico pode ser feita utilizando:

```http
GET /jogos/5
```

O NestJS identifica o valor `5` como o parâmetro `id`.

O Controller recebe esse valor:

```typescript
@Param('id') id: string
```

E encaminha para o Service:

```typescript
this.jogosService.buscarJogo(id)
```

---

## 🧠 O que foi aprendido

Nesta aula foi possível compreender como funcionam as **rotas dinâmicas no NestJS** e como utilizar parâmetros enviados através da URL.

Também foi reforçada a importância da separação entre **Controller e Service**, permitindo que cada parte da aplicação tenha uma responsabilidade específica.

As rotas dinâmicas são importantes para a criação de APIs que precisam trabalhar com diferentes identificadores e recursos.

---

## ✅ Conclusão

A Aula 10 apresentou conceitos importantes para o desenvolvimento de APIs utilizando NestJS.

O estudo das **rotas dinâmicas**, dos **parâmetros de URL**, dos **Controllers** e dos **Services** permitiu compreender melhor como uma aplicação NestJS recebe, processa e responde às requisições HTTP.
# Aula 16: Validação de Dados com Zod e Pipes no NestJS — Guia Completo

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-Framework-red?logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue?logo=typescript)
![Zod](https://img.shields.io/badge/Zod-Validação-blue)
![NPM](https://img.shields.io/badge/NPM-Package-red?logo=npm)

Documentação da **Aula 16 da Unidade Curricular de Codificação para Back-End**.

Nesta aula foi trabalhado o conceito de **validação de dados em APIs utilizando NestJS**, com foco no uso da biblioteca **Zod** e dos **Pipes** para verificar informações recebidas através das requisições HTTP.

A estrutura do projeto apresenta arquivos específicos para o gerenciamento de colaboradores, definição de esquemas de validação e criação de um Pipe personalizado.

---

## 🎯 Objetivos da Aula

Os principais objetivos desta aula foram:

1. Compreender a importância da validação de dados em APIs.
2. Conhecer a biblioteca Zod.
3. Entender o funcionamento dos Pipes no NestJS.
4. Trabalhar com esquemas de validação.
5. Organizar as rotas relacionadas aos colaboradores.
6. Verificar informações recebidas através das requisições HTTP.
7. Compreender o tratamento de dados inválidos.
8. Melhorar a organização e a confiabilidade da aplicação.

---

## 📚 O que é Validação de Dados?

A validação de dados é o processo de verificar se as informações enviadas para uma aplicação estão de acordo com as regras estabelecidas.

Por exemplo, ao cadastrar um colaborador, a API pode precisar verificar:

- Se o nome foi informado;
- Se o e-mail possui um formato válido;
- Se os campos obrigatórios foram preenchidos;
- Se os dados possuem os tipos corretos;
- Se as informações atendem às regras definidas.

Essa verificação ajuda a evitar que dados incorretos sejam processados pela aplicação.

---

## 🛠️ O que é Zod?

O **Zod** é uma biblioteca utilizada para criar esquemas de validação de dados em aplicações JavaScript e TypeScript.

Com ela, é possível definir regras para verificar informações recebidas pela API.

### Exemplo de utilização

```typescript
import { z } from 'zod';

const colaboradorSchema = z.object({
  nome: z.string().min(3),
  email: z.email()
});
```

Nesse exemplo:

- `z.object()` define um objeto.
- `z.string()` determina que o campo deve ser uma string.
- `.min(3)` estabelece um tamanho mínimo.
- `z.email()` valida o formato de e-mail.

Dessa forma, os dados precisam atender às regras estabelecidas antes de serem utilizados.

---

## 🧩 O que são Pipes no NestJS?

Os **Pipes** são recursos do NestJS utilizados para validar ou transformar dados recebidos pelas requisições.

Eles são executados antes que os dados sejam entregues ao método responsável pelo processamento.

Os Pipes podem ser utilizados para:

- Validar informações;
- Converter tipos de dados;
- Verificar parâmetros;
- Rejeitar dados inválidos;
- Aplicar regras de validação.

### Fluxo de funcionamento

```text
Cliente
   |
   | Requisição HTTP
   v
Controller
   |
   v
Pipe de Validação
   |
   +------------------+
   |                  |
   v                  v
Dados válidos     Dados inválidos
   |                  |
   v                  v
Processamento     Erro HTTP 400
   |
   v
Resposta da API
```

---

## 📂 Estrutura do Projeto

A estrutura apresentada na aula possui os seguintes arquivos:

```text
src/
|
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── colaborador.schema.ts
├── colaboradores.controller.ts
├── main.ts
└── zod-validation.pipe.ts
```

### Principais arquivos

**`app.controller.ts`**

Arquivo responsável pelo Controller principal da aplicação.

**`app.module.ts`**

Responsável por organizar os componentes e as dependências do NestJS.

**`app.service.ts`**

Contém os serviços e as funcionalidades principais da aplicação.

**`colaborador.schema.ts`**

Arquivo destinado à definição das regras de validação dos dados dos colaboradores.

**`colaboradores.controller.ts`**

Responsável pelas rotas relacionadas aos colaboradores e pelo recebimento das requisições HTTP.

**`zod-validation.pipe.ts`**

Arquivo destinado à implementação de um Pipe personalizado para validar dados utilizando Zod.

**`main.ts`**

Ponto de entrada responsável pela inicialização da aplicação NestJS.

---

## 👤 Cadastro de Colaboradores

A estrutura da aula apresenta um Controller específico para trabalhar com colaboradores.

Uma API desse tipo pode receber informações através de requisições HTTP, como:

```http
POST /colaboradores
```

Exemplo de dados enviados:

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com"
}
```

Antes de processar os dados, a aplicação pode utilizar o Zod para verificar se as informações atendem às regras estabelecidas.

---

## 🔎 Schema de Validação

O arquivo:

```text
colaborador.schema.ts
```

é utilizado para organizar as regras de validação dos colaboradores.

Um exemplo de esquema seria:

```typescript
import { z } from 'zod';

export const colaboradorSchema = z.object({
  nome: z.string().min(3),
  email: z.email()
});
```

Esse esquema determina quais informações são aceitas pela aplicação.

Caso algum campo não atenda às regras, a validação identifica o problema.

---

## ⚙️ Zod Validation Pipe

O arquivo:

```text
zod-validation.pipe.ts
```

representa um Pipe personalizado para trabalhar com validações.

Um exemplo de implementação seria:

```typescript
import {
  PipeTransform,
  Injectable,
  BadRequestException
} from '@nestjs/common';

import { ZodType } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {

  constructor(private schema: ZodType) {}

  transform(value: unknown) {

    const resultado = this.schema.safeParse(value);

    if (!resultado.success) {
      throw new BadRequestException(
        'Dados inválidos'
      );
    }

    return resultado.data;
  }
}
```

### Funcionamento

O Pipe recebe os dados enviados pela requisição e realiza a validação utilizando o esquema definido.

Quando os dados são válidos, o processamento continua.

Quando os dados são inválidos, a aplicação pode retornar uma exceção HTTP.

---

## 🚦 Tratamento de Dados Inválidos

O NestJS possui recursos para informar quando uma requisição contém dados incorretos.

Um exemplo é:

```typescript
throw new BadRequestException(
  'Dados inválidos'
);
```

Essa exceção retorna o status:

```text
400 Bad Request
```

O código HTTP `400` indica que a requisição apresenta um problema relacionado aos dados enviados pelo cliente.

---

## 🧪 Exemplos de Validação

### Exemplo 1 — Dados válidos

Requisição:

```http
POST /colaboradores
```

Body:

```json
{
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

Os dados atendem às regras do esquema de exemplo e podem continuar para o processamento.

### Exemplo 2 — Nome inválido

```json
{
  "nome": "Jo",
  "email": "joao@email.com"
}
```

O nome não possui o tamanho mínimo estabelecido no esquema de exemplo.

Resultado esperado:

```text
400 Bad Request
```

### Exemplo 3 — E-mail inválido

```json
{
  "nome": "João Silva",
  "email": "email-invalido"
}
```

O e-mail não atende ao formato exigido.

Resultado esperado:

```text
400 Bad Request
```

**Observação:** os exemplos representam o comportamento esperado de uma implementação com as regras demonstradas, não resultados de testes confirmados do projeto.

---

## 🔄 Fluxo da Aplicação

O funcionamento da validação pode ser representado da seguinte maneira:

```text
          CLIENTE
             |
             v
     Requisição HTTP
             |
             v
  ColaboradoresController
             |
             v
     ZodValidationPipe
             |
             v
     ColaboradorSchema
             |
       Verifica dados
             |
       +-----+-----+
       |           |
       v           v
     Válidos    Inválidos
       |           |
       v           v
   Continua     HTTP 400
       |
       v
  Processamento
       |
       v
   Resposta HTTP
```

---

## 🛠️ Tecnologias Utilizadas

As principais tecnologias e ferramentas relacionadas à estrutura da aula são:

- **Node.js:** ambiente de execução JavaScript.
- **NestJS:** framework utilizado no desenvolvimento da API.
- **TypeScript:** linguagem utilizada na implementação.
- **Zod:** biblioteca para validação de dados.
- **NPM:** gerenciamento de pacotes e dependências.
- **HTTP:** protocolo utilizado na comunicação entre cliente e servidor.

---

## 🧠 Conceitos Aprendidos

Os principais conceitos abordados foram:

- Validação de dados;
- Biblioteca Zod;
- Schemas de validação;
- Pipes personalizados;
- `PipeTransform`;
- `@Injectable()`;
- `BadRequestException`;
- Status HTTP 400;
- Controllers;
- Modules;
- TypeScript;
- Requisições HTTP;
- Organização de APIs.

---

## 📌 Importância da Validação

A validação de dados é importante para garantir que uma API receba informações de acordo com as regras estabelecidas.

Sem validação, dados incorretos podem provocar erros durante o processamento.

Com o uso do Zod e dos Pipes, é possível organizar as regras de validação e reutilizá-las em diferentes partes da aplicação.

Essa abordagem contribui para a manutenção, organização e confiabilidade do código.

---

## 📋 Resumo da Aula

Na Aula 16 foi trabalhada a estrutura de uma aplicação NestJS voltada à validação de dados.

O projeto apresenta um arquivo chamado `colaborador.schema.ts`, relacionado à definição das regras de validação dos colaboradores.

Também foi criado o arquivo `zod-validation.pipe.ts`, destinado à implementação de um Pipe personalizado utilizando a biblioteca Zod.

Além disso, a estrutura possui o `colaboradores.controller.ts`, responsável pelas rotas relacionadas aos colaboradores.

O conteúdo permitiu compreender como organizar a validação de informações recebidas através de requisições HTTP e como utilizar exceções para informar problemas nos dados enviados.

---

## ✅ Conclusão

A Aula 16 abordou conceitos importantes para o desenvolvimento de APIs utilizando **NestJS, TypeScript, Zod e Pipes**.

A estrutura do projeto permitiu estudar a separação entre Controllers, Schemas e Pipes de validação.

O uso desses recursos contribui para a construção de APIs mais organizadas, capazes de verificar os dados recebidos antes de realizar o processamento.

Esse conhecimento é importante para desenvolver aplicações Back-End mais confiáveis e com regras de validação bem definidas.
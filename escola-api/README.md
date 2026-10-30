# Escola API — Gerenciamento de Alunos com NestJS

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-Framework-red?logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue?logo=typescript)
![API REST](https://img.shields.io/badge/API-REST-blue)
![NPM](https://img.shields.io/badge/NPM-Gerenciador-red?logo=npm)

## 📚 Sobre o Projeto

O projeto **Escola API** apresenta uma aplicação Back-End desenvolvida com NestJS e TypeScript, organizada para trabalhar com o gerenciamento de alunos em um ambiente escolar.

A estrutura do projeto utiliza **Controllers, Services, Modules, DTOs e Schemas**, permitindo separar as responsabilidades da aplicação e facilitar a manutenção do código.

O projeto também apresenta arquivos específicos para a criação e atualização de alunos, demonstrando a organização dos dados utilizados nas operações da API.

---

## 🎯 Objetivos do Projeto

Os principais objetivos são:

1. Desenvolver uma API utilizando NestJS.
2. Compreender a organização modular de uma aplicação Back-End.
3. Trabalhar com Controllers e Services.
4. Criar DTOs para estruturar os dados dos alunos.
5. Organizar regras de validação utilizando Schemas.
6. Compreender o funcionamento de requisições HTTP.
7. Aplicar boas práticas de organização de código.
8. Estruturar uma aplicação voltada ao gerenciamento de informações escolares.

---

## 🏫 Gerenciamento de Alunos

A aplicação apresenta uma estrutura específica para trabalhar com informações relacionadas aos alunos.

A pasta `alunos` concentra os principais componentes responsáveis pela organização desse recurso.

Em uma API de gerenciamento escolar, podem existir funcionalidades como:

- Cadastro de alunos;
- Consulta de informações;
- Atualização de dados;
- Exclusão de registros;
- Validação de informações recebidas.

Essas operações representam possibilidades de uma API desse tipo. Sua implementação depende do código presente nos Controllers e Services.

---

## 🗂️ Estrutura do Projeto

A estrutura apresentada foi:

```text
escola-api/
│
├── dist/
├── node_modules/
│
├── src/
│   ├── alunos/
│   │   ├── dto/
│   │   │   ├── create-aluno.dto.ts
│   │   │   └── update-aluno.dto.ts
│   │   │
│   │   ├── schemas/
│   │   │   └── aluno.schema.ts
│   │   │
│   │   ├── alunos.controller.ts
│   │   ├── alunos.module.ts
│   │   └── alunos.service.ts
│   │
│   ├── app.module.ts
│   └── main.ts
│
└── README.md
```

---

## 🧩 Arquitetura Modular

O NestJS utiliza uma arquitetura modular que permite organizar a aplicação em diferentes componentes.

No projeto, a pasta `alunos` reúne os arquivos relacionados ao gerenciamento dos alunos.

Essa organização permite separar:

- Recebimento das requisições;
- Processamento das informações;
- Estrutura dos dados;
- Definição das regras de validação;
- Configuração dos módulos.

A separação de responsabilidades contribui para tornar o código mais organizado e facilitar futuras alterações.

---

## 🔗 Controller de Alunos

O arquivo:

```text
alunos.controller.ts
```

é responsável por definir as rotas e receber as requisições HTTP relacionadas aos alunos.

No NestJS, os Controllers utilizam decorators para identificar as operações da API.

### Exemplo

```typescript
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('alunos')
export class AlunosController {

  @Get()
  listarAlunos() {
    return 'Lista de alunos';
  }

  @Post()
  criarAluno(@Body() dados: unknown) {
    return dados;
  }
}
```

### Principais decorators

| Decorator | Função |
|---|---|
| `@Controller()` | Define o caminho das rotas |
| `@Get()` | Recebe requisições GET |
| `@Post()` | Recebe requisições POST |
| `@Body()` | Acessa os dados enviados na requisição |
| `@Param()` | Captura parâmetros da URL |
| `@Patch()` | Define rotas para atualizações parciais |
| `@Delete()` | Define rotas para exclusão |

---

## ⚙️ Service de Alunos

O arquivo:

```text
alunos.service.ts
```

é destinado à lógica de funcionamento das operações relacionadas aos alunos.

No NestJS, os Services são utilizados para separar as regras de negócio do Controller.

### Exemplo

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AlunosService {

  listarAlunos() {
    return [
      { id: 1, nome: 'Ana Silva' },
      { id: 2, nome: 'Pedro Santos' }
    ];
  }
}
```

Essa organização permite que o Controller receba as requisições enquanto o Service executa o processamento necessário.

---

## 📦 Module de Alunos

O arquivo:

```text
alunos.module.ts
```

é responsável pela organização dos componentes relacionados aos alunos.

### Exemplo

```typescript
import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService],
})
export class AlunosModule {}
```

O Module reúne os componentes necessários para o funcionamento do recurso.

---

## 📝 DTO — Data Transfer Object

Os DTOs são utilizados para definir a estrutura dos dados transferidos entre o cliente e a aplicação.

No projeto, foram identificados dois arquivos:

```text
create-aluno.dto.ts
update-aluno.dto.ts
```

Eles permitem organizar separadamente os dados utilizados na criação e atualização de alunos.

### CreateAlunoDto

O arquivo `create-aluno.dto.ts` representa a estrutura dos dados utilizados para cadastrar um aluno.

Exemplo ilustrativo:

```typescript
export class CreateAlunoDto {
  nome: string;
  email: string;
  idade: number;
}
```

### UpdateAlunoDto

O arquivo `update-aluno.dto.ts` representa os dados utilizados para atualizar informações de um aluno.

Exemplo:

```typescript
export class UpdateAlunoDto {
  nome?: string;
  email?: string;
  idade?: number;
}
```

O símbolo `?` indica que uma propriedade é opcional no TypeScript.

---

## 🔎 Schema de Alunos

O projeto apresenta o arquivo:

```text
schemas/aluno.schema.ts
```

Esse arquivo é destinado à definição de um esquema relacionado aos dados dos alunos.

Dependendo da tecnologia utilizada, um Schema pode definir:

- Estrutura dos dados;
- Tipos das propriedades;
- Campos obrigatórios;
- Regras de validação;
- Modelo de armazenamento.

A implementação exata depende da biblioteca utilizada no projeto.

---

## 🔄 Funcionamento da Aplicação

O fluxo básico de uma aplicação NestJS pode ser representado da seguinte forma:

```text
            CLIENTE
               |
               v
       Requisição HTTP
               |
               v
       AlunosController
               |
               v
        AlunosService
               |
               v
     Processamento dos dados
               |
               v
         Resposta HTTP
               |
               v
            CLIENTE
```

Os DTOs podem ser utilizados para estruturar os dados recebidos e enviados durante esse processo.

---

## 🌐 Métodos HTTP

Em uma API de gerenciamento de alunos, os principais métodos HTTP podem ser utilizados da seguinte maneira:

| Método | Rota ilustrativa | Finalidade |
|---|---|---|
| GET | `/alunos` | Listar alunos |
| GET | `/alunos/1` | Consultar um aluno |
| POST | `/alunos` | Cadastrar um aluno |
| PATCH | `/alunos/1` | Atualizar informações |
| DELETE | `/alunos/1` | Excluir um aluno |

Essas rotas são exemplos de uma API REST e devem ser ajustadas conforme as rotas implementadas no projeto.

---

## 🧪 Exemplos de Requisições

### Cadastro de aluno

```http
POST /alunos
Content-Type: application/json
```

Exemplo de Body:

```json
{
  "nome": "Ana Silva",
  "email": "ana@email.com",
  "idade": 16
}
```

### Consulta de alunos

```http
GET /alunos
```

### Atualização de aluno

```http
PATCH /alunos/1
Content-Type: application/json
```

Exemplo de Body:

```json
{
  "nome": "Ana Oliveira"
}
```

Os exemplos demonstram como essas operações podem ser utilizadas, mas não representam testes confirmados da aplicação.

---

## 🛠️ Tecnologias Utilizadas

### Node.js

Ambiente de execução utilizado para desenvolver aplicações JavaScript no servidor.

### NestJS

Framework utilizado para desenvolver aplicações Back-End com arquitetura modular.

### TypeScript

Linguagem utilizada para implementar a aplicação com suporte à tipagem estática.

### NPM

Gerenciador de pacotes utilizado para instalar e administrar as dependências do projeto.

### HTTP

Protocolo utilizado para a comunicação entre o cliente e o servidor.

---

## 🧠 Conceitos Trabalhados

A estrutura do projeto permite estudar:

- Desenvolvimento Back-End;
- APIs REST;
- NestJS;
- TypeScript;
- Controllers;
- Services;
- Modules;
- DTOs;
- Schemas;
- Requisições HTTP;
- Organização de arquivos;
- Separação de responsabilidades;
- Arquitetura modular.

---

## 📌 Importância da Organização do Projeto

A organização dos arquivos é importante para facilitar o desenvolvimento e a manutenção de uma aplicação.

Ao separar os componentes em diferentes arquivos e diretórios, cada parte do sistema possui uma responsabilidade específica.

Essa estrutura também permite que novos recursos sejam adicionados sem concentrar todo o código em um único arquivo.

---

## 📋 Resumo do Desenvolvimento

Durante o desenvolvimento do projeto **Escola API**, foi organizada uma aplicação Back-End utilizando NestJS e TypeScript, com foco na estrutura de gerenciamento de alunos.

Foi criada a pasta `alunos`, responsável por reunir os componentes relacionados a esse recurso.

Dentro dela, foram organizados os arquivos `alunos.controller.ts`, `alunos.service.ts` e `alunos.module.ts`, que representam as principais camadas de uma aplicação NestJS.

Também foram criados os DTOs `create-aluno.dto.ts` e `update-aluno.dto.ts`, destinados à estruturação dos dados utilizados nas operações de cadastro e atualização.

Além disso, foi incluído o arquivo `aluno.schema.ts`, destinado à definição do esquema dos dados dos alunos.

A estrutura apresenta ainda o `app.module.ts`, responsável pela organização principal da aplicação, e o `main.ts`, utilizado para sua inicialização.

---

## ✅ Conclusão

O projeto **Escola API** apresenta uma estrutura organizada para o desenvolvimento de uma aplicação de gerenciamento de alunos utilizando NestJS.

A separação entre Controllers, Services, Modules, DTOs e Schemas contribui para uma arquitetura mais clara e facilita a manutenção do código.

O desenvolvimento dessa estrutura permite compreender conceitos importantes da programação Back-End e prepara a aplicação para a implementação de operações de cadastro, consulta, atualização e exclusão de alunos.

Esse conhecimento é importante para o desenvolvimento de sistemas escolares e outras aplicações que precisam gerenciar informações de maneira organizada.
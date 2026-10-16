# Aula 17: Documentação Técnica de APIs com Swagger no NestJS — Guia Completo

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-Framework-red?logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue?logo=typescript)
![Swagger](https://img.shields.io/badge/Swagger-API%20Documentation-green?logo=swagger)
![NPM](https://img.shields.io/badge/NPM-Package-red?logo=npm)

Documentação da **Aula 17 da Unidade Curricular de Codificação para Back-End**.

Nesta aula foi estudada a **documentação técnica de APIs utilizando Swagger integrado ao NestJS**, com o objetivo de organizar e apresentar as funcionalidades de uma API de maneira clara e interativa.

Durante a atividade, foi desenvolvida uma API de estoque de alimentos, utilizando **Controllers, DTOs e decorators do Swagger** para documentar rotas, informações dos produtos e possíveis respostas HTTP.

---

## 🎯 Objetivos da Aula

Os principais objetivos desta aula foram:

1. Compreender a importância da documentação técnica de APIs.
2. Conhecer o Swagger e sua integração com o NestJS.
3. Configurar a documentação interativa da API.
4. Utilizar o `DocumentBuilder` para definir informações da aplicação.
5. Criar DTOs para organizar os dados recebidos.
6. Utilizar o decorator `@ApiProperty()` para documentar propriedades.
7. Documentar endpoints com `@ApiOperation()`.
8. Definir respostas HTTP utilizando `@ApiResponse()`.
9. Organizar as rotas através do `@ApiTags()`.
10. Conhecer a documentação de autenticação Bearer.
11. Compreender como disponibilizar a documentação pelo navegador.

---

## 📚 O que é Documentação Técnica de APIs?

A documentação técnica de uma API apresenta informações sobre seu funcionamento, permitindo que desenvolvedores compreendam como realizar requisições e utilizar os recursos disponíveis.

Uma documentação pode apresentar:

- Endpoints disponíveis;
- Métodos HTTP;
- Parâmetros das requisições;
- Dados enviados no Body;
- Exemplos de preenchimento;
- Códigos de status HTTP;
- Respostas retornadas pela aplicação;
- Informações de autenticação.

Uma documentação bem organizada facilita a integração entre o Front-End e o Back-End.

---

## 🛠️ O que é Swagger?

O **Swagger** é um conjunto de ferramentas utilizado para visualizar, documentar e interagir com APIs descritas pela especificação OpenAPI.

No NestJS, a integração é realizada através do pacote:

```bash
npm install @nestjs/swagger
```

Com o Swagger, é possível visualizar os endpoints e suas informações em uma interface acessível pelo navegador.

A documentação também permite realizar requisições de teste diretamente pela interface.

---

## 🧩 Configuração do Swagger

Durante a aula, foi configurado o Swagger no arquivo:

```text
src/main.ts
```

A configuração utiliza os recursos:

```typescript
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
```

O `DocumentBuilder` permite definir as informações principais da API.

### Código desenvolvido

```typescript
const config = new DocumentBuilder()
  .setTitle('API de Estoque de Alimentos')
  .setDescription('Documentação técnica interativa para integração')
  .setVersion('1.0')
  .addTag('Produtos')
  .addBearerAuth()
  .build();
```

### Explicação

| Recurso | Função |
|---|---|
| `setTitle()` | Define o título da documentação |
| `setDescription()` | Adiciona uma descrição da API |
| `setVersion()` | Define a versão da aplicação |
| `addTag()` | Adiciona uma categoria à documentação |
| `addBearerAuth()` | Documenta o esquema de autenticação Bearer |
| `build()` | Finaliza a configuração |

A configuração permite apresentar as informações principais da aplicação na interface do Swagger.

**Observação:** `addBearerAuth()` documenta a autenticação, mas não implementa sozinho a proteção das rotas.

---

## 🌐 Disponibilização da Documentação

Após definir as configurações, foi utilizado:

```typescript
const document = SwaggerModule.createDocument(app, config);

SwaggerModule.setup('docs', app, document);
```

O primeiro comando gera o documento OpenAPI com base nas informações da aplicação.

O segundo disponibiliza a interface do Swagger no caminho `/docs`.

Como a aplicação foi configurada para utilizar a porta `3000`, a documentação pode ser acessada através de:

```text
http://localhost:3000/docs
```

---

## 🛒 API de Estoque de Alimentos

A atividade utilizou uma API relacionada ao cadastro de produtos alimentícios.

O projeto apresenta um Controller responsável pelas operações relacionadas aos produtos e um DTO utilizado para definir as informações recebidas.

Os produtos possuem os seguintes campos:

- Nome;
- Preço;
- Categoria.

A API também retorna um identificador e uma informação relacionada à data de criação.

---

## 📦 DTO — Data Transfer Object

O DTO é utilizado para definir a estrutura dos dados que serão recebidos ou transferidos pela aplicação.

Nesta aula, foi criada a classe:

```typescript
CriarProdutoDto
```

O DTO possui propriedades utilizadas no cadastro de produtos.

### Código desenvolvido

```typescript
import { ApiProperty } from '@nestjs/swagger';

export class CriarProdutoDto {

  @ApiProperty({
    example: 'Café Grão de Ouro 500g',
    description: 'Nome comercial do produto cadastrado.',
  })
  nome: string;

  @ApiProperty({
    example: 9.99,
    description: 'Preço unitário do produto',
  })
  preco: number;

  @ApiProperty({
    example: 'Alimentos',
    description: 'Categoria do Produto',
  })
  categoria: string;
}
```

---

## 📝 Decorator `@ApiProperty()`

O decorator `@ApiProperty()` é utilizado para documentar as propriedades de um DTO.

Ele permite definir informações como:

- Nome do campo;
- Tipo de dado;
- Descrição;
- Exemplo de preenchimento.

### Exemplo

```typescript
@ApiProperty({
  example: 'Café Grão de Ouro 500g',
  description: 'Nome comercial do produto cadastrado.',
})
nome: string;
```

Essa configuração permite que o Swagger apresente informações sobre o campo `nome`.

### Campos documentados

| Campo | Tipo | Exemplo |
|---|---|---|
| nome | string | Café Grão de Ouro 500g |
| preco | number | 9.99 |
| categoria | string | Alimentos |

**Importante:** o `@ApiProperty()` documenta os campos, mas não realiza sozinho a validação dos dados recebidos.

---

## 🔗 Controller de Produtos

O projeto apresenta um Controller responsável pelas rotas relacionadas aos produtos.

Foi utilizado:

```typescript
@ApiTags('produtos')
@Controller('Produtos')
export class ProdutosController
```

### `@ApiTags()`

Organiza os endpoints em grupos dentro da documentação Swagger.

### `@Controller()`

Define o caminho utilizado pelas rotas do Controller.

Nesse caso, o caminho configurado é:

```text
/Produtos
```

---

## 🚀 Endpoint de Cadastro de Produtos

Durante a aula foi implementado um endpoint utilizando o método HTTP `POST`.

```typescript
@Post()
```

Esse método é utilizado para receber informações relacionadas ao cadastro de produtos.

### Documentação da operação

```typescript
@ApiOperation({
  summary: 'Cadastrar um novo produto no estoque',
})
```

O decorator `@ApiOperation()` permite adicionar uma descrição resumida da funcionalidade.

No Swagger, essa informação ajuda a identificar o objetivo do endpoint.

---

## 🚦 Documentação das Respostas HTTP

O projeto utiliza o decorator:

```typescript
@ApiResponse()
```

Esse recurso permite documentar os possíveis resultados de uma requisição.

### Resposta de sucesso

```typescript
@ApiResponse({
  status: 201,
  description: 'Produto cadastrado com sucesso.'
})
```

O código `201 Created` representa a criação bem-sucedida de um recurso.

### Resposta de erro

```typescript
@ApiResponse({
  status: 400,
  description: 'Payload enviado contém dados mal formatados e/ou inválidos.'
})
```

O código `400 Bad Request` representa uma requisição com dados inadequados.

**Observação:** essas configurações documentam as respostas possíveis. Para garantir a validação e o retorno desses status, é necessário implementar o comportamento correspondente na API.

---

## 💻 Implementação do Cadastro

O Controller apresenta um método responsável por receber os dados de um novo produto.

### Código desenvolvido

```typescript
@Post()
@ApiOperation({
  summary: 'Cadastrar um novo produto no estoque',
})
@ApiResponse({
  status: 201,
  description: 'Produto cadastrado com sucesso.'
})
@ApiResponse({
  status: 400,
  description: 'Payload enviado contém dados mal formatados e/ou inválidos.'
})
async criar(@Body() criarprodutodto: CriarProdutoDto) {
  return {
    id: 67,
    ...criarprodutodto,
    criadoEm: new Date().toLocaleDateString(),
  };
}
```

### Funcionamento

O método recebe as informações enviadas pelo cliente através do Body da requisição.

Em seguida, retorna um objeto contendo:

- Identificador do produto;
- Nome;
- Preço;
- Categoria;
- Data de criação.

No exemplo desenvolvido, o identificador `67` é um valor fixo utilizado na resposta.

O método demonstra o recebimento e o retorno de dados, sem apresentar persistência em banco de dados.

---

## 🧪 Exemplo de Requisição

A documentação permite visualizar o endpoint de cadastro.

### Requisição

```http
POST http://localhost:3000/Produtos
```

### Body

```json
{
  "nome": "Café Grão de Ouro 500g",
  "preco": 9.99,
  "categoria": "Alimentos"
}
```

### Exemplo de resposta

```json
{
  "id": 67,
  "nome": "Café Grão de Ouro 500g",
  "preco": 9.99,
  "categoria": "Alimentos",
  "criadoEm": "16/10/2026"
}
```

A data apresentada é ilustrativa, pois o código utiliza a data atual no momento da execução.

---

## 🗂️ Estrutura do Projeto

A estrutura apresentada na aula foi:

```text
aula-17-documentacao-tecnica/
│
├── dist/
├── node_modules/
│
├── src/
│   ├── produtos/
│   │   ├── dto/
│   │   │   └── criar-produto.dto.ts
│   │   └── produtos.controller.ts
│   │
│   ├── app.controller.spec.ts
│   ├── app.module.ts
│   └── main.ts
│
├── test/
│
├── .gitignore
├── .oxlintrc.json
├── .prettierrc
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.build.json
```

### Principais arquivos

**`criar-produto.dto.ts`**

Responsável pela definição e documentação dos campos utilizados no cadastro de produtos.

**`produtos.controller.ts`**

Contém o endpoint de cadastro e os decorators utilizados na documentação Swagger.

**`app.module.ts`**

Responsável por registrar o `ProdutosController` na aplicação.

**`main.ts`**

Responsável pela inicialização do NestJS e pela configuração do Swagger.

**`package.json`**

Contém as informações e dependências utilizadas pelo projeto.

**`README.md`**

Arquivo utilizado para documentar os conteúdos desenvolvidos durante a aula.

---

## 🔄 Fluxo da Aplicação

O funcionamento pode ser representado da seguinte maneira:

```text
               CLIENTE
                  |
                  v
        Requisição HTTP POST
                  |
                  v
          ProdutosController
                  |
                  v
             @Body()
                  |
                  v
           CriarProdutoDto
                  |
                  v
       Recebimento dos dados
                  |
                  v
       Construção da resposta
                  |
                  v
           Resposta HTTP
```

O Swagger documenta os endpoints e os dados envolvidos nesse fluxo, permitindo que o desenvolvedor compreenda como utilizar a API.

---

## 🛠️ Tecnologias Utilizadas

As principais tecnologias utilizadas foram:

- **Node.js:** ambiente de execução da aplicação.
- **NestJS:** framework utilizado no desenvolvimento da API.
- **TypeScript:** linguagem utilizada na implementação.
- **Swagger:** ferramenta para documentação interativa.
- **OpenAPI:** especificação utilizada para descrever APIs.
- **NPM:** gerenciamento de dependências.
- **HTTP:** protocolo de comunicação entre cliente e servidor.

---

## 🧠 Conceitos Aprendidos

Durante a aula foram trabalhados os seguintes conceitos:

- Documentação técnica de APIs;
- Swagger;
- OpenAPI;
- `DocumentBuilder`;
- `SwaggerModule`;
- `@ApiTags()`;
- `@ApiProperty()`;
- `@ApiOperation()`;
- `@ApiResponse()`;
- DTOs;
- Controllers;
- Requisições POST;
- `@Body()`;
- Status HTTP 201;
- Status HTTP 400;
- Organização de endpoints;
- Documentação interativa.

---

## 📌 Importância da Documentação de APIs

A documentação é fundamental para facilitar a utilização e a manutenção de uma API.

Com o Swagger, os desenvolvedores conseguem compreender quais endpoints estão disponíveis, quais informações devem ser enviadas e quais respostas podem ser retornadas.

A documentação também facilita a integração entre diferentes sistemas e equipes de desenvolvimento.

Outro benefício é a possibilidade de realizar testes diretamente pela interface interativa do Swagger.

---

## 📋 Resumo da Aula

Nesta aula foi desenvolvida uma aplicação utilizando **NestJS e Swagger**, com foco na criação de documentação técnica para uma API de estoque de alimentos.

Inicialmente, foi configurado o Swagger no arquivo `main.ts`, utilizando o `DocumentBuilder` para definir o título, a descrição, a versão e a categoria da API.

Em seguida, foi criado o DTO `CriarProdutoDto`, contendo os campos `nome`, `preco` e `categoria`, documentados através do decorator `@ApiProperty()`.

Também foi implementado o `ProdutosController`, contendo uma rota `POST` responsável por receber as informações de um produto e retornar um objeto com os dados cadastrados, um identificador e a data de criação.

A documentação da rota foi organizada utilizando `@ApiTags()`, `@ApiOperation()` e `@ApiResponse()`, permitindo apresentar a finalidade da operação e os possíveis códigos de resposta HTTP.

Por fim, a aplicação foi configurada para disponibilizar a documentação interativa no endereço:

```text
http://localhost:3000/docs
```

---

## ✅ Conclusão

A Aula 17 permitiu compreender a importância da **documentação técnica no desenvolvimento de APIs**.

A integração do Swagger com o NestJS possibilitou organizar informações sobre endpoints, DTOs, propriedades e respostas HTTP.

O desenvolvimento da API de estoque de alimentos contribuiu para a prática dos conceitos de Controllers, DTOs, decorators e documentação interativa.

Com isso, foi possível compreender como tornar uma API mais organizada, documentada e fácil de integrar com outras aplicações.
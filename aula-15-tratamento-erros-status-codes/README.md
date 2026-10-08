# Aula 15: Tratamento de Erros e Status Codes no NestJS — Guia Completo

![Node.js](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?logo=typescript)
![NPM](https://img.shields.io/badge/NPM-package-red?logo=npm)
![HTTP](https://img.shields.io/badge/HTTP-Status%20Codes-blue)

Documentação da **Aula 15 da Unidade Curricular de Codificação para Back-End**.  
Nesta aula foram estudados o **tratamento de erros, validação de parâmetros e códigos de status HTTP utilizando NestJS**, aplicados ao desenvolvimento de uma API de produtos.

---

## 🎯 Objetivos da Aula

Durante esta aula, os principais objetivos foram:

1. Compreender o tratamento de erros em APIs.
2. Conhecer os principais códigos de status HTTP.
3. Utilizar exceções disponíveis no NestJS.
4. Trabalhar com `BadRequestException`.
5. Trabalhar com `NotFoundException`.
6. Validar parâmetros recebidos através da URL.
7. Identificar quando um produto não existe.
8. Retornar respostas adequadas para diferentes situações.
9. Utilizar `Logger` para registrar situações de erro.
10. Testar as rotas da API e verificar seus retornos.

---

# 📚 Tratamento de Erros

O tratamento de erros é importante para que uma API consiga informar corretamente ao cliente quando uma operação não pode ser realizada.

Em vez de retornar uma resposta genérica, a aplicação identifica o problema e utiliza um código HTTP adequado.

Exemplos:

```text
Produto encontrado
        ↓
     HTTP 200
```

```text
ID inválido
        ↓
     HTTP 400
```

```text
Produto não encontrado
        ↓
     HTTP 404
```

---

# 🚦 Status Codes HTTP

Os códigos de status HTTP informam o resultado de uma requisição.

| Código | Significado | Exemplo |
|---|---|---|
| 200 | OK | Produto encontrado |
| 201 | Created | Produto criado |
| 400 | Bad Request | ID inválido |
| 401 | Unauthorized | Usuário não autenticado |
| 403 | Forbidden | Acesso não permitido |
| 404 | Not Found | Produto não encontrado |
| 500 | Internal Server Error | Erro interno |

Nesta aula, os principais códigos trabalhados foram:

- `200 OK`
- `400 Bad Request`
- `404 Not Found`

---

# 🛒 API de Produtos

Durante a aula foi criada uma API para trabalhar com produtos.

Os produtos possuem três informações principais:

- `id`
- `nome`
- `preco`

Exemplo dos dados utilizados:

```typescript
produtos = [
  { id: 1, nome: 'Arroz Namorados', preco: 5.99 },
  { id: 2, nome: 'Feijão Timbiras', preco: 7.99 },
  { id: 3, nome: 'Macarrão Galo', preco: 5.99 },
  { id: 4, nome: 'Açúcar União', preco: 4.99 },
  { id: 5, nome: 'Sal Lebre', preco: 2.99 }
];
```

Esses dados são utilizados para realizar consultas através da API.

---

# 🔗 Rotas de Produtos

O Controller utiliza:

```typescript
@Controller('produtos')
```

Isso define que as rotas relacionadas aos produtos começarão com:

```text
/produtos
```

Para buscar um produto específico, foi utilizada uma rota dinâmica:

```typescript
@Get(':id')
```

Assim, podemos fazer requisições como:

```text
GET /produtos/1
GET /produtos/2
GET /produtos/5
```

---

# 🔢 Validação do ID

O ID recebido pela URL é inicialmente uma `string`:

```typescript
@Param('id') idProduto: string
```

Depois ele é convertido para número:

```typescript
const id = Number(idProduto);
```

A aplicação verifica se o valor informado é realmente um número:

```typescript
if (isNaN(id)) {
```

Caso o valor seja inválido, é lançada uma exceção:

```typescript
throw new BadRequestException(
  'O ID do produto deve ser um número inteiro.'
);
```

---

# ⚠️ BadRequestException

O `BadRequestException` é utilizado quando existe algum problema nos dados enviados pelo cliente.

Por exemplo:

```text
GET /produtos/abc
```

Nesse caso, `abc` não pode ser convertido corretamente para um ID numérico.

A API retorna:

```text
400 Bad Request
```

Mensagem:

```text
O ID do produto deve ser um número inteiro.
```

---

# 🔎 NotFoundException

Depois de validar o ID, a aplicação procura o produto correspondente.

A busca é realizada utilizando o ID:

```typescript
const produto = this.produtos().find(
  produto => produto.id === id
);
```

Caso nenhum produto seja encontrado:

```typescript
if (!produto) {
  throw new NotFoundException(
    `Produto com ID ${id} não encontrado`
  );
}
```

Nesse caso, a API retorna:

```text
404 Not Found
```

---

# 📝 Logger

O Controller também utiliza o `Logger` do NestJS:

```typescript
private readonly logger = new Logger(
  ProdutosController.name
);
```

O Logger permite registrar informações importantes durante a execução da aplicação.

Quando um ID inválido é informado, pode ser registrado um aviso:

```typescript
this.logger.warn(
  `Tentativa de buscar com ID ${idProduto} não numérico`
);
```

Quando um produto não é encontrado:

```typescript
this.logger.warn(
  `Produto com ID ${id} não localizado.`
);
```

Esses registros ajudam a acompanhar o comportamento da aplicação e identificar possíveis problemas.

---

# 🧩 Controller

O `ProdutosController` é responsável por receber as requisições relacionadas aos produtos.

A estrutura utiliza:

```typescript
@Controller('produtos')
export class ProdutosController
```

Também é utilizado o `ProdutosService` através da injeção de dependência:

```typescript
constructor(
  private readonly produtosService: ProdutosService
) {}
```

O Controller recebe o ID enviado na URL, realiza as validações necessárias e retorna o resultado.

---

# ⚙️ Service

O `ProdutosService` é responsável por armazenar e fornecer os dados dos produtos.

A classe utiliza:

```typescript
@Injectable()
export class ProdutosService
```

Os produtos ficam armazenados em uma lista:

```typescript
produtos = [
  { id: 1, nome: 'Arroz Namorados', preco: 5.99 },
  { id: 2, nome: 'Feijão Timbiras', preco: 7.99 },
  { id: 3, nome: 'Macarrão Galo', preco: 5.99 },
  { id: 4, nome: 'Açúcar União', preco: 4.99 },
  { id: 5, nome: 'Sal Lebre', preco: 2.99 }
];
```

O método:

```typescript
listarProdutos()
```

retorna a lista de produtos.

---

# 🧪 Teste da API

Após o desenvolvimento da API, foi realizado um teste utilizando uma ferramenta para realizar requisições HTTP.

Foi utilizada a seguinte URL:

```text
http://localhost:3000/produtos/5
```

A requisição utilizada foi:

```http
GET /produtos/5
```

O resultado apresentado foi:

```text
Status: 200 OK
```

Isso significa que a requisição foi realizada com sucesso e o produto de ID `5` foi encontrado.

---

# ✅ Resultado do Teste

A API retornou os seguintes dados:

```json
{
  "id": 5,
  "nome": "Sal Lebre",
  "preco": 2.99
}
```

O resultado confirma que o produto cadastrado com o ID `5` foi localizado corretamente.

### Dados retornados

| Campo | Valor |
|---|---|
| ID | 5 |
| Nome | Sal Lebre |
| Preço | R$ 2,99 |
| Status | 200 OK |

---

# 🧪 Testes de Erros

Além do teste de sucesso, a API também foi preparada para tratar situações inválidas.

### ID não numérico

Requisição:

```text
GET /produtos/abc
```

Resultado esperado:

```text
400 Bad Request
```

Mensagem:

```text
O ID do produto deve ser um número inteiro.
```

---

### Produto inexistente

Requisição:

```text
GET /produtos/100
```

Resultado esperado:

```text
404 Not Found
```

Mensagem:

```text
Produto com ID 100 não encontrado
```

---

### Produto existente

Requisição:

```text
GET /produtos/5
```

Resultado:

```text
200 OK
```

Resposta:

```json
{
  "id": 5,
  "nome": "Sal Lebre",
  "preco": 2.99
}
```

---

# 🔄 Fluxo da Requisição

O funcionamento da API pode ser representado assim:

```text
Cliente
   │
   │ GET /produtos/:id
   ▼
ProdutosController
   │
   ▼
Recebe o ID
   │
   ▼
Converte para número
   │
   ├───────────────────┐
   │                   │
   ▼                   ▼
ID inválido         ID válido
   │                   │
   ▼                   ▼
HTTP 400           Busca produto
                       │
                 ┌─────┴─────┐
                 │           │
                 ▼           ▼
             Encontrado   Não encontrado
                 │           │
                 ▼           ▼
             HTTP 200     HTTP 404
```

---

# 🗂️ Estrutura do Projeto

A estrutura apresentada na aula foi:

```text
aula-15-tratamento-erros-status-codes/
│
├── dist/
├── node_modules/
│
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   ├── produtos.controller.ts
│   └── produtos.service.ts
│
└── README.md
```

### Principais arquivos

**`produtos.controller.ts`**

Responsável pelas rotas e pelo tratamento das requisições relacionadas aos produtos.

**`produtos.service.ts`**

Responsável pelos dados dos produtos.

**`app.module.ts`**

Responsável pela organização dos Controllers e Services.

**`main.ts`**

Ponto de entrada da aplicação NestJS.

---

# 🛠️ Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **NPM**
- **HTTP**
- **REST API**

---

# 🧠 Conceitos Aprendidos

Durante a aula foram trabalhados:

- Tratamento de erros;
- Status Codes HTTP;
- `BadRequestException`;
- `NotFoundException`;
- `Logger`;
- `@Param()`;
- Rotas dinâmicas;
- Validação de parâmetros;
- Controllers;
- Services;
- Injeção de dependências;
- API REST;
- Testes de requisições HTTP.

---

# 📋 Resumo da Aula

Nesta aula foi desenvolvida uma **API de produtos utilizando NestJS**, com foco no tratamento correto das requisições e dos erros.

Foi implementada uma rota dinâmica para consultar produtos através do ID:

```text
GET /produtos/:id
```

O ID recebido é validado antes da realização da busca.

Quando o ID não é numérico, a aplicação utiliza:

```typescript
BadRequestException
```

e retorna:

```text
400 Bad Request
```

Quando o ID é válido, mas o produto não existe, é utilizada:

```typescript
NotFoundException
```

retornando:

```text
404 Not Found
```

Também foi utilizado o `Logger` para registrar situações importantes durante a execução da aplicação.

Por fim, foi realizado um teste com:

```text
GET /produtos/5
```

A API retornou:

```text
200 OK
```

com os dados:

```json
{
  "id": 5,
  "nome": "Sal Lebre",
  "preco": 2.99
}
```

---

# ✅ Conclusão

A Aula 15 permitiu compreender como desenvolver uma API capaz de **tratar erros e retornar códigos de status HTTP adequados**.

A implementação da API de produtos possibilitou praticar a validação de parâmetros, o tratamento de produtos inexistentes e o registro de ocorrências através do Logger.

O teste realizado confirmou o funcionamento da rota de consulta, retornando corretamente o produto de ID `5` com o status `200 OK`.

Com isso, foi possível compreender melhor como construir APIs mais organizadas, previsíveis e fáceis de utilizar.
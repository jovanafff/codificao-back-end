# Aula 08-09: Métodos HTTP — GET, POST, PATCH e DELETE

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge\&logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?style=for-the-badge\&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge\&logo=typescript)
![Vitest](https://img.shields.io/badge/Vitest-Testes-purple?style=for-the-badge\&logo=vitest)

![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

Documentação das **Aulas 08-09** da Unidade Curricular de **Codificação para Back-End**, com foco nos principais métodos HTTP utilizados em APIs REST e na realização de testes automatizados.

---

## 📚 Métodos HTTP

Os métodos HTTP definem as operações realizadas sobre os recursos de uma API.

| Método     | Função                            |
| ---------- | --------------------------------- |
| **GET**    | Consultar informações             |
| **POST**   | Criar um novo recurso             |
| **PATCH**  | Atualizar parcialmente um recurso |
| **DELETE** | Excluir um recurso                |

### GET

Utilizado para **buscar ou consultar informações**, sem alterar os dados.

```http
GET /usuarios
```

### POST

Utilizado para **criar novos recursos**. Os dados geralmente são enviados no corpo da requisição.

```http
POST /usuarios
```

Exemplo de dados:

```json
{
  "nome": "Jovana",
  "email": "jovanavieira802@gmail"
}
```

### PATCH

Utilizado para **atualizar parcialmente** um recurso existente.

```http
PATCH /usuarios/1
```

Exemplo:

```json
{
  "email": "novo@email.com"
}
```

### DELETE

Utilizado para **remover um recurso** da aplicação.

```http
DELETE /usuarios/1
```

---

## 🧪 Testes Automatizados

Durante a aula também foram trabalhados **testes automatizados utilizando Vitest**, permitindo verificar se as funcionalidades da aplicação estão funcionando corretamente.

Principais comandos:

```bash
npm test
```

Executa os testes.

```bash
npm run test:watch
```

Executa os testes acompanhando alterações no código.

```bash
npm run test:cov
```

Gera informações sobre a cobertura dos testes.

```bash
npm run test:e2e
```

Executa os testes End-to-End.

---

## 🛠️ Ferramentas de Desenvolvimento

Além dos métodos HTTP e dos testes, o projeto utiliza ferramentas para auxiliar na qualidade e organização do código.

* **Oxlint** — identifica possíveis problemas no código.
* **Prettier** — realiza a formatação dos arquivos.
* **Supertest** — auxilia nos testes de requisições HTTP.

Comandos utilizados:

```bash
npm run lint
npm run format
```

---

## 📁 Estrutura do Projeto

```text
aula-08-09-metodos-http/
├── src/                 # Código-fonte
├── test/                # Testes
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configurações do TypeScript
├── vitest.config.ts     # Configuração do Vitest
└── README.md            # Documentação
```

---

## 💻 Tecnologias Utilizadas

* **Node.js** — ambiente de execução.
* **NestJS** — framework para desenvolvimento Back-End.
* **TypeScript** — linguagem utilizada no projeto.
* **Vitest** — testes automatizados.
* **Supertest** — testes de requisições HTTP.
* **Oxlint** — análise do código.
* **Prettier** — formatação do código.
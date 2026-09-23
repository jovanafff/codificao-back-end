# Aula 07: Introdução ao NestJS e Arquitetura Modular — Guia Completo

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?style=for-the-badge&logo=typescript)
![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

Documentação completa da **Aula 07** da Unidade Curricular de **Codificação para Back-End** (SENAI - AMAPÁ). Esta aula aborda a transição para o **NestJS**, um *framework* progressivo para Node.js construído nativamente com **TypeScript**, focado em arquitetura escalável, injeção de dependências e organização modular baseada nos padrões *Model-View-Controller* (MVC) e *Software Architecture Best Practices*.

---

## Por Que Utilizar o NestJS?

Enquanto o Express.js oferece total liberdade sem impor uma estrutura de diretórios, o **NestJS** estabelece uma arquitetura padronizada corporativa pronta para produção. As suas principais vantagens incluem:

1. **Arquitetura Modular Opinativa:** Organiza o código em Módulos, Controladores (*Controllers*) e Serviços (*Services*), garantindo facilidade de manutenção em projetos de grande porte.
2. **TypeScript Nativo:** Garante tipagem estática, autocompletion rigoroso e prevenção de erros em tempo de compilação.
3. **Injeção de Dependências e IoC:** Facilita a desacoplagem entre componentes, tornando os testes unitários e de integração simples e diretos.
4. **Uso Intensivo de Decorators:** Simplifica a definição de rotas, middlewares, validações e metadados via anotações legíveis (ex: `@Controller()`, `@Get()`, `@Injectable()`).

---

## Comparativo Técnico: Express.js Puro vs. Framework NestJS

| Característica | Express.js | Framework NestJS |
| :--- | :--- | :--- |
| **Linguagem Principal** | JavaScript (ESM/CommonJS) | TypeScript (Nativo com compilador `tsc`) |
| **Arquitetura** | Livre / Não opinativa | Modular Padronizada (Modules / Controllers / Providers) |
| **Gestão de Dependências** | Importações manuais diretas | Injeção de Dependências Gerida pelo Container (IoC) |
| **Ferramenta CLI** | Não possui CLI nativa | Nest CLI (`@nestjs/cli`) para geração de código |
| **Indicado Para** | Scripts, APIs simples e microserviços | Aplicações empresariais robustas e altamente escaláveis |

---

## Módulos e Conceitos Chave

### 1. Modulo Raiz (`@Module()`)
Anotação responsável por agrupar e organizar os blocos funcionais da aplicação. Define quais *Controllers* tratam requisições e quais *Providers* (Services) fornecem a regra de negócio.

### 2. Controladores (`@Controller()`)
Tratam as requisições HTTP de entrada e devolvem as respostas adequadas ao cliente. Mapeiam endpoints usando *decorators* como `@Get()`, `@Post()`, `@Put()` e `@Delete()`.

### 3. Provedores e Serviços (`@Injectable()`)
Classes anotadas com `@Injectable()` que contêm a regra de negócio, integração com banco de dados ou chamadas externas. São injetados automaticamente nos controladores via construtor.

---

## Estrutura do Projeto

```text
aula07-projeto-nest/
├── src/
│   ├── app.controller.spec.ts   # Testes unitários do controlador principal
│   ├── app.controller.ts        # Controlador responsável pelas rotas iniciais
│   ├── app.module.ts            # Módulo raiz que consolida a aplicação
│   ├── app.service.ts           # Serviço com as regras de negócio das rotas
│   └── main.ts                  # Ponto de entrada (Bootstrap da aplicação)
├── test/                        # Ficheiros e configurações para testes End-to-End (E2E)
├── .eslintrc.js                 # Regras de padronização de código
├── .prettierrc                  # Configurações de formatação do Prettier
├── nest-cli.json                # Configurações da CLI do NestJS
├── package.json                 # Dependências e scripts de execução
├── tsconfig.json                # Configurações do compilador TypeScript
└── README.md                    # Documentação da aula
# Aula 11: API de Upload de Imagens com NestJS — Guia Completo

![Node.js](https://img.shields.io/badge/Node.js-v18+-green?logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue?logo=typescript)
![NPM](https://img.shields.io/badge/NPM-package-red?logo=npm)
![Codificação Back-End](https://img.shields.io/badge/Codificação%20para%20Back--End-SENAI-blue)

Documentação da **Aula 11 da Unidade Curricular de Codificação para Back-End**.  
Nesta aula foi desenvolvido o conceito de **upload de imagens utilizando uma API com NestJS**, trabalhando com recebimento de arquivos, armazenamento e organização dos recursos enviados para a aplicação.

---

## 🎯 Objetivos da Aula

Durante esta aula, os principais objetivos foram:

1. Compreender como funciona o upload de arquivos em uma API.
2. Criar uma API capaz de receber imagens.
3. Trabalhar com arquivos enviados através de requisições HTTP.
4. Utilizar recursos do NestJS para manipulação de arquivos.
5. Armazenar imagens recebidas pela aplicação.
6. Organizar os arquivos enviados em uma pasta específica.
7. Compreender o funcionamento de requisições `multipart/form-data`.

---

## 📚 O que é Upload de Arquivos?

O **upload** é o processo de enviar um arquivo do cliente para o servidor.

No caso desta aula, a aplicação foi preparada para receber **imagens** através de uma API.

O fluxo básico funciona da seguinte maneira:

```text
Cliente
   ↓
Seleciona uma imagem
   ↓
Envia uma requisição HTTP
   ↓
API NestJS
   ↓
Recebe o arquivo
   ↓
Processa o upload
   ↓
Armazena a imagem
```

---

## 🖼️ Upload de Imagem

Para enviar arquivos através de uma API, é utilizado o formato:

```text
multipart/form-data
```

Esse formato permite enviar arquivos juntamente com outros dados em uma requisição HTTP.

Um exemplo de requisição seria:

```http
POST /upload
Content-Type: multipart/form-data
```

A imagem é enviada no corpo da requisição e recebida pelo servidor.

---

## 🚀 API de Upload

A aplicação desenvolvida nesta aula possui uma estrutura preparada para receber imagens e armazená-las no servidor.

A pasta:

```text
uploads/
```

é utilizada para armazenar os arquivos enviados através da API.

Dessa forma, quando uma imagem é enviada, ela pode ser salva dentro dessa pasta.

---

## 📂 Pasta `uploads`

A pasta `uploads` possui a função de armazenar os arquivos enviados para a aplicação.

Exemplo:

```text
uploads/
├── imagem1.jpg
├── imagem2.png
└── imagem3.jpeg
```

Essa organização permite separar os arquivos enviados dos demais arquivos do projeto.

---

## 🧩 Controller

O Controller é responsável por receber as requisições HTTP relacionadas ao upload.

De forma geral, o Controller recebe o arquivo enviado pelo cliente e encaminha o processamento necessário.

O fluxo pode ser representado por:

```text
POST /upload
      ↓
Upload Controller
      ↓
Recebimento do arquivo
      ↓
Salvamento
      ↓
Resposta da API
```

---

## ⚙️ Funcionamento da API

O processo de upload acontece seguindo algumas etapas:

### 1. Seleção da imagem

O usuário seleciona uma imagem no computador ou dispositivo.

### 2. Envio da requisição

A imagem é enviada para a API através de uma requisição HTTP.

### 3. Recebimento do arquivo

O NestJS recebe o arquivo enviado pelo cliente.

### 4. Processamento

A aplicação processa o arquivo recebido.

### 5. Armazenamento

A imagem é armazenada na pasta:

```text
uploads/
```

### 6. Resposta

Depois do processamento, a API retorna uma resposta informando o resultado da operação.

---

## 🗂️ Estrutura do Projeto

A estrutura apresentada durante a aula possui os seguintes elementos:

```text
aula-11-api-upload-imagem/
│
├── dist/
├── node_modules/
├── src/
├── test/
├── uploads/
│
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
└── vitest.config.ts
```

### Principais diretórios

**`src/`**

Contém o código-fonte da aplicação NestJS.

**`uploads/`**

Diretório utilizado para armazenar as imagens enviadas através da API.

**`test/`**

Contém arquivos relacionados aos testes da aplicação.

**`dist/`**

Contém os arquivos gerados durante o processo de compilação.

**`node_modules/`**

Contém as dependências instaladas pelo NPM.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **TypeScript**
- **NPM**
- **HTTP**
- **Multipart/form-data**

---

## 🔄 Fluxo da Aplicação

O funcionamento da API pode ser representado da seguinte maneira:

```text
        CLIENTE
           │
           │ POST /upload
           │
           ▼
      ┌───────────┐
      │   API     │
      │  NestJS   │
      └─────┬─────┘
            │
            ▼
       Recebe arquivo
            │
            ▼
       Processa upload
            │
            ▼
       ┌───────────┐
       │  uploads/ │
       └─────┬─────┘
             │
             ▼
        Arquivo salvo
             │
             ▼
        Resposta HTTP
```

---

## 🧠 Conceitos Aprendidos

Nesta aula foram trabalhados os seguintes conceitos:

- Upload de arquivos;
- Upload de imagens;
- APIs HTTP;
- Requisições `POST`;
- `multipart/form-data`;
- Recebimento de arquivos;
- Armazenamento de arquivos;
- Organização de diretórios;
- NestJS;
- TypeScript;
- Estrutura de uma API.

---

## 📌 Importância do Upload em APIs

O upload de arquivos é um recurso muito utilizado no desenvolvimento de sistemas.

Alguns exemplos de utilização são:

- Cadastro de fotos de usuários;
- Imagens de produtos;
- Documentos;
- Fotos de perfil;
- Arquivos para sistemas administrativos;
- Anexos em aplicações web.

Por isso, compreender como uma API recebe e armazena arquivos é importante para o desenvolvimento de aplicações completas.

---

## ⚠️ Cuidados com Arquivos Enviados

Ao trabalhar com upload, a aplicação deve considerar alguns cuidados, como:

- Verificar o tipo do arquivo;
- Controlar o tamanho do arquivo;
- Definir onde os arquivos serão armazenados;
- Evitar nomes de arquivos duplicados;
- Validar os arquivos recebidos;
- Não permitir o envio de arquivos inadequados.

Essas validações ajudam a tornar a API mais segura e organizada.

---

## 📝 Resumo da Aula

Nesta aula foi desenvolvida uma API utilizando **NestJS** com o objetivo de trabalhar com **upload de imagens**.

Foi estudado como uma aplicação pode receber arquivos através de requisições HTTP, processar esses arquivos e armazená-los em uma pasta específica chamada `uploads`.

Também foi reforçada a importância da organização dos diretórios e da utilização de Controllers para lidar com as requisições da API.

---

## ✅ Conclusão

A Aula 11 permitiu colocar em prática o desenvolvimento de uma API capaz de trabalhar com **upload de imagens**.

O conteúdo apresentou conceitos importantes sobre recebimento de arquivos, requisições `multipart/form-data`, armazenamento e organização dos arquivos dentro de uma aplicação NestJS.

Esse conhecimento pode ser aplicado em diversos tipos de sistemas que precisam permitir o envio de imagens e outros arquivos pelos usuários.
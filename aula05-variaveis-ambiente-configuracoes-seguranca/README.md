# Estudos de Node.js e NPM

## Sobre o projeto

Este projeto foi desenvolvido durante as aulas de Back-End com o objetivo de estudar e praticar os principais conceitos do Node.js e do NPM.

Durante o desenvolvimento foram trabalhados conceitos relacionados à criação de projetos, gerenciamento de dependências, módulos, variáveis de ambiente, Streams, Buffers e tratamento de erros.

## Conteúdos estudados

### Node.js e NPM

Foi estudado o funcionamento do Node.js, que permite executar JavaScript fora do navegador, sendo muito utilizado no desenvolvimento de aplicações Back-End.

Também foi estudado o NPM, utilizado para instalar, gerenciar e organizar as dependências de um projeto.

O arquivo `package.json` é utilizado para armazenar informações e configurações importantes da aplicação.

### Módulos CommonJS e ESM

Foi estudada a organização do código utilizando módulos.

Foram apresentados dois padrões utilizados no Node.js:

- CommonJS
- ESM (ECMAScript Modules)

Também foram praticadas formas de importar e exportar funcionalidades entre arquivos utilizando:

- `require`
- `module.exports`
- `import`
- `export`

### Streams e Buffers

Foi estudado o conceito de Streams, utilizado para trabalhar com dados de maneira contínua, sem a necessidade de carregar todo o conteúdo na memória de uma única vez.

Também foram estudados os Buffers, utilizados pelo Node.js para trabalhar com dados binários.

Esses recursos são importantes para trabalhar com arquivos, requisições, respostas e grandes quantidades de dados.

### Tratamento de erros

Foi estudada a importância de identificar e tratar erros durante a execução da aplicação.

Também foram trabalhadas formas de evitar que erros inesperados encerrem a aplicação sem uma mensagem adequada.

### Variáveis de ambiente

Foi estudada a utilização de variáveis de ambiente para armazenar informações de configuração da aplicação.

No projeto foi utilizado o arquivo `.env` para armazenar informações como:

- Porta da aplicação;
- Chave de API;
- URL do banco de dados.

Essas informações são acessadas através do `process.env`.

Por questões de segurança, o arquivo `.env` **não deve ser enviado para o GitHub**, pois pode conter informações confidenciais.

Para demonstrar quais variáveis são necessárias, pode ser utilizado um arquivo `.env.example` sem as informações secretas.

## Arquivos principais

- `app.js` — arquivo principal da aplicação.
- `.env` — armazena variáveis de ambiente e não deve ser enviado ao GitHub.
- `.env.example` — apresenta um exemplo das variáveis necessárias para executar o projeto.
- `.gitignore` — define arquivos e pastas que não devem ser enviados ao GitHub.
- `package.json` — contém as configurações e dependências do projeto.
- `package-lock.json` — registra as versões das dependências instaladas.
- `README.md` — documentação do projeto.

## Segurança

O projeto utiliza variáveis de ambiente para evitar que informações sensíveis sejam colocadas diretamente no código.

O arquivo `.env` deve permanecer apenas no ambiente local e deve estar incluído no `.gitignore`.

Também não devem ser publicadas no GitHub informações como:

- Chaves de API;
- Senhas;
- Tokens;
- Dados de acesso;
- Informações privadas de banco de dados.

## Objetivo da atividade

O objetivo das atividades foi compreender os principais recursos do Node.js e do NPM e aprender como utilizá-los na construção e organização de aplicações Back-End.

Durante os estudos, foi possível praticar a criação de projetos, utilização de módulos, gerenciamento de dependências, Streams, Buffers, variáveis de ambiente e tratamento de erros.

## Conclusão

A realização das atividades possibilitou colocar em prática os conceitos estudados em Node.js, permitindo compreender melhor como funciona uma aplicação Back-End e como organizar seus arquivos e configurações de maneira segura.
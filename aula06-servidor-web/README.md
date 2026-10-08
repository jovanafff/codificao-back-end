# Aula 06 - Servidor Web

## Sobre a aula

Nesta aula foi estudada a criação de um servidor Web utilizando Node.js e o módulo nativo `http`.

O objetivo foi compreender como um servidor recebe requisições dos clientes, identifica as rotas acessadas e retorna respostas de acordo com cada solicitação.

## Conteúdos estudados

### Criação de um servidor HTTP

Foi utilizado o módulo `http` do Node.js para criar um servidor Web.

Através do método `createServer()`, o servidor consegue receber requisições e enviar respostas para o cliente.

### Requisições HTTP

Foi estudado como acessar informações de uma requisição, como:

- Método HTTP (`GET`, por exemplo);
- URL solicitada;
- Rota acessada.

No projeto, essas informações são exibidas no console para acompanhar as requisições recebidas pelo servidor.

### Rotas

Foi estudado o conceito de rotas, permitindo que o servidor responda de maneira diferente dependendo da URL acessada.

Foi criada a rota:

```text
/status
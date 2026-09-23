## Desenvolvimento da atividade

Nesta etapa foi desenvolvido um projeto utilizando **Node.js**, com o objetivo de trabalhar conceitos de **Streams, Buffers e processamento de arquivos**.

Primeiramente, foi criado o projeto `aula03-streams-buffers`, utilizando o Node.js e configurando o arquivo `package.json`. O projeto foi configurado para utilizar **ES Modules**, por meio da propriedade `"type": "module"`.

### Geração do arquivo de log

Foi desenvolvido um código utilizando o módulo nativo `fs` do Node.js. Nesse código foi utilizado o método `createWriteStream()` para criar e escrever informações no arquivo `servidor.log`.

O programa gera várias linhas contendo:

- Data da execução;
- Horário;
- Número da linha;
- Status da requisição;
- Mensagem de teste;
- Tipo do registro, podendo ser `INFO` ou `ERROR`.

Foi utilizado um loop para gerar uma grande quantidade de registros, simulando um arquivo de log de servidor. A utilização de **WriteStream** permite realizar a escrita dos dados de maneira contínua, sem precisar manter todo o conteúdo na memória.

### Leitura e filtragem do arquivo

Em seguida, foi criado outro código responsável por realizar o processamento do arquivo `servidor.log`.

Para isso, foram utilizados:

- `createReadStream()` para realizar a leitura do arquivo;
- `readline` para processar o arquivo linha por linha;
- `createInterface()` para facilitar a leitura das linhas;
- `createWriteStream()` para criar o arquivo `apenas_erros.log`.

O programa verifica cada linha do arquivo e procura pela palavra **`ERROR`**. Quando encontra um registro de erro, essa linha é gravada no arquivo `apenas_erros.log`.

Também foi criada uma variável `totalErros` para contabilizar quantas linhas contendo erros foram encontradas durante o processamento.

### Monitoramento do consumo de memória

Além do processamento dos arquivos, foi criada a função `exibirConsumoMemoria()` utilizando `process.memoryUsage()`.

Essa função permite visualizar informações sobre o consumo de memória do Node.js, principalmente:

- **RSS**: quantidade de memória ocupada pelo processo;
- **Heap Used**: quantidade de memória utilizada pela área de heap.

Essas informações são exibidas no terminal durante o início e o final do processamento, permitindo observar o comportamento da aplicação enquanto trabalha com uma grande quantidade de dados.

### Resultado da atividade

Com o desenvolvimento dessa atividade, foi possível colocar em prática os conceitos de **Streams e Buffers no Node.js**, realizando a geração, leitura e filtragem de um arquivo com grande quantidade de registros.

A atividade também demonstrou como trabalhar com arquivos de forma mais eficiente, processando os dados gradualmente em vez de carregar todo o arquivo na memória de uma única vez.

Dessa forma, foi possível compreender melhor a utilização de `ReadStream`, `WriteStream`, `readline` e `process.memoryUsage()` no desenvolvimento de aplicações Node.js.

### Conclusão

A atividade contribuiu para o entendimento de como o Node.js pode trabalhar com **grandes volumes de dados e arquivos**, utilizando Streams para controlar a leitura e escrita de informações.

Também foi possível acompanhar o consumo de memória da aplicação e verificar a quantidade de erros encontrados durante o processamento do arquivo de log.
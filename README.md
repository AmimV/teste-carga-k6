# Teste de Carga com K6 nas APIs em api.restful-api.dev

Este repositório contém scripts de teste de carga implementados com o K6 para as APIs hospedadas em api.restful-api.dev. O K6 é uma ferramenta de código aberto usada para testes de carga, estresse e desempenho.

## Pré-requisitos

Antes de executar os testes de carga, certifique-se de ter as seguintes dependências instaladas:

- K6: https://k6.io/docs/getting-started/installation/

## Como Executar os Testes de Carga

Siga as etapas abaixo para executar os testes de carga nas APIs em api.restful-api.dev:

1. Clone este repositório:
git clone <URL do Repositório>

2. Navegue até o diretório clonado:
cd <diretório clonado>

3. Execute o script de teste de carga com o K6:
k6 run <nome do script>.js

## Personalização dos Testes

Você pode personalizar os testes de carga de acordo com as necessidades do projeto.

Para modificar as validações, vá para o diretório services e abra o arquivo <nome do script>.js. Faça as alterações necessárias nas validações.

Os critérios de limite estão no diretório utils. Abra o arquivo <options.js> e faça ajustes, como a duração dos testes e a quantidade de requisições enviadas.

Os testes de carga estão no diretório tests. Abra o arquivo <nome do arquivo>.js e faça as alterações necessárias, como adicionar ou remover testes.

## Observando Resultados

Durante a execução dos testes de carga, o K6 exibirá no console os resultados em tempo real. Você pode observar métricas como tempo de resposta, taxa de transferência, erros e outros indicadores de desempenho.

## Contribuição

Contribuições são bem-vindas! Se você identificar melhorias nos scripts de teste de carga ou tiver sugestões, sinta-se à vontade para enviar uma solicitação pull.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para obter mais informações.
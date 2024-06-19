# fullcycle-desafio-nginx

Este repositório contém uma configuração Docker Compose para orquestrar uma aplicação multi-contêiner Docker composta por um proxy reverso NGINX, uma aplicação web e um banco de dados MySQL. O arquivo docker-compose.yml define os serviços e como eles interagem dentro de uma rede personalizada.

**As chamadas http para aplicação, com excessão da rota '/favicon.ico' irão resultar na inserção de um nome randomico numa tabela em um banco de dados mysql. A resposta para as chamadas será a lista de nomes até então cadastrados.**

Serviços

1. App
Contexto de Build: O serviço app é construído a partir de um Dockerfile localizado no diretório do projeto.
Exposição de Porta: O app expõe a porta 3000 para comunicação interna dentro da rede Docker.
Dependências: O app depende do serviço de banco de dados (db).

2. NGINX
Imagem: Usa a imagem mais recente do NGINX do Docker Hub.
Configuração: A configuração personalizada do NGINX é fornecida através de um volume mount (./nginx/nginx.conf).
Binding de Porta: Vincula a porta 8080 no host à porta 8080 no contêiner.
Dependências: O serviço NGINX depende do serviço app para garantir que ele inicie após o app estar em execução.

3. Banco de Dados MySQL
Imagem: Usa a imagem mais recente do MySQL do Docker Hub.
Variáveis de Ambiente: Define a MYSQL_ROOT_PASSWORD como pass.
Exposição de Porta: Não expõe nenhuma porta para o host; acessível apenas dentro da rede Docker.

Rede

appnet: Uma rede bridge personalizada para facilitar a comunicação entre os serviços.

Estrutura de arquivos

```sh
diretorio-do-projeto/
│
├── Dockerfile
├── docker-compose.yml
└── nginx/
    └── nginx.conf
```

O arquivo de configuração do NGINX (nginx/nginx.conf) roteia as requisições HTTP recebidas para o serviço app.

## Execução

```sh
docker-compose up -d
```

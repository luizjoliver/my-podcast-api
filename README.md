<h1 align="center"> Projeto 'My-Podcast-api' Criado com o framework Nest</h1>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Um progessivo  framework <a href="http://nodejs.org" target="_blank">Node.js</a> para construir aplicações eficientes e escaláveis no server-side</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

[Nest](https://github.com/nestjs/nest) > repositório do framework Nest js.

## Instale as dependências do projeto

```bash
$ npm install
```

## Compile e rode o projeto

```bash
# Desenvolvimento
$ npm run start

# Modo ''watch''
$ npm run start:dev

# Modo de produção
$ npm run start:prod
```



# Documentação da API
## Explicação API

Para a API funcionar , o usuário requisitante necessita passar o header "X-API-KEY":"nest-is-awesome" , este header foi criado para mostrar a funcionalidade "guards" do Nest Js , que é muito utilizado para ''autenticação'' de usuários / utilização de ''chaves de api '' e etc

**OBS**: O Swagger está configurado para vc passar o **"X-API-KEY"** , basta clicar em authorize e passar o valor **''nest-is-awesome''** .

## Teste o Projeto no Swagger

O projeto **My-Podcast-api**, desenvolvido com o framework **Nest.js**, utiliza o **Swagger** para fornecer uma documentação clara e interativa das rotas da API. Isso facilita o teste das funcionalidades diretamente pela interface do Swagger, sem a necessidade de ferramentas externas.

Para testar as rotas e consultar a documentação da API, basta acessar o Swagger no seguinte endpoint:

### 🌐 **[localhost:port/api](http://localhost:port/api)**


## Explicação rotas do projeto

A aplicação possui as seguintes rotas:

### 1.🌐 **GET /Episodes**

- **Descrição**: Rota principal da aplicação > Retorna todos os episódios.

- **Exemplo de resposta**:
  ```json
  [
    {
    "name": "Primeiro episodio",
    "featured": false,
    "publishedAt": "2022-03-03",
    "id": "70fc544d-9d69-4551-b3ea-ef975e9f3561"
  },
    {
    "name": "Segundo episodio",
    "featured": true,
    "publishedAt": "2023-05-05",
    "id": "312312412d-9d69-4551-321a-ef97542149f35"
  },
   {
    "name": "Terceiro episodio",
    "featured": false,
    "publishedAt": "2024-08-08",
    "id": "73fc544d-8i6l3-1420-a3ea-br975y93f3563"
  }
  ]

### 2.🌐 **POST /Episodes**

- **Descrição**: Rota  de criação de um episódio > Retorna o Episódio Criado.

- **Exemplo de resposta**:
  ```json
  {
    "name": "Terceiro episodio",
    "featured": false,
    "publishedAt": "2024-08-08",
    "id": "73fc544d-8i6l3-1420-a3ea-br975y93f3563"
  }

### 3. 🌐**GET /Episodes/:id**

- **Descrição**: Rota da aplicação oara retornar o episódio requisitado pelo ID > Retorna o Episódio requisitado.

- **Exemplo de resposta( id: 70fc544d-9d69-4551-b3ea-ef975e9f3561)**:
  ```json
  
    {

     "name": "Primeiro episodio",
     "featured": false,
     "publishedAt": "2022-03-03",
     "id": "70fc544d-9d69-4551-b3ea-ef975e9f3561"

    }
  

### 4. 🌐**GET /Episodes/featured**

- **Descrição**: Rota da aplicação para retornar todos os episódios destaques(Featured) > Retorna os Episódios destaques.

- **Exemplo de resposta**:
  ```json
  [

    {
    "name": "Segundo episodio",
    "featured": true,
    "publishedAt": "2023-05-05",
    "id": "312312412d-9d69-4551-321a-ef97542149f35"
    }
  ]



## Acompanhe o Nest Js

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licença

O NestJs usa [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

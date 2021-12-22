# Serverless-Challenge

### Olá, esta é a versão simplificada funcional de uma integração com o AWS Lambda+RDS(Mysql)+API Gateway

## 💻 Pré-requisitos
Antes de começar, verifique se você atendeu aos seguintes requisitos:
* Você instalou a versão mais recente do serverless framework
* Você instalou a versão mais recente do Yarn
* Você gerou uma RDS(Mysql) na Amazon AWS

## 🚀 Instalando 
Para instalar o projeto, siga estas etapas
```
yarn 
```
Para o banco de dados funcionar corretamente com a aplicação você precisa gerar a tabela no banco usando um SGBD da sua prefêrencia usadno o seguinte schema:

```
CREATE TABLE `employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `age` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `jobRole` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

```

Você precisa configurar o arquivo que está no diretorio src do projeto que se chama `MysqlConnector.js` 

E por ultimo PROMETO kkkkk,
Você precisa configurar a VPC da sua estancia RDS no arquivo `serverless.yml` (ISTO É ESSENCIAL PARA QUE O LAMBDA CONSIGA TER ACESSO LIVRE AO BANCO DE DADOS)

depois disso tudo é so fazer deploy:
```
serverless deploy
```

## ☕Aproveite, caso queira ver o projeto em ação utilize as seguintes URLs!

endpoints:

  GET - https://eec40xmkw4.execute-api.us-east-1.amazonaws.com/
  
  POST - https://eec40xmkw4.execute-api.us-east-1.amazonaws.com/
  
  PUT - https://eec40xmkw4.execute-api.us-east-1.amazonaws.com/{id}
  
  DELETE - https://eec40xmkw4.execute-api.us-east-1.amazonaws.com/{id}

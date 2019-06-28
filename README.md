# Meetapp

Nessa aplicação será utilizada as seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilize PostgresSQL ou MySQL);

Essa aplicação dará início a um novo projeto no Bootcamp, esse projeto será desenvolvido aos poucos, a aplicação completa será composta por 3 partes: back-end, front-end e mobile.

Esse projeto também será utilizado para a certificação do bootcamp!

## Aplicação

Essa aplicação é um app agregador de eventos para desenvolvedores chamado Meetapp (um acrônimo à Meetup + App).

## Funcionalidades

Abaixo estão descritas as funcionalidades da aplicação.

### Autenticação

Permita que um usuário se autentique em sua aplicação utilizando e-mail e senha.

- A autenticação foi implementada utilizando JWT.
- A validação dos dados de entrada foi implementada utilizando Yup;

### Cadastro e atualização de usuários

Permita que novos usuários se cadastrem em sua aplicação utilizando nome, e-mail e senha.

Para atualizar a senha, o usuário deve também enviar um campo de confirmação com a mesma senha.

- Criptografia da senha do usuário para segurança.
- A validação dos dados de entrada foi implementada utilizando Yup;

“Não espere para plantar, apenas tenha paciência para colher”!

### Instalação

Instale todas as dependências e execute a aplicação.

```sh
$ git clone https://github.com/igorvc30/go-meetapp.git
$ cd go-meetapp
$ yarn install
$ yarn sequelize db:migrate
$ yarn dev
```

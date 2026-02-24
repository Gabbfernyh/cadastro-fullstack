# Cadastro Full-Stack

> **Status do projeto:**
>
> - Front-end concluido
> - Back-end + banco de dados concluidos
> - Deploy do front-end concluido
> - Pendente: conexao do front-end com o back-end e deploy integrado (front + back)

---

## Descricao

Projeto full-stack com foco em cadastro de usuarios, integrando interface web e API REST.
Desenvolvido como parte dos estudos no **DevClub**.

---

## Preview

![Tela de Cadastro](/frontend/src/assets/preview.png)

[View](https://cadastro-fullstack-gabb.vercel.app/)

---

## Tecnologias Utilizadas

**Front-end:**

- [React.js](https://reactjs.org/) - Biblioteca para construcao de interfaces

**Back-end:**

- [Node.js](https://nodejs.org/) - Ambiente de execucao JavaScript no servidor
- [Express](https://expressjs.com/) - Framework para criacao de APIs REST

**Banco de dados:**

- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL
- [Mongoose](https://mongoosejs.com/) - ODM para modelagem e acesso ao MongoDB

---

## Funcionalidades

- Cadastro de usuarios com nome, e-mail e idade
- Interface limpa, responsiva e intuitiva
- Integracao front-end com API REST

---

## Como rodar o projeto localmente

### Pre-requisitos

- Node.js instalado
- npm ou yarn

### Front-end

```bash
# Clone o repositorio
git clone https://github.com/gabbfernyh/cadastro-fullstack.git

# Acesse a pasta do front-end
cd frontend

# Instale as dependencias
npm install

# Inicie o servidor de desenvolvimento
npm start
```

### API (Back-end)

```bash
# Acesse a pasta da API
cd api

# Instale as dependencias
npm install

# Inicie o servidor
npm start
```

---

## Estrutura do Projeto

```text
cadastro-fullstack/
|-- api/            # API Node + Express + Mongoose (MongoDB)
|   |-- index.js
|   `-- package.json
|-- frontend/       # Aplicacao React
|   |-- src/
|   `-- public/
`-- README.md
```

---

## Autor

Desenvolvido por **Gabbfernyh** junto ao **Rodolfo Mori** do [DevClub](https://devclub.com.br/).

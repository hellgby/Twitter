# Projeto N1 de Programação Web II

Esse projeto foi desenvolvido com o objetivo de aplicar conceitos de APIs REST, integração frontend-backend e persistência de dados.

O twitter é uma aplicação web inspirada na rede social original, onde os usuários podem criar contas, publicar tweets (postagens) e visualizar publicações de outros usuários.

O projeto foi desenvolvido com Node.js, Express, SQLite3, React e Axios, unindo frontend e backend.

---

## ✧ Funcionalidades

* Criar perfil de usuário
* Publicar tweets com texto
* Visualizar tweets recentes
* Comentar em tweets

---

## ✧ Tecnologias Utilizadas

### ◦ Frontend

* React
* React Router DOM
* Axios
* CSS Modularizado

### ◦ Backend

* Node.js
* Express
* SQLite3
* CORS
* Nodemon

---

## ✧ Banco de Dados (SQLite)

O banco `database.sqlite` contém três tabelas principais:

### ◦ Users

| Campo    | Tipo    | Descrição           |
| -------- | ------- | ------------------- |
| id       | INTEGER | Identificador único |
| name     | TEXT    | Nome do usuário     |
| username | TEXT    | @username do perfil |
| bio      | TEXT    | Biografia curta     |

### ◦ Posts

| Campo   | Tipo    | Descrição           |
| ------- | ------- | ------------------- |
| id      | INTEGER | Identificador único |
| content | TEXT    | Conteúdo do tweet   |
| userId  | INTEGER | Autor do tweet      |

### ◦ Comments

| Campo   | Tipo    | Descrição              |
| ------- | ------- | ---------------------- |
| id      | INTEGER | Identificador único    |
| content | TEXT    | Conteúdo do comentário |
| userId  | INTEGER | Autor do comentário    |
| postId  | INTEGER | Tweet relacionado      |

> O banco é gerenciado via Sequelize, com relações configuradas entre usuários, tweets e comentários.

---

## ✧ Executando o Projeto

### ◦ Backend

```bash
cd twitter
cd backend
npm install
npm start
```

O servidor backend iniciará em:
[http://localhost:3000](http://localhost:3000)

---

### ◦ Frontend

```bash
cd twitter
cd frontend
npm install
npm run dev
```

O servidor frontend iniciará em:
[http://localhost:3004](http://localhost:3004)

---

## ✧ Estrutura de Pastas

```bash
Twitter/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── test.http
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles/
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

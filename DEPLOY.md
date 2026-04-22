# Cadastro FullStack

Aplicação de cadastro de usuários com React, Node.js, Express e MongoDB.

## 🚀 Deploy

### Frontend (Vercel)

1. Push o código no GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione o repositório
5. Defina a variável de ambiente:
   - `VITE_API_URL` = URL do seu backend Render (ex: `https://seu-backend.onrender.com`)
6. Deploy automático!

### Backend (Render)

1. Push o código no GitHub
2. Acesse [render.com](https://render.com)
3. Clique em "New +" > "Web Service"
4. Conecte seu repositório GitHub
5. Configure:
   - **Name**: `cadastro-api`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Defina as variáveis de ambiente:
   - `MONGODB_URI` = Connection string do MongoDB Atlas
7. Deploy!

## 📝 Variáveis de Ambiente

### Frontend (`.env`)

```
VITE_API_URL=https://seu-backend.onrender.com
```

### Backend (`.env`)

```
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/database
PORT=3000
```

## 🛠️ Desenvolvimento Local

### Backend

```bash
cd api
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 📦 Funcionalidades

- ✅ Cadastro de usuários
- ✅ Listagem de usuários
- ✅ Deletar usuários
- ✅ Persistência em MongoDB
- ✅ Interface responsiva

## 🔗 Links

- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Render](https://render.com/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

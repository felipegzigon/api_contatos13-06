const express = require('express');

const dotenv = require('dotenv');

const conectarBanco = require('./config/db');

const contatoRoutes = require('./routes/contatoRoutes');


dotenv.config();

const app = express();


// Middleware para interpretar JSON no corpo das requisições

app.use(express.json());


// Rotas principais

app.use('/api/contatos', contatoRoutes);


// Conectar ao banco e iniciar o servidor

conectarBanco();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
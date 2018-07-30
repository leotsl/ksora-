const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const usuarioRouter = require('./routes/usuarioRouter');
app.use('/', index);
app.use('/usuario', usuarioRouter);
module.exports = app;
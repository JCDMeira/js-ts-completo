const express = require('express');
const route = express.Router();
const homeControlle = require('./src/controllers/homeController');
const testeController= require('./src/controllers/testeController');

// # Rotas da home
route.get('/', homeControlle.paginaInicial);
route.post('/', homeControlle.formulario);

//# Rotas da página teste

route.get('/testes/:idUsuario?', testeController.teste)

module.exports = route;

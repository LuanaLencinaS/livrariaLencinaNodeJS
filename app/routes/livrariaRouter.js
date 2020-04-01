const express = require("express");

const route = express.Router();

const controleLivraria = require("../controller/livrariaController");

route.get("/", controleLivraria.home); 

route.get("/livros", controleLivraria.livros);

module.exports = route;
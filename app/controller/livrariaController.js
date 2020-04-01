const livro = require("../model/Livro");

let livrariaController = {
    home: (req, res) => {
        res.render("home");
    },
    livros: (req, res) => {
        let livros = livro.listaLivros();
        res.render("livros", {livros});
    }
}

module.exports = livrariaController;
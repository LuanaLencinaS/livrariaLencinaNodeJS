let livros = [
    {
        nome: "Fallen",
        preco: 20.55,
        autor: "Lauren Kate",
        descricao: "loren",
        capa: "capaFallen.jpg"
    },
    {
        nome: "Cidades de Papel",
        preco: 20.91,
        autor: "John Green",
        descricao: "loren",
        capa: "capaCidadeDePapel.jpg"
    },
    {
        nome: "Não Pare",
        preco: 30.99,
        autor: "FML Pepper",
        descricao: "loren",
        capa: "capaNaoPare.jpg"
    }
];

function listaLivros(){
    let arrayLivro = livros.map(umLivro => {
        let autor = umLivro.autor;
        autor = autor.split(" ");
        let aux = autor[0];
        autor[0] = autor[1];
        autor[1] = aux;
        autor = autor.join(" ");
        umLivro.autor = autor;
        return umLivro;
    });

    return arrayLivro;
}

module.exports = {listaLivros};

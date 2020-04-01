const express = require("express");

const app = express();
const rotaLivros = require("./app/routes/livrariaRouter");

app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("public"));

app.use("/livraria", rotaLivros);

app.listen(8000, () => {
    console.log("rodando porta 8000");
})
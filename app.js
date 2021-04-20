const { response } = require('express');
const express = require('express');
const { request } = require('node:http');
const app = express();

let usuarios = [
    {nome: "Thomas", sobrenome: "Neyber"}
];

app.get("/inicio", (request, response) => {
    return response.send(" E ai meu chapa!");
})
app.get("/usuarios", (request, response) => {
    return response.json(usuarios);
})
app.listen(3000, () => {
    console.log("Servidor rodando")
});
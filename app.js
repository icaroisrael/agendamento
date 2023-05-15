const express = require('express')
const app = express();
const Usuario = require('./model/Usuario')


app.get('/cadastro', (req, res) =>{
    res.send("Cadastro de usuário")
    Usuario.create({
    cpf: 11111111111,
    nome: "Israel",
    email: "ysrael@gmail.com",
    senha: "12345"
 }).then(() =>{
        res.redirect('/consultar')
}) 
})


app.get('/consultar', (req, res) =>{
    res.send("Pesquisar usuário")
})

app.listen(3000, ()=>{
    console.log("Server run");
})
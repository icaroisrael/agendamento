const express = require('express')
const app = express();
const Usuario = require('./model/Usuario')
const bodyParser = require('body-parser')

//CONFIGURAÇÕES
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/cadastro', (req, res) =>{
    res.sendFile(__dirname + '/views/cadastro.html');
})
app.post('/cadastro/usuario', (req, res) => {
     Usuario.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email,
        senha: req.body.senha
     }).then(() =>{
        res.redirect('/cadastro')
  }) 
})


app.get('/consultar', (req, res) =>{
    res.send("Pesquisar usuário")
})

app.listen(3000, ()=>{
    console.log("Server run");
})
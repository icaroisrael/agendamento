const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const Usuario = require('./model/Usuario')

app.use(bodyParser.urlencoded({ extended: false }))
const port = process.env.PORT || 3000

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/home.html');
})
app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + "/views/cadastro.html")
})

app.post('/cadastro', (req, res) => {
    Usuario.create({
        cpf:req.body.cpf,
        nome: req.body.nome
    }).then(()=>{
        res.send("Dados cadastrados com sucesso")
    });
})

app.listen(port, () =>{
    console.log("Servidor ligado")
})
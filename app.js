const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/home.html');
})
app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + "/views/cadastro.html")
})

app.post('/cadastro', (req, res) => {
    res.send("CPF: " + req.body.cpf + "<br>" + "NOME: " + req.body.nome)
})

app.listen(3000, () =>{
    console.log("Servidor ligado")
})
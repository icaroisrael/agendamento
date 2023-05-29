const express = require('express')
const app = express();
const Usuario = require('./model/Usuario')
const bodyParser = require('body-parser')
//INCLUE AS NOVAS BIBLIOTECAS
const path = require('path')
const hbs = require('hbs')
//FIM DA INCLUSÃO DAS BIBLIOTECAS


//MUDANÇA 3 CONFIGURAÇÃO DO HANDLEBARS
// View Engine Setup
app.set('views', path.join('views'))
app.set('view engine', 'hbs')


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

//INCLUE NA VERSÃO NOVA A PESQUISA USANDO O HANDLEBARS
app.get('/pesquisar', (req, res) =>{
    Usuario.findAll().then((dados) =>{
        res.render('usuarios', {usuarios:dados, title: 'Usuários'})
    })
})
//V4 - EXCLUIR
app.get("/excluir/:cpf", (req, res) =>{
    // Delete everyone named "Jane"
    Usuario.destroy({
        where: {
          cpf: req.params.cpf
        }
      }).then(() =>{
        res.redirect("/pesquisar")
      });
    
})

//INICIO DA DA V5 QUE EDITA UM USUÁRIO

app.post('/update/:cpf/:nome', (req, res) =>{
  Usuario.update(
      {nome: req.body.nome},
      {where: {cpf: req.body.cpf}}
  ).then(() =>{
      res.redirect('/pesquisar')
  })
})
app.get("/update/:cpf", async (req,res)=>{
  const {cpf} = req.params; 
  const user = await Usuario.findOne({
      where:{
          cpf
      }
  });
  return res.render("updateUsuario", {user})
})

//FIM DA VERSÃO 5 QUE EDITA UM USUÁRIO



app.listen(3000, ()=>{
    console.log("Server run");
})
const express = require('express')
const app = express()

// Definindo template engine EJS pra nossa aplicao
app.set('view engine', 'ejs')

// Registra O Path /styles
app.use(express.static(__dirname + '/styles'))
app.use('/styles', express.static(__dirname + '/styles'));
// Registra O Path /scripts
app.use(express.static(__dirname + '/scripts'))
app.use('/scripts', express.static(__dirname + '/scripts'));

// Criando as rotas Marotas
app.get('/', (req, res) => {
    res.render('Home/Home')
})

app.get('/cadastro', (req, res) => {
    res.render('Cadastro/Cadastro')
})

// Setando a porta 8080 da aplicação
app.listen('8080', () => {
    console.log('Servidor Rodando na porta 8080')
})
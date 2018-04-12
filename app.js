const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/scripts'))

app.use('/scripts', express.static(__dirname + '/scripts'));

app.get('/', (req, res) => {
    res.render('Home/Home')
})

app.get('/cadastro', (req, res) => {
    res.render('Cadastro/Cadastro')
})

app.listen('8080', () => {
    console.log('Servidor Rodando na porta 8080')
})
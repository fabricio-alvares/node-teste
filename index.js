const express = require('express')
const app = express()

const port = 3000

const funcaoOuvinte = function () {
    console.log('estou ouvindo na porta', port)
}

app.get('/', function (req, res) {

    var pessoa1 = {
        nome: "fabricio",
        sobrenome: "alvares",
    }

    var pessoa2 = {
        nome: "gustavo",
        sobrenome: 33,
        bandas: ['kiss', 'led zeppelin', 'angra']
    }

    var pessoas = [pessoa1, pessoa2]

    res.send(pessoas);
});

app.listen(port, funcaoOuvinte)
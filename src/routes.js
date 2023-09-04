const express = require('express')
const app = express.Router();

app.get('/cachorrinho', (req, res) => {
    res.send('Se você tem um cachorrinho, cheire o seu narizinho!');
});

app.get('/jumentinho', (req, res) => {
    res.json({title:"É dificil esquecer da primeira vez que se anda num jumentinho, fidido a lixo :3", mensagem: 'Mas não é porque é fidido, que o bichinho é mal amado, coitado.'})
});

app.get('/Riquelminho', (req, res) => {
    res.send('Riquelminho, lindinho e cheirosinho, pena que é abusado, daí, ninguém aguenta. Tadinho, mas é cheiroso! :> ');
})

module.exports = app;
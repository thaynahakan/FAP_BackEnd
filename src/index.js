const express = require('express')
const app = express();
const port = 3000;

// Rota GET
app.get('/', (req, res) => {
    res.send('<h1>Bem-Vinde a minha API!</h1>');
});

app.get('/json', (req,res) => {
    res.json({title:"Nosso primeiro Server!", online: true})
})

app.listen(3000, () => {
    console.log(`Servidor abrindo na porta ${port}`);
});
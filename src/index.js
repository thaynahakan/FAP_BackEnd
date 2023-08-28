const express = require('express')
const app = express();
const port = 3000;

// Rota GET
app.get('/', (req, res) => {
    res.send('<h1>Bem-Vinde a minha API!</h1>');
});

// Rota POST
app.post('/enviar', (req, res) => {
    res.json({ mensagem: 'Dados enviados com sucesso!'});
});
app.listen(3000, () => {
    console.log(`Servidor abrindo na porta ${port}`);
});
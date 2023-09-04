const express = require('express')
const app = express();
const port = 3000;

const rotas = require('./routes');

app.use('/', rotas);

app.listen(port, () => {
    console.log(`Servidor abrindo na porta ${port}`);
});


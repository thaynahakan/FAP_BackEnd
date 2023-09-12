const mysql = require('mysql');

// Configurar as informações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'seu_host',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'seu_banco_de_dados',
});

// Tentar estabelecer a conexão
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados!');
    // Você pode executar consultas ou outras operações aqui
    // connection.query('SELECT * FROM sua_tabela', (queryErr, results) => {
    //   if (queryErr) {
    //     console.error('Erro na consulta:', queryErr.message);
    //   } else {
    //     console.log('Resultados da consulta:', results);
    //   }
    // });
  }
});

// Fechar a conexão quando terminar de usá-la
connection.end();
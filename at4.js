const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'hostpost',
  user: 'luan',
  password: '9557',
  database: 'test'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida com sucesso!');
 
  connection.end((err) => {
    if (err) {
      console.error('Erro ao encerrar a conexão:', err.message);
      return;
    }
    console.log('Conexão encerrada com sucesso.');
  });
});
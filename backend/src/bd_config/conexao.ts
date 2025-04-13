import mysql from 'mysql2/promise';

const conexao = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "aas798118",
    database: "integrador_ii"
  });
  
  export { conexao };


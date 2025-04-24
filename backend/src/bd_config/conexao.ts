import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const conexao = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: true // ou `false` se você tiver problemas com certificados
  }
  });

  conexao.getConnection()
  .then(() => console.log("✅ Conexão com o banco estabelecida!", process.env.DB_DATABASE,  process.env.DB_USER))
  .catch(err => console.error("❌ Erro na conexão com o banco:", err));
  
  export { conexao };


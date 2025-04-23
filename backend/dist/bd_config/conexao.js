"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexao = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../../.env') });
const conexao = promise_1.default.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    ssl: {
        rejectUnauthorized: true // ou `false` se você tiver problemas com certificados
    }
});
exports.conexao = conexao;
conexao.getConnection()
    .then(() => console.log("✅ Conexão com o banco estabelecida!", process.env.DB_DATABASE))
    .catch(err => console.error("❌ Erro na conexão com o banco:", err));

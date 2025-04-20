"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.novo_usuario = void 0;
const conexao_1 = require("../../bd_config/conexao");
let resposta = "";
class novo_usuario {
    async execute({ usuario, senha }) {
        const query_pesq = "SELECT * FROM usuarios WHERE usuario =? ";
        const [resultado_pesq] = await conexao_1.conexao.execute(query_pesq, [usuario]);
        const pesq = resultado_pesq[0];
        if (pesq) {
            return ("Cliente já cadastrado");
        }
        const query = "INSERT INTO usuarios (usuario, senha) VALUES (?, ?)";
        await conexao_1.conexao.execute(query, [usuario, senha]);
        return ("Usuário cadastrado com sucesso");
    }
}
exports.novo_usuario = novo_usuario;

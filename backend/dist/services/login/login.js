"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login_usuario = void 0;
const conexao_1 = require("../../bd_config/conexao");
let resposta = "";
class login_usuario {
    async execute({ usuario, senha }) {
        const query = "SELECT * FROM usuarios WHERE usuario = ?";
        const [pesq] = await conexao_1.conexao.execute(query, [usuario]);
        if (pesq.length == 0) {
            resposta = "Negado";
            return resposta;
        }
        const user = pesq[0];
        if (user.senha == senha && user.usuario == usuario) {
            resposta = "Autorizado";
        }
        else {
            resposta = "Negado";
        }
        console.log(resposta);
        return resposta;
    }
}
exports.login_usuario = login_usuario;

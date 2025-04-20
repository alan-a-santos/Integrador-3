"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizar_senha = void 0;
const conexao_1 = require("../../bd_config/conexao");
class atualizar_senha {
    async execute({ usuario, senha }) {
        const query_pesq = "SELECT * FROM usuarios WHERE usuario =? ";
        const queryupdate = 'UPDATE usuarios SET senha=? WHERE usuario=?';
        const [resultado_pesq] = await conexao_1.conexao.execute(query_pesq, [usuario]);
        const user = resultado_pesq[0];
        if (!user) {
            return ("Usuário não localizado");
        }
        const conn = await conexao_1.conexao.getConnection();
        try {
            conn.beginTransaction();
            await conn.execute(queryupdate, [senha, usuario]);
            await conn.commit();
            return ('Senha alterada com sucesso!!!');
        }
        catch (error) {
            await conn.rollback();
            console.error("Erro na alteração da senha");
            throw new Error("Erro ao alterar senha");
        }
        finally {
            await conn.release();
        }
    }
}
exports.atualizar_senha = atualizar_senha;

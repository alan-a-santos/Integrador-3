"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgto_total = void 0;
const conexao_1 = require("../../bd_config/conexao");
class pgto_total {
    async execute({ situacao, id_cliente }) {
        const query = 'UPDATE receber  SET situacao =? WHERE id_cliente =? ';
        const atualiza = await conexao_1.conexao.execute(query, [situacao, id_cliente]);
        return { Mensagem: "Pedido Finalizado com Sucesso" };
    }
}
exports.pgto_total = pgto_total;

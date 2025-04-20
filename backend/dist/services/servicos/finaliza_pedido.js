"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finaliza_pedido = void 0;
const conexao_1 = require("../../bd_config/conexao");
class finaliza_pedido {
    async execute({ situacao, id_pedido }) {
        const query = 'UPDATE receber  SET situacao =? WHERE id =? ';
        const atualiza = await conexao_1.conexao.execute(query, [situacao, id_pedido]);
        return { Mensagem: "Pedido Finalizado com Sucesso" };
    }
}
exports.finaliza_pedido = finaliza_pedido;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedido_finalizado = void 0;
const conexao_1 = require("../../bd_config/conexao");
class pedido_finalizado {
    async execute({ situacao, id }) {
        const query = 'update  pedidos set  situacao=? where id=? ';
        const [pedidos] = await conexao_1.conexao.execute(query, [situacao, id]);
        return pedidos;
    }
}
exports.pedido_finalizado = pedido_finalizado;

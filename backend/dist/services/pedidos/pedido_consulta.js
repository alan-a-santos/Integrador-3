"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedido_consulta = void 0;
const conexao_1 = require("../../bd_config/conexao");
class pedido_consulta {
    async execute({ id }) {
        const query_datas = 'SELECT * FROM pedidos  WHERE id=?';
        const [consulta] = await conexao_1.conexao.execute(query_datas, [id]);
        return consulta;
    }
}
exports.pedido_consulta = pedido_consulta;

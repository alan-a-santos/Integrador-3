"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.painel = void 0;
const conexao_1 = require("../../bd_config/conexao");
class painel {
    async execute({ inicio, fim, }) {
        const query_datas = 'SELECT * FROM pedidos  WHERE dia BETWEEN ? AND ? ';
        const [pedidos] = await conexao_1.conexao.execute(query_datas, [inicio, fim,]);
        return pedidos;
    }
}
exports.painel = painel;

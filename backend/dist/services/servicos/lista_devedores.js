"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_devedores = void 0;
const conexao_1 = require("../../bd_config/conexao");
class lista_devedores {
    async execute(id_cliente, situacao) {
        const query = ' SELECT id,  id_pedido, segmento, data_venda, valor from receber where id_cliente= ? and situacao =? ';
        // const query1 ='SELECT  SUM(valor) AS total_valor FROM receber  where id_cliente= ? and situacao =? '
        const [devedores] = await conexao_1.conexao.execute(query, [id_cliente, situacao]);
        //const [devedores1] = await conexao.execute(query1, [id_cliente,situacao]);
        return devedores;
    }
}
exports.lista_devedores = lista_devedores;

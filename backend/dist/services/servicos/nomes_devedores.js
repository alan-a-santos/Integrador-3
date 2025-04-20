"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomes_devedores = void 0;
const conexao_1 = require("../../bd_config/conexao");
class nomes_devedores {
    async execute(situacao) {
        const query = ' SELECT clientes.id, clientes.nome from receber inner join clientes on receber.id_cliente=clientes.id where  receber.situacao =? ; ';
        // const query1 ='SELECT  SUM(valor) AS total_valor FROM receber  where id_cliente= ? and situacao =? '
        const [devedores] = await conexao_1.conexao.execute(query, [situacao]);
        //const [devedores1] = await conexao.execute(query1, [id_cliente,situacao]);
        return devedores;
    }
}
exports.nomes_devedores = nomes_devedores;

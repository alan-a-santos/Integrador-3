"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_situacao = void 0;
const conexao_1 = require("../../bd_config/conexao");
class lista_situacao {
    async execute() {
        const query = 'SELECT pedidos.*, clientes.nome AS nome_cliente FROM pedidos INNER JOIN clientes ON pedidos.id_cliente = clientes.id';
        // Executa a consulta usando a data do dia
        const [porcoes] = await conexao_1.conexao.execute(query);
        return porcoes;
    }
}
exports.lista_situacao = lista_situacao;

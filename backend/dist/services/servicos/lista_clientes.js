"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_clientes = void 0;
const conexao_1 = require("../../bd_config/conexao");
class lista_clientes {
    async execute() {
        const query = 'SELECT id, nome FROM clientes  where status="ATIVO" order by nome';
        const [clientes] = await conexao_1.conexao.execute(query);
        return clientes;
    }
}
exports.lista_clientes = lista_clientes;

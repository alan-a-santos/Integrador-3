"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_fitness = void 0;
const conexao_1 = require("../../bd_config/conexao");
class lista_fitness {
    async execute() {
        const query = 'SELECT nome_prato FROM cardapio WHERE segmento = "Fitness"  ';
        // Executa a consulta usando a data do dia
        const [porcoes] = await conexao_1.conexao.execute(query);
        return porcoes;
    }
}
exports.lista_fitness = lista_fitness;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_porcoes = void 0;
const conexao_1 = require("../../bd_config/conexao");
class lista_porcoes {
    async execute(categoria, segmento) {
        const query = 'SELECT * FROM cardapio  WHERE categoria =? and segmento=? order by nome_prato';
        const [porcoes] = await conexao_1.conexao.execute(query, [categoria, segmento]);
        return porcoes;
    }
}
exports.lista_porcoes = lista_porcoes;

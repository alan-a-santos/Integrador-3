"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oferta_cardapio = void 0;
const conexao_1 = require("../../bd_config/conexao");
let resposta = "";
class oferta_cardapio {
    async execute({ segmento, categoria, nome_prato, data, valor }) {
        const query_pesq = "SELECT * FROM ofertas WHERE nome_prato =? and data=?";
        const [resultado_pesq] = await conexao_1.conexao.execute(query_pesq, [nome_prato, data]);
        const pesq = resultado_pesq[0];
        if (pesq) {
            return { mensagem: `Prato "${nome_prato}" já disponível para oferta no dia "${data}` };
        }
        const query = 'INSERT INTO ofertas (segmento, categoria,  nome_prato, data, valor) VALUES (?, ?, ?, ?, ?)';
        await conexao_1.conexao.execute(query, [segmento, categoria, nome_prato, data, valor]);
        resposta = "Oferta efetuada com sucesso";
        return { mensage: resposta };
    }
}
exports.oferta_cardapio = oferta_cardapio;

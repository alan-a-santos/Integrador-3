"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastro_cardapio = void 0;
const conexao_1 = require("../../bd_config/conexao");
let resposta = "";
class cadastro_cardapio {
    async execute({ segmento, categoria, nome_prato }) {
        const query_pesq = "SELECT * FROM cardapio WHERE nome_prato =? ";
        const [resultado_pesq] = await conexao_1.conexao.execute(query_pesq, [nome_prato]);
        const pesq = resultado_pesq[0];
        if (pesq) {
            return (`Prato "${nome_prato}" já cadastrado`);
        }
        const query = "INSERT INTO cardapio (segmento, categoria, nome_prato) VALUES (?, ?, ?)";
        await conexao_1.conexao.execute(query, [segmento, categoria, nome_prato]);
        resposta = "Prato Cadastrado com Sucesso";
        return (resposta);
    }
}
exports.cadastro_cardapio = cadastro_cardapio;

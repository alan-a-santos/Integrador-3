"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualiza_pedido = void 0;
const conexao_1 = require("../../bd_config/conexao");
class atualiza_pedido {
    async update({ id, segmento, pedido, observacao, valor, situacao }) {
        // Atualização do pedido
        const query_update_pedido = `UPDATE pedidos SET segmento = COALESCE(?, segmento),  pedido = COALESCE(?, pedido),  observacao = COALESCE(?, observacao), 
                valor = COALESCE(?, valor),  situacao = COALESCE(?, situacao)  WHERE id = ?`;
        const query_update_receber = `UPDATE receber  SET valor = COALESCE(?, valor) WHERE id_pedido = ? `;
        // Atualização na tabela receber, se necessário
        let mensagem = "Pedido atualizado com sucesso!";
        try {
            // Atualiza o pedido
            await conexao_1.conexao.execute(query_update_pedido, [segmento, pedido, observacao, valor, situacao, id]);
            await conexao_1.conexao.execute(query_update_receber, [valor, id]);
            return { mensagem };
        }
        catch (error) {
            console.error('Erro ao atualizar pedido:', error);
            throw new Error('Erro na atualização do pedido');
        }
    }
}
exports.atualiza_pedido = atualiza_pedido;
'';

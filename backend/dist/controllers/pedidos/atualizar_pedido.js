"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualiza_pedido_controller = void 0;
const atualiza_pedido_1 = require("../../services/pedidos/atualiza_pedido");
class atualiza_pedido_controller {
    async handle(request, reply) {
        const { id, segmento, pedido, observacao, valor, dia, situacao, receber } = request.body;
        const pedidos = new atualiza_pedido_1.atualiza_pedido();
        try {
            const resultado = await pedidos.update({
                id,
                segmento,
                pedido,
                observacao,
                valor,
                situacao,
            });
            reply.send(resultado);
        }
        catch (error) {
            console.error('Erro ao atualizar pedido:', error);
            reply.status(500).send({ mensagem: 'Erro na atualização do pedido' });
        }
    }
}
exports.atualiza_pedido_controller = atualiza_pedido_controller;

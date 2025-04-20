"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finaliza_pedido_controller = void 0;
const finaliza_pedido_1 = require("../../services/servicos/finaliza_pedido");
class finaliza_pedido_controller {
    async handle(request, reply) {
        const { situacao, id_pedido } = request.body;
        const pedidos = new finaliza_pedido_1.finaliza_pedido();
        const pedido = await pedidos.execute({ id_pedido, situacao });
        reply.send(pedido);
    }
}
exports.finaliza_pedido_controller = finaliza_pedido_controller;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedido_finalizado_controller = void 0;
const pedido_finalizado_1 = require("../../services/pedidos/pedido_finalizado");
class pedido_finalizado_controller {
    async handle(request, reply) {
        const { id, situacao } = request.body;
        const solicita = new pedido_finalizado_1.pedido_finalizado();
        const solicitado = await solicita.execute({ id, situacao });
        reply.send(solicitado);
    }
}
exports.pedido_finalizado_controller = pedido_finalizado_controller;

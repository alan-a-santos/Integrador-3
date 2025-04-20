"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedido_consulta_controller = void 0;
const pedido_consulta_1 = require("../../services/pedidos/pedido_consulta");
class pedido_consulta_controller {
    async handle(request, reply) {
        const { id, } = request.body;
        const consulta = new pedido_consulta_1.pedido_consulta();
        const consultas = await consulta.execute({ id });
        reply.send({ consultas });
    }
}
exports.pedido_consulta_controller = pedido_consulta_controller;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.painel_controller = void 0;
const painel_1 = require("../../services/pedidos/painel");
class painel_controller {
    async handle(request, reply) {
        const { inicio, fim, } = request.body;
        const pedido = new painel_1.painel();
        const pedidos = await pedido.execute({ inicio, fim, });
        const preparo = pedidos.filter((pedido) => pedido.situacao === "Preparação");
        const pronto = pedidos.filter((pedido) => pedido.situacao === "Finalizado");
        reply.send({ preparo, pronto });
    }
}
exports.painel_controller = painel_controller;

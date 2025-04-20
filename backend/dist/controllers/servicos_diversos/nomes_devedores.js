"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nomes_devedores_controller = void 0;
const nomes_devedores_1 = require("../../services/servicos/nomes_devedores");
class nomes_devedores_controller {
    async handle(request, reply) {
        const { situacao } = request.body;
        const clientes = new nomes_devedores_1.nomes_devedores();
        const cliente = await clientes.execute(situacao);
        reply.send(cliente);
    }
}
exports.nomes_devedores_controller = nomes_devedores_controller;

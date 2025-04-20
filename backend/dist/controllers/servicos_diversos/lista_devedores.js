"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_devedores_controller = void 0;
const lista_devedores_1 = require("../../services/servicos/lista_devedores");
class lista_devedores_controller {
    async handle(request, reply) {
        const { id_cliente, situacao } = request.body;
        const clientes = new lista_devedores_1.lista_devedores();
        const cliente = await clientes.execute(id_cliente, situacao);
        reply.send(cliente);
    }
}
exports.lista_devedores_controller = lista_devedores_controller;

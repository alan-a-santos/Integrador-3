"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_clientes_controller = void 0;
const lista_clientes_1 = require("../../services/servicos/lista_clientes");
class lista_clientes_controller {
    async handle(request, reply) {
        const nomes = new lista_clientes_1.lista_clientes();
        const nome = await nomes.execute();
        reply.send(nome);
    }
}
exports.lista_clientes_controller = lista_clientes_controller;

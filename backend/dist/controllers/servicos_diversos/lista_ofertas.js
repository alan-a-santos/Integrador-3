"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_ofertas_controller = void 0;
const lista_ofertas_1 = require("../../services/servicos/lista_ofertas");
class lista_ofertas_controller {
    async handle(request, reply) {
        const nomes = new lista_ofertas_1.lista_ofertas();
        const nome = await nomes.execute();
        reply.send(nome);
    }
}
exports.lista_ofertas_controller = lista_ofertas_controller;

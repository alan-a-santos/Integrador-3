"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_situacao_controller = void 0;
const lista_situacao_1 = require("../../services/servicos/lista_situacao");
class lista_situacao_controller {
    async handle(request, reply) {
        const nomes = new lista_situacao_1.lista_situacao();
        const nome = await nomes.execute();
        reply.send(nome);
    }
}
exports.lista_situacao_controller = lista_situacao_controller;

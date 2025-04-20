"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_fitness_controller = void 0;
const lista_fitness_1 = require("../../services/servicos/lista_fitness");
class lista_fitness_controller {
    async handle(request, reply) {
        const nomes = new lista_fitness_1.lista_fitness();
        const nome = await nomes.execute();
        reply.send(nome);
    }
}
exports.lista_fitness_controller = lista_fitness_controller;

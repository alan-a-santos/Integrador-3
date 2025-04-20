"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_fitness = void 0;
const lista_fitness_1 = require("../../controllers/servicos_diversos/lista_fitness");
const lista_fitness = async (route) => {
    route.get("/servicos_diversos/lista_fitness", (request, replay) => {
        return new lista_fitness_1.lista_fitness_controller().handle(request, replay);
    });
};
exports.lista_fitness = lista_fitness;

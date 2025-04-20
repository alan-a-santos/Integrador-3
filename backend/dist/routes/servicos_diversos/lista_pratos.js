"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_porcoes = void 0;
const lista_pratos_1 = require("../../controllers/servicos_diversos/lista_pratos");
const lista_porcoes = async (route) => {
    route.post("/servicos_diversos/lista_pratos", (request, replay) => {
        return new lista_pratos_1.lista_porcoes_controller().handle(request, replay);
    });
};
exports.lista_porcoes = lista_porcoes;

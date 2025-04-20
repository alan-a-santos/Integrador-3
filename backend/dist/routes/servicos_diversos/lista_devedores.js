"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_devedores = void 0;
const lista_devedores_1 = require("../../controllers/servicos_diversos/lista_devedores");
const lista_devedores = async (route) => {
    route.post("/servicos_diversos/lista_devedores", (request, replay) => {
        return new lista_devedores_1.lista_devedores_controller().handle(request, replay);
    });
};
exports.lista_devedores = lista_devedores;

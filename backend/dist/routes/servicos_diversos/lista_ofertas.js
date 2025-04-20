"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_ofertas = void 0;
const lista_ofertas_1 = require("../../controllers/servicos_diversos/lista_ofertas");
const lista_ofertas = async (route) => {
    route.get("/servicos_diversos/lista_ofertas", (request, replay) => {
        return new lista_ofertas_1.lista_ofertas_controller().handle(request, replay);
    });
};
exports.lista_ofertas = lista_ofertas;

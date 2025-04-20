"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_clientes = void 0;
const lista_clientes_1 = require("../../controllers/servicos_diversos/lista_clientes");
const lista_clientes = async (route) => {
    route.get("/servicos_diversos/lista_clientes", (request, replay) => {
        return new lista_clientes_1.lista_clientes_controller().handle(request, replay);
    });
};
exports.lista_clientes = lista_clientes;

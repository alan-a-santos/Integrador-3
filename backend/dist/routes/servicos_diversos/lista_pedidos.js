"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_pedidos = void 0;
const lista_situacao_1 = require("../../controllers/servicos_diversos/lista_situacao");
const lista_pedidos = async (route) => {
    route.get("/servicos_diversos/lista_pedidos", (request, replay) => {
        return new lista_situacao_1.lista_situacao_controller().handle(request, replay);
    });
};
exports.lista_pedidos = lista_pedidos;

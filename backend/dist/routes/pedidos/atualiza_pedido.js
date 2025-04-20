"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualiza_pedido = void 0;
const atualizar_pedido_1 = require("../../controllers/pedidos/atualizar_pedido");
const atualiza_pedido = async (route) => {
    route.post("/pedidos/atualiza", (request, replay) => {
        return new atualizar_pedido_1.atualiza_pedido_controller().handle(request, replay);
    });
};
exports.atualiza_pedido = atualiza_pedido;

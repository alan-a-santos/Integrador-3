"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedido_finalizado = void 0;
const pedido_finalizado_1 = require("../../controllers/pedidos/pedido_finalizado");
const pedido_finalizado = async (route) => {
    route.post("/pedidos/finalizados", (request, replay) => {
        return new pedido_finalizado_1.pedido_finalizado_controller().handle(request, replay);
    });
};
exports.pedido_finalizado = pedido_finalizado;

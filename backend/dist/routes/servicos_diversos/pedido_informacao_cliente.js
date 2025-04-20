"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedido_informacao_cliente = void 0;
const pedido_informacao_cliente_1 = require("../../controllers/servicos_diversos/pedido_informacao_cliente");
const pedido_informacao_cliente = async (route) => {
    route.post("/servicos_diversos/pedido_informacao_cliente", (request, replay) => {
        return new pedido_informacao_cliente_1.pedido_informacao_cliente_controller().handle(request, replay);
    });
};
exports.pedido_informacao_cliente = pedido_informacao_cliente;

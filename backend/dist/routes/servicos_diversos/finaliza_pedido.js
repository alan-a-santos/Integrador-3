"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finailza_pedido = void 0;
const finaliza_pedido_1 = require("../../controllers/servicos_diversos/finaliza_pedido");
const finailza_pedido = async (route) => {
    route.post("/servicos_diversos/finailza_pedido", (request, replay) => {
        return new finaliza_pedido_1.finaliza_pedido_controller().handle(request, replay);
    });
};
exports.finailza_pedido = finailza_pedido;

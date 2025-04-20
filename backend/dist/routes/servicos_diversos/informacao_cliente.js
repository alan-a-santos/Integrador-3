"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.informacao_cliente = void 0;
const informacao_cliente_1 = require("../../controllers/servicos_diversos/informacao_cliente");
const informacao_cliente = async (route) => {
    route.post("/servicos_diversos/informacao_cliente", (request, replay) => {
        return new informacao_cliente_1.informacao_cliente_controller().handle(request, replay);
    });
};
exports.informacao_cliente = informacao_cliente;

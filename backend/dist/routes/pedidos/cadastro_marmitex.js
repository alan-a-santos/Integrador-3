"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastro_marmitex = void 0;
const cadastro_marmitex_1 = require("../../controllers/pedidos/cadastro_marmitex");
const cadastro_marmitex = async (route) => {
    route.post("/pedidos/cadastro_marmitex", (request, replay) => {
        return new cadastro_marmitex_1.pedido_marmitex_controller().handle(request, replay);
    });
};
exports.cadastro_marmitex = cadastro_marmitex;

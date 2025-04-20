"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.painel = void 0;
const painel_1 = require("../../controllers/pedidos/painel");
const painel = async (route) => {
    route.post("/pedidos/painel", (request, replay) => {
        return new painel_1.painel_controller().handle(request, replay);
    });
};
exports.painel = painel;

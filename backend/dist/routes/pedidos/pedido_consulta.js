"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedico_consulta = void 0;
const pedido_consulta_1 = require("../../controllers/pedidos/pedido_consulta");
const pedico_consulta = async (route) => {
    route.post("/pedidos/consulta", (request, replay) => {
        return new pedido_consulta_1.pedido_consulta_controller().handle(request, replay);
    });
};
exports.pedico_consulta = pedico_consulta;

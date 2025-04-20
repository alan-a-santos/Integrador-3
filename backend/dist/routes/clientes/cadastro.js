"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastro = void 0;
const cadastro_1 = require("../../controllers/clientes/cadastro");
const cadastro = async (route) => {
    route.post("/clientes/cadastro", (request, replay) => {
        return new cadastro_1.cadastro_controller().handle(request, replay);
    });
};
exports.cadastro = cadastro;

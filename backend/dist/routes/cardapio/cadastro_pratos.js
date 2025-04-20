"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastro_pratos = void 0;
const cadastro_pratos_1 = require("../../controllers/cardapio/cadastro_pratos");
const cadastro_pratos = async (route) => {
    route.post("/cardapio/cadastro_cardapio", (request, replay) => {
        return new cadastro_pratos_1.cadastro_pratos_controller().handle(request, replay);
    });
};
exports.cadastro_pratos = cadastro_pratos;

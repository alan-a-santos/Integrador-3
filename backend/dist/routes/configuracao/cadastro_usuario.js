"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastro_usuario = void 0;
const cadastro_usuario_1 = require("../../controllers/configuracao/cadastro_usuario");
const cadastro_usuario = async (route) => {
    route.post("/configuracao/novo_usuario", (request, replay) => {
        return new cadastro_usuario_1.cadastro_usuario_controller().handle(request, replay);
    });
};
exports.cadastro_usuario = cadastro_usuario;

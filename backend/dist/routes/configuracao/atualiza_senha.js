"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizar_senha = void 0;
const atualiza_senha_1 = require("../../controllers/configuracao/atualiza_senha");
const atualizar_senha = async (route) => {
    route.put("/configuracao/atualiza_senha", (request, replay) => {
        return new atualiza_senha_1.atualizar_senha_controller().handle(request, replay);
    });
};
exports.atualizar_senha = atualizar_senha;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizar_senha_controller = void 0;
const atualizar_senha_1 = require("../../services/configuracao/atualizar_senha");
class atualizar_senha_controller {
    async handle(request, replay) {
        const { usuario, senha } = request.body;
        const novo = new atualizar_senha_1.atualizar_senha();
        const user = await novo.execute({ senha, usuario });
        replay.send(user);
    }
}
exports.atualizar_senha_controller = atualizar_senha_controller;

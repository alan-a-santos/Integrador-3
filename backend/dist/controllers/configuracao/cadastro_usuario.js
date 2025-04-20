"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastro_usuario_controller = void 0;
const novo_usuario_1 = require("../../services/configuracao/novo_usuario");
class cadastro_usuario_controller {
    async handle(request, replay) {
        const { usuario, senha } = request.body;
        const novo = new novo_usuario_1.novo_usuario();
        const user = await novo.execute({ usuario, senha });
        replay.send(user);
    }
}
exports.cadastro_usuario_controller = cadastro_usuario_controller;

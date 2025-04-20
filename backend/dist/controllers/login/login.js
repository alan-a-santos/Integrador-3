"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login_controller = void 0;
const login_1 = require("../../services/login/login");
class login_controller {
    async handle(request, reply) {
        const { usuario, senha } = request.body;
        const usuario_logado = new login_1.login_usuario();
        const logado = await usuario_logado.execute({ usuario, senha });
        reply.send(logado);
    }
}
exports.login_controller = login_controller;

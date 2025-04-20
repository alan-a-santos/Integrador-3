"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclusao_controller = void 0;
const exclusao_1 = require("../../services/clientes/exclusao");
class exclusao_controller {
    async handle(request, replay) {
        const { id } = request.body;
        const operacao = new exclusao_1.exclusao_clientes();
        const status = await operacao.execute(id);
        replay.send(status);
    }
}
exports.exclusao_controller = exclusao_controller;

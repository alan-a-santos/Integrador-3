"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastro_pratos_controller = void 0;
const cadastro_cardapio_1 = require("../../services/cardapio/cadastro_cardapio");
class cadastro_pratos_controller {
    async handle(request, replay) {
        const { segmento, categoria, nome_prato } = request.body;
        const cadastro = new cadastro_cardapio_1.cadastro_cardapio();
        const prato = await cadastro.execute({ segmento, categoria, nome_prato });
        replay.send(prato);
    }
}
exports.cadastro_pratos_controller = cadastro_pratos_controller;

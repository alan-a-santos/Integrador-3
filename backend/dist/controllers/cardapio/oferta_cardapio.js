"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oferta_cardapio_controller = void 0;
const oferta_cardapio_1 = require("../../services/cardapio/oferta_cardapio");
class oferta_cardapio_controller {
    async handle(request, replay) {
        const { segmento, categoria, nome_prato, valor, data } = request.body;
        const oferta = new oferta_cardapio_1.oferta_cardapio();
        const ofertado = await oferta.execute({ segmento, categoria, nome_prato, valor, data });
        replay.send(ofertado);
    }
}
exports.oferta_cardapio_controller = oferta_cardapio_controller;

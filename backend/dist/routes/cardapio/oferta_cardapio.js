"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oferta_cardapio = void 0;
const oferta_cardapio_1 = require("../../controllers/cardapio/oferta_cardapio");
const oferta_cardapio = async (route) => {
    route.post('/cardapio/oferta_cardapio', (request, replay) => {
        return new oferta_cardapio_1.oferta_cardapio_controller().handle(request, replay);
    });
};
exports.oferta_cardapio = oferta_cardapio;

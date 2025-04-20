"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardapio_routes = void 0;
const server_1 = require("../../server");
const cadastro_pratos_1 = require("./cadastro_pratos");
const oferta_cardapio_1 = require("./oferta_cardapio");
const cardapio_routes = async () => {
    server_1.server.register(cadastro_pratos_1.cadastro_pratos);
    server_1.server.register(oferta_cardapio_1.oferta_cardapio);
};
exports.cardapio_routes = cardapio_routes;

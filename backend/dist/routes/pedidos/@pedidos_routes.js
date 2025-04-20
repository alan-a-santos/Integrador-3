"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidos_routes = void 0;
const server_1 = require("../../server");
const atualiza_pedido_1 = require("./atualiza_pedido");
const cadastro_marmitex_1 = require("./cadastro_marmitex");
const painel_1 = require("./painel");
const pedido_consulta_1 = require("./pedido_consulta");
const pedido_finalizado_1 = require("./pedido_finalizado");
const pedidos_routes = async () => {
    server_1.server.register(cadastro_marmitex_1.cadastro_marmitex);
    server_1.server.register(painel_1.painel);
    server_1.server.register(atualiza_pedido_1.atualiza_pedido);
    server_1.server.register(pedido_finalizado_1.pedido_finalizado);
    server_1.server.register(pedido_consulta_1.pedico_consulta);
};
exports.pedidos_routes = pedidos_routes;

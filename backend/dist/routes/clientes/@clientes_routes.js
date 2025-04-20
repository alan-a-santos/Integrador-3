"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientes_routes = void 0;
const server_1 = require("../../server");
const atualiza_1 = require("./atualiza");
const cadastro_1 = require("./cadastro");
const exclusao_1 = require("./exclusao");
const clientes_routes = async () => {
    server_1.server.register(cadastro_1.cadastro);
    server_1.server.register(exclusao_1.exclusao);
    server_1.server.register(atualiza_1.atualiza);
};
exports.clientes_routes = clientes_routes;

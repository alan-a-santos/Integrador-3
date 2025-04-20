"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuracao_routes = void 0;
const cadastro_usuario_1 = require("./cadastro_usuario");
const server_1 = require("../../server");
const atualiza_senha_1 = require("./atualiza_senha");
const configuracao_routes = async () => {
    server_1.server.register(cadastro_usuario_1.cadastro_usuario);
    server_1.server.register(atualiza_senha_1.atualizar_senha);
};
exports.configuracao_routes = configuracao_routes;

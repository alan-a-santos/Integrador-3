"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const _cardapio_routes_1 = require("./routes/cardapio/@cardapio_routes");
const _clientes_routes_1 = require("./routes/clientes/@clientes_routes");
const _configuracao_routes_1 = require("./routes/configuracao/@configuracao_routes");
const _login_routes_1 = require("./routes/login/@login_routes");
const _pedidos_routes_1 = require("./routes/pedidos/@pedidos_routes");
const _servicos_diversos_routes_1 = require("./routes/servicos_diversos/@servicos_diversos_routes");
const server_1 = require("./server");
const routes = async () => {
    server_1.server.register(_login_routes_1.login_routes);
    server_1.server.register(_configuracao_routes_1.configuracao_routes);
    server_1.server.register(_clientes_routes_1.clientes_routes);
    server_1.server.register(_cardapio_routes_1.cardapio_routes);
    server_1.server.register(_pedidos_routes_1.pedidos_routes);
    server_1.server.register(_servicos_diversos_routes_1.servicos_diversos_routes);
};
exports.routes = routes;

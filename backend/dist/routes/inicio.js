"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inicio = inicio;
const server_1 = require("../server");
async function inicio(fastify) {
    server_1.server.get('/', async (request, reply) => {
        reply.send({ message: 'Servidor funcionando corretamente no arquivo!' });
    });
}

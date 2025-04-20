"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgto_total_controller = void 0;
const pgto_total_1 = require("../../services/servicos/pgto_total");
class pgto_total_controller {
    async handle(request, reply) {
        const { situacao, id_cliente } = request.body;
        const totais = new pgto_total_1.pgto_total();
        const total = await totais.execute({ id_cliente, situacao });
        reply.send(total);
    }
}
exports.pgto_total_controller = pgto_total_controller;

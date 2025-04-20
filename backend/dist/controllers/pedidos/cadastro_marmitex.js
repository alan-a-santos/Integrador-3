"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedido_marmitex_controller = void 0;
const cadastro_marmitex_1 = require("../../services/pedidos/cadastro_marmitex");
class pedido_marmitex_controller {
    async handle(request, reply) {
        const { id_cliente, segmento, pedido, observacao, valor, dia, situacao, situacaof } = request.body;
        const solicita = new cadastro_marmitex_1.pedido_marmitex();
        const solicitado = await solicita.execute({ id_cliente, segmento, pedido, observacao, valor, dia, situacao, receber: {
                id_cliente, segmento, dia, valor, situacaof
            }
        });
        reply.send(solicitado);
    }
}
exports.pedido_marmitex_controller = pedido_marmitex_controller;

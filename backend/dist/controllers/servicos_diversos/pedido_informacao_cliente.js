"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedido_informacao_cliente_controller = void 0;
const pedido_informacao_clientes_1 = require("../../services/servicos/pedido_informacao_clientes");
class pedido_informacao_cliente_controller {
    async handle(request, reply) {
        const { nome } = request.body;
        const clientes = new pedido_informacao_clientes_1.pedido_informacao_cliente();
        try {
            const cliente = await clientes.execute(nome);
            if (!cliente) {
                // Retorna uma mensagem se o cliente não for encontrado
                reply.status(404).send({ mensagem: "Cliente não encontrado" });
            }
            else {
                // Retorna as informações do cliente
                reply.send(cliente);
            }
        }
        catch (error) {
            reply.status(500).send({ mensagem: "Erro ao buscar informações do cliente" });
        }
    }
}
exports.pedido_informacao_cliente_controller = pedido_informacao_cliente_controller;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.informacao_cliente_controller = void 0;
const informacao_clientes_1 = require("../../services/servicos/informacao_clientes");
class informacao_cliente_controller {
    async handle(request, reply) {
        const { nome } = request.body;
        const clientes = new informacao_clientes_1.informacao_cliente();
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
exports.informacao_cliente_controller = informacao_cliente_controller;

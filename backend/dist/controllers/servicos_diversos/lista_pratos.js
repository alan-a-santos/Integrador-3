"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lista_porcoes_controller = void 0;
const lista_pratos_1 = require("../../services/servicos/lista_pratos");
class lista_porcoes_controller {
    async handle(request, reply) {
        const { categoria, segmento } = request.body;
        const porcoes = new lista_pratos_1.lista_porcoes();
        try {
            const porcao = await porcoes.execute(categoria, segmento);
            if (!porcao) {
                // Retorna uma mensagem se o cliente não for encontrado
                reply.status(404).send({ mensagem: "Cliente não encontrado" });
            }
            else {
                // Retorna as informações do cliente
                reply.send(porcao);
            }
        }
        catch (error) {
            reply.status(500).send({ mensagem: "Erro ao buscar informações do cliente" });
        }
    }
}
exports.lista_porcoes_controller = lista_porcoes_controller;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualiza_controller = void 0;
const atualiza_1 = require("../../services/clientes/atualiza");
class atualiza_controller {
    async handle(request, reply) {
        try {
            const { nome, nascimento, telefone, tipo, cpf, email, cadastro, cep, rua, numero, complemento, bairro, cidade, observacao, id } = request.body;
            // Instancia o serviço de atualização e passa os dados para ele
            const registrado = new atualiza_1.atualiza_cadastro();
            const registro = await registrado.execute({
                id, // Passa o ID do cliente para o service
                nome,
                nascimento,
                tipo,
                cpf,
                cadastro,
                observacao,
                contatos: {
                    email,
                    telefone
                },
                endereco: {
                    cep,
                    rua,
                    numero,
                    complemento,
                    bairro,
                    cidade
                }
            });
            // Envia o resultado da atualização de volta para o cliente
            reply.status(200).send({ message: 'Cliente atualizado com sucesso', registro });
        }
        catch (error) {
            console.error("Erro ao atualizar cliente:", error);
            reply.status(500).send({ error: 'Erro ao atualizar cliente' });
        }
    }
}
exports.atualiza_controller = atualiza_controller;

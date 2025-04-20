"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cadastro_controller = void 0;
const cadastro_1 = require("../../services/clientes/cadastro");
class cadastro_controller {
    async handle(request, replay) {
        const { nome, nascimento, tipo, cpf, cadastro, observacao, email, telefone, cep, rua, numero, complemento, bairro, cidade } = request.body;
        const registrado = new cadastro_1.registro_usuario();
        const registro = await registrado.execute({ nome,
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
            } });
        replay.send(registro);
    }
}
exports.cadastro_controller = cadastro_controller;

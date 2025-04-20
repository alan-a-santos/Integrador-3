"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.informacao_cliente = void 0;
const conexao_1 = require("../../bd_config/conexao");
class informacao_cliente {
    async execute(nome) {
        // Realiza um JOIN para combinar as tabelas clientes, endereco e contato
        const query = `
            SELECT 
                clientes.nome, clientes.id, clientes.nascimento, clientes.tipo, clientes.cpf, clientes.cadastro, clientes.observacao,
                endereco.cep, endereco.rua, endereco.numero, endereco.complemento, endereco.bairro, endereco.cidade,
                contatos.email, contatos.telefone
            FROM 
                clientes
            LEFT JOIN endereco ON clientes.id = endereco.id_cliente
            LEFT JOIN contatos ON clientes.id = contatos.id_cliente
            WHERE 
                clientes.nome = ?
        `;
        const [clienteDetalhes] = await conexao_1.conexao.execute(query, [nome]);
        return clienteDetalhes;
    }
}
exports.informacao_cliente = informacao_cliente;

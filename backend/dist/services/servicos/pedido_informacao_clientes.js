"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedido_informacao_cliente = void 0;
const conexao_1 = require("../../bd_config/conexao");
class pedido_informacao_cliente {
    async execute(nome) {
        // Realiza um JOIN para combinar as tabelas clientes, endereco e contato
        const query = `
            SELECT 
                clientes.nome_cliente, clientes.data_nascimento, clientes.tipo_pessoa, clientes.observacao,
                endereco.cep, endereco.rua, endereco.numero, endereco.complemento, endereco.bairro, endereco.cidade,
                 contatos.telefone
            FROM 
                clientes
            LEFT JOIN endereco ON clientes.id_cliente = endereco.id_cliente
            LEFT JOIN contatos ON clientes.id_cliente = contatos.id_cliente
            WHERE 
                clientes.nome_cliente = ?
        `;
        const [clienteDetalhes] = await conexao_1.conexao.execute(query, [nome]);
        return clienteDetalhes;
    }
}
exports.pedido_informacao_cliente = pedido_informacao_cliente;

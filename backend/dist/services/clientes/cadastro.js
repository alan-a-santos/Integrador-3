"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registro_usuario = void 0;
const conexao_1 = require("../../bd_config/conexao");
class registro_usuario {
    async execute({ nome, nascimento, tipo, cpf, cadastro, observacao, contatos, endereco }) {
        const query_pesq = "SELECT * FROM clientes WHERE nome =? ";
        const query_cliente = 'INSERT INTO clientes (nome, nascimento, tipo , cpf, cadastro, observacao) VALUES (?, ?, ?, ?, ?, ? )';
        const query_endereco = 'INSERT INTO endereco (id_cliente, cep, rua, numero, complemento, bairro, cidade) VALUES (?, ?, ?, ?, ?, ?, ? )';
        const query_contato = 'INSERT INTO contatos (id_cliente,email, telefone) VALUES (?, ?,?  )';
        const [resultado_pesq] = await conexao_1.conexao.execute(query_pesq, [nome]);
        const pesq = resultado_pesq[0];
        if (pesq) {
            return { mensagem: "Cliente já cadastrado" };
        }
        const conn = await conexao_1.conexao.getConnection();
        try {
            conn.beginTransaction();
            const [resultado_cliente] = await conn.execute(query_cliente, [nome, nascimento, tipo, cpf, cadastro, observacao]);
            const clienteId = resultado_cliente.insertId;
            await conn.execute(query_endereco, [clienteId, endereco.cep, endereco.rua, endereco.numero, endereco.complemento, endereco.bairro, endereco.cidade]);
            await conn.execute(query_contato, [clienteId, contatos.email, contatos.telefone]);
            await conn.commit();
            return { mensagem: 'Cliente, endereço e contatos cadastrados com sucesso!' };
        }
        catch (error) {
            await conn.rollback();
            console.error('Erro ao cadastrar cliente, endereço ou contatos:', error);
            throw new Error('Erro no cadastro completo');
        }
        finally {
            conn.release();
        }
    }
}
exports.registro_usuario = registro_usuario;

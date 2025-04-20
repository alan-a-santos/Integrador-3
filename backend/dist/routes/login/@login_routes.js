"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login_routes = void 0;
const login_1 = require("./login");
const server_1 = require("../../server");
const login_routes = async () => {
    server_1.server.register(login_1.login);
};
exports.login_routes = login_routes;
// class registro_usuario{
//     async execute({nome, nascimento, celular, cpf, email, cadastro,  cep, endereco, numero, complemento, bairro, cidade, observacao}:dados_cadastro){
//          const query= 'INSERT INTO clientes (nome, nascimento, celular,  cpf, email, cadastro, cep, observacao,  endereco, numero, complemento, bairro, cidade) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
//     try {
//         const [result] = await conexao.execute(query, [nome,  nascimento, celular,  cpf,  email, cadastro, cep, observacao,  endereco, numero, complemento, bairro, cidade]);
//         console.log('Cliente cadastrado com sucesso!', result);
//         resposta = "Cliente cadastrado com sucesso"
//   } catch (error) {
//         console.error('Erro ao cadastrar cliente:', error);
//         throw new Error('Erro no cadastro');
//   }
//   return (resposta)
// }
// }

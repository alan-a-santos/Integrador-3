"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("@fastify/cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const static_1 = __importDefault(require("@fastify/static"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env'),
});
const server = (0, fastify_1.default)({ logger: false });
exports.server = server;
// Registrar CORS
server.register(cors_1.default, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});
// Registrar rotas (caso tenha)
server.register(routes_1.routes);
// Servir arquivos estáticos do frontend
server.register(static_1.default, {
    root: path_1.default.join(__dirname, '../../frontend/out'), // Caminho correto para a pasta `out`
    prefix: '/', // Todos os arquivos estáticos estarão disponíveis na raiz
});
// Fallback para index.html (SPA)
server.setNotFoundHandler((req, reply) => {
    reply.sendFile('index.html');
});
const port = Number(process.env.PORT) || 8080;
const start = async () => {
    try {
        await server.listen({ port, host: '0.0.0.0' });
        console.log('Servidor conectado na porta', port);
    }
    catch (err) {
        server.log.error('Erro ao iniciar o servidor:', err);
        process.exit(1);
    }
};
start();
// Iniciar o servidor
// import fastify from "fastify";
// import { routes } from "./routes";
// import cors from "@fastify/cors";
// import dotenv from "dotenv";
// import path from 'path';
// import fastifyStatic from "@fastify/static";
// dotenv.config({
//   path: path.resolve(__dirname, '../.env'),
// });
// export const server = fastify({ logger: false})
// server.register(cors, {
//     origin: '*'  , // Permitir todas as origens. Ajuste conforme necessário.
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   });
// server.register(routes)
// // registrar a pasta do frontend
// server.register(fastifyStatic, {
//   root: path.join(__dirname, '../../frontend/out'), // caminho relativo à raiz do projeto
//   prefix: '/', // todos os arquivos estáticos estarão disponíveis no /
// });
// // fallback para index.html (SPA)
// server.setNotFoundHandler((req, reply) => {
//   reply.sendFile('index.html');
// });
// const port = Number(process.env.PORT) ||  8080; // Defina a porta padrão como 8080 se não estiver definida no .env
// const start = async (): Promise<void> => {
//     try {
//       await server.listen({ port , host: '0.0.0.0' });
//       console.log('Servidor Conectado na porta', port); // Log de sucesso
//     } catch (err) {
//       server.log.error('Erro ao iniciar o servidor:', err); 
//       process.exit(1);
//     }
//   };
//   console.log('Servindo arquivos estáticos de:', path.join(__dirname, '../../frontend/out'));
// start()

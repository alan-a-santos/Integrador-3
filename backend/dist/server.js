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
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env'),
});
exports.server = (0, fastify_1.default)({ logger: false });
exports.server.register(cors_1.default, {
    origin: '*', // Permitir todas as origens. Ajuste conforme necessário.
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});
exports.server.register(routes_1.routes);
const port = Number(process.env.PORT) || 3001; // Defina a porta padrão como 3001 se não estiver definida no .env
const start = async () => {
    try {
        await exports.server.listen({ port, host: '0.0.0.0' });
        console.log('Servidor Conectado'); // Log de sucesso
    }
    catch (err) {
        exports.server.log.error('Erro ao iniciar o servidor:', err);
        process.exit(1);
    }
};
start();

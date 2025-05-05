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
server.setNotFoundHandler((req, reply) => {
    reply.type('text/html').sendFile('index.html');
});
const port = Number(process.env.PORT) || 8080;
// const frontendPath = path.join(__dirname, '../../frontend/out');
// if (!fs.existsSync(frontendPath)) {
//   console.error('❌ Pasta frontend/out não encontrada em:', frontendPath);
// } else {
//   console.log('✅ Pasta frontend/out encontrada em:', frontendPath);
// }
const start = async () => {
    try {
        await server.listen({ port, host: '0.0.0.0' });
        console.log('✅ Servidor conectado na porta', port);
    }
    catch (err) {
        server.log.error('Erro ao iniciar o servidor:', err);
        process.exit(1);
    }
};
start();

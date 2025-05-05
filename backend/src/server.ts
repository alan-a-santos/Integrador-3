import fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import path from 'path';
import fastifyStatic from '@fastify/static';
import fs from 'fs';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const server = fastify({ logger: false });

// Registrar CORS
server.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
});

// Registrar rotas (caso tenha)
server.register(routes);

// Servir arquivos estáticos do frontend
server.register(fastifyStatic, {
  root: path.join(__dirname, '../../frontend/out'),  // Caminho correto para a pasta `out`
  prefix: '/',  // Todos os arquivos estáticos estarão disponíveis na raiz
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

const start = async (): Promise<void> => {
  try {
    await server.listen({ port, host: '0.0.0.0' });
    console.log('✅ Servidor conectado na porta', port);
  } catch (err) {
    server.log.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
};

// Exportar o servidor
export { server };

start();

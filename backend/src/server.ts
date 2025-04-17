import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import path from "path";
import dotenv from "dotenv";

dotenv.config()


export const server = fastify({ logger: false})

server.register(cors, {
    origin: '*'  , // Permitir todas as origens. Ajuste conforme necessário.
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  });

  // server.register(fastifyStatic, {
  //   root: path.join(process.cwd(), '../frontend/out'),
  //   //root: path.join(process.cwd(), 'frontend', 'out'),
  //   prefix: '/', // Serve os arquivos na raiz
  // });

  // server.get('/', (request, reply) => {
  //   const indexPath = path.join(process.cwd(), '../frontend/out/index.html');
  //   if (fs.existsSync(indexPath)) {
  //     reply.sendFile('index.html');
  //   } else {
  //     reply.code(404).send('index.html não encontrado');
  //   }
  // });
  // server.get('/', (request, reply) => {
  //   reply.sendFile('index.html');
  // });

server.register(routes)

const port = Number(process.env.PORT) || 3001; // Defina a porta padrão como 3001 se não estiver definida no .env

const start = async (): Promise<void> => {
    try {
     
      await server.listen({ port , host: '0.0.0.0' });
      console.log('Servidor Conectado');
    } catch (err) {
      server.log.error('Erro ao iniciar o servidor:', err); 
      process.exit(1);
    }
  };

start()
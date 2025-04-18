import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});


export const server = fastify({ logger: false})

server.register(cors, {
    origin: '*'  , // Permitir todas as origens. Ajuste conforme necessário.
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  });

server.register(routes)

const port = Number(process.env.PORT) || 3001; // Defina a porta padrão como 3001 se não estiver definida no .env

const start = async (): Promise<void> => {
    try {
     
      await server.listen({ port , host: '0.0.0.0' });
      console.log('Servidor Conectado'); // Log de sucesso
    } catch (err) {
      server.log.error('Erro ao iniciar o servidor:', err); 
      process.exit(1);
    }
  };

start()
import fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";
import dotenv from "dotenv";
dotenv.config()

export const server = fastify({ logger: false})

server.register(cors, {
    origin: '*'  // Permitir todas as origens. Ajuste conforme necessário.
  });

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
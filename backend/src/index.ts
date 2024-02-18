import Fastify from "fastify";
import App from "./app";
import CORS from "@fastify/cors";

async function start(): Promise<void> {
  const fastify = Fastify({
    logger: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  await fastify.register(App);
  await fastify.register(CORS, {
    origin: ["http://localhost:3000"],
  });

  await fastify.listen({
    host: "0.0.0.0",
    port: 8080,
  });
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});

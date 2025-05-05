import Fastify from "fastify";
import App from "./app";

const PORT = process.env.PORT ? Number.parseInt(process.env.PORT) : 9000;

async function start(): Promise<void> {
  const fastify = Fastify({
    logger: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  await fastify.register(App);

  fastify.listen({
    host: "0.0.0.0",
    port: PORT,
  });
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});

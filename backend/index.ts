import fastify from "fastify";

const server = fastify();

server.get("/ping", async (_request, _reply) => "pong\n");

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exitCode = 1;
  }
  console.warn(`Server listening at ${address}`);
});

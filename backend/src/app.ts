import { type FastifyInstance, type FastifyPluginOptions } from "fastify";
import Sensible from "@fastify/sensible";
import { db } from "./db";

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
) {
  await fastify.register(Sensible);

  // GET all endpoints, shows available API endpoints
  fastify.get("/api/all_endpoints", async function myHandler(request, reply) {
    const allEndpoints = await db("all_endpoints").select("*");
    reply.send({
      message: "All available API endpoints",
      success: true,
      data: allEndpoints,
    });
  });

  fastify.get("/api/socials", async function getSocials(request, reply) {
    const socials = await db("socials").select("*");
    reply.send({
      message: "Socials listed successfully",
      success: true,
      data: socials,
    });
  });

  fastify.get("/api/users", async function handler(request, reply) {
    const users = await db("users").select("*");

    reply.send({
      message: "Users listed successfully",
      success: true,
      data: users,
    });
  });
}

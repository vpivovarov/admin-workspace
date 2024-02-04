"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)();
server.get("/ping", async (_request, _reply) => "pong\n");
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exitCode = 1;
    }
    console.warn(`Server listening at ${address}`);
});

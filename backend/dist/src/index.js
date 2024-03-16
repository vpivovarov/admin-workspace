"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT ? Number.parseInt(process.env.PORT) : 8080;
async function start() {
    const fastify = (0, fastify_1.default)({
        logger: true,
    });
    await fastify.register(app_1.default);
    fastify.listen({
        host: "localhost",
        port: PORT,
    });
}
start().catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map
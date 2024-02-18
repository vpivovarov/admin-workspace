"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sensible_1 = __importDefault(require("@fastify/sensible"));
const favMovies = [];
async function default_1(fastify, opts) {
    await fastify.register(sensible_1.default);
    fastify.route({
        url: "/movies",
        method: "GET",
        handler: function myHandler(request, reply) {
            reply.send({
                message: "Movies listed successfully",
                success: true,
                data: favMovies,
            });
        },
    });
    fastify.get("/movies/:movieGenre", function getMovie(request, reply) {
        const requestParams = request.params;
        const searchingFor = requestParams.movieGenre;
        const result = favMovies.filter((movie) => movie.genre === searchingFor);
        if (result) {
            return {
                message: "Movie info found succesfully",
                success: true,
                data: result,
            };
        }
        else {
            throw fastify.httpErrors.notFound(`Could not find movies with the genre: ${searchingFor}`);
        }
    });
    fastify.route({
        url: "/movies",
        method: "POST",
        handler: function handler(request, reply) {
            const data = request.body;
            if (!data?.title || !data?.description || !data.genre) {
                throw fastify.httpErrors.badRequest("Please ensure all information, title, description and genre are provided");
            }
            favMovies.push({
                title: data.title,
                description: data.description,
                genre: data.genre,
            });
            reply.send({
                message: "Movie added succesfully",
                success: true,
                data: null,
            });
        },
    });
}
exports.default = default_1;
//# sourceMappingURL=app.js.map
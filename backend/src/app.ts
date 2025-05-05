import { type FastifyInstance, type FastifyPluginOptions } from "fastify";
import Sensible from "@fastify/sensible";

// Favmovies interface and variable

interface FavMovies {
  title: string;
  description: string;
  genre: string;
}

/** Our simple database for movies **/
const favMovies: FavMovies[] = [];

export default async function (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
) {
  await fastify.register(Sensible);

  // GET /movies endpoint
  fastify.route({
    url: "/api/movies",
    method: "GET",
    handler: function myHandler(request, reply) {
      reply.send({
        message: "Movies listed successfully",
        success: true,
        data: favMovies,
      });
    },
  });

  fastify.get("/api/movies/:movieGenre", function getMovie(request, reply) {
    const requestParams = request.params as { movieGenre: string };
    const searchingFor = requestParams.movieGenre;
    const result = favMovies.filter((movie) => movie.genre === searchingFor);
    if (result) {
      return {
        message: "Movie info found succesfully",
        success: true,
        data: result,
      };
    } else {
      throw fastify.httpErrors.notFound(
        `Could not find movies with the genre: ${searchingFor}`,
      );
    }
  });

  fastify.route({
    url: "/api/movies",
    method: "POST",
    handler: function handler(request, reply) {
      const data = request.body as FavMovies;
      if (!data?.title || !data?.description || !data.genre) {
        throw fastify.httpErrors.badRequest(
          "Please ensure all information, title, description and genre are provided",
        );
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

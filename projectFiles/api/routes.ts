import { Router } from "https://deno.land/x/oak@v6.3.2/mod.ts";
import { getMovie, getMovies } from "./movies/methods.ts";

export const router = new Router();

// can chain routes
router.get("/hi", (context) => {
  context.response.body = {
    hello: {
      from: {
        the: {
          router: "hi",
        },
      },
    },
  };
})
  .get("/api/movies", async (context) => {
    const movies = await getMovies();
    context.response.body = movies;
  })
  .get("/api/movie/:id", async (context) => {
    const movie = await getMovie(context.params.id);
    context.response.body = movie;
  });

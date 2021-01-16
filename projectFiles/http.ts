import {
  Application,
  Router,
  send,
} from "https://deno.land/x/oak@v6.3.2/mod.ts";
import { getMovie, getMovies } from "./api/movies/methods.ts";

const app = new Application();
const router = new Router();

// can chain routes
router.get("/hi", (ctx) => {
  ctx.response.body = {
    hello: {
      from: {
        the: {
          router: "hi",
        },
      },
    },
  };
})
  .get("/api/movies", async (ctx) => {
    const movies = await getMovies();
    ctx.response.body = movies;
  })
  .get("/api/movie/:id", async (ctx) => {
    const movie = await getMovie(ctx.params.id);
    ctx.response.body = movie;
  });

app.use(router.routes());

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
    index: "index.html",
  });
});

app.use((ctx) => {
  ctx.response.body = "Hello World";
});

await app.listen({ port: 8000 });

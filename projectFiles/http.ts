import {
  Application,
  Router,
  send,
  Status,
} from "https://deno.land/x/oak@v6.3.2/mod.ts";
import { logger } from "./api/middleware/logger.ts";
import { timing } from "./api/middleware/timing.ts";
import { errors } from "./api/middleware/errors.ts";
import { router } from "./api/routes.ts";

const app = new Application();

// * -- middleware -- * //
// don't call function - make reference to it
app.use(logger);
app.use(timing);
app.use(errors);

// * -- set routes -- * //
app.use(router.routes());

// * -- load static files -- * //
app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
    index: "index.html",
  });
});

await app.listen({ port: 8000 });

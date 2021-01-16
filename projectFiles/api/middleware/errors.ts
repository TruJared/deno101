import { Context, send, Status } from "https://deno.land/x/oak@v6.3.2/mod.ts";

export async function errors(context: Context, next: () => Promise<void>) {
  try {
    await next();
  } catch (error) {
    console.error(" -- error -- ", error.status, error);

    if (error.status === Status.NotFound) {
      await send(context, "error.html", {
        root: `${Deno.cwd()}/static`,
      });
    } else {
      context.response.body = { message: "Something bad happened!" };
      throw error;
    }
  }
}

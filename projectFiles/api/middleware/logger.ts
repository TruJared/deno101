import { Context } from "https://deno.land/x/oak@v6.3.2/mod.ts";

export async function logger(context: Context, next: () => Promise<void>) {
  await next();
  const responseTime = context.response.headers.get("X-Response-Time");
  console.log(
    `${context.request.method}: ${context.request.url} - ${responseTime}`,
  );
}

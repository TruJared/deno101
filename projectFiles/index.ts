import { serve } from "https://deno.land/std@0.83.0/http/server.ts";

const s = serve({ port: 1337 });

console.log("Starting on port 1337");

for await (const req of s) {
  req.respond({
    body: "<h1>Hello Jared</h1>",
  });
}

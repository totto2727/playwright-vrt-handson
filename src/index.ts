import { Hono } from "hono";
import { serve, type HttpBindings } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();

app.use("/*", serveStatic({ root: "./static" }));

console.log("open: http://localhost:3000");

serve(app);

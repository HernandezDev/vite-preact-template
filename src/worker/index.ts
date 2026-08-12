import { Hono } from "hono";
import type { AppEnv } from "./types";

const app = new Hono<AppEnv>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;

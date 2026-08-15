import { Hono } from "hono";
import type { AppEnv } from "./types";

const app = new Hono<AppEnv>();
app.get("/api/", (c) => {
	return c.json({ name: "Cloudflare" });
});

export default app;

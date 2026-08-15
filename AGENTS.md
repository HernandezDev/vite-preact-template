# Cloudflare Workers

STOP. Your knowledge of Cloudflare Workers APIs and limits may be outdated. Always retrieve current documentation before any Workers, KV, R2, D1, Durable Objects, Queues, Vectorize, AI, or Agents SDK task.

## Docs

- https://developers.cloudflare.com/workers/
- MCP: `https://docs.mcp.cloudflare.com/mcp`

For all limits and quotas, retrieve from the product's `/platform/limits/` page. eg. `/workers/platform/limits`

## Commands

| Command | Purpose |
|---------|---------|
| `pnpm exec wrangler dev` | Local development |
| `pnpm exec wrangler deploy` | Deploy to Cloudflare |
| `pnpm exec wrangler tail` | Monitor live production logs |
| `pnpm run cf-typegen` | Generate infrastructure types |

> **CRITICAL ARCHITECTURE NOTE:** 
> 1. **Package Manager:** Do NOT use `npx` or `npm`. This workspace strictly enforces `pnpm`. Use `pnpm run` or `pnpm exec`.
> 2. **Type Generation:** Do NOT type Cloudflare bindings manually in Hono's `AppEnv`. Whenever you modify infrastructure resources in `wrangler.json`, you MUST instruct the user to run `pnpm run cf-typegen` (which executes `wrangler types`). 
> 3. **Type Resolution:** Assume infrastructure bindings are passively resolved via `worker-configuration.d.ts` in the project root, combined with `@cloudflare/workers-types` via the `tsconfig.json` compiler options.

## Node.js Compatibility

https://developers.cloudflare.com/workers/runtime-apis/nodejs/

## Errors

- **Error 1102** (CPU/Memory exceeded): Retrieve limits from `/workers/platform/limits/`
- **All errors**: https://developers.cloudflare.com/workers/observability/errors/

## Product Docs

Retrieve API references and limits from:
`/kv/` · `/r2/` · `/d1/` · `/durable-objects/` · `/queues/` · `/vectorize/` · `/workers-ai/` · `/agents/`

## Best Practices (conditional)

If the application uses Durable Objects or Workflows, refer to the relevant best practices:

- Durable Objects: https://developers.cloudflare.com/durable-objects/best-practices/rules-of-durable-objects/
- Workflows: https://developers.cloudflare.com/workflows/build/rules-of-workflows/
# Preact + Signals + Vite + Hono + Cloudflare Workers

> **Architectural Note:** This is a highly optimized fork of the [official Cloudflare React template](https://github.com/cloudflare/templates/tree/main/vite-react-template). The React engine has been entirely replaced with Preact and `@preact/signals` to eliminate Virtual DOM diffing overhead and maximize Edge performance.

<!-- dash-content-start -->

🚀 Supercharge your web development with an ultra-lightweight stack:

- [**Preact**](https://preactjs.com/) - A fast 3kB alternative to React with the same modern API.
- [**Preact Signals**](https://preactjs.com/guide/v10/signals/) - Granular state management for O(1) direct DOM mutations.
- [**Vite**](https://vite.dev/) - Lightning-fast build tooling and development server.
- [**Hono**](https://hono.dev/) - Ultralight, modern backend framework designed for the Edge.
- [**Cloudflare Workers**](https://developers.cloudflare.com/workers/) - Edge computing platform for global deployment.
- [**Biome**](https://biomejs.dev/) - Fast formatter and linter (replacing ESLint/Prettier).

### ✨ Key Upgrades from the Original Template

- 🔥 **Payload Reduction:** Client bundle size reduced by ~80% (down to ~10kB gzipped).
- 📦 **Reactive Architecture:** Full integration of Signals, bypassing standard React hooks (`useState`/`useEffect`) for core logic.
- 🛠️ **Biome Integration:** Sub-millisecond code formatting and linting.

<!-- dash-content-end -->

## Getting Started

⚠️ **Strict Requirement:** This project uses `pnpm`. Do not use `npm` or `yarn` as it will break the workspace security policies.

```bash
# 1. Clone the repository
git clone [https://github.com/](https://github.com/)[YOUR_USERNAME/YOUR_REPO].git
cd [YOUR_REPO]

# 2. Install dependencies safely
pnpm install --frozen-lockfile
```

## Development

Start the development servers (Vite for Preact and Wrangler/Miniflare for Hono) simultaneously:

```bash
pnpm run dev
```

Your application will be available at [http://localhost:5173](http://localhost:5173).

## Code Quality

This template uses Biome for strict code quality enforcement:

```bash
# Check formatting and linting
pnpm run lint

# Apply safe automatic fixes
pnpm run write
```

## Production & Deployment

Build your project for production:

```bash
pnpm run build
```

Preview your build locally:

```bash
pnpm run preview
```

Deploy your project to Cloudflare's global network:

```bash
pnpm run deploy
```

Monitor your live Worker logs in production:

```bash
pnpm exec wrangler tail
```

## Additional Resources

- [Vite Documentation](https://vitejs.dev/guide/)
- [Preact Signals Documentation](https://preactjs.com/guide/v10/signals/)
- [Hono Documentation](https://hono.dev/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Biome Documentation](https://biomejs.dev/)
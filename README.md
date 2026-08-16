# Preact + Signals + Vite + Hono + Cloudflare Workers

> **Nota de arquitectura:** Este es un fork del [template oficial de React de Cloudflare](https://github.com/cloudflare/templates/tree/main/vite-react-template), con React reemplazado por Preact y `@preact/signals`. El motor de renderizado pasa a ser mucho más liviano, y las signals permiten que fragmentos de UI directamente ligados a un dato se actualicen sin pasar por la reconciliación de componentes — el resto del árbol sigue el ciclo de diffing normal de Preact, más liviano que el de React.

🚀 Stack ultra liviano para desarrollo web:

- [**Preact**](https://preactjs.com/) - Alternativa a React de ~4kB gzipped, con la misma API moderna.
- [**Preact Signals**](https://preactjs.com/guide/v10/signals/) - Gestión de estado de grano fino, con mutaciones directas al DOM para nodos ligados a una signal.
- [**Vite**](https://vite.dev/) - Build tooling y dev server rápidos.
- [**Hono**](https://hono.dev/) - Framework de backend ultraliviano, pensado para el Edge.
- [**Cloudflare Workers**](https://developers.cloudflare.com/workers/) - Plataforma de cómputo en el edge, deploy global.
- [**Biome**](https://biomejs.dev/) - Formatter y linter rápido (reemplaza ESLint/Prettier).

### ✨ Cambios respecto al template original

- 🔥 **Payload reducido:** bundle de cliente de ~11kB gzipped, frente a los ~130kB de React+ReactDOM.
- 📦 **Arquitectura reactiva:** signals en vez de `useState`/`useEffect` para la lógica de estado central.
- 🛠️ **Biome:** un solo linter/formatter en vez de ESLint+Prettier+plugins separados.

## Empezar

Este proyecto usa `pnpm`. El lockfile (`pnpm-lock.yaml`) está commiteado — usar otro gestor de paquetes puede generar inconsistencias de versiones no probadas en este repo.

```bash
git clone https://github.com/HernandezDev/vite-preact-template.git
cd vite-preact-template
pnpm install --frozen-lockfile
```

## Desarrollo

```bash
pnpm run dev
```

Corre en un solo proceso de Vite (vía `@cloudflare/vite-plugin`), sirviendo tanto el cliente Preact como el backend Hono dentro del runtime real de Cloudflare Workers (workerd, a través de Miniflare) — sin aproximación sobre Node.

Disponible en [http://localhost:5173](http://localhost:5173).

## Calidad de código

```bash
# Chequear formato y lint
pnpm run lint

# Aplicar fixes automáticos seguros
pnpm run write
```

## Producción y deploy

```bash
pnpm run build       # build de producción
pnpm run preview     # preview local del build
pnpm run deploy      # deploy a Cloudflare
pnpm exec wrangler tail   # logs en vivo de producción
```

## Recursos adicionales

- [Documentación de Vite](https://vitejs.dev/guide/)
- [Documentación de Preact Signals](https://preactjs.com/guide/v10/signals/)
- [Documentación de Hono](https://hono.dev/)
- [Documentación de Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Documentación de Biome](https://biomejs.dev/)
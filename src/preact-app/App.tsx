import { useSignal } from "@preact/signals";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

export function App() {
    // Migración a Signals: Mutación granular, cero re-renders del VDOM
    const count = useSignal(0);
    const name = useSignal("unknown");

    const fetchName = async () => {
        const res = await fetch("/api/");
        const data = await res.json() as { name: string };
        name.value = data.name; // Asignación directa a la Signal
    };

    return (
        <>
            <div>
                {/* Preact idiomático: Uso de 'class' en lugar de 'className' */}
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                    <img src={viteLogo} class="logo" alt="Vite logo" />
                </a>
                <a href="https://preactjs.com/" target="_blank" rel="noopener noreferrer">
                    <img src={reactLogo} class="logo preact" alt="Preact logo" />
                </a>
                <a href="https://hono.dev/" target="_blank" rel="noopener noreferrer">
                    <img src={honoLogo} class="logo cloudflare" alt="Hono logo" />
                </a>
                {/* Etiqueta <a> corregida */}
                <a 
                    href="https://workers.cloudflare.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={cloudflareLogo}
                        class="logo cloudflare"
                        alt="Cloudflare logo"
                    />
                </a>
            </div>
            
            <h1>Vite + Preact + Hono + Cloudflare</h1>
            
            <div class="card">
                <button
                    type="button"
                    onClick={() => count.value++} // Mutación O(1)
                    aria-label="increment"
                >
                    count is {count}
                </button>
                <p>
                    Edit <code>src/preact-app/App.tsx</code> and save to test HMR
                </p>
            </div>
            
            <div class="card">
                <button
                    type="button"
                    onClick={fetchName}
                    aria-label="get name"
                >
                    Name from API is: {name}
                </button>
                <p>
                    Edit <code>worker/index.ts</code> to change the name
                </p>
            </div>
            
            <p class="read-the-docs">Click on the logos to learn more</p>
        </>
    );
}
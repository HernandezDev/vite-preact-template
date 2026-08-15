import { render } from "preact";
import "./index.css";
import { App } from "./App.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("No se encontró el elemento #root en index.html");
}

render(<App />, rootElement);
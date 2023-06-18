import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const container = document.getElementById("app");
const isMarkupPresent = container?.hasChildNodes();

const FullApp = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if (isMarkupPresent) {
  hydrateRoot(container!, <FullApp />);
} else {
  const root = createRoot(container!);
  root.render(<FullApp />);
}

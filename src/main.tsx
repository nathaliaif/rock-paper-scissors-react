import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/styles.scss";
import App from "./App";

// Entry-point for React
// Where React actually renders the app

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

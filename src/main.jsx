import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/reset.scss";
import "./styles/main.scss";
import "./styles/colors.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContext, DarkModeRender } from "./context/darkModeContext";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DarkModeRender />
    <App />
  </React.StrictMode>
);

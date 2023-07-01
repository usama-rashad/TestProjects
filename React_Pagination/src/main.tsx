import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import NavbarProvider from "./Contexts/NavbarProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <NavbarProvider>
    <App />
  </NavbarProvider>
  // </React.StrictMode>
);

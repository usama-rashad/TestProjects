import React from "react";
import renderDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root") as HTMLElement;
renderDOM.createRoot(root).render(<App />);

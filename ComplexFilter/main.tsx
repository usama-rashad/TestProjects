import React from "react";
import reactdom from "react-dom/client";
import App from "./src/App";

const root = document.getElementById("root") as HTMLElement;
reactdom.createRoot(root).render(<App />);

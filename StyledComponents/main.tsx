import React from "react";
import reactDom from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
reactDom.createRoot(rootElement).render(<App />);

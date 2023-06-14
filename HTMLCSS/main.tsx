import React from "react";
import reactDom from "react-dom/client";
import App from "./src/App";

const rootItem = document.getElementById("root") as HTMLElement;
reactDom.createRoot(rootItem).render(<App />);

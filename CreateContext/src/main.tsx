import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContext } from "./context/darkModeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DarkModeContext.Provider value={true}>
      <App />
    </DarkModeContext.Provider>
  </React.StrictMode>
);

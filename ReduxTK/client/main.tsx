import React from "react";
import ReactDOM from "react-dom/client";

import { createContext } from "react";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Child from "./Child";
import { DarkModeContext, DarkModeRender } from "./context/darkModeContext";
import "./main.scss";
import Parent from "./Parent";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Parent>
      <Child name="one" />
      <Child name="two" />
      <Child name="three" />
    </Parent>
    <App />
  </React.StrictMode>
);

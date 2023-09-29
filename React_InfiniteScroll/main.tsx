import React from "react";
import reactDOM from "react-dom/client";
import App from "./src/App";
import { Provider } from "react-redux";
import { rootStore } from "./src/store";

const root = document.getElementById("root") as HTMLElement;
reactDOM.createRoot(root).render(
  <Provider store={rootStore}>
    <App />
  </Provider>
);

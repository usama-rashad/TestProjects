import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Redux store
import { Provider } from "react-redux";
import store from "../src/Redux/Store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);

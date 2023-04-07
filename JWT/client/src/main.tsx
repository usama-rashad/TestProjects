import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  { path: "/login", element: <App /> },
  { path: "/home", element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

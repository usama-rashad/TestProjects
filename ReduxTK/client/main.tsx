import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";

import {createContext} from "react";
import App from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
).render(<App />);

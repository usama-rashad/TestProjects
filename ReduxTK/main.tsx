import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App";
import {store} from "./features/reducers/store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
).render(
	<Provider store={store}>
		<App />
	</Provider>
);

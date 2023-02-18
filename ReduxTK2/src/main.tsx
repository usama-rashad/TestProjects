import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {Provider} from "react-redux";
import {mainStore} from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={mainStore}>
			<App />
		</Provider>
	</React.StrictMode>
);

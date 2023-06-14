import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ThemeProvider } from "./ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

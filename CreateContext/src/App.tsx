import { useContext, useEffect, useState } from "react";
import "./App.scss";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {});

  const toggleTheme = () => {
    console.log("Button has been pressed.");
  };

  return <div className="App"></div>;
}

export default App;

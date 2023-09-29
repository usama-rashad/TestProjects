import "./App.scss";

import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const theme = useContext(ThemeContext);

  const toggleTheme = () => {
    theme?.setTheme({
      primary: { textColor: "red", backgroundColor: "yellow" },
      secondary: { textColor: "green", backgroundColor: "blue" },
    });
  };

  return (
    <div className="mainApp">
      <h1 style={{ color: theme?.theme.primary.textColor, backgroundColor: theme?.theme.primary.backgroundColor }}>React Context API</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

export default App;

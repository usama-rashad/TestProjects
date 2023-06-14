import React from "react";
import "./App.scss";
import { ThemeContext, ThemeProvider } from "./ThemeProvider";
import ThemeSetter from "./ThemeSetter";
import Title from "./Title";

function App() {
  const themeContext = React.useContext(ThemeContext);
  return (
    <div className="mainApp" style={themeContext?.theme?.primary}>
      <Title />
      <div className="settingsPanel">
        <ThemeSetter />
      </div>
    </div>
  );
}

export default App;

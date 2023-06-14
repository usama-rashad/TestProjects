import React, { useContext } from "react";
import "./Title.scss";
import { ThemeContext } from "./ThemeProvider";

function Title() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="mainTitle">
      <h2 style={themeContext?.theme?.primary}>React Context API</h2>
    </div>
  );
}

export default Title;

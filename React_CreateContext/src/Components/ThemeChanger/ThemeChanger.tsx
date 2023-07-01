import { ThemeContext } from "../../Contexts/ThemeProvider";
import "./ThemeChanger.scss";
import React from "react";
function ThemeChanger() {
  const theme = React.useContext(ThemeContext);

  const change2Red = () => {
    theme.setColour("red");
  };

  const change2Yellow = () => {
    theme.setColour("yellow");
  };

  const change2Green = () => {
    theme.setColour("green");
  };

  const change2Blue = () => {
    theme.setColour("blue");
  };

  return (
    <div className="mainThemeChanger">
      <div className="button red" onClick={change2Red}>
        R
      </div>
      <div className="button yellow" onClick={change2Yellow}>
        Y
      </div>
      <div className="button green" onClick={change2Green}>
        G
      </div>
      <div className="button blue" onClick={change2Blue}>
        B
      </div>
    </div>
  );
}

export default ThemeChanger;

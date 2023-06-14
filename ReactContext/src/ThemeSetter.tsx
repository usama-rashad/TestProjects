import React, { useContext } from "react";
import "./ThemeSetter.scss";
import { ITheme, ThemeContext } from "./ThemeProvider";

const themes: ITheme[] = [
  { primary: { color: "black", backgroundColor: "transparent" } },
  { primary: { color: "white", backgroundColor: "darkslateblue" } },
  { primary: { color: "green", backgroundColor: "yellowgreen" } },
  { primary: { color: "teal", backgroundColor: "turquoise" } },
  { primary: { color: "goldenrod", backgroundColor: "lightsalmon" } },
];

function ThemeSetter() {
  const themeContext = useContext(ThemeContext);

  const themeSelect = (theme: number) => {
    console.log(theme);
    themeContext?.setTheme(themes[theme]);
  };
  return (
    <div className="mainThemeSetter">
      {themes.map((theme, index) => {
        return (
          <div className="themeMain">
            <div className="colorDiv" style={{ backgroundColor: theme.primary.backgroundColor }}></div>
            <div className="colorDiv" style={{ backgroundColor: theme.primary.color }}></div>
            <button onClick={() => themeSelect(index)}>{`Theme ${index}`}</button>
          </div>
        );
      })}
    </div>
  );
}

export default ThemeSetter;

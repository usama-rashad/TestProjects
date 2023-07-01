import "./App.scss";
import React from "react";
import ThemeChanger from "./Components/ThemeChanger/ThemeChanger";
import { ThemeContext } from "./Contexts/ThemeProvider";

function App() {
  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    let appColor = document.getElementsByClassName("mainApp")[0] as HTMLDivElement;
    appColor.style.backgroundColor = theme?.color as string;
    console.log(theme?.color);
  }, [theme?.color]);

  return (
    <div className="mainApp">
      <ThemeChanger />
    </div>
  );
}

export default App;

import "./App.scss";
import { DarkModeContext } from "./context/darkModeContext";

import { useContext, useEffect, useState } from "react";
import Parent from "./Parent";
import Child from "./Child";

function App() {
  const darkMode = useContext(DarkModeContext);

  useEffect(() => {
    console.log("Mode value : " + darkMode);
  }, [darkMode]);

  // return <div className={`App ${darkMode ? "dark" : "light"}`}></div>;
  return (
    <div>
      <Parent>
        <Child name="one" />
        <Child name="two" />
        <Child name="three" />
      </Parent>
    </div>
  );
}

export default App;

import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.scss";
import { MemoizedCalc } from "./Components/Calc/Calc";

function App() {
  console.log("Rendering App...");
  const [counter, setCounter] = useState<number>(0);

  const buttonHandler = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="App">
      <MemoizedCalc />
    </div>
  );
}

export default App;

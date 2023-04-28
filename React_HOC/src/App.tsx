import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.scss";
import { MemoizedCalc } from "./Components/Calc/Calc";

function App() {
  console.log("Rendering App...");

  return (
    <div className="App">
      <MemoizedCalc />
    </div>
  );
}

export default App;

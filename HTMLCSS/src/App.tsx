import React, { useState } from "react";
import "./App.scss";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div className="mainApp">
      <p>{counter}</p>
      <button onClick={() => incrementCounter()}>Increase</button>
    </div>
  );
}

export default App;

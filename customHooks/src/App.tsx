import { useEffect, useRef, useState } from "react";
import "./App.scss";
import useCounter from "./useCounter";
import Counter from "./Components/Counter/Counter";

function App() {
  const [externalReset, setExternalReset] = useState(false);

  const resetAllCounters = () => {
    setExternalReset(true);
    setTimeout(() => {
      setExternalReset(false);
    }, 10);
  };

  return (
    <div className="App">
      <div className="counter">
        <Counter instance={1} delay={2000} externalReset={externalReset} />
      </div>
      <div className="counter">
        <Counter instance={2} delay={1000} externalReset={externalReset} />
      </div>
      <div className="counter">
        <Counter instance={3} delay={500} externalReset={externalReset} />
      </div>
      <button onClick={resetAllCounters}>Reset all</button>
    </div>
  );
}

export default App;

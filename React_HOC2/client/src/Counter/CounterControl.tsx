import React from "react";

interface ICounterControl {
  increase: () => void;
  decrese: () => void;
  reset: () => void;
}

function CounterControl(props: ICounterControl) {
  return (
    <div className="mainCounterControl">
      <button onClick={() => props.increase()}>Increase</button>
      <button onClick={() => props.decrese()}>Decrease</button>
      <button onClick={() => props.reset()}>Reset</button>
    </div>
  );
}

export default CounterControl;

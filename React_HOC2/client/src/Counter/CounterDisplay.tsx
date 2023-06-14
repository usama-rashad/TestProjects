import React from "react";

interface ICounterDisplay {
  value: number;
}

function CounterDisplay(props: ICounterDisplay) {
  return (
    <div className="mainDisplay">
      <p>{props.value}</p>
    </div>
  );
}

export default CounterDisplay;

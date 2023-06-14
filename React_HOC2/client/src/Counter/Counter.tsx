import React from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControl from "./CounterControl";

function Counter() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="mainCounter">
      <CounterDisplay value={counter} />
      <CounterControl
        increase={function (): void {
          setCounter((prev) => prev + 1);
        }}
        decrese={function (): void {
          setCounter((prev) => prev - 1);
        }}
        reset={function (): void {
          setCounter((prev) => (prev = 0));
        }}
      />
    </div>
  );
}
export default Counter;

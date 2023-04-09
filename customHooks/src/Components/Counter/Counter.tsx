import React, { useEffect } from "react";
import useCounter, { ICounterSettings } from "../../useCounter";

function Counter(props: ICounterSettings) {
  let counter = useCounter(props);

  const counterReset = () => {
    counter.resetCounter();
  };

  useEffect(() => {
    if (props.externalReset) counterReset();
  }, [props.externalReset]);

  return (
    <div className="counter">
      <span className="value">{counter.value}</span>
      <button onClick={counterReset}>Reset</button>
    </div>
  );
}

export default Counter;

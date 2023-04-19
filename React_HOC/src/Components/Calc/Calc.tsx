import React from "react";

function Calc() {
  const expensiveFunction = (): number => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    return sum;
  };

  let sum = expensiveFunction();

  return (
    <div className="mainCalc">
      <span className="title">{sum}</span>
    </div>
  );
}

export const MemoizedCalc = React.memo(Calc);

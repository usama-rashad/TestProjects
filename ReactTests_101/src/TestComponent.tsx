import { useCallback, useEffect, useMemo, useState } from "react";

interface CounterType {
  a: number;
  b: number;
}

const TestComponent = () => {
  const [counterValues, setCounterValues] = useState<CounterType>({ a: 0, b: 0 });
  const [index, setIndex] = useState<number>(0);

  const addA = () => {
    setCounterValues((previous) => ({ ...previous, a: previous.a + 1, b: previous.b - 1 }));
  };

  // !!! Use Effect !!!
  useEffect(() => {
    console.log("Mounted " + index);
    setIndex((previous) => previous + 1);
    return () => {
      console.log("Unmounted " + index);
    };
  }, []);

  // !!! Use Memo !!!
  useMemo(() => {
    console.log("Value of a has changed");
  }, [counterValues.a]);

  // !!! Use Callback !!!
  useCallback(() => {
    console.log("Value of b has changed ");
  }, [counterValues.b]);

  return (
    <div className="component">
      <div className="display">
        <h4>
          [{counterValues?.a} , {counterValues?.b}]
        </h4>
      </div>
      <div>
        <button onClick={addA}>Add to A</button>
      </div>
    </div>
  );
};

export default TestComponent;

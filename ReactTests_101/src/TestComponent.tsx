import { useEffect, useState } from "react";

interface CounterType {
  a: number;
  b: number;
}

const TestComponent = () => {
  const [counterValues, setCounterValues] = useState<CounterType>({ a: 0, b: 0 });

  const addA = () => {
    setCounterValues((previous) => ({ ...previous, a: previous.a + 1, b: previous.b - 1 }));
  };


  useEffect(()=>{
    console.log("Running after every render");
  })

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

import React from "react";
import "./App.scss";
import Counter from "./Counter/Counter";
import CounterWithHOC from "./Counter/CounterWithHOC";

// const newComponent = CounterWithHOC({ enable: true }, <Counter />);

function App() {
  const [flag, setFlag] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setFlag((prev) => !prev);
    }, 2000);
  });

  return (
    <div className="mainApp">
      <Counter />
      <CounterWithHOC enable={flag} baseComponent={<Counter />} />
    </div>
  );
}

export default App;

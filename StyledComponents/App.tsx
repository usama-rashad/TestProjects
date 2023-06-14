import React from "react";
import "./App.scss";
import TrafficLight from "./components/TrafficLight/TrafficLight";

function App() {
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    let id = setInterval(() => {
      if (state > 2) {
        setState(0);
      } else {
        setState((prev) => prev + 1);
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <div className="mainApp">
      <TrafficLight state={state} />
    </div>
  );
}

export default App;

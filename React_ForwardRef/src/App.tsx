import "./App.scss";
import React from "react";
import MultiDiv from "./Components/MultiDiv/MultiDiv";

function App() {
  const [index, setIndex] = React.useState(0);
  const [plateCount, setPlateCount] = React.useState(40);
  const [scrollCommand, setScrollCommand] = React.useState(false);

  const scrollAction = () => {
    setScrollCommand(true);
    setTimeout(() => {
      setScrollCommand(false);
    }, 100);
  };
  return (
    <div className="mainApp">
      <div className="selector">
        <input
          placeholder="Enter index..."
          value={index}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let value = parseInt(e.target.value);
            if (value >= 0 || value <= plateCount) setIndex(value);
            else {
              setIndex(0);
            }
          }}
        />
        <input
          placeholder="Enter plate count..."
          value={plateCount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let value = parseInt(e.target.value);
            if (value >= 0 || value <= 10) setPlateCount(value + 1);
            else {
              setPlateCount(0);
            }
          }}
        />
        <button onClick={scrollAction}>Scroll</button>
      </div>
      <div className="multiDiv">
        <MultiDiv divCount={plateCount} scrollToDiv={index} scrollCommand={scrollCommand} />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

// Import Store and Reducers
import "../src/Redux/store";
import "../src/Redux/counterReducer";
import "../src/Redux/dummyReducer";

// Import Components
import ControlPanel from "./Component/ControlPanel";
import Display from "./Component/Display";
import StoreStateDisplay from "./Component/StoreStateDisplay";

function App() {
  return (
    <div className="App">
      <ControlPanel />
      <Display />
      <StoreStateDisplay />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

import "../src/Redux/Slice/counterSlice";

interface add<in1 = number, in2 = number> {}

function App() {
  const add = () => {};

  const sub = () => {};

  return (
    <div className="App">
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
    </div>
  );
}

export default App;

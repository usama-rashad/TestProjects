import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const add = () => {
    useDispatch();
  };

  const sub = () => {};

  return (
    <div className="App">
      <button onClick={add}>Add</button>
      <button onClick={sub}>Sub</button>
    </div>
  );
}

export default App;

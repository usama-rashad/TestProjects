import { useState } from "react";
import { appDispatch } from "./store";
import "./App.scss";
import { useDispatch } from "react-redux";
import { addDocThunk, reset } from "./registerSlice";
import { addDoc } from "@firebase/firestore";

function App() {
  const dispatch = useDispatch<appDispatch>();

  const buttonAction = () => {
    dispatch(reset());
  };

  const addDataAction = () => {
    dispatch(addDocThunk());
  };
  return (
    <div className="App">
      <button onClick={buttonAction}>Reset!</button>
      <button onClick={addDataAction}>Add Data</button>
    </div>
  );
}

export default App;

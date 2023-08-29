import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

import { useDispatch, useSelector } from "react-redux";
import { testAsyncThunk } from "./Reducers/operationsReducer";

function App() {
  const dispatch = useDispatch<any>();

  const buttonAction = () => {
    dispatch(testAsyncThunk())
      .then((result: any) => {
        console.log(result);
      })
      .catch((error: any) => {
        console.log("Error " + error);
      });
  };

  return (
    <div className="mainApp">
      <button onClick={() => buttonAction()}>Async thunk</button>
    </div>
  );
}

export default App;

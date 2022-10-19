import { useState } from "react";
import "./App.css";

import "../src/Redux/store";
import "../src/Redux/counterReducer";
import "../src/Redux/dummyReducer";

import { counterReducerState, storeDispatch } from "../src/Redux/store";

import { samplePromise } from "../src/Redux/SamplePromise";

const test = () => {
  samplePromise(false)
    .then((result) => {
      console.log("Successful process..." + result);
    })
    .catch((err) => {
      console.log("Failed process..." + err);
    });
};

function App() {
  test();

  storeDispatch(add(1234));

  return <div className="App"></div>;
}

export default App;

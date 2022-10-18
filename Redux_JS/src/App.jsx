import { useState } from "react";
import "./App.css";

import "../src/Redux/store";
import "../src/Redux/counterReducer";
import "../src/Redux/dummyReducer";

import delayedPromise from "./Redux/SamplePromise";

function App() {

  let a = delayedPromise(()=>{
    console.log("function call")
  }).then(()=>{
    console.log("delayed function call")
  }).catch(()=>{
    console.log("error function")
  })




  return <div className="App"></div>;
}

export default App;

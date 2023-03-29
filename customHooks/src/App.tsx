import { useEffect, useState } from "react";
import "./App.scss";
import Button from "./Components/Button/Button";

import { Observable, fromEvent, map } from "rxjs";
import * as Rx from "rxjs";

function App() {
  let inputId: HTMLInputElement;
  useEffect(() => {
    inputId = document.getElementById("main") as HTMLInputElement;
    console.log(inputId);
    fromEvent(inputId, "onChange").subscribe((message) => {
      console.log(message);
    });
  }, []);

  return (
    <div className="App">
      <Button variant="blue">Apply</Button>
      {/* <Button variant="red">Error</Button> */}
      <input type="text" id="main" />
    </div>
  );
}

export default App;

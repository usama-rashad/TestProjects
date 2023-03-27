import { useEffect, useState } from "react";
import "./App.scss";

import { Observable, fromEvent, map, of, from } from "rxjs";
import * as Rx from "rxjs";

function App() {
  let obs = from([1, 2, 3]);

  obs.subscribe((x) => {
    console.log("Subscriber 1 : " + x);
  });

  obs.subscribe((x) => {
    console.log("Subscriber 2 : " + x);
  });
  return <div className="App"></div>;
}

export default App;

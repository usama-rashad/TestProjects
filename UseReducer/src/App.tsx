import React, { useReducer } from "react";
import {
  ECounterActionTypes,
  counterInitialState,
  counterReducer,
} from "./reducers/counterReducer";

function App() {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  const addAction = () => {
    dispatch({ action: ECounterActionTypes.Add });
  };
  const delayedAddAction = () => {
    setTimeout(() => {
      dispatch({ action: ECounterActionTypes.Add });
    }, 3000);
  };
  const subAction = () => {
    dispatch({ action: ECounterActionTypes.Sub });
  };
  return (
    <div className="app">
      <span>{`Current state : ${JSON.stringify(state)}`}</span>
      <button onClick={addAction}>Add 1</button>
      <button onClick={subAction}>Sub 1</button>
      <button onClick={delayedAddAction}>Delayed Add</button>
    </div>
  );
}

export default App;

import React from "react";

import { storeDispatch } from "../Redux/store";

import { add, sub, asyncAdd } from "../Redux/counterReducer";

const ControlPanel = () => {
  const addCounter = () => {
    storeDispatch(add(1));
  };
  const subCounter = () => {
    storeDispatch(sub(1));
  };
  const delayedAddCounter = () => {
    storeDispatch(asyncAdd(1));
  };
  return (
    <div className="ControlPanel_Main">
      <h4>Control Panel</h4>
      <button onClick={addCounter}>Add</button>
      <button onClick={subCounter}>Sub</button>
      <button onClick={delayedAddCounter}>Async Add</button>
    </div>
  );
};

export default ControlPanel;

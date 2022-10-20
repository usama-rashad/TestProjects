import React from "react";

import { store } from "../Redux/store";
import { useSelector } from "react-redux";

function StoreStateDisplay() {
  let storeRootState = useSelector((state) => store.getState());
  let state = useSelector((state) => store.getState().counterReducer.value);

  return (
    <div>
      <h1>{JSON.stringify(storeRootState)}</h1>
    </div>
  );
}

export default StoreStateDisplay;

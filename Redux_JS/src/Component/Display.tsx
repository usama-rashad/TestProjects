import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "../Redux/store";

function Display() {
  const counter = useSelector((state) => store.getState().counterReducer.value);

  return (
    <div className="Display_Main">
      <h3>{`Counter value is : ${counter}`}</h3>
    </div>
  );
}

export default Display;

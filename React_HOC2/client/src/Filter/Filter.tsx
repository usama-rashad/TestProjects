import React from "react";
import "./Filter.scss";
import { useSelector, Provider } from "react-redux";
import { RootState, filterStore, useFilterDispatch } from "./store";
import { increaseCounter, decreaseCounter, sendAsync } from "./FilterReducer";

function Filter() {
  const counterValue = useSelector((state: RootState) => state.filterReducer.counter);
  const filterDispatch = useFilterDispatch();

  const updateSettings = () => {
    filterDispatch(sendAsync(counterValue));
  };
  const increase = () => {
    filterDispatch(increaseCounter(""));
  };
  const decrease = () => {
    filterDispatch(decreaseCounter(""));
  };

  return (
    <div className="mainFilter">
      <h3>Filter</h3>
      <h1>{counterValue}</h1>
      <div className="buttons">
        <button className="actions" onClick={increase}>
          +
        </button>
        <button className="actions" onClick={decrease}>
          -
        </button>
      </div>
      <button onClick={updateSettings}>Update</button>
    </div>
  );
}

export default Filter;

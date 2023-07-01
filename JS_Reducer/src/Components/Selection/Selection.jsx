import React, { useReducer, useState } from "react";
import "./Selection.scss";

// Import redux related
import { updateMode, delayedMode } from "./redux/selectionReducer";
import { useDispatch, useSelector } from "react-redux";

function Selection() {
  const [flag, setFlag] = useState(false);
  const mode = useSelector((state) => state.mode.mode);
  const dispatch = useDispatch();
  const fireButton = () => {
    setFlag(true);
    dispatch(updateMode("Fire"));
  };
  const selectButton = () => {
    setFlag(false);
    dispatch(updateMode("Select"));
  };
  const weaponButton = () => {
    dispatch(updateMode("Weapon"));
  };
  const boostButton = () => {
    dispatch(updateMode("Boost"));
  };
  return (
    <div className="mainSelection">
      <div className="buttonContainer">
        <button onClick={fireButton}>Fire</button>
        <button onClick={selectButton}>Select</button>
        <button onClick={weaponButton}>Weapon</button>
        <button onClick={boostButton}>Boost</button>
        <button
          onClick={() => {
            dispatch(delayedMode(flag));
          }}
        >
          Apply
        </button>
      </div>
      <p>{mode}</p>
    </div>
  );
}

export default Selection;

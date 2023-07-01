import React from "react";
import "./DropDown.scss";

function DropDown({ enable }) {
  return <div className={`mainDropDown ${enable ? "on" : "off"}`}></div>;
}

export default DropDown;

import "./Navbar.scss";
import DropDown from "./../DropDown/DropDown";
import React, { useContext } from "react";
import Button from "./../Button/Button";
import { PortalContext } from "../../App";

function Navbar() {
  const { portalState, setPortalState } = useContext(PortalContext);

  const clickAction = () => {
    setPortalState(!portalState);
  };

  return (
    <div className={`mainNavbar`}>
      <div className="buttonContainer">
        <div className={`buttons`}>
          <Button name={"Home"} onClick={(e) => clickAction(e)} />
          <Button name={"Service"} onClick={(e) => clickAction(e)} />
          <Button name={"Apply"} onClick={(e) => clickAction(e)} />
          <Button name={"Check"} onClick={(e) => clickAction(e)} />
          <Button name={"System"} onClick={(e) => clickAction(e)} />
          <Button name={"Reset"} onClick={(e) => clickAction(e)} />
        </div>
      </div>
      <div className="baseLine"></div>
      <div className="dropDowns">
        <DropDown enable={portalState} />
      </div>
    </div>
  );
}

export default Navbar;

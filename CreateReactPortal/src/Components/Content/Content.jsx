import React from "react";
import Button from "../Button/Button";
import HomePortal from "../Portals/HomePortal/HomePortal";
import { PortalContext } from "../../App";
import { createPortal } from "react-dom";

function Content() {
  const { portalState, setPortalState } = React.useContext(PortalContext);

  const togglePortal = () => {
    setPortalState(!portalState);
    console.log("Portal Toggled");
  };

  return <div className="mainContent"></div>;
}

export default Content;

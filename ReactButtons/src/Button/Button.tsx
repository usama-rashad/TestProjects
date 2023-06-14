import React, { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import convert from "color-convert";
import "./Button.scss";
import { HSL, RGB } from "color-convert/conversions";

interface IButton {
  buttonStyle: React.CSSProperties;
  children: ReactNode;
}

function Button(props: IButton) {
  const [click, setClicked] = React.useState(false);

  return (
    <div className="mainButton">
      <div className="button" style={props.buttonStyle}>
        {props.children}
      </div>
    </div>
  );
}

export default Button;

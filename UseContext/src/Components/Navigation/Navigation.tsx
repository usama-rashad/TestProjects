import "./Navigation.scss";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../GlobalContext";

const NavButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  &:hover {
    box-shadow: inset 0 4px 8px 0 rgb(0 0 0 / 0.15);
  }
`;

const RedButton = styled(NavButton)`
  background-color: red;
`;

const GreenButton = styled(NavButton)`
  background-color: Green;
`;

const BlueButton = styled(NavButton)`
  background-color: Blue;
`;

const YellowButton = styled(NavButton)`
  background-color: yellow;
`;

function Navigation() {
  const { color, setColor } = useContext(GlobalContext);

  const applyRed = () => {
    setColor("red");
  };
  const applyGreen = () => {
    setColor("green");
  };
  const applyBlue = () => {};
  const applyYellow = () => {};

  return (
    <div className="navigationMain">
      <RedButton onClick={applyRed} />
      <GreenButton onClick={applyGreen} />
      <BlueButton onClick={applyBlue} />
      <YellowButton onClick={applyYellow} />
    </div>
  );
}

export default Navigation;

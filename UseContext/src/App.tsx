import "./App.scss";
import React, { useContext } from "react";
import styled from "styled-components";

import Navigation from "./Components/Navigation/Navigation";
import { GlobalContext } from "./GlobalContext";

const RainbowText = styled.span`
  font-size: 4rem;
  font-weight: 600;
  color: ${(props) => props.color};
`;

function App() {
  const { color } = useContext(GlobalContext);
  return (
    <div className="appMain">
      <Navigation />
      <RainbowText color={color}>This is some text</RainbowText>
    </div>
  );
}

export default App;

import "./Button.scss";

import React from "react";

interface IButton {
  onClick: () => void;
  children: React.ReactNode;
}

function Button(props: IButton) {
  return (
    <div className="mainButton" onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Button;

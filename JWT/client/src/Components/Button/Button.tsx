import React from "react";
import "./Button.scss";

interface IButton {
  title: string;
  onClick: () => void;
}

function Button(props: IButton) {
  return (
    <div className="button" onClick={props.onClick}>
      {props.title}
    </div>
  );
}

export default Button;

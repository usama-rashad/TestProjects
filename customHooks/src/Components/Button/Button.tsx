import React, { useEffect } from "react";
import "./Button.scss";

import { fromEvent } from "rxjs";

interface IButton {
  variant: string;
  children: string;
}

function Button(props: IButton) {
  useEffect(() => {
    fromEvent(document, "click").subscribe(() => console.log("Clicked."));
  }, []);

  return <div className={`Button ${props.variant}`}>{props.children}</div>;
}

export default Button;

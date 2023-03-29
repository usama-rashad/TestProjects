import React, { useEffect } from "react";
import "./Button.scss";

import { bufferCount, bufferTime, count, delay, fromEvent, map } from "rxjs";

interface IButton {
  variant: string;
  children: string;
}

function Button(props: IButton) {
  useEffect(() => {
    fromEvent(document, "click")
      .pipe(delay(2000))
      .subscribe((x) => {
        console.log("Document clicked.");
      });
  }, []);

  return <div className={`Button ${props.variant}`}>{props.children}</div>;
}

export default Button;

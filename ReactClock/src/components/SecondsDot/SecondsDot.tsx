import React, { useEffect, useState } from "react";
import "./SecondsDot.scss";
import Pixel from "../Pixel/Pixel";

interface ISecondsDot {
  isStatic: boolean;
  pulse: boolean;
  dotColor: string;
}

function SecondsDot(props: ISecondsDot) {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    setPulse(true);
    if (props.pulse) {
      setTimeout(() => {
        if (!props.isStatic) setPulse(false);
      }, 50);
    }
  }, [props.pulse]);

  return (
    <div className="mainSecondsDot">
      <Pixel on={pulse} color={props.dotColor} />
      <div className="gap"></div>
      <Pixel on={pulse} color={props.dotColor} />
    </div>
  );
}

export default SecondsDot;

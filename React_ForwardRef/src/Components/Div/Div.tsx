import React from "react";
import "./Div.scss";

interface IDiv {
  index: number;
}

function Div(props: IDiv) {
  React.useEffect(() => {
    let randomnHue = Math.random() * 240.0;
    let divID = document.getElementsByClassName(`mainDiv ${props.index}`)[0] as HTMLDivElement;
    divID.style.backgroundColor = `hsl(${randomnHue},100%,50%)`;
  });
  return (
    <div className={`mainDiv ${props.index + 1}`}>
      <p>{props.index + 1}</p>
    </div>
  );
}

export default Div;

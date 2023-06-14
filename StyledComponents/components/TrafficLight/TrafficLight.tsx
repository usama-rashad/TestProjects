import React from "react";
import "./TrafficLight.scss";

interface ITrafficLightState {
  state: number;
}

function TrafficLight(props: ITrafficLightState) {
  const [trafficLightState, setTrafficLightState] = React.useState(0); // Can be 0 ,1 or 2 for red yellow or green

  React.useEffect(() => {
    let redId = document.getElementById("red") as HTMLElement;
    let yellowId = document.getElementById("yellow") as HTMLElement;
    let greenId = document.getElementById("green") as HTMLElement;

    setTrafficLightState(props.state);

    redId.style.backgroundColor = "transparent";
    yellowId.style.backgroundColor = "transparent";
    greenId.style.backgroundColor = "transparent";
    switch (trafficLightState) {
      case 0:
        redId.style.backgroundColor = "red";
        break;
      case 1:
        yellowId.style.backgroundColor = "yellow";
        break;
      case 2:
        greenId.style.backgroundColor = "green";
        break;
    }
  }, [props]);

  return (
    <div className="mainTrafficLight">
      <div id="red" className="red"></div>
      <div id="yellow" className="yellow"></div>
      <div id="green" className="green"></div>
    </div>
  );
}

export default TrafficLight;

import "./PhonesComponent.scss";

import React from "react";

interface PhoneProps {
  make: string;
  model: string;
  color: string;
  screenSize: string;
}

export interface PhoneData extends PhoneProps {}

function PhonesComponent({ make, model, color, screenSize }: PhoneProps) {
  return (
    <div className="phonesComponent">
      <p>{make}</p>
      <p>{model}</p>
      <p>{color}</p>
      <p>{screenSize}</p>
    </div>
  );
}

export default PhonesComponent;

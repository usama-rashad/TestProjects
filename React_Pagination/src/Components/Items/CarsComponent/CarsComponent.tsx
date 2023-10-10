import "./CarsComponent.scss";

import React from "react";

interface BaseComponentProps {}

export interface CarProps extends BaseComponentProps {
  make: string;
  model: number;
  mileage: number;
}

export interface CarData extends CarProps {}

function CarsComponent(key: number, { make, mileage, model }: CarProps) {
  return (
    <div key={key} className="carsComponent">
      <p>{make}</p>
      <p>{model}</p>
      <p>{mileage}</p>
    </div>
  );
}

export default CarsComponent;

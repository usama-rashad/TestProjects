import "./AnimalDetails.scss";

import React from "react";

function convertFood(food: string) {
  switch (food) {
    case "insects":
      return "🐜";
    case "meat":
      return "🍖";
    case "plants":
    default:
      return "🌱";
  }
}

function AnimalDetails({ diet }: { diet: string[] }) {
  return (
    <div className="details">
      <h4>Details:</h4>
      <div>Diet: {diet.map((food) => convertFood(food)).join(" ")}</div>
    </div>
  );
}

export default AnimalDetails;

import "./Planet.scss";

import PeopleIcom from "./../../icons/crowdIcon.png";
import PlanetIcon from "./../../icons/planet.png";
import paperBack from "./../../assets/paperBackground.jpg";
import { useEffect, useRef, useState } from "react";

export interface IPlanetData {
  name: string;
  rotationTime: string;
  diameter: string;
  terrain: string;
  population: string;
}

function convertPopulation(s: string): string {
  if (isNaN(parseInt(s))) {
    return "N/A";
  }

  let copy = s;
  let count = 0;
  let population = parseInt(s);
  while (copy.length > 5) {
    population = population / 1000;
    copy = population.toFixed(0);
    count++;
  }

  let unit = "";
  switch (count) {
    case 0:
      unit = "";
      break;
    case 1:
      unit = "K";
      break;
    case 2:
      unit = "M";
      break;
    case 3:
      unit = "G";
      break;
    case 4:
      unit = "T";
      break;
  }

  return copy + " " + unit;
}

function Planet({ name, diameter, rotationTime, terrain, population }: IPlanetData) {
  let [open, setOpen] = useState(false);
  let topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(open);
  }, [topRef]);

  // Convert population to a smaller display, including 1000s denominations
  let newPopulation = convertPopulation(population);

  return (
    <div className="planetMain">
      <div className="background">
        <img className="backImage" src={paperBack} />
      </div>
      <div className="content">
        <div className="top">
          <div className="left">
            <img src={PlanetIcon} alt={PlanetIcon} />
            <p className="planetName">{name}</p>
          </div>
          <div className="right">
            <img src={PeopleIcom} alt={PeopleIcom} />
            <p className="popName">{newPopulation}</p>
          </div>
        </div>
        <div className="center">
          <div className="col1">
            <p className="title">Diameter</p>
            <p className="info">{diameter}</p>
          </div>
          <div className="col2">
            <p className="title">Rotation Time</p>
            <p className="info">{rotationTime}</p>
          </div>
          <div className="col3">
            <p className="title">Terrain</p>
            <p className="info">{terrain}</p>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default Planet;

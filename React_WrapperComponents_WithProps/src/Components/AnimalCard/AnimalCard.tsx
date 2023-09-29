import "./AnimalCard.scss";
import React from "react";
import PropTypes from "prop-types";
import AnimalDetails from "../AnimalDetails/AnimalDetails";

interface IAnimalCardProps {
  diet: string[];
  name: string;
  size: number;
}

export default function AnimalCard({ name, size, ...props }: IAnimalCardProps) {
  return (
    <div className="animalCard">
      <h3>{name}</h3>
      <div>{size}kg</div>
      <AnimalDetails {...props} />
    </div>
  );
}

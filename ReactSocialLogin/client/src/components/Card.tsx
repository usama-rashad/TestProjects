import "./Card.scss";
import React from "react";

interface IPost {
  id: number;
  title: string;
  imgSrc: string;
  desc: string;
  longDesc: string;
}

function Card({ id, title, imgSrc, desc, longDesc }: IPost) {
  return (
    <div className="card">
      <span className="title">{title}</span>
      <img src={imgSrc} alt="" className="img" />
      <p className="desc">{desc}</p>
      <button className="cardButton">Read More</button>
    </div>
  );
}

export default Card;

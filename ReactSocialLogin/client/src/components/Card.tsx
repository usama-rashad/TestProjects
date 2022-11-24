import "./Card.scss";
import React from "react";
import {Link} from "react-router-dom";

export interface IPost {
	id: number;
	title: string;
	img: string;
	desc: string;
	longDesc: string;
}

function Card({id, title, img, desc, longDesc}: IPost) {
	return (
		<div className="card">
			<Link className="link" to={`/post/${id}`}>
				<span className="title">{title}</span>
				<img src={img} alt="" className="img" />
				<p className="desc">{desc}</p>
				<button className="cardButton">Read More</button>
			</Link>
		</div>
	);
}

export default Card;

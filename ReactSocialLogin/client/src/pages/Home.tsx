import React from "react";
import Card from "../components/Card";
import {posts} from "../data";
import "./Home.scss";

function Home() {
	return (
		<div className="home">
			{posts.map((post) => (
				<Card
					key={post.id}
					id={post.id}
					title={post.title}
					img={post.img}
					desc={post.desc}
					longDesc={post.longDesc}
				/>
			))}
		</div>
	);
}

export default Home;

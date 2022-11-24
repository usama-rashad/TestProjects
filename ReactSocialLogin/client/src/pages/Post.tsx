import {posts} from "../data";
import {IPost} from "../components/Card";

import "./Post.scss";

import React from "react";
import {useLocation} from "react-router-dom";

function Post() {
	const location = useLocation();
	const pageNumber = location.pathname.split("/")[2];

	const post: IPost = posts.find((p) => p.id.toString() === pageNumber) || {
		// Needed to do this to avoid "undefined" assignment error
		id: 1,
		title: "",
		desc: "",
		longDesc: "",
		img: "",
	};

	return (
		<div className="post">
			<img src={post.img} alt="" className="postImg" />
			<h1 className="postTitle">{post.title}</h1>
			<p className="postDesc">{post.desc}</p>
			<p className="postLongDesc">{post.longDesc}</p>
		</div>
	);
}

export default Post;

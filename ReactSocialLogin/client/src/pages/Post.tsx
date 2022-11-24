import { posts } from "../data";

import "./Post.scss";

import React from "react";

function Post() {
  const post = posts[2];

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

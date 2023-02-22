import React from "react";
import { NavLink } from "react-router-dom";
import { posts } from "../data/posts";
import Controles from "./Controles";

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <NavLink to={`/post/${post.id}`}>{post.titulo}</NavLink>
            </li>
          );
        })}
      </ul>
      <Controles />
    </div>
  );
};

export default Blog;

import React from "react";
import './styles.css';
import AuthorBadge from "../author-badge";
import { Link } from "react-router-dom";
import Post from "../post";
export default function FeaturedPost({post}){
    return (
        <div className="featured-post-container">
        <div>
        <img className="featured-post-image" src={post?.hero?.data?.attributes?.formats?.medium?.url} alt="" />
        </div>
        <div>
            <p className="featured-post-date">{post.date}</p>
            <Link to='#'>
            <h2 className="featured-post-title">{post.title}</h2>
            </Link>
            <p className="featured-post-description">{post.description}</p>
        <AuthorBadge/>
        </div>
       </div>
    );
}
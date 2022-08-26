import React from "react";
import './styles.css';
import { Link } from "react-router-dom";

export default function Post({post}){
    return (
        <div className="post-container">
        <div>
        <img className="post-image" src={post?.hero?.data?.attributes?.formats?.medium?.url} alt="" />
        </div>
        <div>
            <p className="post-date">{post.date}</p>
            <Link to='#'>
            <h3 className="post-title">{post.title}</h3>
            <h4 className="post-title">{post.category}</h4>
            <h4 className="post-title">{post.author}</h4>
            </Link>
            <p className="post-description">{post.description}</p>
        </div>
       </div>
    );
}
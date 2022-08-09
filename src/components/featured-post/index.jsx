import React from "react";
import './styles.css';
import {Link} from 'react-router-dom';
export default function FeaturedPost(){
    return (
        <div className="featured-post-container">
        <div>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2FLinux-Windows-10-1920873.jpg&f=1&nofb=1" alt="" />
        </div>
        <div>
            <p>July 24, 2020</p>
            <h2>Título Teste</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quos delectus saepe expedita et voluptatibus, perspiciatis iusto inventore quidem consequuntur </p>
        </div>

       </div>
    );
}
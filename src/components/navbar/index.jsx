import React from "react";
import './styles.css';
import {Link} from 'react-router-dom';
export default function NavBar(){
    return (
        <nav className="navbar">
            <div>
             <Link to="/" className="logo"><h3>BlogValen</h3></Link>
            </div>
            <div className="links">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/post">Posts</Link>
            <Link className="nav-link" to="/contact">Contato</Link>
            <Link className="nav-link" to="/culture">Cultura</Link>
            </div>
        </nav>
    );
}
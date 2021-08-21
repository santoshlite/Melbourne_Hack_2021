import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav">
            <Link to="/"><img
                className="nav__logo"
                src="https://i.ibb.co/z525N8D/byte.png"
                alt="ByteLearn logo"
                /></Link>

        
            
        {/* <form className="searchbox" action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            className="search"
            type="text"
            id="header-search"
            placeholder="  What do you want to learn?"
            name="s" 
        />
    </form> */}
        </div>
    )
}

export default Nav

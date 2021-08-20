import React from 'react';
import './Movie.css';

function Movie({image}) {
    return (
        <div className="product">
       
        <img className="poster" src={image} alt=""/>

        
    </div>
    )
}

export default Movie

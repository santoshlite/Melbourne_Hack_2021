import React from 'react';
import './Banner.css';
import playerProps from './playerProps';
import { Link } from "react-router-dom";

function Banner() {


    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://i.ibb.co/TKM5KyJ/2021-08-17-22h58-38.png"
            )`
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    OverSimplified History
                </h1>

                <div className="banner__buttons">
                <Link to="/oversimplified"><button className="banner__button">Play</button></Link>
                </div>

                <h1 className="banner__description">
                Discover the moments that have marked history through this series of comical videos
                </h1>
            </div>

            <div className="banner--fadeBottom"/>
            
        </header>
    )
}

export default Banner

import React from "react";
import "../styles/home.css";

const Home = () => {
    return (
        <div className="main-container">
            <div className="header">
                <div className="menu">
                    <div className="logo">
                        <img src="/img/logo.png" alt="logo" />
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/series">Series</a>
                            </li>
                            <li>
                                <a href="/movies">Movies</a>
                            </li>
                            <li>
                                <a href="/for-you">For You</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="profile"></div>
            </div>
            <div className="hero">
                <div className="content">
                    <div className="type">TV Show</div>
                    <div className="title">Avatar The Last Airbender</div>
                    <p className="top">#1 in TV Shows today</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a labore alias aperiam nobis dolorem omnis ea hic
                        eos ducimus enim consequuntur illum, fugit cupiditate quaerat sunt numquam suscipit veniam.
                    </p>
                    <div className="buttons">
                        <button className="btn play">Play</button>
                        <button className="btn info">More Information</button>
                    </div>
                </div>
            </div>
            <div className="movies"></div>
        </div>
    );
};

export default Home;

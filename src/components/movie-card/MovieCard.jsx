import React from "react";
import { Link } from "react-router-dom";

import "./movie-card.scss";

import Button from "../button/Button";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import black_bg from "../../assets/black-bg.jpg";

const MovieCard = (props) => {
    const item = props.item;

    const link = "/" + category[props.category] + "/" + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className='movie-card'>
                <div
                    className='background'
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <Button className='small'>
                        <i className='bx bx-play'></i>
                    </Button>
                </div>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
};

export default MovieCard;

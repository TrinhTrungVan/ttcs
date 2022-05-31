import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

import "./detail.scss";

const CastList = (props) => {
    const { category } = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const params = {
                api_key: apiConfig.apiKey,
                language: "en-US",
            };
            const response = await tmdbApi.credits(category, props.id, {
                params,
            });
            setCasts(response.cast.slice(0, 5));
        };
        getCredits();
    }, [category, props.id]);

    return (
        <div className='casts'>
            {casts.map((cast, i) => (
                <div className='casts__item' key={i}>
                    <div
                        className='casts__item__img'
                        style={{
                            backgroundImage: `url(${apiConfig.w500Image(
                                cast.profile_path
                            )})`,
                        }}
                    ></div>
                    <p className='casts__item__name'>{cast.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CastList;

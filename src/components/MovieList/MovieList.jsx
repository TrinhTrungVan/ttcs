import React, { useState, useEffect } from "react";

import { SwiperSlide, Swiper } from "swiper/react";

import MovieCard from "../MovieCard/MovieCard";
import Loading from "../Loading/Loading";

import tmdbApi, { category } from "../../api/tmdbApi";

import "./MovieList.scss";

const MovieList = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== "similar") {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {
                            params,
                        });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {
                            params,
                        });
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id, {
                    params,
                });
            }
            setItems(response.results);
            setLoading(false);
        };
        getList();
    }, []);

    return (
        <>
            {loading && <Loading />}
            <div className='movie-list'>
                <Swiper
                    grabCursor={true}
                    spaceBetween={15}
                    slidesPerView={"auto"}
                    speed={800}
                >
                    {items.map((item, i) => (
                        <SwiperSlide key={i} className='swiper-slide'>
                            <MovieCard item={item} category={props.category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default MovieList;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import apiConfig from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";

import Button, { OutlineButton } from "../button/Button";
import TrailerModal from "../trailer-modal/TrailerModal";

import "./hero-slide.scss";

const HeroSlide = () => {
    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = {
                api_key: apiConfig.apiKey,
                language: apiConfig.language,
                page: 1,
            };
            try {
                const response = await tmdbApi.getMoviesList(
                    movieType.popular,
                    { params }
                );
                setMovieItems(response.results.slice(0, 10));
            } catch {
                console.log("error");
            }
        };
        getMovies();
    }, []);

    return (
        <div className='hero-slide'>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                loop={true}
                speed={700}
            >
                {movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {({ isActive }) => (
                            <HeroSlideItem
                                item={item}
                                className={`${isActive ? "active" : ""}`}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

const HeroSlideItem = (props) => {
    let navigate = useNavigate();
    const item = props.item;

    const background = apiConfig.originalImage(
        item.backdrop_path ? item.backdrop_path : item.poster_path
    );

    const [showTrailerModal, setShowTrailerModal] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");

    useEffect(() => {
        const getTrailer = async () => {
            const params = {
                api_key: apiConfig.apiKey,
                language: apiConfig.language,
            };
            const videos = await tmdbApi.getVideos(category.movie, item.id, {
                params,
            });

            if (videos.results.length > 0) {
                setVideoSrc(
                    `http://youtube.com/embed/${videos.results[0].key}`
                );
            } else {
                setVideoSrc("");
            }
        };
        getTrailer();
    }, []);

    const handleOnClick = () => {
        setShowTrailerModal(true);
    };

    return (
        <>
            <div
                className={`hero-slide__item ${props.className}`}
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className='hero-slide__item__content'>
                    <div className='hero-slide__item__content__poster'>
                        <img
                            src={
                                item.poster_path
                                    ? apiConfig.w500Image(item.poster_path)
                                    : apiConfig.w500Image(item.backdrop_path)
                            }
                            alt=''
                        />
                    </div>
                    <div className='hero-slide__item__content__infor'>
                        <h2 className='title'>{item.title}</h2>
                        <div className='overview'>{item.overview}</div>
                        <div className='btns'>
                            <Button
                                onClick={() => navigate("/movie/" + item.id)}
                            >
                                Watch Now
                            </Button>
                            <OutlineButton onClick={handleOnClick}>
                                Watch trailer
                            </OutlineButton>
                        </div>
                    </div>
                </div>
            </div>
            {showTrailerModal && (
                <TrailerModal
                    videoSrc={videoSrc}
                    visible={showTrailerModal}
                    setVisible={setShowTrailerModal}
                />
            )}
        </>
    );
};

export default HeroSlide;

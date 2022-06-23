import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import apiConfig from "../../api/apiConfig";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";

import Button, { OutlineButton } from "../Button/Button";
import Modal from "../Modal/Modal";
import TrailerModal from "../TrailerModal/TrailerModal";
import Loading from "../Loading/Loading";

import "./Slide.scss";

const Slide = () => {
    const [movieItems, setMovieItems] = useState([]);
    const [showTrailerModal, setShowTrailerModal] = useState(false);
    const [videoSrc, setVideoSrc] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getMovies = async () => {
            const params = {
                page: 1,
            };
            try {
                const response = await tmdbApi.getMoviesList(
                    movieType.popular,
                    { params }
                );
                setMovieItems(response.results.slice(0, 10));
                setLoading(false);
            } catch {
                setLoading(false);
                console.log("error");
            }
        };
        getMovies();
    }, []);

    // Khi lấy được data(videoSrc) thì showModal và setVideoSrc cho modal
    const getTrailer = (data) => {
        setShowTrailerModal(true);
        setVideoSrc(data);
    };

    return (
        <>
            {loading && <Loading />}
            <div className='slide'>
                <Swiper
                    modules={[Autoplay]}
                    grabCursor={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    speed={700}
                >
                    {movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <SlideItem
                                    item={item}
                                    className={`${isActive ? "active" : ""}`}
                                    getTrailer={getTrailer}
                                />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                {showTrailerModal && (
                    <Modal setShowModal={setShowTrailerModal}>
                        <TrailerModal videoSrc={videoSrc} />
                    </Modal>
                )}
            </div>
        </>
    );
};

const SlideItem = (props) => {
    let navigate = useNavigate();
    const item = props.item;
    let maxLength;
    if (window.innerWidth < 740) {
        maxLength = 150;
    } else {
        maxLength = 310;
    }

    const background = apiConfig.originalImage(
        item.backdrop_path ? item.backdrop_path : item.poster_path
    );

    const [videoSrc, setVideoSrc] = useState("");

    useEffect(() => {
        const getTrailerSrc = async () => {
            const params = {};
            const videos = await tmdbApi.getVideos(category.movie, item.id, {
                params,
            });

            if (videos.results.length > 0) {
                setVideoSrc(
                    `https://youtube.com/embed/${videos.results[0].key}`
                );
            } else {
                setVideoSrc("");
            }
        };
        getTrailerSrc();
    }, [item.id]);

    const handleOnClick = () => {
        props.getTrailer(videoSrc);
    };

    return (
        <>
            <div
                className={`slide__item ${props.className}`}
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className='slide__item__content'>
                    <div className='slide__item__content__poster'>
                        <img
                            src={
                                item.poster_path
                                    ? apiConfig.w500Image(item.poster_path)
                                    : apiConfig.w500Image(item.backdrop_path)
                            }
                            alt=''
                        />
                    </div>
                    <div className='slide__item__content__info'>
                        <h3 className='title'>{item.title}</h3>
                        <p className='overview'>
                            {item.overview.length > maxLength
                                ? item.overview.substring(0, maxLength) + " ..."
                                : item.overview}
                        </p>
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
        </>
    );
};

export default Slide;

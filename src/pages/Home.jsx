import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../components/Button/Button";
import HeroSlide from "../components/Slide/Slide";
import MovieList from "../components/MovieList/MovieList";
import Loading from "../components/Loading/Loading";

import { category, movieType, tvType } from "../api/tmdbApi";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loading = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => {
            clearTimeout(loading);
        };
    }, []);

    return (
        <>
            {isLoading && <Loading />}
            <HeroSlide />
            <div className='home-container'>
                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Trending Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList
                        category={category.movie}
                        type={movieType.popular}
                    />
                </div>

                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Top Rated Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className='small'>
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList
                        category={category.movie}
                        type={movieType.top_rated}
                    />
                </div>

                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Trending TV</h2>
                        <Link to='/tv'>
                            <OutlineButton className='small'>
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular} />
                </div>

                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Top Rated TV</h2>
                        <Link to='/tv'>
                            <OutlineButton className='small'>
                                View more
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated} />
                </div>
            </div>
        </>
    );
};

export default Home;

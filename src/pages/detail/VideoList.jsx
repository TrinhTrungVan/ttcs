import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";

const VideoList = (props) => {
    const { category } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const params = {};
            const response = await tmdbApi.getVideos(category, props.id, {
                params,
            });
            setVideos(response.results.slice(0, 3));
        };
        getVideos();
    }, [category, props.id]);

    return (
        <>
            {videos.map((item, i) => (
                <Video key={i} item={item} />
            ))}
        </>
    );
};

const Video = (props) => {
    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
        iframeRef.current.setAttribute("height", height);
    }, []);

    return (
        <div className='video'>
            <div className='video__title'>
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://youtube.com/embed/${item.key}`}
                allowFullScreen='allowfullscreen'
                ref={iframeRef}
                frameBorder='0'
                width='100%'
                title='video'
            ></iframe>
        </div>
    );
};

export default VideoList;

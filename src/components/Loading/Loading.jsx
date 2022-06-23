import React from "react";

import "./Loading.scss";

import loading_icon from "../../assets/loading.png";

const Loading = () => {
    return (
        <div className='loading-background'>
            <img className='loading' src={loading_icon} />
        </div>
    );
};

export default Loading;

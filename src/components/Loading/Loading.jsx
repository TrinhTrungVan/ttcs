import React from "react";

import "./Loading.scss";

const Loading = () => {
    return (
        <div className='loading-background'>
            <div className='loading'>
                <i className='bx bx-loader'></i>
            </div>
        </div>
    );
};

export default Loading;

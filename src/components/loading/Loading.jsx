import React from "react";

import "./loading.scss";

const Loading = () => {
    return (
        <div className='container'>
            <div className='dot'>
                <i className='bx bxs-circle'></i>
            </div>
            <div className='dot'>
                <i className='bx bxs-circle'></i>
            </div>
            <div className='dot'>
                <i className='bx bxs-circle'></i>
            </div>
        </div>
    );
};

export default Loading;

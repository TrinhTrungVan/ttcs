import React from "react";

import "./trailer-modal.scss";

const TrailerModal = (props) => {
    let content;
    if (props.videoSrc === "") {
        content = <div>No trailer.</div>;
    } else {
        content = (
            <div className='trailer-modal__container'>
                <iframe
                    src={props.videoSrc}
                    title='trailer'
                    allowFullScreen='allowfullscreen'
                ></iframe>
            </div>
        );
    }

    return content;
};
export default TrailerModal;

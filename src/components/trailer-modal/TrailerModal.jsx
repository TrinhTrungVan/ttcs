import React from "react";
import ReactDOM from "react-dom";

import Modal from "../modal/Modal";

import "./trailer-modal.scss";

const TrailerModal = (props) => {
    let content;
    if (props.videoSrc === "") {
        content = (
            <Modal visible={props.visible} setVisible={props.setVisible}>
                No trailer.
            </Modal>
        );
    } else {
        content = (
            <Modal visible={props.visible} setVisible={props.setVisible}>
                <div className='trailer-modal__container'>
                    <iframe
                        src={props.videoSrc}
                        title='trailer'
                        allowFullScreen='allowfullscreen'
                    ></iframe>
                </div>
            </Modal>
        );
    }

    return ReactDOM.createPortal(
        content,
        document.getElementById("trailer-modal")
    );
};
export default TrailerModal;

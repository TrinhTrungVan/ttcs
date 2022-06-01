import React from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = (props) => {
    const handleOnClick = () => {
        props.setVisible(false);
    };

    return (
        <div
            id={props.id}
            className={`modal__overlay ${props.visible ? "active" : ""}`}
            onClick={handleOnClick}
        >
            <div
                className='modal__content'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='modal__close' onClick={handleOnClick}>
                    <i className='bx bx-x'></i>
                </div>
                {props.children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string,
};

export default Modal;

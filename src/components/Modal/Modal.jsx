import React from "react";
import { motion } from "framer-motion";

import "./Modal.scss";

const Modal = (props) => {
    const handleOnClick = () => {
        props.setShowModal(false);
    };
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.3,
            }}
            className='modal__backdrop'
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: -100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                }}
                className='modal__content'
            >
                <div className='modal__close' onClick={handleOnClick}>
                    <i className='bx bx-x'></i>
                </div>
                {props.children}
            </motion.div>
        </motion.div>
    );
};

export default Modal;

import React from "react";

import "./input.scss";

const Input = (props) => {
    return (
        <div className='form-group'>
            <input
                id={props.id}
                className={`${props.id} invalid`}
                type={props.type}
            />
            <label htmlFor={props.id}>{props.label}</label>
            <span className='line'></span>
            {/* <span className='text-error'>{props.textError}</span> */}
        </div>
    );
};

export default Input;

import React, { useEffect, useState } from "react";

import "./Input.scss";

const Input = (props) => {
    // const [enteredValue, setEnteredValue] = useState("");
    // const [isTouched, setIsTouched] = useState(false);
    // const [isValid, setIsValid] = useState(true);

    // const changeHandler = (event) => {
    //     setEnteredValue(event.target.value);
    // };

    // const blurHandler = () => {
    //     setIsTouched(true);
    // };

    // useEffect(() => {
    //     if (enteredValue.trim() === "") {
    //         setIsValid(false);
    //     } else {
    //         setIsValid(true);
    //     }
    // }, [enteredValue]);
    // console.log(props);

    return (
        <div
            className={`form-group ${
                props.isTouched && props.textError ? "invalid" : ""
            }`}
        >
            <input
                id={props.id}
                className={`${props.id}`}
                type={props.type}
                placeholder=' '
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            <label htmlFor={props.id}>{props.label}</label>
            {props.isTouched && props.textError && (
                <>
                    <span className='text-error'>{props.textError}</span>
                    <i className='bx bxs-error-circle'></i>
                </>
            )}
        </div>
    );
};

export default Input;

import React, { useEffect, useState } from "react";

import "./input.scss";

// const inputReducer = (state, action) => {
//     switch (action.type){
//         case "CHANGE":
//             return
//     }
// }

const Input = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const changeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const blurHandler = () => {
        setIsTouched(true);
        if (enteredValue !== "") {
            setIsValid(true);
        }
    };

    useEffect(() => {
        if (enteredValue.trim() == "") {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [enteredValue]);

    return (
        <div className={`form-group ${!isValid && isTouched ? "invalid" : ""}`}>
            <input
                id={props.id}
                className={`${props.id}`}
                type={props.type}
                placeholder=' '
                value={enteredValue}
                onChange={changeHandler}
                onBlur={blurHandler}
            />
            <label htmlFor={props.id}>{props.label}</label>
            {!isValid && isTouched && (
                <>
                    <span className='text-error'>{props.textError}</span>
                    <i className='bx bxs-error-circle'></i>
                </>
            )}
        </div>
    );
};

export default Input;

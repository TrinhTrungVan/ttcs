import React from 'react';
import PropsTypes from 'prop-types';

import './button.scss';

const Button = (props) => {
    return (
        <button
            className={`btn ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    );
}

export const OutlineButton = (props) => {
    return (
        <Button
            className={`btn-outline ${props.className}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    )
}

Button.propTypes = {
    onClick: PropsTypes.func
}

export default Button;
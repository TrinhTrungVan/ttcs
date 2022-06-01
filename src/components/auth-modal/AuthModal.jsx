import React, { useState } from "react";

import { OutlineButton } from "../button/Button";
import Input from "../input/Input";
import Modal from "../modal/Modal";

import "./auth-modal.scss";

const AuthModal = (props) => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const handleOnClick = () => {
        setIsSignInForm((prev) => !prev);
    };

    return (
        <Modal visible={props.visible} setVisible={props.setVisible}>
            <div
                className={`auth-modal__background ${
                    isSignInForm ? "active" : ""
                }`}
            >
                <div className='question'>
                    <h2>Already Have an Account ?</h2>
                    <OutlineButton onClick={handleOnClick}>
                        Sign in
                    </OutlineButton>
                </div>
                <div className='question'>
                    <h2>Don't Have an Account ?</h2>
                    <OutlineButton onClick={handleOnClick}>
                        Sign up
                    </OutlineButton>
                </div>
                <div className={`auth-form ${isSignInForm ? "active" : ""}`}>
                    <h3>{isSignInForm ? "Sign In" : "Sign Up"}</h3>
                    <form action=''>
                        <Input
                            id='username'
                            type='text'
                            label='Username'
                            textError='Please enter a valid username.'
                        />
                        {!isSignInForm && (
                            <Input
                                id='email'
                                type='email'
                                label='Email'
                                textError='Please enter a valid email.'
                            />
                        )}
                        <Input
                            id='password'
                            type='password'
                            label='Password'
                            textError='Please enter a valid password (at least 5 characters).'
                        />
                        {!isSignInForm && (
                            <Input
                                id='repeat-password'
                                type='password'
                                label='Repeat Password'
                                textError='Please re-enter your password.'
                            />
                        )}
                        <button className='submit-btn'>
                            {isSignInForm ? "Sign In" : "Sign Up"}
                            <i className='bx bx-chevron-right'></i>
                        </button>

                        {isSignInForm && (
                            <div className='socials'>
                                <h4 className='text__orConnect'>
                                    or Connect with Social Media
                                </h4>
                                <div className='social facebook'>
                                    <i className='bx bxl-facebook'></i>
                                    Sign In with Facebook
                                </div>
                                <div className='social twitter'>
                                    <i className='bx bxl-twitter'></i>
                                    Sign In with Twitter
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default AuthModal;

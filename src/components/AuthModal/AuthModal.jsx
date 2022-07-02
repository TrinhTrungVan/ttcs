import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { OutlineButton } from "../Button/Button";

import "./AuthModal.scss";

const AuthModal = (props) => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const handleOnClick = () => {
        setIsSignInForm((prev) => !prev);
    };

    return (
        <div
            className={`auth-modal__background ${isSignInForm ? "active" : ""}`}
        >
            <div className='question'>
                <h2>Already Have an Account ?</h2>
                <OutlineButton onClick={handleOnClick}>Sign in</OutlineButton>
            </div>
            <div className='question'>
                <h2>Don't Have an Account ?</h2>
                <OutlineButton onClick={handleOnClick}>Sign up</OutlineButton>
            </div>
            <div className={`auth-form ${isSignInForm ? "active" : ""}`}>
                <h3>{isSignInForm ? "Sign In" : "Sign Up"}</h3>
                {isSignInForm ? <SignInForm /> : <SignUpForm />}
            </div>
        </div>
    );
};

const SignInForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleDisplayPassword = () => {
        setShowPassword(!showPassword);
    };
    const formik = useFormik({
        initialValues: {
            userName: "",
            password: "",
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .min(5, "Username must be 5-15 characters.")
                .max(15, "Username must be 5-15 characters.")
                .required("Username is a required field."),
            password: Yup.string()
                .min(5, "Password must have at least 5 characters.")
                .required("Password is a required field."),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form action='' autoComplete='off' onSubmit={formik.handleSubmit}>
            <div
                className={`form-group ${
                    formik.touched.userName && formik.errors.userName
                        ? "invalid"
                        : ""
                }`}
            >
                <input
                    id='userName'
                    name='userName'
                    type='text'
                    placeholder=' '
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                />
                <label htmlFor='userName'>Username</label>
                {formik.touched.userName && formik.errors.userName && (
                    <span className='text-error'>{formik.errors.userName}</span>
                )}
            </div>
            <div
                className={`form-group ${
                    formik.touched.password && formik.errors.password
                        ? "invalid"
                        : ""
                }`}
            >
                <input
                    id='password'
                    name='password'
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder=' '
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                <div
                    className='password--display'
                    onClick={handleDisplayPassword}
                >
                    {showPassword ? (
                        <i className='bx bx-show'></i>
                    ) : (
                        <i className='bx bx-hide'></i>
                    )}
                </div>
                <label htmlFor='userName'>Password</label>
                {formik.touched.password && formik.errors.password && (
                    <span className='text-error'>{formik.errors.password}</span>
                )}
            </div>
            <button
                type='submit'
                className='submit-btn'
                disabled={
                    Object.keys(formik.errors).length === 0 ? false : true
                }
            >
                Sign In
                <i className='bx bx-chevron-right'></i>
            </button>

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
        </form>
    );
};

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleDisplayPassword = () => {
        setShowPassword(!showPassword);
    };

    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: Yup.object({
            userName: Yup.string()
                .min(5, "Username must be 5-15 characters.")
                .max(15, "Username must be 5-15 characters.")
                .required("Username is a required field."),
            email: Yup.string()
                .email("Invalid email.")
                .required("Email is a required field."),
            password: Yup.string()
                .min(5, "Password must have at least 5 characters.")
                .required("Password is a required field."),
            repeatPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Password incorrect.")
                .required("Password is a required field."),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form action='' autoComplete='off' onSubmit={formik.handleSubmit}>
            <div
                className={`form-group ${
                    formik.touched.userName && formik.errors.userName
                        ? "invalid"
                        : ""
                }`}
            >
                <input
                    id='userName'
                    name='userName'
                    type='text'
                    placeholder=' '
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                />
                <label htmlFor='userName'>Username</label>
                {formik.touched.userName && formik.errors.userName && (
                    <span className='text-error'>{formik.errors.userName}</span>
                )}
            </div>
            <div
                className={`form-group ${
                    formik.touched.email && formik.errors.email ? "invalid" : ""
                }`}
            >
                <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder=' '
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                <label htmlFor='email'>Email</label>
                {formik.touched.email && formik.errors.email && (
                    <span className='text-error'>{formik.errors.email}</span>
                )}
            </div>
            <div
                className={`form-group ${
                    formik.touched.password && formik.errors.password
                        ? "invalid"
                        : ""
                }`}
            >
                <input
                    id='password'
                    name='password'
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder=' '
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                <div
                    className='password--display'
                    onClick={handleDisplayPassword}
                >
                    {showPassword ? (
                        <i className='bx bx-show'></i>
                    ) : (
                        <i className='bx bx-hide'></i>
                    )}
                </div>
                <label htmlFor='userName'>Password</label>
                {formik.touched.password && formik.errors.password && (
                    <span className='text-error'>{formik.errors.password}</span>
                )}
            </div>
            <div
                className={`form-group ${
                    formik.touched.repeatPassword &&
                    formik.errors.repeatPassword
                        ? "invalid"
                        : ""
                }`}
            >
                <input
                    id='repeatPassword'
                    name='repeatPassword'
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder=' '
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.repeatPassword}
                />
                <label htmlFor='userName'>Repeat password</label>
                {formik.touched.repeatPassword &&
                    formik.errors.repeatPassword && (
                        <span className='text-error'>
                            {formik.errors.repeatPassword}
                        </span>
                    )}
            </div>
            <button
                className='submit-btn'
                type='submit'
                disabled={
                    Object.keys(formik.errors).length === 0 ? false : true
                }
            >
                Sign Up
                <i className='bx bx-chevron-right'></i>
            </button>
        </form>
    );
};

export default AuthModal;

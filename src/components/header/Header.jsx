import React, { useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import AuthModal from "../auth-modal/AuthModal";
import Button from "../button/Button";
import "./header.scss";

const Header = () => {
    const headerRef = useRef(null);

    let navigate = useNavigate();

    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
        };
        window.addEventListener("scroll", shrinkHeader);
        return () => {
            window.removeEventListener("scroll", shrinkHeader);
        };
    }, []);

    const setModalActive = () => {
        const modal = document.querySelector("#auth-modal");
        modal.classList.toggle("active");
    };

    return (
        <>
            <div ref={headerRef} className='header'>
                <div className='header__wrap container'>
                    <div className='logo'>
                        <img src={logo} alt='' />
                        <Link to='/'>vMovies</Link>
                    </div>
                    <div className='header__nav'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/movie'>Movies</NavLink>
                        <NavLink to='/tv'>TV Series</NavLink>
                    </div>
                    <span></span>
                    <div className='search' onClick={() => navigate("/movie")}>
                        <i className='bx bx-search'></i>
                    </div>
                    <div className='signin'>
                        <Button className='medium' onClick={setModalActive}>
                            Sign In
                        </Button>
                    </div>
                </div>
            </div>
            <AuthModal />
        </>
    );
};

export default Header;

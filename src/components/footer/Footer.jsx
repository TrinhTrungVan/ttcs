import React from "react";
import { Link } from "react-router-dom";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/logo.png";

import "./Footer.scss";

const Footer = () => {
    return (
        <div className='footer' style={{ backgroundImage: `url(${bg})` }}>
            <div className='footer__content container'>
                <div className='footer__content__contact'>
                    <div className='logo'>
                        <img src={logo} alt='' />
                        <Link to='/'>vMovies</Link>
                    </div>
                    <div className='footer__content__contact__infor'>
                        <div className='phone'>
                            <i className='bx bxs-phone-call'></i>
                            <span>0338886754</span>
                        </div>
                        <div className='email'>
                            <i className='bx bxs-envelope'></i>
                            <span>vantrinhtrung@gmail.com</span>
                        </div>
                        <div className='socials'>
                            <a href='https://www.facebook.com/TrungVan.1904'>
                                <i className='bx bxl-facebook-circle'></i>
                            </a>
                            <a href='https://www.facebook.com/TrungVan.1904'>
                                <i className='bx bxl-google-plus-circle'></i>
                            </a>
                            <a href='https://www.facebook.com/TrungVan.1904'>
                                <i className='bx bxl-twitter'></i>
                            </a>
                            <a href='https://www.facebook.com/TrungVan.1904'>
                                <i className='bx bxl-instagram-alt'></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='footer__content__menus'>
                    <div className='footer__content__menu'>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Contact us</Link>
                        <Link to='/'>Term of services</Link>
                        <Link to='/'>About us</Link>
                    </div>
                    <div className='footer__content__menu'>
                        <Link to='/'>Live</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Premium</Link>
                        <Link to='/'>Pravacy policy</Link>
                    </div>
                    <div className='footer__content__menu'>
                        <Link to='/'>You must watch</Link>
                        <Link to='/'>Recent release</Link>
                        <Link to='/'>Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

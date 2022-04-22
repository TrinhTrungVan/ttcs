import React, { useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';

import './header.scss';

import logo from '../../assets/logo.png';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
]

const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    let navigate = useNavigate();

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    const setModalActive = () => {
        const modal = document.querySelector('#auth-modal');
        modal.classList.toggle('active');
    }

    return (
        <>
            <div ref={headerRef} className="header">
                <div className="header__wrap container">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to='/'>vMovies</Link>
                    </div>
                    <ul className="header__nav">
                        {
                            headerNav.map((e, i) => (
                                <li key={i} className={`${i === active ? 'active' : ''}`}>
                                    <Link to={e.path}>
                                        {e.display}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <span></span>
                    <div className="search" onClick={() => navigate('/movie')}>
                        <i className='bx bx-search'></i>
                    </div>
                    <div className="signin">
                        <Button className="medium" onClick={setModalActive}>Sign In</Button>
                    </div>
                </div>
            </div>
            <AuthModal></AuthModal>
        </>
    );
}

const AuthModal = () => {

    const authModalBg = useRef(null);

    const handleOnclick = () => {
        authModalBg.current.classList.toggle('active');
    }

    return (
        <Modal active={false} id="auth-modal">
            <ModalContent>
                <div className="auth-modal__background" ref={authModalBg}>
                    <div className="box signin">
                        <h2>Already Have an Account ?</h2>
                        <OutlineButton onClick={handleOnclick}>Sign in</OutlineButton>
                    </div>
                    <div className="box signup">
                        <h2>Don't Have an Account ?</h2>
                        <OutlineButton onClick={handleOnclick}>Sign up</OutlineButton>
                    </div>
                    <div className="formBx">
                        <div className="form signinForm">
                            <h3>Sign In</h3>
                            <form action="">
                                <div className="form-group">
                                    <input type="text" name="" required />
                                    <label htmlFor="">Email Address</label>
                                    <span></span>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="" required />
                                    <label htmlFor="">Password</label>
                                    <span></span>
                                </div>
                                <button>
                                    CONTINUE
                                    <i className='bx bx-chevron-right'></i>
                                </button>
                                <div className="socials">
                                    <h4 className="text__orConnect"> or Connect with Social Media</h4>
                                    <div className="social facebook">
                                        <i className='bx bxl-facebook' ></i>
                                        Sign In with Facebook
                                    </div>
                                    <div className="social twitter">
                                        <i className='bx bxl-twitter'></i>
                                        Sign In with Twitter
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </ModalContent>
        </Modal>
    )
}

export default Header;
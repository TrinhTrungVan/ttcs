import React, { useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Button from '../button/Button';
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
    return (
        <Modal active={false} id="auth-modal">
            <ModalContent>
                TrungVan
            </ModalContent>
        </Modal>
    )
}

export default Header;
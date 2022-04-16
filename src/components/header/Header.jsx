import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../button/Button';

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

    const active = headerNav.findIndex(e => e.path === pathname)

    return (
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
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <i className='bx bx-search'></i>
                </div>
                <div className="signin">
                    <Button className="medium">Sign In</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
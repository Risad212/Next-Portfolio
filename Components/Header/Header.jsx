import React from 'react';
import header from './Header.module.css';

const Header = () => {
    return (
        <div className={header.header}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div class={header.logo}>
                        <a href="#">Next Portfolio</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className={header.navItem}>
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className={header.navItem}>
                                <a className="nav-link" href="#">About Me</a>
                            </li>
                            <li className={header.navItem}>
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className={header.navItem}>
                                <a className="nav-link" href="#">Portfolio</a>
                            </li>
                            <li className={`${header.navItem} ${header.navButton}`}>
                                <a className="nav-link" href="#">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
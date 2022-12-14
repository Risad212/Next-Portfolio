import React from 'react';
import header from './Header.module.css';

const Header = () => {
    return (
        <div className={header.header}>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className={header.navbarBrand} href="#">NEXT PORTFOLIO</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                                <li className={header.navItem}>
                                    <a className="nav-link"href="#">Home</a>
                                </li>
                                <li className={header.navItem}>
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li className={header.navItem}>
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className={header.navItem}>
                                    <a className="nav-link" href="#">Portfolio</a>
                                </li>
                                <li className={`${header.navItem} ${header.navButton}`}>
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
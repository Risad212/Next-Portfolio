import React from 'react';
import header from './Header.module.css';

const Header = () => {
    return (
        <div className={header.header}>
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class={header.navbarBrand} href="#">MONARCHY</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav ms-auto">
                                <li class={header.navItem}>
                                    <a class="nav-link"href="#">Home</a>
                                </li>
                                <li class={header.navItem}>
                                    <a class="nav-link" href="#">Blog</a>
                                </li>
                                <li class={header.navItem}>
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                                <li class={header.navItem}>
                                    <a class="nav-link" href="#">Portfolio</a>
                                </li>
                                <li class={header.navItem}>
                                    <a class="nav-link" href="#">Contact</a>
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
import React from 'react';
import footer from './Footer.module.css';

const Footer = () => {
    return (
        <div className={footer.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3><a href="#">RISAD DEV ZONE</a></h3>
                        <ul className={footer.footerLink}>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact Me</a></li>
                        </ul>
                        <ul className={footer.socialIcon}>
                            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                        </ul>
                         <span className={footer.copy}>© Copyright 2022| Risad</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
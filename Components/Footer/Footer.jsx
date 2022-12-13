import React from 'react';
import footer from './Footer.module.css';

const Footer = () => {
    return (
        <div className={footer.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                    <div className={footer.footer1}>
                        <h3>MONARCHY</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nostrum culpa commodi similique qui, eaque necessitatibus, saepe hic repellat suscipit.</p>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className={footer.footer2}>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>hello@mydomain.com</li>
                            <li>+1 829 2293 382</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className={footer.footer3}>
                        <h3>Home</h3>
                        <ul>
                            <li>Blog</li>
                            <li>Services</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-3">
                    <div className={footer.footer4}>
                        <h3>Home</h3>
                        <ul>
                            <li>Blog</li>
                            <li>Services</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
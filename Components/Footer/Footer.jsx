import Image from 'next/image';
import React from 'react';
/*-- import social icons --*/
import fb from '../../Media/fb.svg';
import twi from '../../Media/twi.svg';
import inst from '../../Media/inst.svg';
import linkin from '../../Media/linkin.svg'
import footer from './Footer.module.css';

const Footer = () => {
    return (
        <div className={footer.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <div className={footer.footer1}>
                        <h3>NEXT PORTFOLIO</h3>
                        <p>We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className={footer.footer2}>
                        <h3>Features</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Me</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Contact Me</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className={footer.footer3}>
                        <h3>Folow Us</h3>
                        <ul>
                            <li><a href="#"><Image src={fb} alt="facebook"/></a></li>
                            <li><a href="#"><Image src={twi} alt="twitter"/></a></li>
                            <li><a href="#"><Image src={inst} alt="instragram"/></a></li>
                            <li><a href="#"><Image src={linkin} alt="linkedin"/></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-4">
                    <div className={footer.footer4}>
                        <h3>Subscribe Newsletter</h3>
                         <input type="text" className={footer.input}/>
                         <input type="submit" value="Submit" className={footer.submit}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
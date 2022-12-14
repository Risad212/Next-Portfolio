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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit nostrum culpa commodi similique qui, eaque necessitatibus, saepe hic repellat suscipit.</p>
                    </div>
                    </div>
                    <div className="col-2">
                    <div className={footer.footer2}>
                        <h3>Features</h3>
                        <ul>
                            <li>About Me</li>
                            <li>Services</li>
                            <li>Skils</li>
                            <li>Portfolio</li>
                            <li>Contact Me</li>
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
import React from 'react';
import abImg from '../../Media/about.svg';
import Image from 'next/image';
import about from './about.module.css';

const About = () => {
    return (
        <div style={{ padding: '5rem 0' }}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Image src={abImg} alt="developer" className="img-fluid" />
                    </div>
                    <div className="col-6">
                        <div className={about.abtxt}>
                            <span>ABOUT ME</span>
                            <h2>Front-End Developer</h2>
                            <p>I'm a Frontend Web Developer Build scalable client-side web applications with modern features I convert data to a graphical interface, through the front-end technology so that users can view and interact with that data. I enjoy working with talented people to create digital products for both business and consumer use. I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people</p>
                            <button>Download CV</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import banner from './Banner.module.css';
import devImg from '../../Media/men.svg';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className={banner.banner}>
           <div className="container">
              <div className="row align-items-center justify-content-center">
                 <div className="col-md-7">
                    <div className={banner.bannerContent}>
                        <Image src={devImg} alt="developer"/>
                        <h2>HM Risad</h2>
                        <h4>Front-End Developer</h4>
                        <p>I Build scalable client-side web applications with modern features I convert data to a graphical interface, through the front-end technology so that users can view and interact with that data</p>
                        <button>Contact Me</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default Banner;
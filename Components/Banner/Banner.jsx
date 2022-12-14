import React from 'react';
import banner from './Banner.module.css';
import devImg from '../../Media/dev-ed-wave.png';
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
                        <p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I love to solve real-world problems. I am strategic, and goal-oriented, and always work with an end goal in mind.</p>
                        <button>Hire Me</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default Banner;
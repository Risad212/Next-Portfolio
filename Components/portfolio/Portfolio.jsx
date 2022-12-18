import React from 'react';
import portfolio from './portfolio.module.css';
import Image from 'next/image';
import wp from '../../Media/wp.jpg';
import react from '../../Media/react.jpg';
import html from '../../Media/html.jpg'

const Portfolio = () => {
    return (
        <div className={portfolio.portfolio}>
            <div className="container">
                <div className={portfolio.title}>
                    <span>portfolio</span>
                    <h1>My Latest Projects</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={portfolio.pcard}>
                             <div className={portfolio.overlay}>
                                  <h5>Echo</h5>
                                  <a href="#">See live site</a>
                             </div>
                            <Image src={html} alt="wordpress" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={portfolio.pcard}>
                            <div className={portfolio.overlay}>
                                <h5>Dmarketing24</h5>
                                <a href="#">See live site</a>
                            </div>
                            <Image src={wp} alt="wordpress" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={portfolio.pcard}>
                            <div className={portfolio.overlay}>
                                <h5>Sunlite Mortgage</h5>
                                <a href="https://sunlite-mortgage.netlify.app/">See live site</a>
                            </div>
                            <Image src={react} alt="wordpress" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
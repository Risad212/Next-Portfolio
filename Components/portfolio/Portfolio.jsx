import React from 'react';
import portfolio from './portfolio.module.css';
import Image from 'next/image';
/*-- import images --*/
import wp from '../../Media/wp.jpg';
import react from '../../Media/react.jpg';
import html from '../../Media/html.jpg';
import edu from '../../Media/edu.jpg';
import res from '../../Media/res.jpg';
import tra from '../../Media/tra.jpg';
import chu from '../../Media/chu.jpg';
import edi from '../../Media/edi.jpg';


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
                                <a href="https://www.dmarketing24.com/">See live site</a>
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
                    {/*--- col ---*/}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={portfolio.pcard}>
                            <div className={portfolio.overlay}>
                                <h5>Eduhum</h5>
                                <a href="https://sunlite-mortgage.netlify.app/">See live site</a>
                            </div>
                            <Image src={edu} alt="wordpress" className='img-fluid' />
                        </div>
                    </div>
                    {/*--- col ---*/}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={portfolio.pcard}>
                            <div className={portfolio.overlay}>
                                <h5>Html color switch</h5>
                                <a href="#">See live site</a>
                            </div>
                            <Image src={chu} alt="wordpress" className='img-fluid' />
                        </div>
                    </div>
                    {/*--- col ---*/}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={portfolio.pcard}>
                            <div className={portfolio.overlay}>
                                <h5>Travel Agency</h5>
                                <a href="#">See live site</a>
                            </div>
                            <Image src={tra} alt="wordpress" className='img-fluid' />
                        </div>
                    </div>
                    {/*--- col ---*/}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={portfolio.pcard}>
                            <div className={portfolio.overlay}>
                                <h5>Rosa Resturant</h5>
                                <a href="#">See live site</a>
                            </div>
                            <Image src={res} alt="wordpress" className='img-fluid' />
                        </div>
                    </div>
                    {/*--- col ---*/}
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={portfolio.pcard}>
                            <div className={portfolio.overlay}>
                                <h5>Edification</h5>
                                <a href="#">See live site</a>
                            </div>
                            <Image src={edi} alt="wordpress" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
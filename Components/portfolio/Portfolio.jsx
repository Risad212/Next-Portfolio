import React from 'react';
import portfolio from './portfolio.module.css';
import wp from '../../Media/wp.jpg';
import Image from 'next/image';

const Portfolio = () => {
    return (
        <div className={portfolio.portfolio}>
            <div className="container">
                <div className={portfolio.title}>
                    <span>portfolio</span>
                    <h1>My Latest Projects</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className={portfolio.pcard}>
                            <Image src={wp} alt="wordpress" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={portfolio.pcard}>
                            <Image src={wp} alt="wordpress" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={portfolio.pcard}>
                            <Image src={wp} alt="wordpress" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
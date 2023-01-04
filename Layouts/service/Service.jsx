import React from 'react';
import service from './service.module.css';

const Service = () => {
    return (
        <div className={service.service}>
            <div className="container">
                <div className={service.title}>
                    <span>Services</span>
                    <h1>Which Services I Prodive</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={service.scard}>
                            <i class="fa-solid fa-code"></i>
                            <h4 className='mt-3'>Website Design</h4>
                            <p>“I will design a creative and unique website html Template Deisgn with Responsive use Bootstrap”</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={service.scard}>
                            <i class="fa-brands fa-wordpress"></i>
                            <h4 className='mt-3'>Wordpress</h4>
                            <p>“I Will Customize Wordpress Website Design Develope With Full E-commerce functionality”</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={service.scard}>
                            <i class="fa-brands fa-react"></i>
                            <h4 className='mt-3'>React</h4>
                            <p>“I Would love to Develope Front-end and Make Single Page App with React for Better User Experience”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
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
                            <p>“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={service.scard}>
                            <i class="fa-brands fa-wordpress"></i>
                            <h4 className='mt-3'>Wordpress</h4>
                            <p>“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={service.scard}>
                            <i class="fa-brands fa-react"></i>
                            <h4 className='mt-3'>React</h4>
                            <p>“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
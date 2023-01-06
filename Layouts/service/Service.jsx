import React from 'react';
import service from './service.module.css';
import { serviceData } from '../../Components/DummyData/DummyData';


const Service = () => {

    return (
        <div className={service.service}>
            <div className="container">
                <div className={service.title}>
                    <span>Services</span>
                    <h1>Which Services I Prodive</h1>
                </div>
                <div className="row g-5">
                    {
                        serviceData ?
                            serviceData.map((elem) => {
                                return (
                                    <>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className={service.scard}>
                                                <i class={`${elem.icon}`}></i>
                                                <h4 className='mt-3'>{elem.title}</h4>
                                                <p>{elem.disc}</p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                            :
                          'Data Not Found'
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;
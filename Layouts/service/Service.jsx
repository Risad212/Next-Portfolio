import React, { useState } from 'react';
import service from './service.module.css';
import { serviceData } from '../../Components/DummyData/DummyData';
import { Reorder} from "framer-motion";


const Service = () => {
    const [items,setItems] = useState(serviceData)

    return (
        <div className={service.service}>
            <div className="container">
                <div className={service.title}>
                    <span>Services</span>
                    <h1>Which Services I Prodive</h1>
                </div>
                <Reorder.Group  axis="x" onReorder={setItems} values={items} className="row g-5">
                    {
                        serviceData ?
                            serviceData.map((elem) => {
                                return (
                                    <>
                                        <Reorder.Item className="col-lg-4 col-md-6 col-sm-12" value={elem}>
                                            <div className={service.scard}>
                                                <i class={`${elem.icon}`}></i>
                                                <h4 className='mt-3'>{elem.title}</h4>
                                                <p>{elem.disc}</p>
                                            </div>
                                        </Reorder.Item>
                                    </>
                                )
                            })
                            :
                           <h1>Data Not Found</h1>
                    }
                </Reorder.Group>
            </div>
        </div>
    );
};

export default Service;
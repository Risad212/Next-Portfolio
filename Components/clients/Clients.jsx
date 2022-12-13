import React from 'react';
import client1 from '../../Media/client1.webp';
import Image from 'next/image';
import clients from './client.module.css';

const Clients = () => {
    return (
        <div>
            <div className="container">
                <div className={clients.head}>
                    <h2>Our Team</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className={clients.Card}>
                           <Image src={client1} className="img-fluid"/>
                           <ul className={clients.social}>
                               <li><a href="#">hello</a></li>
                               <li><a href="#">hello</a></li>
                               <li><a href="#">hello</a></li>
                               <li><a href="#">hello</a></li>
                            </ul>
                           <div className={clients.imgInfo}>
                              <h4>Kaiara Spencer</h4>
                              <span>CEO</span>
                            </div>
                        </div>
                    </div>
                    {/*-- column --*/}
                    <div className="col-3">
                        <div className="Card">
                           <Image src={client1} className="img-fluid"/>
                           <div className={clients.imgInfo}>
                              <h4>Dave Simpson</h4>
                              <span>Manager</span>
                            </div>
                        </div>
                    </div>
                    {/*-- column --*/}
                    <div className="col-3">
                        <div className="Card">
                           <Image src={client1} className="img-fluid"/>
                           <div className={clients.imgInfo}>
                              <h4>Ema Watson</h4>
                              <span>Founder</span>
                            </div>
                        </div>
                    </div>
                    {/*-- column --*/}
                    <div className="col-3">
                        <div className="Card">
                           <Image src={client1} className="img-fluid"/>
                           <div className={clients.imgInfo}>
                              <h4>Chris Stewart</h4>
                              <span>Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
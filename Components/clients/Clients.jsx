import React from 'react';
import Image from 'next/image';
import clients from './client.module.css';
// import client iamges
//====================================
import client1 from '../../Media/client1.jpg';
import client2 from '../../Media/client2.webp';
import client3 from '../../Media/client3.jpg';
import client4 from '../../Media/client4.jpg';
//import socail icons
//=====================================
import f from '../../Media/facebook.png';
import t from '../../Media/twitter.png';
import l from '../../Media/linkedin.svg';
import i from '../../Media/instragram.svg';


const Clients = () => {
    return (
        <div>
            <div className="container">
                <div className={clients.head}>
                    <h2>Our Team</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
                </div>
                <div className="row pt-4">
                    <div className="col-3">
                        <div className={clients.Card}>
                           <Image src={client1} className="img-fluid" alt='client'/>
                           <ul className={clients.social}>
                               <li><a href="#"><Image src={f} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={t} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={l} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={i} alt="social-icon"/></a></li>
                            </ul>
                           <div className={clients.imgInfo}>
                              <h4>Kaiara Spencer</h4>
                              <span>CEO</span>
                            </div>
                        </div>
                    </div>
                    {/*-- column --*/}
                    <div className="col-3">
                        <div className={clients.Card}>
                           <Image src={client2} className="img-fluid" alt='client'/>
                           <ul className={clients.social}>
                               <li><a href="#"><Image src={f} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={t} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={l} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={i} alt="social-icon"/></a></li>
                            </ul>
                           <div className={clients.imgInfo}>
                              <h4>Dave Simpson</h4>
                              <span>Manager</span>
                            </div>
                        </div>
                    </div>
                    {/*-- column --*/}
                    <div className="col-3">
                        <div className={clients.Card}>
                           <Image src={client3} className="img-fluid" alt='client'/>
                           <ul className={clients.social}>
                               <li><a href="#"><Image src={f} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={t} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={l} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={i} alt="social-icon"/></a></li>
                            </ul>
                           <div className={clients.imgInfo}>
                              <h4>Chris Stewart</h4>
                              <span>Founder</span>
                            </div>
                        </div>
                    </div>
                    {/*-- column --*/}
                    <div className="col-3">
                        <div className={clients.Card}>
                           <Image src={client4} className="img-fluid" alt='client'/>
                           <ul className={clients.social}>
                               <li><a href="#"><Image src={f} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={t} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={l} alt="social-icon"/></a></li>
                               <li><a href="#"><Image src={i} alt="social-icon"/></a></li>
                            </ul>
                           <div className={clients.imgInfo}>
                              <h4>Ema Watson</h4>
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
import Image from 'next/image';
import React from 'react';
import portfolio from './portfolio.module.css';
import p1 from '../../Media/p1.webp';
import p2 from '../../Media/p2.webp';
import p3 from '../../Media/p3.webp';

const Portfolio = () => {
    return (
        <div className={portfolio.portfolio}>
           <div className="container">
              <h1>Portfolio</h1>
              <div className="row">
                 <div className="col-4">
                    <div className={portfolio.card}>
                       <Image src={p1} alt="p1" className='img-fluid'/>
                    </div>
                 </div>
                {/*-- card --*/}
                <div className="col-4">
                    <div className={portfolio.card}>
                       <Image src={p2} alt="p1" className='img-fluid'/>
                    </div>
                 </div>
                 {/*-- card --*/}
                <div className="col-4">
                    <div className={portfolio.card}>
                       <Image src={p3} alt="p1" className='img-fluid'/>
                    </div>
                 </div>
              </div>
              {/*---- row --- */}
              <div className="row mt-5">
                 <div className="col-4">
                    <div className={portfolio.card}>
                       <Image src={p3} alt="p1" className='img-fluid'/>
                    </div>
                 </div>
                {/*-- card --*/}
                <div className="col-4">
                    <div className={portfolio.card}>
                       <Image src={p2} alt="p1" className='img-fluid'/>
                    </div>
                 </div>
                 {/*-- card --*/}
                <div className="col-4">
                    <div className={portfolio.card}>
                       <Image src={p1} alt="p1" className='img-fluid'/>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default Portfolio;
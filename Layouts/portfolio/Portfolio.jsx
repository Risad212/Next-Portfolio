import React, {useState } from 'react';
import portfolio from './portfolio.module.css';
import Image from 'next/image';
import { portfolioData } from '../../Components/DummyData/DummyData';


const Portfolio = () => {
    const [demo, setDemo] = useState(portfolioData);
    const buttonClick = (e) =>{
      const btnId = e.target.id;
      const updateDemo = demo.filter((elem) =>{
            return btnId === elem.category
      })
       setDemo(updateDemo)
     }

    return (
        <div className={portfolio.portfolio}>
            <div className="container">
                <div className={portfolio.title}>
                    <span>portfolio</span>
                    <h1>My Latest Projects</h1>
                </div>
                <ul className={portfolio.buttonList}>
                    <li><button id="all" onClick={(e) => buttonClick(e)}>all</button></li>
                    <li><button id="webdesign" onClick={(e) => buttonClick(e)}>Web Design</button></li>
                    <li><button id="react"onClick={(e) => buttonClick(e)}>React</button></li>
                    <li><button id="wordpress" onClick={(e) => buttonClick(e)}>Wordpress</button></li>
                </ul>
                <div className="row g-5">
                    {
                          demo.map((elem) => {
                                return(
                                    <>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className={portfolio.pcard}>
                                                <div className={portfolio.overlay}>
                                                    <h5>{elem.title}</h5>
                                                    <a href={`${elem.link}`}>Visit Website</a>
                                                </div>
                                                <Image src={elem.img} alt="wordpress" className='img-fluid' />
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;



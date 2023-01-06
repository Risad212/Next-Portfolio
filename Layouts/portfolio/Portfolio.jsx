import React, { useState } from 'react';
import portfolio from './portfolio.module.css';
import Image from 'next/image';
import { portfolioData } from '../../Components/DummyData/DummyData';
import { motion } from "framer-motion";




const Portfolio = () => {
    const [demo, setDemo] = useState(portfolioData)
    const buttonClick = (e) => {
        e.preventDefault
        const btnId = e.target.id;
        const updateItem = portfolioData.filter((elem) => {
            return btnId === elem.category;
        })
        setDemo(updateItem)
    }

    return (
        <div className={portfolio.portfolio}>
            <div className="container">
                <div className={portfolio.title}>
                    <span>portfolio</span>
                    <h1>My Latest Projects</h1>
                </div>
                <ul className={portfolio.buttonList}>
                    <li><button id="all" onClick={() => setDemo(portfolioData)}>all</button></li>
                    <li><button id="webdesign" onClick={(e) => buttonClick(e)}>Web Design</button></li>
                    <li><button id="react" onClick={(e) => buttonClick(e)}>React</button></li>
                    <li><button id="wordpress" onClick={(e) => buttonClick(e)}>Wordpress</button></li>
                </ul>
                <div className="row g-5">
                    {
                        demo ?
                            demo.map((elem) => {
                                return (
                                    <>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <motion.div initial={{ y: 10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -10, opacity: 0 }}
                                                transition={{ duration: 0.5 }}>
                                                 {/* transition end  */}
                                                <div className={portfolio.overlay}>
                                                    <h5>{elem.title}</h5>
                                                    <a href={`${elem.link}`}>Visit Website</a>
                                                </div>
                                                <Image src={elem.img} alt="wordpress" className='img-fluid' />
                                            </motion.div>
                                        </div>
                                    </>
                                )
                            })
                            :
                           'Error Data not Found'
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;



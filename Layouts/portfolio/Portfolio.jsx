import React from 'react';
import portfolio from './portfolio.module.css';
import Image from 'next/image';
/*-- import images --*/
import wp from '../../Media/wp.jpg';
import react from '../../Media/react.jpg';
import edu from '../../Media/edu.jpg';
import tra from '../../Media/tra.jpg';
import edi from '../../Media/edi.jpg';


const Portfolio = () => {
    const portObj = [
        {
            title: 'Dmarketing24',
            link: 'https://www.dmarketing24.com/',
            img: wp,
        },
        {
            title: 'Sunlite Mortgage',
            link: 'https://www.sunlitemortgage.ca/',
            img: react,
        },
        {
            title: 'Edification',
            link: 'https://edification.com.bd/english/',
            img: edi,
        },
        {
            title: 'Travel Agency',
            link: '#',
            img: tra,
        },
        {
            title: 'Eduhum',
            link: '#',
            img: edu,
        }
    ]

    return (
        <div className={portfolio.portfolio}>
            <div className="container">
                <div className={portfolio.title}>
                    <span>portfolio</span>
                    <h1>My Latest Projects</h1>
                </div>
                <ul className={portfolio.buttonList}>
                    <li id="0"><button onClick={(e) => onIdSubmit(e.target.parentNode.id)}>all</button></li>
                    <li id="1"><button>Web Design</button></li>
                    <li id="2"><button>React</button></li>
                    <li id="3"><button>Wordpress</button></li>
                </ul>
                <div className="row g-5">
                    {
                        portObj ?
                            portObj.map((elem) => {
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
                            :
                           ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;



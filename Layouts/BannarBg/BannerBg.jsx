import React from 'react';
import bannerBg from './bannerBg.module.css';

const BannerBg = ({bgInfo}) => {
    const {title,stitle} = bgInfo
    return (
        <div>
            <div className={bannerBg.bannerBg}>
                <div className="container">
                    <div className={bannerBg.content}>
                        <h2>{title}</h2>
                        <div>
                            <span className='me-2'>Home <i class="fa-solid fa-arrow-right-long"></i></span>
                            <span>{stitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBg;
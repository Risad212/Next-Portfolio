import React from 'react';
import BannerBg from '../Layouts/BannarBg/BannerBg'
import Services from '../Layouts/service/Service'
import Contact from '../Components/contact/Contact';
import Portfolio from '../Layouts/portfolio/Portfolio';

const service = () => {
    const srInfo = {title: 'service', stitle: 'service'}
    return (
        <div>
           <BannerBg bgInfo={srInfo}/>
           <Portfolio />
           <Services />
           <Contact />
        </div>
    );
};

export default service;
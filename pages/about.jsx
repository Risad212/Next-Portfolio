import React from 'react';
import BannerBg from '../Layouts/BannarBg/BannerBg';
import About from '../Layouts/About/About';
import Contact from '../Components/contact/Contact';
import Progress from '../Components/Progress/Progress';

const about = () => {
    // about info
    const abInfo = {title: 'about me', stitle: 'about'}
    return (
        <>
           <BannerBg bgInfo={about}/>
            <About />
            <Progress />
           <Contact />
        </>
    );
};

export default about;
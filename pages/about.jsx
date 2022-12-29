import React from 'react';
import BannerBg from '../Layouts/BannarBg/BannerBg';
import About from '../Layouts/About/About';
import Contact from '../Layouts/contact/Contact';
import Progress from '../Components/Progress/Progress';

const about = () => {
    // about info
    const about = {title: 'about me', stitle: 'about'}
    return (
        <>
           <BannerBg abInfo={about}/>
            <About />
            <Progress />
           <Contact />
        </>
    );
};

export default about;
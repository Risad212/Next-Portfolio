import React from 'react';
import Contact from '../Components/contact/Contact';
import BannerBg from '../Layouts/BannarBg/BannerBg';

const contact = () => {
    const conInfo = {title: 'Contact', stitle: 'contact'}
    return (
        <div>
           <BannerBg bgInfo={conInfo}/>
           <Contact />
        </div>
    );
};

export default contact;
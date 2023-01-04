import React from 'react';
import Contact from '../Components/contact/Contact';
import BannerBg from '../Layouts/BannarBg/BannerBg';

const contactPage = () => {
    const conInfo = {title: 'Contact Me', stitle: 'contact'}
    return (
        <div>
            <BannerBg bgInfo={conInfo}/>
           <Contact />  
        </div>
    );
};

export default contactPage;
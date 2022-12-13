import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layouts = ({children }) => {
    return (
        <div>
           <Header />
            <main>{children}</main>
           <Footer />
        </div>
    );
};

export default Layouts;
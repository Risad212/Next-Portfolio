import React from 'react';
import banner from './Banner.module.css';

const Banner = () => {
    return (
        <div className={banner.banner}>
           <div className="container">
              <div className="row align-items-center justify-content-center">
                 <div className="col-md-7">
                    <div className={banner.bannerContent}>
                        <h2>Welcome to my porfolio</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem nulla quos suscipit laborum fugit aspernatur rem pariatur illo.</p>
                        <i class="fa fa-play-circle" aria-hidden="true"></i>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default Banner;
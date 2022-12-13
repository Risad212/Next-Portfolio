import React from 'react';
import product from './About.module.css';

const About = () => {
    return (
        <div>
           <div className="container">
              <div className="row">
                 <div className="col-4">
                    <div className={product.product}>
                       <i class="fa-solid fa-bag-shopping mb-3"></i>
                        <h4 className='mb-3'>Interface Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores</p>
                    </div>
                 </div>
                 {/*-- column --*/}
                 <div className="col-4">
                    <div className={product.product}>
                    <i class="fa-solid fa-couch mb-3"></i>
                        <h4 className='mb-3'>Interface Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores</p>
                    </div>
                 </div>
                 {/*-- column --*/}
                 <div className="col-4">
                    <div className={product.product}>
                    <i class="fa-solid fa-lightbulb mb-3"></i>
                        <h4 className='mb-3'>Interface Design</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a dolores</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    );
};

export default About;
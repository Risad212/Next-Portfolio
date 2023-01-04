import React from 'react';
import banner from './Banner.module.css';
import devImg from '../../Media/men.svg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
const Banner = () => {
   return (
      <div className={banner.banner}>
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-md-7">
                  <div className={banner.bannerContent}>
                     <motion.div initial={{y: 140}} animate={{y: 0}}>
                        <Image src={devImg} alt="developer" />
                     </motion.div>
                     <h2>HM Risad</h2>
                     <h4>Front-End Developer</h4>
                     <p>A successful website does three things:
                        It attracts the right kinds of visitors.
                        Guides them to the main services or product you offer.
                        Collect Contact details for future ongoing relation</p>
                     <button><Link href="/about">Contact Me</Link></button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
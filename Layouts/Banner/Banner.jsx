import React from 'react';
import banner from './Banner.module.css';
import devImg from '../../Media/men.svg';
import Image from 'next/image';
import Link from 'next/link';
import { motion} from "framer-motion";

const Banner = () => {
   return (
      <div className={banner.banner}>
         <div className="container">
            <div className="row align-items-center justify-content-center">
               <div className="col-md-7">
                  <div className={banner.bannerContent}>
                     <motion.div className={banner.ball} 
                        drag dragConstraints={{left: -300, right: 700,top: -300, bottom: 500}}>
                     </motion.div>
                     <Image src={devImg} alt="developer" />
                     <motion.h2 initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: .9}}>
                         HM Risad
                     </motion.h2>
                     <motion.h4 initial={{y: 150, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1}}>
                         Front-End Developer
                     </motion.h4>
                     <motion.p initial={{y: 180, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.2}}>
                        A successful website does three things:
                        It attracts the right kinds of visitors.
                        Guides them to the main services or product you offer.
                        Collect Contact details for future ongoing relation</motion.p>
                     <motion.button initial={{y: 200, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 1.5}}>
                        <Link href="/contactPage">Contact Me</Link>
                     </motion.button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
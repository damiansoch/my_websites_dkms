import React from 'react';
import { motion } from 'framer-motion';

const TitleBanner = () => {
  return (
    <motion.div
      //animation
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      //
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(226,91,89,1) 10%, rgba(39,43,48,0.7707457983193278) 70%)',
        marginTop: '150px',
      }}
      className='row'
    >
      <motion.h1
        //animation
        initial={{ x: 400 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        //
        className=' title col-lg-4 text-lg-end text-center my-auto'
      >
        DKMS <br /> Web Design
      </motion.h1>
      <motion.div
        //animation
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 2 }}
        //
        className=' col-lg-8'
      >
        <img style={{ width: '100%' }} src='/icons/bannerImg.png' alt='' />
      </motion.div>
    </motion.div>
  );
};

export default TitleBanner;

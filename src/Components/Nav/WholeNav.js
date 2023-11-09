import Navigation from './Navigation';
import { motion } from 'framer-motion';

const WholeNav = () => {
  const logoHeight = 150;
  const initialLogoScale = 0;

  return (
    <div className=' d-flex align-items-center justify-content-between'>
      <motion.div
        //animation
        initial={{
          x: '-100px',
          y: 0,
          scale: initialLogoScale,
          opacity: 0.3,
        }}
        animate={{ x: 0, y: 0, scale: 1, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 2, delay: 0.5 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        //
        xs={2}
        className='col-1 d-flex justify-content-center align-items-center mx-5'
        style={{ zIndex: 1 }}
      >
        <img
          src='/logo.png' // Replace with the actual path to your PNG logo
          alt='Your Logo'
          height={logoHeight}
        />
      </motion.div>

      <motion.div
        //animation
        initial={{ scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ ease: 'easeOut', duration: 2 }}
        //
        className=' col-8'
      >
        <Navigation />
      </motion.div>
    </div>
  );
};

export default WholeNav;

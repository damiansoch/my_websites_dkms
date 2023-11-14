import Navigation from './Navigation';
import { motion } from 'framer-motion';

const WholeNav = () => {
  let logoHeight = 100;
  let navIconSize = 30;
  let navHeight = 'auto';

  const initialLogoScale = 0;
  if (window.innerWidth < 768) {
    logoHeight = 50;
    navIconSize = 20;
    navHeight = '70px';
  }
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
      }}
      className=' d-flex align-items-center justify-content-between'
    >
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
        className=' d-flex justify-content-center align-items-center mx-5 mt-2'
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
        className=''
      >
        <Navigation navIconSize={navIconSize} navHeight={navHeight} />
      </motion.div>
    </div>
  );
};

export default WholeNav;

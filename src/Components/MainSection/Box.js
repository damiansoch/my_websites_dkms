import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BoxCover from './BoxCover';
import ClickOverlay from './ClickOverlay';

const Box = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isTouchDevice = 'ontouchstart' in document.documentElement;
  //const isTouchDevice = true;

  const openBoxHandler = (action) => {
    if (isTouchDevice && action === 'switch') {
      setIsHovered(!isHovered);
    } else if (!isTouchDevice && action === 'open') {
      setIsHovered(true);
    } else if (!isTouchDevice && action === 'close') {
      setIsHovered(false);
    }
  };

  return (
    <>
      <motion.div
        //animation
        onHoverStart={() => openBoxHandler('open')}
        onHoverEnd={() => openBoxHandler('close')}
        onTap={() => {
          openBoxHandler('switch');
        }}
        //
        style={{
          width: isHovered ? '100%' : '200px',
          opacity: isHovered ? 2 : 0,
          height: '170px',
          background:
            'radial-gradient(ellipse at center, rgba(84,13,6,1) 0%, rgba(16,16,16,1) 100%)',
          cursor: 'pointer',
          transition: '1s all ease',
          zIndex: 0,
          borderRadius: '20px',
        }}
        className=' d-flex align-items-center justify-content-center m-auto'
      >
        <div style={{ pointerEvents: 'none' }} className=' position-relative'>
          <p
            style={{
              opacity: isHovered ? 1 : 0,
              transition: '1s all ease',
              color: isHovered ? 'white' : '#FE6E1E',
              fontFamily: 'Edu TAS Beginner',
              fontSize: '115%',
              lineHeight: '1.5',
              textShadow: '2px 2px #000000',
            }}
            className=' p-2 pt-3 text-center'
          >
            {item.text}
          </p>
        </div>
      </motion.div>
      <BoxCover
        isHovered={isHovered}
        itemTitle={item.title}
        itemIcon={item.icon}
      />
      <ClickOverlay />
    </>
  );
};

export default Box;

import React, { useEffect, useState } from 'react';
import { items } from './items';
import Box from './Box';
import { motion } from 'framer-motion';

const MainSection = () => {
  const [gridTemplateColumns, setGridTemplateColumns] = useState('1fr');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setGridTemplateColumns('1fr');
      } else if (window.innerWidth < 1200) {
        setGridTemplateColumns('1fr 1fr');
      } else {
        setGridTemplateColumns('1fr 1fr 1fr'); // Three columns for larger screens
      }
    }

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const customGridStyle = {
    marginTop: '150px',
    display: 'grid',
    gridTemplateColumns: gridTemplateColumns,
    gap: '10px', // Optional gap between grid items
    rowGap: '150px',
    height: 'auto', // Set the container height to the viewport height
  };
  return (
    <div style={customGridStyle} className=' pt-3 pb-3'>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ scale: '0', opacity: 0, rotate: '-360deg' }}
          animate={{ scale: '100%', opacity: 1, rotate: 0 }}
          transition={{ delay: index * 0.4, duration: 0.5 }}
        >
          <Box item={item} key={index} />
        </motion.div>
      ))}
    </div>
  );
};

export default MainSection;

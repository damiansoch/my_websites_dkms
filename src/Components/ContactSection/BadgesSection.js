import React from 'react';
import { motion } from 'framer-motion';
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';

const BadgesSection = () => {
  const initialAnim = { color: '#EE5F5B' };
  const hoverAnim = { scale: 0.9, color: '#FEB86A' };
  return (
    <div className='m-5 d-flex justify-content-evenly align-items-center'>
      <motion.div initial={initialAnim} whileHover={hoverAnim}>
        <AiOutlineFacebook size={60} className='socjalBadges shadow' />
      </motion.div>
      <motion.div initial={initialAnim} whileHover={hoverAnim}>
        <AiOutlineInstagram size={60} className='socjalBadges shadow' />
      </motion.div>
      <motion.div initial={initialAnim} whileHover={hoverAnim}>
        <AiOutlineGithub size={60} className='socjalBadges shadow' />
      </motion.div>
    </div>
  );
};

export default BadgesSection;

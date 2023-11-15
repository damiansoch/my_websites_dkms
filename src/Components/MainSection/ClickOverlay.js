import { TbClick } from 'react-icons/tb';
import { motion } from 'framer-motion';

const ClickOverlay = () => {
  // Function to generate a random delay
  function getRandomDelay() {
    return 1 + Math.random() * 3; // Adjust the multiplier based on your preference
  }

  // Apply random delays to each element with the class 'fade-in-element'
  const elements = document.querySelectorAll('.clickOverlay');

  elements.forEach((element) => {
    const randomDelay = getRandomDelay();
    element.style.animationDelay = `${randomDelay}s`;
  });
  return (
    <motion.div
      className='clickOverlay'
      style={{
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: 'translate(50%, -50%)',
        pointerEvents: 'none',
        zIndex: 3,
      }}
    >
      <TbClick size={50} className='title' />
    </motion.div>
  );
};

export default ClickOverlay;

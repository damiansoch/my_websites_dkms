import Carousel from 'react-bootstrap/Carousel';
import { stages } from './devStages';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CarouselSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <Carousel fade style={{ marginTop: '60px' }}>
        {stages.map((stage, index) => (
          <Carousel.Item interval={3000} key={index}>
            <div
              className=' d-flex align-items-center justify-content-center'
              style={{ borderRadius: '20px', overflow: 'hidden' }}
            >
              <img
                style={{ borderRadius: '20px', objectFit: 'contain' }}
                src={`/icons/CarousellImgs/${stage.picture}`}
                alt=''
                className='shadow'
              />
            </div>
            <Carousel.Caption
              color='black'
              style={{ position: 'relative', top: 0, left: 0 }}
            >
              <h3 className=' text-danger'>{stage.title}</h3>
              <p className=' text-danger'>{stage.message}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default CarouselSection;

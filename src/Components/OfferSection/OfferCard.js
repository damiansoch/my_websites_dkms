import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useState } from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';

const OfferCard = ({ offer }) => {
  const [modalShow, setModalShow] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const serviceClickHandler = () => {
    setModalShow(true);
  };
  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        offer={offer}
      />
      <motion.div
        //animation
        initial={{
          scale: 0,
          rotate: '85deg',
        }}
        whileInView={{ scale: 1, rotate: '0' }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'backOut' }}
        //
        className='col-11 col-md-3 mx-auto my-4'
        onClick={() => serviceClickHandler()}
      >
        <motion.div
          //animation
          initial={{ scale: 1 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          //
          style={{
            minHeight: '300px',
            scale: isHovered ? '0.9' : 1,
            transition: '0.8s all ease',
            cursor: 'pointer',
          }}
          className='card text-white bg-dark my-2'
        >
          {/* Video Background */}

          <Card.ImgOverlay className='video-overlay '>
            <video autoPlay loop muted className='card-video'>
              <source
                src={`/icons/ServicesImages/${offer.picture}`}
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </Card.ImgOverlay>

          {/* Card Content */}
          <motion.div className='card-body title'>
            <motion.h1
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '5px',
                opacity: 1,
                color: isHovered ? '#B9A43E' : '#EE5F5B',
                scale: isHovered ? '1.3' : '1',
                transition: '0.8s all ease',
                fontWeight: 'bold',
                letterSpacing: 1.2,
                paddingBottom: '5px',
                borderBottom: isHovered ? `2px solid #B9A43E` : 'none',
              }}
            >
              {offer.title}
            </motion.h1>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default OfferCard;

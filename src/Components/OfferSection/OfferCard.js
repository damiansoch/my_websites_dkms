import { Card } from 'react-bootstrap';
import { useState } from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import { keyframes } from '@emotion/react';
import { AttentionSeeker } from 'react-awesome-reveal';

const OfferCard = ({ offer }) => {
  const [modalShow, setModalShow] = useState(false);

  const serviceClickHandler = () => {
    setModalShow(true);
  };
  return (
    <div className='col-11 col-md-3 mx-auto my-4'>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        offer={offer}
      />
      <AttentionSeeker
        animate__rubberBand
        onClick={() => serviceClickHandler()}
      >
        <div
          style={{
            minHeight: '300px',
            // scale: isHovered ? '0.9' : 1,
            transition: '0.8s all ease',
            cursor: 'pointer',
          }}
          className='card text-white bg-dark my-2'
        >
          {/* Video Background */}

          <Card.ImgOverlay className='video-overlay '>
            <img
              className='card-video'
              src={`/icons/ServicesImages/${offer.picture}`}
              alt={`/icons/ServicesImages/${offer.picture}`}
            />
            {/* <video autoPlay loop muted className='card-video'>
              <source
                src={`/icons/ServicesImages/${offer.picture}`}
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video> */}
          </Card.ImgOverlay>

          {/* Card Content */}
          <div className='card-body title'>
            <h1
              style={{
                position: 'absolute',
                bottom: '30px',
                left: '5px',
                opacity: 1,
                // color: isHovered ? '#B9A43E' : '#EE5F5B',
                // scale: isHovered ? '1.3' : '1',
                transition: '0.8s all ease',
                fontWeight: 'bold',
                letterSpacing: 1.2,
                paddingBottom: '5px',
                // borderBottom: isHovered ? `2px solid #B9A43E` : 'none',
              }}
            >
              {offer.title}
            </h1>
          </div>
        </div>
      </AttentionSeeker>
    </div>
  );
};

export default OfferCard;

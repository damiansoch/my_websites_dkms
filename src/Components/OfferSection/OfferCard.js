import { Card } from 'react-bootstrap';
import { useState } from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import { AttentionSeeker } from 'react-awesome-reveal';

const OfferCard = ({ offer }) => {
  const [modalShow, setModalShow] = useState(false);

  const serviceClickHandler = () => {
    setModalShow(!modalShow);
  };
  return (
    <div className='col-11 col-md-3 mx-auto my-4'>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        offer={offer}
      />
      <AttentionSeeker delay={offer.delay} effect='flash'>
        <div
          onClick={() => serviceClickHandler()}
          style={{
            minHeight: '300px',
            transition: '0.8s all ease',
            cursor: 'pointer',
          }}
          className='card border-0 text-white bg-dark my-2'
        >
          {/* Video Background */}

          <Card.ImgOverlay className='video-overlay bg-transparent'>
            <img
              className='card-video'
              src={`/icons/ServicesImages/${offer.picture}`}
              alt={`/icons/ServicesImages/${offer.picture}`}
            />
          </Card.ImgOverlay>

          {/* Card Content */}
          <div className='card-body title text-danger'>
            <h1
              style={{
                position: 'absolute',
                bottom: 0,
                left: '5px',
                opacity: 1,
                transition: '0.8s all ease',
                fontWeight: 'bold',
                letterSpacing: 1.2,
                paddingBottom: '5px',
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

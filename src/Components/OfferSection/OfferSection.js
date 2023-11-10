import React from 'react';
import { offers } from './offers';
import OfferCard from './OfferCard';
import { Row } from 'react-bootstrap';

const OfferSection = () => {
  return (
    <div className=' text-center mt-5 mb-5'>
      <h1 className='title'>Services:</h1>
      <Row>
        {offers.map((offer, index) => (
          <OfferCard offer={offer} key={index} />
        ))}
      </Row>
    </div>
  );
};

export default OfferSection;

import React, { useEffect, useRef } from 'react';
import { offers } from './offers';
import OfferCard from './OfferCard';
import { gsap } from 'gsap';
import { ScrollTrigger, Power2 } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const OfferSection = () => {
  //gsap
  const ref = useRef([]);
  ref.current = [];

  useEffect(() => {
    ref.current.forEach((el, index) => {
      const direction = index % 2 === 0 ? '20%' : '-20%'; // Alternates between -100% and 100%
      gsap.fromTo(
        el,
        {
          x: direction,
          autoAlpha: 0,
          ease: Power2,
          clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
        },
        {
          duration: 1,
          x: 0,
          autoAlpha: 1,
          ease: Power2,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          scrollTrigger: {
            trigger: el,
            start: `top center+=${index * 100}`, // Adjust start value based on index or any other criteria
            end: `bottom center+=${index * 100}`, // Adjust end value based on index or any other criteria            toggleActions: 'play none none reverse',
            scrub: 1,
            markers: true, // Enable markers for debugging if needed
          },
        }
      );
    });
  }, []);

  const addtoRefs = (el) => {
    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  };
  //
  return (
    <div className=' text-center mt-5 mb-5'>
      <h1 className='title'>Services:</h1>
      <div className='row'>
        {offers.map((offer, index) => (
          <div
            ref={addtoRefs}
            key={index}
            className='col-11 col-md-3 mx-auto my-4'
          >
            <OfferCard offer={offer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;

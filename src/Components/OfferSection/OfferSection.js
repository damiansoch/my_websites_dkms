import React, { useEffect, useRef } from 'react';
import { offers } from './offers';
import OfferCard from './OfferCard';
import { gsap } from 'gsap';
import { ScrollTrigger, Power2 } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const OfferSection = () => {
  //gsap

  const videoRef = useRef(null);
  const itemsRef = useRef([]);
  itemsRef.current = [];

  const addToRefs = (item) => {
    if (item) {
      itemsRef.current.push(item);
    }
  };

  useEffect(() => {
    if (Array.isArray(offers) && offers.length > 0) {
      gsap.fromTo(
        videoRef.current,
        {
          autoAlpha: 0,
          clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
        },
        {
          autoAlpha: 1,
          duration: 1,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        }
      );

      itemsRef.current.map((item) => {
        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            ease: Power2,
            clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)',
          },
          {
            duration: 1,
            autoAlpha: 1,
            ease: Power2,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            scrollTrigger: {
              trigger: item,
              start: 'top center+=150',
              end: 'top 50%',
              toggleActions: 'play none none reverse',
              scrub: 1,
              //markers: true,
            },
          }
        );
      });
    }
  }, []);
  //
  return (
    <div className=' text-center mt-5 mb-5'>
      <h1 className='title'>Services:</h1>
      <div className='row'>
        {offers.map((offer, index) => (
          <div
            key={index}
            ref={addToRefs}
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

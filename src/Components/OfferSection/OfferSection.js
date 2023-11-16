import React, { useEffect, useRef } from 'react';
import { offers } from './offers';
import OfferCard from './OfferCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const OfferSection = () => {
  //gsap
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const items = Array.from(containerRef.current.children);

    items.forEach((item, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
          once: true,
        },
      });

      tl.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: index * 0.2,
        }
      );
    });
  }, []);
  //
  return (
    <div className=' text-center mt-5 mb-5'>
      <h1 className='title'>Services:</h1>
      <div ref={containerRef} className='row'>
        {offers.map((offer, index) => (
          <OfferCard offer={offer} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OfferSection;

import React, { useEffect } from 'react';
import Navigation from './Navigation';
import gsap from 'gsap';

const WholeNav = () => {
  let logoHeight = 100;
  let navIconSize = 30;
  let navHeight = 'auto';
  const initialLogoScale = 0;

  if (window.innerWidth < 768) {
    logoHeight = 50;
    navIconSize = 20;
    navHeight = '70px';
  }
  //gsap

  useEffect(() => {
    // Use GSAP to create an animation

    gsap.fromTo(
      '.nav',
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 1, delay: 1 }
    );
  }, []);
  //
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
      }}
      className='nav d-flex align-items-center justify-content-between'
    >
      <Navigation
        logoHeight={logoHeight}
        initialLogoScale={initialLogoScale}
        navIconSize={navIconSize}
        navHeight={navHeight}
      />
    </div>
  );
};

export default WholeNav;

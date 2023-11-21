import React from 'react';

const Logo = ({ initialLogoScale, logoHeight }) => {
  return (
    <div
      //animation

      //
      xs={2}
      className=' d-flex justify-content-center align-items-center  mt-2'
      style={{ zIndex: 1 }}
    >
      <img
        src='/logo.png' // Replace with the actual path to your PNG logo
        alt='Your Logo'
        height={logoHeight}
      />
    </div>
  );
};

export default Logo;

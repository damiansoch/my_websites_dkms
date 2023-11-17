import React from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';

const BoxCover = ({ isHovered, itemTitle, itemIcon, shadow }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: `${
          shadow ? 'translate(51%, -49%)' : 'translate(50%, -50%)'
        }`,
        scale: isHovered ? '200%' : '100%',
        opacity: isHovered ? 0.3 : 1,
        zIndex: isHovered || shadow ? 0 : 2,
        transition: '1s all ease',
        pointerEvents: 'none',
        filter: `${shadow ? 'grayscale(1) blur(3px)' : 'grayscale(0)'}`,
      }}
    >
      <AttentionSeeker effect='jello' fraction={0.5}>
        <div className=' text-center d-flex flex-column gap-3 align-items-center justify-content-center'>
          <img src={`/icons/${itemIcon}`} alt='icon 1' width={100} />
          <h4
            style={{
              opacity: isHovered ? 0 : 1,
              transition: '1s all ease',
            }}
            className='textShadow text-center text-danger'
          >
            {itemTitle}
          </h4>
        </div>
      </AttentionSeeker>
    </div>
  );
};

export default BoxCover;

import React from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';

const BoxCover = ({ isHovered, itemTitle, itemIcon }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: 'translate(50%, -50%)',
        scale: isHovered ? '200%' : '100%',
        opacity: isHovered ? 0.3 : 1,
        zIndex: isHovered ? 0 : 2,
        transition: '1s all ease',
        pointerEvents: 'none',
      }}
    >
      <AttentionSeeker animate__jello>
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

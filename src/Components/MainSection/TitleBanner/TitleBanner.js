import gsap from 'gsap';
import { useEffect } from 'react';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);
const TitleBanner = () => {
  //gsap
  useEffect(() => {
    //whole div(bg)
    gsap.fromTo(
      '.bannerBgA',
      { scale: 20, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 2.5,
        delay: 0.5,
        ease: 'back.out(0.5)',
      }
    );

    //text
    gsap.to('.textA', {
      delay: 3,
      duration: 3,
      text: 'DKMS <br /> Web Design',
      ease: 'none',
    });

    //picture
    gsap.fromTo(
      '.pictureA',
      { scale: 0, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 4,
        delay: 5,
        ease: 'back.out(0.5)',
      }
    );
  }, []);

  return (
    <div
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(226,91,89,1) 15%, rgba(39,43,48,0) 70%)',
        marginTop: '150px',
        minHeight: '100px',
      }}
      className='row bannerBgA'
    >
      <h1 className=' title col-lg-4 text-lg-end text-center my-auto textA'>
        {' '}
      </h1>
      <div className=' col-lg-8 '>
        <img
          className='pictureA'
          style={{ width: '100%' }}
          src='/icons/bannerImg.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default TitleBanner;

import Carousel from 'react-bootstrap/Carousel';
import { stages } from './devStages';
import { AttentionSeeker } from 'react-awesome-reveal';

const CarouselSection = () => {
  return (
    <AttentionSeeker effect='pulse' fraction={0.5}>
      <Carousel fade style={{ marginTop: '60px' }}>
        {stages.map((stage, index) => (
          <Carousel.Item interval={3000} key={index}>
            <div
              className='d-flex align-items-center justify-content-center mx-auto'
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                maxWidth: '60vw',
              }}
            >
              <img
                style={{
                  borderRadius: '20px',
                  width: '100%', // Set the width of the image to 100% of its container
                  height: '100%', // Set the height of the image to 100% of its container
                  objectFit: 'cover', // Scale the image while maintaining its aspect ratio
                }}
                src={`/icons/CarousellImgs/${stage.picture}`}
                alt=''
                className='shadow'
              />
            </div>
            <Carousel.Caption
              color='black'
              style={{ position: 'relative', top: 0, left: 0 }}
            >
              <h3 className=' text-danger'>{stage.title}</h3>
              <p className=' text-danger'>{stage.message}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </AttentionSeeker>
  );
};

export default CarouselSection;

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { VscActivateBreakpoints } from 'react-icons/vsc';
import { MdOutlineCenterFocusStrong } from 'react-icons/md';
import { SiWheniwork } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

function MyVerticallyCenteredModal(props) {
  const [message, setMessage] = useState(props.offer.definition.message);
  const [title, setTitle] = useState(props.offer.definition.title);

  const chooseTopicHandler = (topic) => {
    switch (topic) {
      case 'definition':
        setMessage(props.offer.definition.message);
        setTitle(props.offer.definition.title);
        break;
      case 'advantages':
        setMessage(props.offer.advantages.message);
        setTitle(props.offer.advantages.title);
        break;
      case 'useCases':
        setMessage(props.offer.useCases.message);
        setTitle(props.offer.useCases.title);
        break;

      default:
        break;
    }
  };

  return (
    <Modal
      {...props}
      size='xl'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='custom-modal'
    >
      <Modal.Header
        closeButton
        style={{
          background: 'rgba(16,16,16,1)',
          textAlign: 'justify',
        }}
      >
        <Modal.Title
          className='text-success title'
          id='contained-modal-title-vcenter'
        >
          {props.offer.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(84,13,6,1) 0%, rgba(16,16,16,1) 100%)',
        }}
      >
        <TypeAnimation
          key={message}
          sequence={[message]}
          speed={50}
          style={{
            textAlign: 'justify',
            fontFamily: 'Edu TAS Beginner',
            fontSize: '115%',
            lineHeight: '1.5',
            textShadow: '2px 2px #000000',
            color: 'white',
          }}
        />
      </Modal.Body>
      <Modal.Footer
        style={{
          background: 'rgba(16,16,16,1)',
        }}
        className=' d-flex align-items-center justify-content-evenly'
      >
        <Button
          className={` btn-sm rounded-pill d-flex flex-column gap-1 align-items-center `}
          onClick={() => chooseTopicHandler('definition')}
        >
          <VscActivateBreakpoints
            size={30}
            color={`${title === 'Definition' ? '#4ac547' : '#ee5f5b'}`}
          />

          <span className=' px-2'>{props.offer.definition.title}</span>
        </Button>
        <Button
          className={` btn-sm rounded-pill  d-flex flex-column gap-1 align-items-center `}
          onClick={() => chooseTopicHandler('advantages')}
        >
          <MdOutlineCenterFocusStrong
            size={30}
            color={`${title === 'Advantages' ? '#4ac547' : '#ee5f5b'}`}
          />

          <span className='px-2 '>{props.offer.advantages.title}</span>
        </Button>
        <Button
          className={` btn-sm rounded-pill  d-flex flex-column gap-1 align-items-center `}
          onClick={() => chooseTopicHandler('useCases')}
        >
          <SiWheniwork
            size={30}
            color={`${title === 'Use Cases' ? '#4ac547' : '#ee5f5b'}`}
          />

          <span className='px-2'>{props.offer.useCases.title}</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;

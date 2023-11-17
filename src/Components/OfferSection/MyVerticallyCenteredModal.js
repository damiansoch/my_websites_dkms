import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { VscActivateBreakpoints } from 'react-icons/vsc';
import { MdOutlineCenterFocusStrong } from 'react-icons/md';
import { SiWheniwork } from 'react-icons/si';

function MyVerticallyCenteredModal(props) {
  const [message, setMessage] = useState(props.offer.definition.message);
  const chooseTopicHandler = (topic) => {
    switch (topic) {
      case 'definition':
        setMessage(props.offer.definition.message);
        break;
      case 'advantages':
        setMessage(props.offer.advantages.message);
        break;
      case 'useCases':
        setMessage(props.offer.useCases.message);
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
        <p
          style={{
            textAlign: 'justify',
            fontFamily: 'Edu TAS Beginner',
            fontSize: '115%',
            lineHeight: '1.5',
            textShadow: '2px 2px #000000',
            color: 'white',
          }}
        >
          {message}
        </p>
      </Modal.Body>
      <Modal.Footer
        style={{
          background: 'rgba(16,16,16,1)',
        }}
        className=' d-flex align-items-center justify-content-evenly'
      >
        <Button
          className=' btn-sm btn-success'
          active
          onClick={() => chooseTopicHandler('definition')}
        >
          <VscActivateBreakpoints size={30} color='#EE5F5B' />
          <br />
          <span className=' ms-2'>{props.offer.definition.title}</span>
        </Button>
        <Button
          className=' btn-sm btn-success'
          onClick={() => chooseTopicHandler('advantages')}
        >
          <MdOutlineCenterFocusStrong size={30} color='#EE5F5B' />
          <br />
          <span className=' ms-2'>{props.offer.advantages.title}</span>
        </Button>
        <Button
          variant='secondaty'
          className=' btn-sm btn-success'
          onClick={() => chooseTopicHandler('useCases')}
        >
          <SiWheniwork size={30} color='#EE5F5B' />
          <br />
          <span className=' ms-2'>{props.offer.useCases.title}</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;

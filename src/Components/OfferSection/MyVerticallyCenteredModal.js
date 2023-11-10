import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { VscActivateBreakpoints } from 'react-icons/vsc';
import { MdOutlineCenterFocusStrong } from 'react-icons/md';
import { SiWheniwork } from 'react-icons/si';

function MyVerticallyCenteredModal(props) {
  const [title, setTitle] = useState(props.offer.definition.title);
  const [message, setMessage] = useState(props.offer.definition.message);
  const chooseTopicHandler = (topic) => {
    switch (topic) {
      case 'definition':
        setTitle(props.offer.definition.title);
        setMessage(props.offer.definition.message);
        break;
      case 'advantages':
        setTitle(props.offer.advantages.title);
        setMessage(props.offer.advantages.message);
        break;
      case 'useCases':
        setTitle(props.offer.useCases.title);
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
      <Modal.Header closeButton>
        <Modal.Title
          className='text-success'
          id='contained-modal-title-vcenter'
        >
          {props.offer.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{title}</h4>
        <p style={{ textAlign: 'justify' }}>{message}</p>
      </Modal.Body>
      <Modal.Footer className=' d-flex align-items-center justify-content-evenly'>
        <Button active onClick={() => chooseTopicHandler('definition')}>
          <VscActivateBreakpoints size={30} color='#EE5F5B' />
          <span className=' ms-2'>{props.offer.definition.title}</span>
        </Button>
        <Button onClick={() => chooseTopicHandler('advantages')}>
          <MdOutlineCenterFocusStrong size={30} color='#EE5F5B' />
          <span className=' ms-2'>{props.offer.advantages.title}</span>
        </Button>
        <Button onClick={() => chooseTopicHandler('useCases')}>
          <SiWheniwork size={30} color='#EE5F5B' />
          <span className=' ms-2'>{props.offer.useCases.title}</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;

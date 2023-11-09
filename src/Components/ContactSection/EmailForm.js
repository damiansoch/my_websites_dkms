import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EmailForm = ({ setDivHeight }) => {
  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      setDivHeight(divRef.current.offsetHeight);
    }
  }, [setDivHeight]);
  return (
    <div
      ref={divRef}
      id='emailContactDiv'
      className='shadow contactSingleContainer p-3'
    >
      <Form action='https://formspree.io/f/xyyqvawj' method='POST'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label style={{ color: '#EE5F5B' }}>Email address</Form.Label>
          <Form.Control type='email' name='email' placeholder='Enter email' />
          <Form.Text style={{ color: '#EE5F5B' }}>
            <small>We'll never share your email with anyone else.</small>
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label style={{ color: '#EE5F5B' }}>Message</Form.Label>
          <textarea
            name='message'
            className='form-control'
            placeholder='Message'
            rows='3'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EmailForm;

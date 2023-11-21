import { useState } from 'react';
import EmailForm from './EmailForm';
import OterContactDetails from './OterContactDetails';
import { JackInTheBox } from 'react-awesome-reveal';

const ContactSection = () => {
  const [divHeight, setDivHeight] = useState(0);
  //

  //
  return (
    <div className=' mt-5 text-center '>
      <h1 className=' title'>Contact:</h1>
      <div className=' row mt-5'>
        <JackInTheBox
          id='contactForm'
          className='contactBox col-sm-12 col-md-6'
        >
          <EmailForm setDivHeight={setDivHeight} />
        </JackInTheBox>
        <JackInTheBox className='contactBox col-sm-12 col-md-6 mt-2 mt-md-0'>
          <OterContactDetails divHeight={divHeight} />
        </JackInTheBox>
      </div>
    </div>
  );
};

export default ContactSection;

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import EmailForm from './EmailForm';
import OterContactDetails from './OterContactDetails';

const ContactSection = () => {
  const [divHeight, setDivHeight] = useState(0);

  const formRef = useRef(null);
  const isInViewForm = useInView(formRef);

  const otherContactRef = useRef(null);
  const isInViewOtherContact = useInView(formRef);

  return (
    <div className=' mt-5 text-center '>
      <motion.h1
        //animation
        whileHover={{ scale: 1.2, opacity: 0.8 }}
        //
        className='title'
      >
        Contact:
      </motion.h1>
      <div className=' row mt-5'>
        <motion.div
          //animation
          ref={formRef}
          animate={{ opacity: isInViewForm ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          //
          id='contactForm'
          className=' col-sm-12 col-md-6'
        >
          <EmailForm setDivHeight={setDivHeight} />
        </motion.div>
        <motion.div
          //animation
          ref={otherContactRef}
          animate={{ opacity: isInViewOtherContact ? 1 : 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          //
          className=' col-sm-12 col-md-6 mt-2 mt-md-0'
        >
          <OterContactDetails divHeight={divHeight} />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;

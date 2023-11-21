import { motion } from 'framer-motion';

const OterContactDetails = ({ divHeight }) => {
  return (
    <motion.div
      //anim
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      style={{
        height: divHeight,
        filter: 'drop-shadow(1px 1px 3px red) invert(5%)',
      }}
      className='shadow contactSingleContainer justify-content-evenly'
    >
      <div>
        <h4 className='title '>Other Contact:</h4>
      </div>
      <div>
        <p>
          <a href='mailto:	dkms.dev.personal@gmail.com?subject=Website%20Enquiry'>
            Email: dkms.dev.personal@gmail.com
          </a>
        </p>
        <p>
          <a href='tel:0868406691'>Phone: 0868406691</a>
        </p>
      </div>
    </motion.div>
  );
};

export default OterContactDetails;

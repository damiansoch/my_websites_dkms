import { Navbar, Nav } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { RiHandCoinLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <Navbar bg='dark' variant='dark' className=' me-5 text-center'>
      <Nav className='ms-auto'>
        <Nav.Link href='#top'>
          <AiOutlineHome size={30} color='#4AC547' className=' mb-2' />
          <br />{' '}
          <motion.span
            whileHover={{ color: '#EE5F5B' }}
            style={{ color: '#4AC547' }}
          >
            Home
          </motion.span>
        </Nav.Link>
        <Nav.Link href='#offerSection'>
          <RiHandCoinLine size={30} color='#4AC547' className=' mb-2' /> <br />{' '}
          <motion.span
            whileHover={{ color: '#EE5F5B' }}
            style={{ color: '#4AC547' }}
          >
            Services
          </motion.span>
        </Nav.Link>
        <Nav.Link href='#contactSection'>
          <AiOutlineMail size={30} color='#4AC547' className=' mb-2' />
          <br />{' '}
          <motion.span
            whileHover={{ color: '#EE5F5B' }}
            style={{ color: '#4AC547' }}
          >
            Contact
          </motion.span>
        </Nav.Link>{' '}
      </Nav>
    </Navbar>
  );
};

export default Navigation;

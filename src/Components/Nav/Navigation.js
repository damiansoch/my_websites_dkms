import { Navbar, Nav } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { RiHandCoinLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Navigation = ({ navIconSize, navHeight }) => {
  return (
    <Navbar bg='dark' variant='dark' className=' me-5 text-center'>
      <Nav className='ms-auto'>
        <Nav.Link href='#top' style={{ height: { navHeight } }}>
          <AiOutlineHome size={navIconSize} color='#4AC547' className=' mb-2' />
          <br />{' '}
          <motion.span
            whileHover={{ color: '#EE5F5B' }}
            style={{ color: '#4AC547' }}
          >
            Home
          </motion.span>
        </Nav.Link>
        <Nav.Link href='#offerSection' style={{ height: { navHeight } }}>
          <RiHandCoinLine
            size={navIconSize}
            color='#4AC547'
            className=' mb-2'
          />{' '}
          <br />{' '}
          <motion.span
            whileHover={{ color: '#EE5F5B' }}
            style={{ color: '#4AC547' }}
          >
            Services
          </motion.span>
        </Nav.Link>
        <Nav.Link href='#contactSection' style={{ height: { navHeight } }}>
          <AiOutlineMail size={navIconSize} color='#4AC547' className=' mb-2' />
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

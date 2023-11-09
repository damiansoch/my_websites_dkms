import { Navbar, Nav } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';

const Navigation = () => {
  return (
    <Navbar bg='danger' variant='dark' className=' me-5'>
      <Nav className='ms-auto'>
        <Nav.Link href='#top'>
          <AiOutlineHome size={30} color='#4AC547' />
        </Nav.Link>
        <Nav.Link href='#contactSection'>
          <AiOutlineMail size={30} color='#4AC547' />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;

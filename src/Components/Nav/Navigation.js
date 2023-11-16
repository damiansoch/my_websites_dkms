import { Navbar, Nav } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { RiHandCoinLine } from 'react-icons/ri';
import Logo from './Logo';
import { useState } from 'react';

const Navigation = ({
  logoHeight,
  initialLogoScale,
  navIconSize,
  navHeight,
}) => {
  //gsap

  //
  const [isTogglerActive, setIsTogglerActive] = useState(false);

  const handleToggle = (isOpen) => {
    setIsTogglerActive(isOpen);
  };
  return (
    <Navbar
      bg=' transparent'
      variant='dark'
      expand='md'
      className=' text-center border-0 pb-2 me-2'
      style={{ width: '100%' }}
    >
      <Navbar.Brand href='#top' className=' border-0'>
        <Logo initialLogoScale={initialLogoScale} logoHeight={logoHeight} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar-nav' />
      <Navbar.Collapse
        id='navbar-nav'
        onEnter={() => handleToggle(true)}
        onExit={() => handleToggle(false)}
      >
        <Nav className='ms-auto'>
          <Nav.Link
            href='#top'
            style={{
              height: navHeight,
              backgroundColor: isTogglerActive
                ? 'rgba(39, 43, 48, 0.7)'
                : 'rgba(39, 43, 48, 0.5)',
            }}
          >
            <AiOutlineHome
              size={navIconSize}
              color='#4AC547'
              className='mb-2'
            />
            <br />
            <span style={{ color: '#4AC547' }}>Home</span>
          </Nav.Link>
          <Nav.Link
            href='#offerSection'
            style={{
              height: navHeight,
              backgroundColor: isTogglerActive
                ? 'rgba(39, 43, 48, 0.7)'
                : 'rgba(39, 43, 48, 0.5)',
            }}
          >
            <RiHandCoinLine
              size={navIconSize}
              color='#4AC547'
              className='mb-2'
            />
            <br />
            <span style={{ color: '#4AC547' }}>Services</span>
          </Nav.Link>
          <Nav.Link
            href='#contactSection'
            style={{
              height: navHeight,
              backgroundColor: isTogglerActive
                ? 'rgba(39, 43, 48, 0.7)'
                : 'rgba(39, 43, 48, 0.5)',
            }}
          >
            <AiOutlineMail
              size={navIconSize}
              color='#4AC547'
              className='mb-2'
            />
            <br />
            <span style={{ color: '#4AC547' }}>Contact</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

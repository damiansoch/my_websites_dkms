import { Navbar, Nav, Button } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { RiHandCoinLine } from 'react-icons/ri';
import Logo from './Logo';
import { useEffect, useRef, useState } from 'react';

const Navigation = ({
  logoHeight,
  initialLogoScale,
  navIconSize,
  navHeight,
}) => {
  //gsap

  //
  const [isTogglerActive, setIsTogglerActive] = useState(false);

  const navbarRef = useRef(null);

  const handleToggle = (isOpen) => {
    setIsTogglerActive(isOpen);
  };

  useEffect(() => {
    const handleBodyClick = (e) => {
      // Close the mobile menu when clicked outside
      if (isTogglerActive && !navbarRef.current.contains(e.target)) {
        setIsTogglerActive(false);
      }
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [isTogglerActive]);
  return (
    <Navbar
      ref={navbarRef}
      bg=' transparent'
      variant='dark'
      expand='md'
      className='text-center border-0 pb-2 me-2'
      style={{ width: '100%' }}
    >
      <Navbar.Brand href='#top' className=' border-0'>
        <Logo initialLogoScale={initialLogoScale} logoHeight={logoHeight} />
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setIsTogglerActive(!isTogglerActive)} />
      <Navbar.Collapse
        id='navbar-nav'
        onEnter={() => handleToggle(true)}
        onExit={() => handleToggle(false)}
        in={isTogglerActive}
      >
        <Nav className='ms-auto'>
          <Button className='btn-sm btn-dark' href='#top'>
            <AiOutlineHome
              size={navIconSize}
              color='#4AC547'
              className='mb-2 '
            />
            <br />
            <span style={{ color: '#4AC547' }}>Home</span>
          </Button>
          <Button className='btn-sm btn-dark' href='#offerSection'>
            <RiHandCoinLine
              size={navIconSize}
              color='#4AC547'
              className='mb-2'
            />
            <br />
            <span style={{ color: '#4AC547' }}>Services</span>
          </Button>
          <Button className='btn-sm btn-dark' href='#contactSection'>
            <AiOutlineMail
              size={navIconSize}
              color='#4AC547'
              className='mb-2'
            />
            <br />
            <span style={{ color: '#4AC547' }}>Contact</span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

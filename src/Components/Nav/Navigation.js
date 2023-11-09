import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark' className='border-0 me-5'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' className='ms-auto' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          <Nav.Link href='#' className='border-0'>
            Home
          </Nav.Link>
          <Nav.Link href='#' className='border-0'>
            Features
          </Nav.Link>
          <Nav.Link href='#' className='border-0'>
            Pricing
          </Nav.Link>
          <Nav.Link href='#' className='border-0'>
            About
          </Nav.Link>
          {/* <NavDropdown
            title='Dropdown'
            id='basic-nav-dropdown'
            className='border-0 mx-5'
          >
            <NavDropdown.Item href='#' className='border-0'>
              Action
            </NavDropdown.Item>
            <NavDropdown.Item href='#' className='border-0'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#' className='border-0'>
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#' className='border-0'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

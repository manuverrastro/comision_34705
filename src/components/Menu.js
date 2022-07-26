import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBar from './Header';

const Menu = (props) => {
    if(props.type == 'header') {
    return (
        <Navbar expand="lg">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Link 1</Nav.Link>
              <Nav.Link href="#link">Link 2</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )} else {
        return (
            <Navbar expand="lg">

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Link 1</Nav.Link>
                <Nav.Link href="#link">Link 2</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )        
    }
  }
  
  export default Menu;
   
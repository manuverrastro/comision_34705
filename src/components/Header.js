import CartWidget from "./CartWidget";
import Nav from "./Menu";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NavBar = () => {
    return (
        <header className="store-name">
            <Container>
                <Row>                                                    
                    <Col><h1>Store Name</h1></Col>
                    <Col><Nav type="header"/></Col>
                    <Col><CartWidget /></Col>
            </Row>
            </Container>
        </header>
    );
  }
  
  export default NavBar;
  
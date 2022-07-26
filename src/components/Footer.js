import Nav from "./Menu";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer>
    <Container>
    <Row>
      <Col>
        <Nav type="footer"/>
      </Col>
    
    </Row>
    </Container>
  </footer>
  )
}

export default Footer
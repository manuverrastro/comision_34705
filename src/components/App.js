import NavBar from "./Header";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (
    <>
    <NavBar />
    <main>
      <Container>
        <Row>
          <Col>
             <ItemListContainer nombre="Manuel"/>
          </Col>
        </Row>
      </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;

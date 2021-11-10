import {
  Col,
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Container fluid>
      <Row xs={1} className="d-flex flex-column min-vh-100">
        <Col className="p-0">
          <Header />
        </Col>
        <Col>
          <form className="mb-3 p-1">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="1, 2, 3, 4, 5 ...."
                aria-label="Enter the comma separted list of numbers "
              />
              <Button variant="outline-secondary" type="submit">
                Visualize
              </Button>
            </InputGroup>
          </form>
        </Col>
        <Col className="p-0 mt-auto">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

import { Container, Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar as="header" bg="light">
      <Container fluid>
        <Navbar.Brand href="/">
          <h3>
            Binary Search <span className="text-primary">Visualizer</span>
          </h3>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

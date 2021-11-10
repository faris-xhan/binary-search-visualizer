import { useState } from "react";
import {
  Col,
  Button,
  Container,
  FormControl,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createArrayFromInput } from "./utils/helper";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numbersList = createArrayFromInput(input);
    setData(numbersList);
  };

  return (
    <Container fluid>
      <Row xs={1} className="d-flex flex-column min-vh-100">
        <Col className="p-0">
          <Header />
        </Col>
        <Col>
          <form onSubmit={handleSubmit} className="mb-3 p-1">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter list of numbers separated by comma, example 1, 2, 3, 4, 5 ...."
                aria-label="Enter the comma separted list of numbers "
                value={input}
                pattern="^\d+(,\d+)*$"
                required
                onChange={handleInputChange}
              />
              <FormControl
                type="number"
                className="bg-light border-primary"
                placeholder="Search Item"
                style={{ maxWidth: "25ch" }}
              />
              <Button variant="outline-primary" type="submit">
                Find
              </Button>
            </InputGroup>
          </form>
          <div className="container p-1">
            <Table variant="secondary" bordered className="border-primary">
              <tbody>
                <tr>
                  {data.map((d, index) => (
                    <td
                      key={index}
                      data-index={index}
                      className="text-center fw-bold array-item"
                    >
                      {d}
                    </td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
        <Col className="p-0 mt-auto">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

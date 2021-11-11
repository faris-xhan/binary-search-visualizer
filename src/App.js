import { useState, useEffect } from "react";
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
import { binarySearch } from "./utils/binarySearch";
import { createArrayFromInput, getCellItemClass } from "./utils/helper";

function App() {
  const [input, setInput] = useState("");
  const [searchItem, setSearchItem] = useState(7);
  const [inputData, setInputData] = useState([]);

  const [result, setResult] = useState([]);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numbersList = createArrayFromInput(input);
    setInputData(numbersList);
  };

  const handleSearchItemChange = (event) => {
    setSearchItem(event.target.value);
  };

  useEffect(() => {
    setResult(binarySearch(inputData, searchItem));
  }, [inputData, searchItem]);
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
                placeholder="Search Number"
                value={searchItem}
                onChange={handleSearchItemChange}
                style={{ maxWidth: "25ch" }}
              />
              <Button variant="outline-primary" type="submit">
                Find
              </Button>
            </InputGroup>
          </form>
          <div className="container p-1 mb-3">
            <Table variant="secondary" bordered className="border-primary">
              <tbody>
                <tr>
                  {inputData.map((d, index) => (
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
          <div className="container p-1">
            {result.length &&
              result[1]?.map((r) => {
                return (
                  <div className="border rounded mb-3 p-2">
                    <div className="mb-4 d-flex justify-content-between">
                      <h5>Iteration: {r.iteration}</h5>
                      <h5 className="text-danger">
                        Lower Bound: {r.lowerBound}
                      </h5>
                      <h5 className="text-success">Midpoint: {r.mid} </h5>
                      <h5 className="text-info">Upper Bound: {r.upperBound}</h5>
                    </div>
                    <Table bordered>
                      <tbody>
                        <tr>
                          {inputData.map((d, index) => (
                            <td
                              key={index}
                              data-index={index}
                              className={`text-center fw-bold array-item ${getCellItemClass(
                                r,
                                index
                              )}`}
                            >
                              {d}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                );
              })}
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

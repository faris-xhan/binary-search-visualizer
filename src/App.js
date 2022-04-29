import { createArrayFromInput, getCellItemClass } from './utils/helper';
import ProgressBar from 'react-bootstrap/ProgressBar';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { binarySearch } from './utils/binarySearch';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Footer from './components/Footer';
import Header from './components/Header';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  const [input, setInput] = useState('');
  const [searchItem, setSearchItem] = useState(7);
  const [inputData, setInputData] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const r = binarySearch(inputData, parseInt(searchItem));
    if (r[1].length) {
      r[0] > -1
        ? setAlertMessage('Element found on index ' + r[0])
        : setAlertMessage('Element cannot be found in the list');
    }
    setLoading(false);
    setResult(r);
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
                style={{ maxWidth: '25ch' }}
              />
              <Button
                disabled={loading}
                variant="outline-primary"
                type="submit"
              >
                Find
              </Button>
            </InputGroup>
            {loading && <ProgressBar animated now={100} />}
          </form>
          {alertMessage && (
            <Alert variant="primary" className="mb-5">
              {' '}
              {alertMessage}{' '}
            </Alert>
          )}
          <div className="p-1 mb-3  table-responsive">
            <Table
              variant="secondary"
              bordered
              size="sm"
              className="border-primary"
            >
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
          <div className="p-1">
            {result.length &&
              result[1]?.map((r) => {
                return (
                  <div
                    key={r.iteration}
                    className="border border-primary rounded mb-3 p-2"
                  >
                    <div className="mb-2">
                      <h5
                        className="text-uppercase "
                        style={{ letterSpacing: 1.02 }}
                      >
                        Iteration: {r.iteration}
                      </h5>
                      <h6 className="d-inline-block text-none px-1 py-0 m-0 text-danger">
                        Lower Bound: {r.lowerBound}
                      </h6>
                      <h6 className="d-inline-block text-none px-1 py-0 m-0 text-success">
                        Midpoint: {r.mid}{' '}
                      </h6>
                      <h6 className="d-inline-block text-none px-1 py-0 m-0 text-info">
                        Upper Bound: {r.upperBound}
                      </h6>
                    </div>
                    <div className="table-responsive">
                      <Table bordered size="sm">
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

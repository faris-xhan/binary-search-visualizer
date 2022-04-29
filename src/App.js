import { createArrayFromInput, getCellItemClass } from './utils/helper';
import ProgressBar from 'react-bootstrap/ProgressBar';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect, useRef } from 'react';
import { binarySearch } from './utils/binarySearch';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Footer from './components/Footer';
import Header from './components/Header';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  const [alertMessage, setAlertMessage] = useState('');
  const [searchItem, setSearchItem] = useState(7);
  const [inputData, setInputData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [input, setInput] = useState('');

  const alertVariant = useRef('primary');

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
      if (r[0] > -1) {
        setAlertMessage('Element found on index ' + r[0]);
        alertVariant.current = 'primary';
      } else {
        setAlertMessage('Element cannot be found in the list');
        alertVariant.current = 'danger';
      }
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
                aria-label="Enter the comma separated list of numbers "
                onChange={handleInputChange}
                pattern="^\d+(,\d+)*$"
                value={input}
                required
              />
              <FormControl
                className="bg-light border-primary"
                onChange={handleSearchItemChange}
                style={{ maxWidth: '25ch' }}
                placeholder="Search Number"
                value={searchItem}
                type="number"
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
            <Alert variant={alertVariant.current} className="mb-5">
              {' '}
              {alertMessage}{' '}
            </Alert>
          )}
          <div className="p-1 mb-3  table-responsive">
            <Table
              className="border-primary"
              variant="secondary"
              size="sm"
              bordered
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
                        style={{ letterSpacing: 1.02 }}
                        className="text-uppercase "
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

import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function PackageSearchBar() {
  //Form HTML Validation
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <h1>Compare courier services</h1>
      <Form>
        <Row>
          <Form.Group as={Col} md="7" controlId="validationCustom04">
            <Form.Label>Dimensions (CM)</Form.Label>
            <div className="input-group mb-3">
              <Form.Control
                type="text"
                placeholder="L"
                aria-label="L"
                required
              />
              <span className="input-group-text">x</span>
              <Form.Control
                type="text"
                placeholder="W"
                aria-label="W"
                required
              />
              <span className="input-group-text">x</span>
              <Form.Control
                type="text"
                placeholder="H"
                aria-label="H"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid dimension.
              </Form.Control.Feedback>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Weight (KG)</Form.Label>
            <Form.Control type="double" placeholder="0.5" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid weight.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="col-md-2 mb-3">
            <Button variant="success" size="lg" className="mt-4" type="submit">
              Search
            </Button>
          </div>
        </Row>
      </Form>
    </Container>
  );
}

export default PackageSearchBar;

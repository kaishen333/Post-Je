import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CourierResult.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
function CourierResult() {
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

  //google maps constants
  const containerStyle = {
    width: "inherit",
    height: "400px",
  };

  const center = {
    lat: 4.3401,
    lng: 101.143,
  };
  // Loads environment variables into process.env
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  return (
    <Container>
      <h1>Compare courier services</h1>
      <Form>
        <Row>
          <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Form.Label>To</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              pattern="[0-9]{5}"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Label>From</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              pattern="[0-9]{5}"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom03">
            <Form.Label>Weight (KG)</Form.Label>
            <Form.Control type="double" placeholder="0.5" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid weight.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
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
          <div className="col-md-2 mb-3">
            <Button variant="success" size="lg" className="mt-4" type="submit">
              Search
            </Button>
          </div>
        </Row>
      </Form>
      <LoadScript googleMapsApiKey="AIzaSyDgx05Nh32WVIziXiOeWpZbbwywvfMPYzM">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          disableDoubleClickZoom={true}
          mapTypeId="satellite"
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </Container>
  );
}

export default CourierResult;

import React, { useState } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";

function Home() {
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

  //Carousell settings
  var settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container className="mid">
      <Row>
        <Col md={5} className="left">
          <h2>Convenient courier comparison.</h2>
          <p className="lead">
            Save time and money with your next shipment with intuitive features
            and integration with major courier companies to help you make a
            smarter decision.
          </p>
          <a
            href="#features"
            className="btn btn-outline-secondary btn-sm learn-more"
            role="button"
            aria-disabled="false"
          >
            Learn more
          </a>
        </Col>
        <Col md={7}>
          <Tabs
            defaultActiveKey="shpping"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
          >
            <Tab eventKey="shpping" title="Shipping">
              <h2>Compare courier services</h2>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
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
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
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
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>Weight (KG)</Form.Label>
                    <Form.Control type="double" placeholder="0.5" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid weight.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="5" controlId="validationCustom04">
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
                    <Button
                      variant="success"
                      size="lg"
                      className="mt-4"
                      type="submit"
                    >
                      Search
                    </Button>
                  </div>
                </Row>
              </Form>
            </Tab>
            <Tab eventKey="parcel" title="Parcel">
              <h2>Shipment Package Calculator</h2>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} md="5" controlId="validationCustom04">
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
                    <Button
                      variant="success"
                      size="lg"
                      className="mt-4"
                      type="submit"
                    >
                      Search
                    </Button>
                  </div>
                </Row>
              </Form>
            </Tab>
          </Tabs>
        </Col>
      </Row>

      <Slider {...settings} style={{ margin: "1.2rem 0 4rem 0" }}>
        <div>
          <img
            style={{ marginTop: "1.2rem", height: "80px" }}
            src={require("./assets/dhl.png")}
            alt="dhl"
          />
        </div>
        <div>
          <img
            style={{ marginTop: "2.2rem", height: "40px" }}
            src={require("./assets/j&t.png")}
            alt="j&t"
          />
        </div>
        <div>
          <img
            style={{ marginTop: "2.2rem", height: "40px" }}
            src={require("./assets/ninja.png")}
            alt="ninja"
          />
        </div>
        <div>
          <img src={require("./assets/pgeon.png")} alt="pgeon" />
        </div>
        <div>
          <img
            style={{ marginTop: "1.2rem" }}
            src={require("./assets/poslaju.png")}
            alt="poslaju"
          />
        </div>
        <div>
          <img
            style={{ marginTop: "1.2rem", height: "4.375rem" }}
            src="https://www.citylinkexpress.com/content/uploads/2020/11/City-link-Logo.svg?x43952"
            alt="city"
          />
        </div>
        <div>
          <img
            style={{ marginTop: "1rem" }}
            src={require("./assets/gdex.png")}
            alt="gdex"
          />
        </div>
      </Slider>

      <Container>
      <Row>
        <Col lg={4}>
          <img
            src={require("./assets/package.png")}
            alt=""
            style={{ height: "5rem", width: "auto" }}
          />
          <h2>Package suggestion</h2>
          <p>
            It's as simple as entering the dimensions of the item and we'll
            provide you with a variety of pre-paid packaging suggestions.
          </p>
        </Col>
        <Col lg={4}>
          <img
            src={require("./assets/hand.png")}
            alt=""
            style={{ height: "5rem", width: "auto" }}
          />
          <h2>Accurate pricing</h2>
          <p>
            Simply view the most up to date and accurate pricing information
            available. *Accuracy of pricing is dependent on the dimensions of
            the parcel.
          </p>
        </Col>
        <Col lg={4}>
          <img
            src={require("./assets/map.png")}
            alt=""
            style={{ height: "5rem", width: "auto" }}
          />
          <h2>Interactive map</h2>
          <p>
            Integrated map allows for an interactive user experience in viewing
            drop off centers nearby you or anywhere else on the map.
          </p>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Home;

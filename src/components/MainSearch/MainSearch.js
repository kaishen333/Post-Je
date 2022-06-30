import React, { useEffect, useState } from "react";
import "./MainSearch.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Formik } from "formik";
import * as Yup from "yup";

function MainSearch() {
  const courierSchema = Yup.object().shape({
    to: Yup.number()
      .matches(/([0-9]{5})/, "invalid zip")
      .required("Zip code is required"),
    from: Yup.number()
      .matches(/([0-9]{5})/, "invalid zip")
      .required("Zip code is required"),
    weight: Yup.number()
      .max(3, "Too Long!")
      .required("Weight is required")
      .positive(),
    length: Yup.number().max(3, "Too Long!").positive(),
    width: Yup.number().max(3, "Too Long!").positive(),
    height: Yup.number().max(3, "Too Long!").positive(),
  });

  const parcelSchema = Yup.object().shape({
    weight: Yup.number()
      .max(3, "Too Long!")
      .required("Weight is required")
      .positive(),
    length: Yup.number()
      .max(3, "Too Long!")
      .required("Weight is required")
      .positive(),
    width: Yup.number()
      .max(3, "Too Long!")
      .required("Weight is required")
      .positive(),
    height: Yup.number()
      .max(3, "Too Long!")
      .required("Weight is required")
      .positive(),
  });

  return (
    <Container className="search-tabs">
      <Tabs
        defaultActiveKey="shipping"
        transition={true}
        id="search-tab"
        className="mb-3"
      >
        <Tab eventKey="shipping" title="Shipping">
          <h2>Compare courier services</h2>
          <Formik
            initialValues={{
              to: "",
              from: "",
              weight: "",
              length: "",
              width: "",
              height: "",
            }}
            validationSchema={courierSchema}
            validateOnBlur
            onSubmit={async (values) => {
              const { to, from, weight, length, width, height } = values;
              //await handleLogin({ username: email, password });
            }}
            render={({
              handleChange,
              handleSubmit,
              handleBlur,
              values,
              errors,
            }) => (
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
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>From</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Zip"
                      pattern="[0-9]{5}"
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>Weight (KG)</Form.Label>
                    <Form.Control type="double" placeholder="0.5" required />
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
            )}
          />
        </Tab>

        <Tab eventKey="parcel" title="Parcel">
          <h2>Shipment Package Calculator</h2>
          <Formik
            initialValues={{
              weight: "",
              length: "",
              width: "",
              height: "",
            }}
            validationSchema={parcelSchema}
            validateOnBlur
            onSubmit={async (values) => {
              const { weight, length, width, height } = values;
              //await handleLogin({ username: email, password });
            }}
            render={({
              handleChange,
              handleSubmit,
              handleBlur,
              values,
              errors,
            }) => (
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
                    </div>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom03">
                    <Form.Label>Weight (KG)</Form.Label>
                    <Form.Control type="double" placeholder="0.5" required />
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
            )}
          />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default MainSearch;

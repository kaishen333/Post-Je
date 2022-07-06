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
          >
            {" "}
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="formToZip">
                    <Form.Label>To</Form.Label>
                    <Form.Control
                      type="text"
                      name="to"
                      placeholder="Zip"
                      required
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      // value={values.to}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="formFromZip">
                    <Form.Label>From</Form.Label>
                    <Form.Control
                      type="text"
                      name="from"
                      placeholder="Zip"
                      required
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      // value={values.from}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="3" controlId="formWeight">
                    <Form.Label>Weight (KG)</Form.Label>
                    <Form.Control
                      type="double"
                      name="weight"
                      placeholder="0.5"
                      required
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      // value={values.weight}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="5" controlId="formDimension">
                    <Form.Label>Dimensions (CM)</Form.Label>
                    <div className="input-group mb-3">
                      <Form.Control
                        type="text"
                        name="length"
                        placeholder="L"
                        aria-label="L"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.leght}
                      />
                      <span className="input-group-text">x</span>
                      <Form.Control
                        type="text"
                        name="width"
                        placeholder="W"
                        aria-label="W"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.width}
                      />
                      <span className="input-group-text">x</span>
                      <Form.Control
                        type="text"
                        name="height"
                        placeholder="H"
                        aria-label="H"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.height}
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
          </Formik>
        </Tab>

        <Tab eventKey="parcel" title="Parcel">
          <h2>Shipment Package Calculator</h2>

          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} md="5" controlId="formDimension">
                <Form.Label>Dimensions (CM)</Form.Label>
                <div className="input-group mb-3">
                  <Form.Control
                    type="text"
                    name="length"
                    placeholder="L"
                    aria-label="L"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.leght}
                  />
                  <span className="input-group-text">x</span>
                  <Form.Control
                    type="text"
                    name="width"
                    placeholder="W"
                    aria-label="W"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.width}
                  />
                  <span className="input-group-text">x</span>
                  <Form.Control
                    type="text"
                    name="height"
                    placeholder="H"
                    aria-label="H"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value={values.height}
                  />
                </div>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="formWeight">
                <Form.Label>Weight (KG)</Form.Label>
                <Form.Control
                  type="double"
                  name="weight"
                  placeholder="0.5"
                  required
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.weight}
                />
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
    </Container>
  );
}

export default MainSearch;

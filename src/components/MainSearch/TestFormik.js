import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import "./MainSearch.css";
function TestFormik() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <Container>
      <Container>
        <div className="tabs">
          <button
            className={`tab ${checkActive(1, "active")}`}
            onClick={() => handleClick(1)}
          >
            Product Info
          </button>
          <button
            className={`tab ${checkActive(2, "active")}`}
            onClick={() => handleClick(2)}
          >
            Customer Reviews
          </button>
          <button
            className={`tab ${checkActive(3, "active")}`}
            onClick={() => handleClick(3)}
          >
            Delivery &amp; Returns
          </button>
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active")}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              erat ligula, feugiat at felis vitae, porttitor lacinia quam.
            </p>
          </div>
          <div className={`panel ${checkActive(2, "active")}`}>
            <p>
              Nulla lobortis quis massa quis lobortis. Nullam porta semper
              lorem, vel efficitur augue rutrum quis. Suspendisse potenti.
            </p>
          </div>
          <div className={`panel ${checkActive(3, "active")}`}>
            <p>
              Cras porta consectetur dolor porttitor fringilla. Cras vitae urna
              ac erat fermentum egestas. Donec egestas cursus scelerisque.
            </p>
          </div>
        </div>
      </Container>
      <div class="">
        <button class="" onclick={() => this.switchTab("courier")}>
          Courier
        </button>
        <button class="" onclick={() => this.switchTab("package")}>
          Package
        </button>
      </div>
      <div id="courier" class="tab">
        <h2>Compare courier services</h2>
        <Formik
          initialValues={{ name: "", email: "", subject: "", content: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Row className="mb-3">
                <Col className="md-4">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field name="name" className="form-control" type="text" />
                  </div>
                </Col>
                <Col className="md-4">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" className="form-control" type="email" />
                  </div>
                </Col>
              </Row>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <Field name="subject" className="form-control" type="text" />
              </div>

              <div className="form-group">
                <label htmlFor="content">Content</label>
                <Field name="content" className="form-control" as="textarea" />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div id="package" class="tab" style={{ display: "none" }}>
        <h2>Compare courier 222</h2>
        <Formik
          initialValues={{ name: "", email: "", subject: "", content: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Row className="mb-3">
                <Col className="md-4">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field name="name" className="form-control" type="text" />
                  </div>
                </Col>
                <Col className="md-4">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <Field name="email" className="form-control" type="email" />
                  </div>
                </Col>
              </Row>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <Field name="subject" className="form-control" type="text" />
              </div>

              <div className="form-group">
                <label htmlFor="content">Content</label>
                <Field name="content" className="form-control" as="textarea" />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default TestFormik;

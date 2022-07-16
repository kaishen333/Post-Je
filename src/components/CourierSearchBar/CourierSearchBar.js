import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./CourierSearchBar.css";
import * as Yup from "yup";

function CourierSearchBar() {
  const zipregex = /([0-9]{5})/;
  return (
    <Container className="bar">
      <h1>Compare courier services</h1>
      <Formik
        initialValues={{
          to: "",
          from: "",
          weight: "",
          length: "",
          width: "",
          height: "",
        }}
        onSubmit={(values, { setSubmitting })=> {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 1000);
        } }
        validationSchema={Yup.object({
          to: Yup.string()
            .matches(zipregex, "invalid zip")
            .required("Zip code is required"),
          from: Yup.string()
            .matches(zipregex, "invalid zip")
            .required("zip code is required"),
          weight: Yup.number().required("Weight is required").positive(),
          length: Yup.number().positive(),
          width: Yup.number().positive(),
          height: Yup.number().positive(),
        })}
      >
        {(formik, isSubmitting) => (
          <Form>
            <Row>
              <div className="form-group col-md-2">
                <label htmlFor="To">To</label>
                <Field
                  name="to"
                  className={
                    formik.touched.to && formik.errors.to
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  type="string"
                  placeholder="Zip"
                  required
                />
                {formik.touched.to && formik.errors.to ? (
                  <div className="invalid-zip">{formik.errors.to}</div>
                ) : null}
              </div>
              <div className="form-group col-md-2">
                <label htmlFor="from">From</label>
                <Field
                  name="from"
                  className={
                    formik.touched.from && formik.errors.from
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  type="string"
                  placeholder="Zip"
                  required
                />
                {formik.touched.from && formik.errors.from ? (
                  <div className="invalid-zip">{formik.errors.from}</div>
                ) : null}
              </div>

              <div className="form-group col-md-2">
                <label htmlFor="weight">Weight (KG)</label>
                <Field
                  name="weight"
                  type="number"
                  placeholder="0.5"
                  className={
                    formik.touched.weight && formik.errors.weight
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  required
                />
                {formik.touched.weight && formik.errors.weight ? (
                  <div className="invalid-weight">{formik.errors.weight}</div>
                ) : null}
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="dimensions">Dimensions (CM)</label>
                <div className="input-group mb-3">
                  <Field
                    type="text"
                    name="length"
                    placeholder="L"
                    className={
                      formik.touched.length && formik.errors.length
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />

                  <span className="input-group-text">x</span>
                  <Field
                    type="text"
                    name="width"
                    placeholder="W"
                    className={
                      formik.touched.width && formik.errors.width
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  <span className="input-group-text">x</span>
                  <Field
                    type="text"
                    name="height"
                    placeholder="H"
                    className={
                      formik.touched.height && formik.errors.height
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                </div>
                {formik.touched.length && formik.errors.length ? (
                  <div className="invalid-length">{formik.errors.length}</div>
                ) : null}
                {formik.touched.width && formik.errors.width ? (
                  <div className="invalid-width">{formik.errors.width}</div>
                ) : null}
                {formik.touched.height && formik.errors.height ? (
                  <div className="invalid-height">{formik.errors.height}</div>
                ) : null}
              </div>
              <div className="form-group col-md">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Submit"}
                </button>
              </div>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default CourierSearchBar;

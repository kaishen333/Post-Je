import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./PackageSearchBar.css";
import * as Yup from "yup";
import { loadPackage } from "../../store/package/Package.actions.js";
import { useDispatch } from "react-redux";

function PackageSearchBar() {
  const dispatch = useDispatch();
  async function search(values) {
    await dispatch(loadPackage(values));
  }

  return (
    <Container className="bar">
      <h1>Compare courier services</h1>
      <Formik
        initialValues={{
          weight: "",
          length: "",
          width: "",
          height: "",
        }}
        onSubmit={(values) => {
          search(values);
        }}
        validationSchema={Yup.object({
          weight: Yup.number().required("Weight is required").positive(),
          length: Yup.number().required("Length is required").positive(),
          width: Yup.number().required("Width is required").positive(),
          height: Yup.number().required("Height is required").positive(),
        })}
      >
        {(formik, isSubmitting) => (
          <Form>
            <Row>
              <div className="form-group col-md-7">
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
              <div className="form-group col-md-3">
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
              <div className="form-group col">
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

export default PackageSearchBar;

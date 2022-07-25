import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Formik, Field, Form } from "formik";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./MainSearch.css";
import * as Yup from "yup";
import { loadCourier } from "../../store/courier/Courier.actions";
import { loadPackage } from "../../store/package/Package.actions.js";
import { useDispatch } from "react-redux";

function MainSearch() {
   let navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const zipregex = /([0-9]{5})/;

  const dispatch = useDispatch();
  async function searchCourier(values) {
    const data = await dispatch(loadCourier(values));
    navigate("/courier", { state: data });
    // window.location = "/courier";
  }
  async function searchPackage(values) {
    window.location = "/package";
    await dispatch(loadPackage(values));
  }

  return (
    <Container>
      <div className="tabs">
        <button
          className={`tab ${checkActive(1, "active")}`}
          onClick={() => handleClick(1)}
        >
          <h5>Courier</h5>
        </button>
        <button
          className={`tab ${checkActive(2, "active")}`}
          onClick={() => handleClick(2)}
        >
          <h5>Package</h5>
        </button>
      </div>
      <div className="panels">
        <div className={`panel ${checkActive(1, "active")}`}>
          <Formik
            initialValues={{
              to: "",
              from: "",
              weight: "",
              length: "",
              width: "",
              height: "",
            }}
            onSubmit={(values) => {
              searchCourier(values);
            }}
            validationSchema={Yup.object({
              to: Yup.string()
                .matches(zipregex, "invalid zip")
                .test(
                  "len",
                  "Must be exactly 5 characters",
                  (val) => val.length === 5
                )
                .required("Zip code is required"),
              from: Yup.string()
                .matches(zipregex, "invalid zip")
                .test(
                  "len",
                  "Must be exactly 5 characters",
                  (val) => val.length === 5
                )
                .required("zip code is required"),
              weight: Yup.number().required("Weight is required").positive(),
              length: Yup.number().positive(),
              width: Yup.number().positive(),
              height: Yup.number().positive(),
            })}
          >
            {(formik, isSubmitting) => (
              <Form>
                <Row className="mb-3">
                  <div className="form-group col-md-4">
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
                  <div className="form-group col-md-4">
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
                </Row>

                <Row className="mb-3">
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
                      <div className="invalid-weight">
                        {formik.errors.weight}
                      </div>
                    ) : null}
                  </div>
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
                      <div className="invalid-length">
                        {formik.errors.length}
                      </div>
                    ) : null}
                    {formik.touched.width && formik.errors.width ? (
                      <div className="invalid-width">{formik.errors.width}</div>
                    ) : null}
                    {formik.touched.height && formik.errors.height ? (
                      <div className="invalid-height">
                        {formik.errors.height}
                      </div>
                    ) : null}
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
                </Row>
              </Form>
            )}
          </Formik>
        </div>
        <div className={`panel ${checkActive(2, "active")}`}>
          <Formik
            initialValues={{
              weight: "",
              length: "",
              width: "",
              height: "",
            }}
            onSubmit={(values) => {
              searchPackage(values);
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
                <Row className="mb-3">
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
                      <div className="invalid-length">
                        {formik.errors.length}
                      </div>
                    ) : null}
                    {formik.touched.width && formik.errors.width ? (
                      <div className="invalid-width">{formik.errors.width}</div>
                    ) : null}
                    {formik.touched.height && formik.errors.height ? (
                      <div className="invalid-height">
                        {formik.errors.height}
                      </div>
                    ) : null}
                  </div>
                  <div className="form-group col-md-4">
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
                      <div className="invalid-weight">
                        {formik.errors.weight}
                      </div>
                    ) : null}
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
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
}

export default MainSearch;

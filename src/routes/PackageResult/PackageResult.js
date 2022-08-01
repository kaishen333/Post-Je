import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "./PackageResult.css";
import { loadPackage } from "../../store/package/Package.actions.js";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

function CourierResult() {
  const [packageList, setPackageList] = useState([]);
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    if (location.state != null) {
      console.log("true");
      console.log(location.state.payload);
      var a = [],
        b = location.state.payload;
      for (let i = 0; i < Object.keys(b).length; i++) {
        a.push(b[i]);
      }
      console.log(a);
      setPackageList(a);
    }
  }, []);

  async function search(values) {
    const data = await dispatch(loadPackage(values));
    console.log(data.payload);
    setPackageList(data.payload);
  }

  //table stuffs
  function linkFollow(cell, row, rowIndex, formatExtraData) {
    return (
      <Button
        variant="success"
        onClick={(e) => {
          e.preventDefault();
          window.open(row.link);
        }}
      >
        Order
      </Button>
    );
  }
  function courierImg(cell, row, rowIndex, formatExtraData) {
    return (
      <span>
        <Image
          style={{
            height: row.courier != "Ninja" ? "35px" : "40px",
          }}
          src={require(row.courier != "Ninja"
            ? "./poslaju.png"
            : "./ninja.png")}
        />
        {/* <span>{cell}</span> */}
      </span>
    );
  }

  const selectOptions = {
    City: "City",
    DHL: "DHL",
    GDEX: "GDEX",
    "J&T": "J&T",
    Ninja: "Ninja",
    Pgeon: "Pgeon",
    Poslaju: "Poslaju",
    FedEx: "FedEx",
  };

  const columns = [
    {
      dataField: "courier",
      text: "Courier Company",
      sort: true,
      formatter: (cell) => selectOptions[cell],
      filter: selectFilter({
        options: selectOptions,
      }),
      formatter: courierImg,
    },
    {
      dataField: "weight",
      text: "Weight Limit",
      sort: true,
    },
    {
      dataField: "type",
      text: "Package Type",
      sort: true,
    },
    {
      dataField: "dimension",
      text: "Package Dimensions",
      sort: true,
    },
    {
      dataField: "price",
      text: "Current rate",
      sort: true,
    },
    {
      dataField: "link",
      text: "",
      formatter: linkFollow,
    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    // alwaysShowAllBtns: true, // Always show next and previous button
    // withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "8",
        value: 8,
      },
      {
        text: "16",
        value: 16,
      },
      {
        text: "All",
        value: packageList.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <Container>
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
            height: Yup.number().min(0),
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
      <Container className="result-table">
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={packageList}
          columns={columns}
          bordered={false}
          pagination={paginationFactory(options)}
          filter={filterFactory()}
        />
      </Container>
    </Container>
  );
}

export default CourierResult;

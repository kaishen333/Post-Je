import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CourierResult.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
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

  //table stuffs
  function linkFollow(cell, row, rowIndex, formatExtraData) {
    return (
      <Button variant="success" onClick={() => {}}>
        Order
      </Button>
    );
  }

  const selectOptions = {
    1: "1",
    2: "2",
    3: "3",
  };

  const [courierList, setCourierList] = useState([]);
  const columns = [
    {
      dataField: "id",
      text: "Courier Company",
      sort: true,
      formatter: (cell) => selectOptions[cell],
      filter: selectFilter({
        options: selectOptions,
      }),
    },
    {
      dataField: "name",
      text: "Service Type",
      sort: true,
    },
    {
      dataField: "username",
      text: "Pre-paid packaging suggestion",
    },
    {
      dataField: "eamil",
      text: "Current rate",
      sort: true,
    },
    {
      dataField: "order",
      text: "",
      formatter: linkFollow,
    },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((reuslt) => setCourierList(reuslt));
  }, []);

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
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: courierList.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

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
      <Container className="result-table">
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={courierList}
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

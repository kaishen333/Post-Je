import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

function PackageResultTable() {
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
      text: "Weight Limit",
      sort: true,
    },
    {
      dataField: "username",
      text: "Package Type",
    },
    {
      dataField: "eamil",
      text: "Package Dimensions",
      sort: true,
    },
    {
      dataField: "zipcode",
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
  );
}

export default PackageResultTable;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import * as ReactDOM from "react-dom";
import "./CourierResult.css";
import { loadCourier } from "../../store/courier/Courier.actions";
import { loadGoogleMaps } from "../../store/googleMaps/GoogleMaps.actions";

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

import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../../mapStyles";

function CourierResult() {
  const zipregex = /([0-9]{5})/;
  const [courierList, setCourierList] = useState([]);
  const [dropoffList, setDropoffList] = useState([]);
  const [userLat, setUserLat] = useState();
  const [userLong, setUserLong] = useState();
  const [markers, setMarkers] = useState([]);
  const [center, setcenter] = useState([]);
  const [mapref, setMapRef] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    if (location.state != null) {
      var a = [],
        b = location.state.payload;
      for (let i = 0; i < Object.keys(b).length; i++) {
        if (
          b[i].courier !== "iExpress" &&
          b[i].courier !== "EasyParcel" &&
          b[i].courier !== "ParcelHub" &&
          b[i].courier !== "Mail Boxes Etc (MBE)"
        ) {
          a.push(b[i]);
        }
      }
      setCourierList(a);
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setUserLat(position.coords.latitude);
      setUserLong(position.coords.longitude);
    });

    setcenter(centerco);
  }, []);

  async function search(values) {
    const data = await dispatch(loadCourier(values));
    var a = [],
      b = data.payload;
    for (let i = 0; i < Object.keys(b).length; i++) {
      if (
        b[i].courier !== "iExpress" &&
        b[i].courier !== "EasyParcel" &&
        b[i].courier !== "ParcelHub" &&
        b[i].courier !== "Mail Boxes Etc (MBE)"
      ) {
        a.push(b[i]);
      }
    }
    setCourierList(a);
  }

  async function searchDrop(map) {
    const bounds = map.getBounds();
    const obj = {
      sahi: bounds.Bb.hi,
      salo: bounds.Bb.lo,
      vbhi: bounds.Va.hi,
      vblo: bounds.Va.lo,
    };
    console.log(bounds);
    const data = await dispatch(loadGoogleMaps(obj));
    var a = data.payload;
    for (let i = 0; i < a.length; i++) {
      const position = { lat: a[i].lat, lng: a[i].long };
      a[i].position = position;
    }
    setDropoffList(a);
    console.log(dropoffList);
  }
  //table stuffs
  function linkFollow(cell, row, rowIndex, formatExtraData) {
    return (
      <Button variant="success" onClick={() => {}}>
        Order
      </Button>
    );
  }

  function packageLink(cell, row, rowIndex, formatExtraData) {
    return (
      <p>
        <a
          href={row.prepaidLink != "-" ? row.prepaidLink : "javascript:void(0)"}
          target="_blank"
        >
          {row.prepaid}
        </a>
      </p>
    );
  }

  function courierImg(cell, row, rowIndex, formatExtraData) {
    return (
      <span>
        <Image
          style={{
            height: row.courier !== "Ninja" ? "35px" : "40px",
          }}
          src={require(row.courier == "Poslaju"
            ? "../Home/assets/poslaju.png"
            : row.courier == "GDEX"
            ? "../Home/assets/gdex.png"
            : row.courier == "City"
            ? "../Home/assets/city.png"
            : row.courier == "DHL"
            ? "../Home/assets/dhl.png"
            : row.courier == "J&T"
            ? "../Home/assets/j&t.png"
            : row.courier == "Pgeon"
            ? "../Home/assets/pgeon.png"
            : row.courier == "FedEx"
            ? "../Home/assets/fedex.png"
            : "../Home/assets/ninja.png")}
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
      dataField: "type",
      text: "Service Type",
      sort: true,
    },
    {
      dataField: "prepaid",
      text: "Pre-paid packaging suggestion",
      sort: true,
      formatter: packageLink,
    },
    {
      dataField: "price",
      text: "Current rate",
      sort: true,
    },
    {
      dataField: "order",
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

  //maps stuffs
  //google maps constants
  const containerStyle = {
    width: "inherit",
    height: "400px",
  };

  const mapOptions = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    disableDoubleClickZoom: true,
  };

  const centerco = {
    lat: 4.323982174966869,
    lng: 101.14364646521427,
  };

  const handleOnLoad = (map) => {
    setMapRef(map);
    const google = window.google;
    const controlButtonDiv1 = document.createElement("div");
    const controlButtonDiv2 = document.createElement("div");
    ReactDOM.render(
      <button
        className="mapButton"
        onClick={() => map.panTo({ lat: userLat, lng: userLong })}
      >
        Pan to Current Location
      </button>,
      controlButtonDiv1
    );
    // ReactDOM.render(
    //   <button
    //     className="mapButton"
    //     onClick={() => {
    //       map.setZoom(14.5);
    //       searchDrop(map);
    //     }}
    //   >
    //     Search Drop-off centers
    //   </button>,
    //   controlButtonDiv2
    // );
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlButtonDiv1);
    // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(controlButtonDiv2);
    let timer1 = setTimeout(() => searchDrop(map), 1300);
    let timer2 = setTimeout(
      () => map.panTo({ lat: userLat, lng: userLong }),
      1100
    );
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  };

  const onMapClick = (map) => {
    setMarkers({
      lat: map.latLng.lat(),
      lng: map.latLng.lng(),
    });
    mapref.panTo({
      lat: map.latLng.lat(),
      lng: map.latLng.lng(),
    });
    mapref.setZoom(14.5);
    searchDrop(mapref);
  };

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const getIcon = (courierid) => {
    var source =
      courierid == 1 ? "../Home/assets/city.png" : "../Home/assets/city.png";
    return source;
  };

  return (
    <Container>
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
          onSubmit={(values) => {
            search(values);
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
      <LoadScript googleMapsApiKey="AIzaSyDgx05Nh32WVIziXiOeWpZbbwywvfMPYzM">
        <Container className="googmaps">
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={15}
            center={center}
            options={mapOptions}
            onDblClick={onMapClick}
            onLoad={handleOnLoad}
          >
            {/* Child components, such as markers, info windows, etc. */}=
            <Marker
              key={`${markers.lat}-${markers.lng}`}
              position={{ lat: markers.lat, lng: markers.lng }}
              // onClick={() => {
              //   setSelected(marker);
              // }}
            />
            {dropoffList.map(({ courierid, lat, name, position }) => (
              <Marker
                key={lat}
                position={position}
                onClick={() => handleActiveMarker(lat)}
                icon={{
                  // path: google.maps.SymbolPath.CIRCLE, getIcon(courierid)
                  url: require(courierid == 1
                    ? "../Home/assets/city.png"
                    : courierid == 2
                    ? "../Home/assets/dhl2.jpg"
                    : courierid == 3
                    ? "../Home/assets/gdex.png"
                    : courierid == 4
                    ? "../Home/assets/j&t.png"
                    : courierid == 5
                    ? "../Home/assets/ninja.png"
                    : courierid == 6
                    ? "../Home/assets/pgeon.png"
                    : courierid == 8
                    ? "../Home/assets/parcelhub.png"
                    : courierid == 9
                    ? "../Home/assets/easyparcel.png"
                    : courierid == 10
                    ? "../Home/assets/mbe.png"
                    : courierid == 11
                    ? "../Home/assets/iexp.png"
                    : "../Home/assets/dhl.png"),
                  fillColor: "#EB00FF",
                  scaledSize: new window.google.maps.Size(
                    courierid == 2 ? 50 : 65,
                    courierid == 2 ? 25 : courierid == 9 ? 35 : 20
                  ),
                }}
              >
                {activeMarker === lat ? (
                  <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                    <div>{name}</div>
                  </InfoWindow>
                ) : null}
              </Marker>
            ))}
            <></>
          </GoogleMap>
        </Container>
      </LoadScript>
      <Container className="result-table">
        <BootstrapTable
          bootstrap4
          keyField="id"
          //data = {body}
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

import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Container from "react-bootstrap/Container";
import './GoogleMaps.css'

function GoogleMaps() {
  //google maps constants
  const containerStyle = {
    width: "inherit",
    height: "400px",
  };

  const center = {
    lat: 4.3401,
    lng: 101.143,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDgx05Nh32WVIziXiOeWpZbbwywvfMPYzM">
      <Container className="googmaps">
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
      </Container>
    </LoadScript>
  );
}

export default GoogleMaps;

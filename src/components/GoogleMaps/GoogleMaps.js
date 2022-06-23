import { GoogleMap, LoadScript } from "@react-google-maps/api";

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
  );
}

export default GoogleMaps
import Container from "react-bootstrap/Container";
import "./CourierResult.css";
import CourierSearchBar from "../../components/CourierSearchBar/CourierSearchBar";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";
import CourierResultTable from "../../components/CourierResultTable/CourierResultTable";

function CourierResult() {
  return (
    <Container>
      <CourierSearchBar></CourierSearchBar>
      <GoogleMaps></GoogleMaps>
      <CourierResultTable></CourierResultTable>
    </Container>
  );
}

export default CourierResult;

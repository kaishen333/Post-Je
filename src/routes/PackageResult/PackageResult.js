import Container from "react-bootstrap/Container";
import "./PackageResult.css";
import PackageSearchBar from "../../components/PackageSearchBar/PackageSearchBar";
import PackageResultTable from "../../components/PackageResultTable/PackageResultTable";

function CourierResult() {
  return (
    <Container>
      <PackageSearchBar></PackageSearchBar>
      <PackageResultTable></PackageResultTable>
    </Container>
  );
}

export default CourierResult;

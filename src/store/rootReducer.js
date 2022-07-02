import { combineReducers } from "redux";
import packageReducer from "./package/Package.reducer";
import courierReducer from "./courier/Courier.reducer";
import googleMapsReducer from "./googleMaps/GoogleMaps.reducer";

export default combineReducers({
  package: packageReducer,
  courierReducer: courierReducer,
  googleMaps: googleMapsReducer,
});

import { combineReducers } from "redux";
import packageReducer from "./package/Package.reducer";
import courierReducer from "./courier/Courier.reducer";
import googleMapsReducer from "./googleMaps/GoogleMaps.reducer";

export default combineReducers({
  package: packageReducer,
  couriers: courierReducer,
  googleMaps: googleMapsReducer,
});


// go to current location
// search location 
// - double click to get point latlong
// - submit latlong when click search area
// - return object with info of drop off centers

// submit package form info
// - return object with packaging that fits given dimension

// submit courier form info
// - search pgeon API for result
// - manufacture other reuslt based on pgeon and add to object
// - search packaging (if applicable) for available courier
// - add result to returning object
// - send result object
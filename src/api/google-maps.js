import API from "./client";

// API interface for logging a user in
export const fetchGoogleMaps = async (lat, long) => {
  try {
    const response = await API.get(`googleMaps/${lat}/${long}`);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

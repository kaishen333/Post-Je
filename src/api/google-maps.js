import API from "./client";

// API interface for logging a user in
export const fetchGoogleMaps = async (values) => {
  try {
    const response = await API.get(
      `googleMaps/${values.sahi}/${values.salo}/${values.vbhi}/${values.vblo}`
    );
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

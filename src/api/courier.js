import API from "./client";

// API interface for loading a user's order by order ID
export const fetchCourier = async () => {
  try {
    const response = await API.get(`orders`);

    return response.data;

  } catch (err) {
    throw err.response.data;
  }
};

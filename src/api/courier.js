import API from "./client";

// API interface for loading a user's order by order ID
export const fetchCourier = async (values) => {
  try {
    const response = await API.get(`orders/${values.to}/${values.from}/${values.weight}`);

    return response.data;

  } catch (err) {
    throw err.response.data;
  }
};

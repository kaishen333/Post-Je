import API from "./client";

// API interface for loading a user's order by order ID
export const fetchCourier = async (values) => {
  try {
    const response = await API.get(`orders?to=${values.to}&from=${values.from}&weight=${values.weight}`);

    return response.data;

  } catch (err) {
    throw err.response.data;
  }
};

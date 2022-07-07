import API from "./client";

// API interface for loading a user's order by order ID
export const fetchCourier = async (to, from, length, width, height, weight) => {
  try {
    const response = await API.get(
      `orders/${to}/${from}/${length}/${width}/${height}/${weight}`
    );

    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

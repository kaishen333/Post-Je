import API from "./client";

// API interface for loading a user's order by order ID
export const fetchPackage = async (length, width, height, weight) => {
  try {
    const response = await API.get(
      `orders/${length}/${width}/${height}/${weight}`
    );

    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

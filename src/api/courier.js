import API from "./client";

// API interface for loading a user's order by order ID
export const fetchCourier = async (values) => {
  try {
    const response = await API.get(
      `courier/${values.to}/${values.from}/${values.weight}/${values.length !== "" ? values.length : 0}/${values.width !== "" ? values.width : 0}/${values.height !== "" ? values.height : 0}`
    );

    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

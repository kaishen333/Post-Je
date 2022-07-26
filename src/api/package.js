import API from "./client";

// API interface for loading a user's order by order ID
export const fetchPackage = async (values) => {
  try {
    const response = await API.get(
      `package/${values.length}/${values.width}/${values.height}/${values.weight}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCourier } from "../../api/courier";

export const loadCourier = createAsyncThunk(
  "courier/loadCourier",
  async (values, thunkAPI) => {
    try {
      const response = await fetchCourier(values);
      return(response);
      // return {
      //   couriers: response,
      // };
    } catch (err) {
      throw err;
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCourier } from "../../apis/courier";

export const loadCourier = createAsyncThunk(
  "courier/loadCourier",
  async (params, thunkAPI) => {
    try {
      const response = await fetchCourier();
      return {
        couriers: response,
      };
    } catch (err) {
      throw err;
    }
  }
);

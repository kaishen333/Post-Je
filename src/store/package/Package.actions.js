import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPackage } from "../../api/package";

export const loadPackage = createAsyncThunk(
  "courier/loadPackage",
  async (values, thunkAPI) => {
    try {
      const response = await fetchPackage(values);
      return {
        package: response,
      };
    } catch (err) {
      throw err;
    }
  }
);

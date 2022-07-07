import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPackage } from "../../apis/package";

export const loadPackage = createAsyncThunk(
  "courier/loadPackage",
  async (params, thunkAPI) => {
    try {
      const response = await fetchPackage();
      return {
        package: response,
      };
    } catch (err) {
      throw err;
    }
  }
);

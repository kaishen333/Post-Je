import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGoogleMaps } from "../../apis/google-maps";

export const loadGoogleMaps = createAsyncThunk(
  "courier/loadGoogleMaps",
  async (params, thunkAPI) => {
    try {
      const response = await fetchGoogleMaps();
      return {
        package: response,
      };
    } catch (err) {
      throw err;
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGoogleMaps } from "../../api/google-maps";

export const loadGoogleMaps = createAsyncThunk(
  "courier/loadGoogleMaps",
  async (values, thunkAPI) => {
    try {
      const response = await fetchGoogleMaps(values);
      return (response);
      // return {
      //   package: response,
      // };
    } catch (err) {
      throw err;
    }
  }
);

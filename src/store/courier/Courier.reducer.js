import { createSlice } from "@reduxjs/toolkit";
import { loadCourier } from "./Courier.actions";

const initialState = { id: "", name: "", username: "", email: "", order: "" };

const courierSlice = createSlice({
  name: "courier",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Load order list success
      .addCase(loadCourier.fulfilled, (state, action) => {
        const { couriers } = action.payload;
        couriers.forEach((courier) => {
          const { id } = courier;
          courier[id] = courier;
        });
      });
  },
});

export default courierSlice.reducer;

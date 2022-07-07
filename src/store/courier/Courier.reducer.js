import { createSlice } from '@reduxjs/toolkit';
import { loadCourier } from './Courier.actions';

const initialState = {}

const courierSlice = createSlice({
    name: 'courier',
    initialState,
    reducers: {},
});

export default courierSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { loadGoogleMaps } from './GoogleMaps.actions';

const initialState = {}

const googleMapsSlice = createSlice({
    name: 'googleMaps',
    initialState,
    reducers: {},
});

export default googleMapsSlice.reducer;
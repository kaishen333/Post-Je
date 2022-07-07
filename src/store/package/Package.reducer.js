import { createSlice } from '@reduxjs/toolkit';
import { loadPackage } from './Package.actions';

const initialState = {}

const packageSlice = createSlice({
    name: 'package',
    initialState,
    reducers: {},
});

export default packageSlice.reducer;
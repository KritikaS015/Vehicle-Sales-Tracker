import { configureStore } from '@reduxjs/toolkit';
import vehicleSlice from './reducer';
import { apiSlice } from './apiSlice';

export const store = configureStore({
    reducer : {
        vehicle : vehicleSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})
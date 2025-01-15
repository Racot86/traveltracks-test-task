import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // Add the API slice reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware), // Add the API middleware
});
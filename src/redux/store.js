import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import filterReducer from '@store/slices/filtersSlice.js';
import paginationReducer from '@store/slices/paginationSlice.js'
import campersReducer from '@store/slices/campersSlice.js'
import locationsReducer from '@store/slices/locationsSlice.js'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        filters: filterReducer,
        pagination: paginationReducer,
        campers: campersReducer,
        locations: locationsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware), // Add the API middleware
});
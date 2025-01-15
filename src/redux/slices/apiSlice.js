
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/', // Base API URL
    }),
    endpoints: (builder) => ({
        getCampers: builder.query({
            query: () => 'campers',
        }),
        getCamperById: builder.query({
            query: (id) => `campers/${id}`,
        }),
    }),
});

export const { useGetCampersQuery, useGetCamperByIdQuery } = apiSlice;
import {createSlice} from '@reduxjs/toolkit';
import {fetchCampers, fetchCampersById} from "@api/apiService.js";

const handleLoading = (state) => {
    state.isLoading = true;
    state.error = null;
}
const handleError = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}
const handleFulfilled = (state) => {
    state.isLoading = false;
    state.error = null;
}

const campersSlice = createSlice({
    name: 'campers',
    initialState: {
        camper: {},
        items: [],
        isLoading: false,
        error: null,
        pagination: {
            page: 1,
            per_page: 4,
            total: 0,
        }
    },
    reducers: {
        setPage: (state, action) => {
            state.pagination.page = action.payload;
        },
        resetPagination: (state) => {
            state.pagination = {
                page: 1,
                per_page: 4,
                total: 0,
            };
        },
        resetCampers: (state) => {
            state.items = [];
        },

    },
    extraReducers: builder => {
        builder
            .addCase(fetchCampers.pending, handleLoading)
            .addCase(fetchCampers.rejected, handleError)
            .addCase(fetchCampers.fulfilled, (state, action) => {
                handleFulfilled(state)
                state.items = [...state.items, ...action.payload.items];
                state.pagination.total = action.payload.total;
            })
            .addCase(fetchCampersById.pending, handleLoading)
            .addCase(fetchCampersById.rejected, handleError)
            .addCase(fetchCampersById.fulfilled, (state, action) => {
                state.camper = action.payload;
                handleFulfilled(state)
            })

    },
});

export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.camper;
export const selectPagination = (state) => state.campers.pagination;
export const selectCampersQuery = (state) => state.campers;

export const {setPage, resetPagination, resetCampers} = campersSlice.actions;

export default campersSlice.reducer;
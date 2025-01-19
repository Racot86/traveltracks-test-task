import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    limit: 4,
    maxPages: 1,
    currentPage: 1,
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setMaxPages: (state, action) => {
            state.maxPages = action.payload;
        },
        resetPagination: (state) => {
            state.currentPage = 1;
            state.maxPages = 1;
        },
    },
});

export const { setPage, setMaxPages, resetPagination } = paginationSlice.actions;

export default paginationSlice.reducer;
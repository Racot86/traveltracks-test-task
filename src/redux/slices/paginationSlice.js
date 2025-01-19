import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 1,
    limit: 4,
    maxPages: 0,
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setMaxPages: (state, action) => {
            state.maxPages = action.payload;
        },
        resetPagination: () => {
            return {
                page: 1,
                limit: 4,
                maxPages: 0,
            }
        },
    },
});

export const { setPage,setLimit,setMaxPages,resetPagination } = paginationSlice.actions;

export default paginationSlice.reducer;
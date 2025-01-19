import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const campersSlice = createSlice({
    name: "campers",
    initialState,
    reducers: {
        addCampers: (state, action) => {
            return [...state, ...action.payload];
        },
        resetCampers: () => {
            return [];
        },

    },
});

export const { addCampers,resetCampers } = campersSlice.actions;

export default campersSlice.reducer;
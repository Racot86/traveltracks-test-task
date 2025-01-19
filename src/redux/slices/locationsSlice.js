import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const locationsSlice = createSlice({
    name: "locations",
    initialState,
    reducers: {
        setLocations: (state, action) => {
            return  action.payload;
        },
        resetLocations: () => {
            return [];
        },

    },
});

export const { setLocations,resetLocations } = locationsSlice.actions;

export default locationsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: "",
    transmission: "",
    engine: "",
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    petrol: false,
    radio: false,
    refrigerator: false,
    gas: false,
    microwave: false,
    water: false,
    diesel: false,
    hybrid: false,
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        toggleFilter: (state, action) => {
            const filterName = action.payload;
            if (filterName in state) {
                state[filterName] = !state[filterName];
            }
        },
        setFilter: (state, action) => {
            const { name, value } = action.payload;
            if (name in state) {
                state[name] = value;
            }
        },
        resetFilters: (state) => {
            Object.keys(state).forEach((key) => {
                if (typeof state[key] === "boolean") {
                    state[key] = false; // Reset boolean filters to false
                } else if (typeof state[key] === "string") {
                    state[key] = ""; // Reset string filters to empty string
                }
            });
        },
    },
});

export const { toggleFilter, setFilter, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
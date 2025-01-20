import {createSlice} from "@reduxjs/toolkit";

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
    form: ''
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setAllFilters: (state, action) => {
            return action.payload;
        },
    },
});

export const { setAllFilters} = filterSlice.actions;

export default filterSlice.reducer;
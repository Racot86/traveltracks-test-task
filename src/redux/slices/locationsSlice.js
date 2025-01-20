import {createSlice} from "@reduxjs/toolkit";
import {fetchLocations} from "@api/apiService.js";

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

const locationsSlice = createSlice({
    name: "locations",
    initialState: {
        isLoading: false,
        error: null,
        locations: [],
    },
    extraReducers: builder => {
        builder
            .addCase(fetchLocations.pending, handleLoading)
            .addCase(fetchLocations.rejected, handleError)
            .addCase(fetchLocations.fulfilled, (state, action) => {
                handleFulfilled(state)
                state.locations = [...new Set(action.payload.map(item => item.location))]
            })


    },
});


export default locationsSlice.reducer;
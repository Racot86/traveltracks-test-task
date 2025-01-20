import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {

            return [...state, action.payload];
        },
        removeFavorite: (state, action) => {
            const idToRemove = action.payload;
            return state.filter((favorite) => favorite.id !== idToRemove);
        },
        resetFavorites: () => {
            return [];
        },

    },
});

export const {addFavorite, removeFavorite, resetFavorites} = favoritesSlice.actions;

export default favoritesSlice.reducer;
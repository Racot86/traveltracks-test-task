
export const useGetFilters = state => state.filters
export const selectGetPagination = state => state.pagination
export const selectGetCampers = state => state.campers
export const selectGetLocations = state => state.locations
export const selectGetFavorites = state => state.favorites
export const isFavoritePresent = (state, id) => {
    return state.favorites.some((favorite) => favorite.id === id);
};
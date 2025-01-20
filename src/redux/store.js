import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default localStorage for web
import { apiSlice } from "./slices/apiSlice";
import filtersReducer from "@store/slices/filtersSlice.js";
import campersReducer from "@store/slices/campersSlice.js";
import locationsReducer from "@store/slices/locationsSlice.js";
import favoritesReducer from "@store/slices/favoritesSlice.js";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist/es/constants";

// Persist Config
const persistConfig = {
    key: "root",
    storage, // Storage type
    whitelist: ["filters", "favorites"], // Include filters and favorites
};

// Combine reducers
const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    filters: filtersReducer,
    campers: campersReducer,
    locations: locationsReducer,
    favorites: favoritesReducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(apiSlice.middleware), // Concatenate the apiSlice middleware
});

// Persistor
export const persistor = persistStore(store);
export default store;
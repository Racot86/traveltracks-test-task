import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import filtersReducer from "@store/slices/filtersSlice.js";
import campersReducer from "@store/slices/campersSlice.js";
import locationsReducer from "@store/slices/locationsSlice.js";
import favoritesReducer from "@store/slices/favoritesSlice.js";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["filters", "favorites"],
};

const rootReducer = combineReducers({

    filters: filtersReducer,
    campers: campersReducer,
    locations: locationsReducer,
    favorites: favoritesReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export const persistor = persistStore(store);
export default store;
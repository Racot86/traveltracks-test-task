import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {CssBaseline} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import store, {persistor} from "./redux/store.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <CssBaseline/>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
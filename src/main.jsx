import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {store} from './redux/store.js'
import App from './App.jsx'
import {CssBaseline} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <CssBaseline/>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)

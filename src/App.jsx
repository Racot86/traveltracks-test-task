import Layout from "./components/Layout/Layout.jsx";
import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage.jsx";

import {FavoritesPage} from "./pages/FavoritesPage.jsx";
import {CircularProgress} from "@mui/material";
import NotFoundPage from "@pages/NotFoundPage.jsx";


const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'));
const DetailsPage = lazy(() => import('./pages/DetailsPage.jsx'));

function App() {

    return (
        <>
            <Layout>
                <Suspense fallback={<CircularProgress sx={{position:'absolute', top:'50%', right:'50%', transform:'translateX(-50%)'}} />}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/catalog" element={<CatalogPage/>}/>
                        <Route path="/catalog/:id" element={<DetailsPage/>}/>
                        <Route path="/favorites" element={<FavoritesPage/>}/>
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </Layout>
        </>
    )
}

export default App

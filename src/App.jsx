import Layout from "./components/Layout/Layout.jsx";
import {lazy, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage.jsx";

import {FavoritesPage} from "./pages/FavoritesPage.jsx";

const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'));

function App() {

    return (
        <>
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/catalog" element={<CatalogPage/>}/>
                        <Route path="/favorites" element={<FavoritesPage/>}/>
                    </Routes>
                </Suspense>
            </Layout>
        </>
    )
}

export default App

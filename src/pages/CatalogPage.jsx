import Box from "@mui/material/Box";
import SearchPane from "../components/CatalogPage/SearchPane.jsx";
import {theme} from "@theme/theme.js";
import ResultPane from "@components/CatalogPage/ResultPane.jsx";
import {useDispatch} from "react-redux";


import {useEffect} from "react";
import {fetchLocations} from "@api/apiService.js";


const CatalogPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLocations());
    }, [dispatch])

    return (
        <>
            <Box component="div"
                 sx={{
                     padding: '48px 64px',
                     background: theme.white,
                     display: 'flex',
                 }}
                 gap={8}
            >

                <Box
                    component="div"
                    sx={{
                        height: '100%',
                        display: 'flex',
                        maxWidth: '360px',
                        width: '100%',
                    }}
                >
                    <SearchPane/>
                </Box>


                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <ResultPane/>
                </Box>
            </Box>
        </>
    )
}

export default CatalogPage;
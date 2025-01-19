import Box from "@mui/material/Box";
import SearchPane from "../components/CatalogPage/SearchPane.jsx";
import {theme} from "@theme/theme.js";
import ResultPane from "@components/CatalogPage/ResultPane.jsx";
import {useDispatch} from "react-redux";
import {useGetCampersQuery} from "@store/slices/apiSlice.js";
import {setLocations} from "@store/slices/locationsSlice.js";
import {useEffect} from "react";




 const CatalogPage = () =>{
     const dispatch = useDispatch();
     const {data:campers} = useGetCampersQuery()
     useEffect(()=>{
         if (campers) {
             dispatch(setLocations([...new Set(campers.items.map(item => item.location))]));
         }
     },[campers, dispatch])

     return (
        <>
            <Box component="div"
                sx={{
                    padding:'48px 64px',
                    background:theme.white,
                    display:'flex',
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
                    <SearchPane />
                </Box>


                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <ResultPane />
                </Box>
            </Box>
        </>
    )
}

export default CatalogPage;
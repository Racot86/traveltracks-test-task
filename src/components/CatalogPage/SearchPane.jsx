import Typography from "@mui/material/Typography";
import {theme} from "@theme/theme.js";
import Box from "@mui/material/Box";
import FilterCheckBox from "./components/FilterCheckBox.jsx";
import {filterCheckBoxData} from "@constants/filterCheckBoxData.js";
import {PrimaryButton} from "@components/UI/PrimaryButton.jsx";

import {useGetCampersQuery} from "@store/slices/apiSlice.js";
import {useEffect, useState} from "react";
import LocationSelect from "@components/CatalogPage/components/LocationSelect.jsx";

const SearchPane = () => {
    const { data: campers} = useGetCampersQuery();
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        if (campers && campers.items.length > 0){
            setLocations([...new Set(campers.items.map(item => item.location))]);
        }
    },[campers])

    return (
        <>
            <form
                onSubmit={e => e.preventDefault()}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth:'360px',
                    width:'100%',
                    color:theme.text,
                }}
            >
                <Box component='div'>
                    <Typography sx={{...theme.font.body, ...theme.secondary}} color="textSecondary" component="p">
                        Location
                    </Typography>
                    <LocationSelect data={locations} />
                </Box>
                <Box component='div'>
                    <Typography>
                        Filters
                    </Typography>
                    <Box component='div'>
                        <Typography sx={{color: theme.primary}}>
                            Vehicle equipment
                        </Typography>
                        <hr/>
                        <Box
                            component='div'
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "12px",
                                rowGap:'8px'
                            }}
                        >
                            {
                                filterCheckBoxData.filters.map((item) => (
                                    <FilterCheckBox data={item} key={item.id} />
                                ))
                            }


                        </Box>
                    </Box>
                    <Box component='div'>
                        <Typography sx={{color: theme.primary}}>
                            Vehicle type
                        </Typography>
                        <hr/>
                        <Box
                            component='div'
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "12px",
                                rowGap:'8px'
                            }}
                        >
                            {
                                filterCheckBoxData.vehicle_types.map((item) => (
                                    <FilterCheckBox data={item} key={item.id} />
                                ))
                            }


                        </Box>
                    </Box>
                </Box>
                <PrimaryButton type="submit" text="Search" />
            </form>
        </>
    )
}

export default SearchPane
import Typography from "@mui/material/Typography";
import { theme } from "@theme/theme.js";
import Box from "@mui/material/Box";
import FilterCheckBox from "./components/FilterCheckBox.jsx";
import { filterCheckBoxData } from "@constants/filterCheckBoxData.js";
import { PrimaryButton } from "@components/UI/PrimaryButton.jsx";

import { useState } from "react";
import LocationSelect from "@components/CatalogPage/components/LocationSelect.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setAllFilters, setFilter} from "@store/slices/filtersSlice.js";
import { resetCampers } from "@store/slices/campersSlice.js";
import { resetPagination } from "@store/slices/paginationSlice.js";
import {useGetFilters} from "@store/selectors.js";
import Heading from "@components/UI/Heading.jsx";

const SearchPane = () => {
    const [location, setLocation] = useState(""); // Track the selected location
    const dispatch = useDispatch();
    const filtersData = useSelector(useGetFilters);
    const [filters, setFilters] = useState(filtersData);

    const handleSearchClick = () => {
        if (!location) {
            dispatch(setFilter({ name: "location", value: '' }));
        }

        // Dispatch Redux actions
        dispatch(resetCampers()); // Reset campers
        dispatch(resetPagination());
        dispatch(setAllFilters(filters));// Reset pagination
        dispatch(setFilter({ name: "location", value: location })); // Update location filter in Redux


        console.log("filters",filters);

    };

    return (
        <>
            <form
                onSubmit={(e) => e.preventDefault()} // Prevent form submission
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "360px",
                    width: "100%",
                    color: theme.text,
                }}
            >
                {/* Location Selector */}
                <Box component="div" sx={{marginBottom:'40px'}}>
                    <Typography sx={{ ...theme.font.body, ...theme.secondary,marginBottom:'8px' }} color="textSecondary" component="p">
                        Location
                    </Typography>
                    <LocationSelect setValue={(e) => setLocation(e)} />
                </Box>

                {/* Filters Section */}
                <Box component="div" sx={{marginBottom:'40px'}}>
                    <Typography>Filters</Typography>
                    <Box component="div">
                        <Heading text='Vehicle equipment' />
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "12px",
                                rowGap: "8px",
                                marginTop:'24px',
                                marginBottom:'32px',
                            }}
                        >
                            {filterCheckBoxData.filters.map((item) => (
                                <FilterCheckBox filters={filters} setFilters={(e)=>setFilters(e)} data={item} key={item.id} />
                            ))}
                        </Box>
                    </Box>
                    <Box component="div">
                        <Heading text='Vehicle type' />
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "12px",
                                rowGap: "8px",
                                marginTop:'24px'
                            }}
                        >
                            {filterCheckBoxData.vehicle_types.map((item) => (
                                <FilterCheckBox filters={filters} setFilters={setFilters} data={item} key={item.id} />
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Search Button */}
                <PrimaryButton sx={{maxWidth:'166px'}} onClick={handleSearchClick} type="submit" text="Search" />
            </form>
        </>
    );
};

export default SearchPane;
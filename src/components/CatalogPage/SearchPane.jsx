import Typography from "@mui/material/Typography";
import { theme } from "@theme/theme.js";
import Box from "@mui/material/Box";
import FilterCheckBox from "./components/FilterCheckBox.jsx";
import { filterCheckBoxData } from "@constants/filterCheckBoxData.js";
import { PrimaryButton } from "@components/UI/PrimaryButton.jsx";

import { useState } from "react";
import LocationSelect from "@components/CatalogPage/components/LocationSelect.jsx";
import { useDispatch } from "react-redux";
import { setFilter } from "@store/slices/filtersSlice.js";
import { resetCampers } from "@store/slices/campersSlice.js";
import { resetPagination } from "@store/slices/paginationSlice.js";

const SearchPane = () => {
    const [location, setLocation] = useState(""); // Track the selected location
    const dispatch = useDispatch();

    const handleSearchClick = () => {
        if (!location) {
            dispatch(setFilter({ name: "location", value: '' }));
            return;
        }

        // Dispatch Redux actions
        dispatch(resetCampers()); // Reset campers
        dispatch(resetPagination()); // Reset pagination
        dispatch(setFilter({ name: "location", value: location })); // Update location filter in Redux

        console.log("Search initiated with location:", location);
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
                <Box component="div">
                    <Typography sx={{ ...theme.font.body, ...theme.secondary }} color="textSecondary" component="p">
                        Location
                    </Typography>
                    <LocationSelect setValue={(e) => setLocation(e)} />
                </Box>

                {/* Filters Section */}
                <Box component="div">
                    <Typography>Filters</Typography>
                    <Box component="div">
                        <Typography sx={{ color: theme.primary }}>Vehicle equipment</Typography>
                        <hr />
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "12px",
                                rowGap: "8px",
                            }}
                        >
                            {filterCheckBoxData.filters.map((item) => (
                                <FilterCheckBox data={item} key={item.id} />
                            ))}
                        </Box>
                    </Box>
                    <Box component="div">
                        <Typography sx={{ color: theme.primary }}>Vehicle type</Typography>
                        <hr />
                        <Box
                            component="div"
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "12px",
                                rowGap: "8px",
                            }}
                        >
                            {filterCheckBoxData.vehicle_types.map((item) => (
                                <FilterCheckBox data={item} key={item.id} />
                            ))}
                        </Box>
                    </Box>
                </Box>

                {/* Search Button */}
                <PrimaryButton onClick={handleSearchClick} type="submit" text="Search" />
            </form>
        </>
    );
};

export default SearchPane;
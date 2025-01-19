import VehicleCard from "@components/UI/VehicleCard.jsx";
import Box from "@mui/material/Box";
import { PrimaryButton } from "@components/UI/PrimaryButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectGetPagination, useGetFilters, selectGetCampers } from "@store/selectors.js";
import { useGetCampersPaginationQuery } from "@store/slices/apiSlice.js";
import { addCampers, resetCampers } from "@store/slices/campersSlice.js";
import { setPage, setMaxPages } from "@store/slices/paginationSlice.js";
import { getActiveFilters, getMaxPages } from "@/utils/functions.js";
import { useEffect } from "react";

const ResultPane = () => {
    const dispatch = useDispatch();
    const pagination = useSelector(selectGetPagination);
    const filters = useSelector(useGetFilters);
    const reduxCampers = useSelector(selectGetCampers);

    const { data: camperPage } = useGetCampersPaginationQuery({
        page: pagination.currentPage,
        limit: pagination.limit,
        ...getActiveFilters(filters),
    });

    // Reset campers and page when filters change
    useEffect(() => {
        dispatch(resetCampers());
        dispatch(setPage(1)); // Reset page to 1
    }, [filters, dispatch]);

    // Update Redux campers and maxPages when new data is fetched
    useEffect(() => {
        if (camperPage) {
            dispatch(addCampers(camperPage.items));
            dispatch(setMaxPages(getMaxPages(pagination.limit, camperPage.total)));
        }
    }, [camperPage, pagination.limit, dispatch]);

    const handleClick = () => {
        dispatch(setPage(pagination.currentPage + 1)); // Increment page in Redux
    };

    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                rowGap: "40px",
            }}
        >
            <Box
                component="div"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "32px",
                    width: "100%",
                }}
            >
                {reduxCampers.length > 0 &&
                    reduxCampers.map((camper) => <VehicleCard key={camper.id} camper={camper} />)}
            </Box>
            {pagination.currentPage <= pagination.maxPages && (
                <PrimaryButton onClick={handleClick} text="Load More" variant="outlined" />
            )}
        </Box>
    );
};

export default ResultPane;
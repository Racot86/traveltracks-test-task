import VehicleCard from "@components/UI/VehicleCard.jsx";
import Box from "@mui/material/Box";
import { PrimaryButton } from "@components/UI/PrimaryButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectGetPagination, useGetFilters } from "@store/selectors.js";
import { useGetCampersPaginationQuery } from "@store/slices/apiSlice.js";
import { addCampers, resetCampers } from "@store/slices/campersSlice.js";
import { getActiveFilters, getMaxPages} from "@/utils/functions.js";
import { useEffect, useState } from "react";

const ResultPane = () => {
    const dispatch = useDispatch();
    const pagination = useSelector(selectGetPagination);
    const filters = useSelector(useGetFilters);

    const [campers, setCampers] = useState([]);
    const [page, setPage] = useState(1); // Start from page 1
    const [maxPages, setMaxPages] = useState(pagination.maxPages);

    const { data: camperPage } = useGetCampersPaginationQuery({
        page: page,
        limit: pagination.limit,
        ...getActiveFilters(filters),
    });

    // Reset campers when filters or pagination parameters change
    useEffect(() => {
        dispatch(resetCampers()); // Reset Redux state
        setCampers([]); // Clear local campers state
        setPage(1); // Reset to the first page
    }, [filters, pagination.limit, dispatch]);

    // Update campers and maxPages when new data is fetched
    useEffect(() => {
        if (camperPage) {
            setCampers((old) => [...old, ...camperPage.items]);
            setMaxPages(getMaxPages(pagination.limit, camperPage.total));
        }
    }, [camperPage, pagination.limit]);
    console.log(campers)
    // Dispatch campers to Redux store on unmount
    useEffect(() => {
        return () => {
            dispatch(resetCampers());
            dispatch(addCampers(campers));
        };
    }, [dispatch, campers]);

    const handleClick = () => {
        setPage((prevPage) => prevPage + 1); // Increment the page
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
                {campers.length > 0 &&
                    campers.map((camper) => <VehicleCard key={camper.id} camper={camper} />)}
            </Box>
            {page <= maxPages && (
                <PrimaryButton onClick={handleClick} text="Load More" variant="outlined" />
            )}
        </Box>
    );
};

export default ResultPane;
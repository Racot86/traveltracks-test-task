import VehicleCard from "@components/UI/VehicleCard.jsx";
import Box from "@mui/material/Box";
import PrimaryButton from "@components/UI/PrimaryButton.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectCampersQuery, selectPagination, setPage} from "@store/slices/campersSlice.js";
import {fetchCampers} from "@api/apiService.js";
import {getActiveFilters, getMaxPages} from "@/utils/functions.js";
import {useGetFilters} from "@store/selectors.js";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import Typography from "@mui/material/Typography";
import {theme} from "@theme/theme.js";


const ResultPane = () => {

    const dispatch = useDispatch();
    const {items:campers,isLoading,error} = useSelector(selectCampersQuery);
    const {page, per_page, total} = useSelector(selectPagination);

    const filters = useSelector(useGetFilters);
    const [isFetching, setIsFetching] = useState(false);



    useEffect(() => {
        if (page === 1 && campers.length === 0) {

            dispatch(fetchCampers({page: 1, limit: 4, filters: {}}));
        }

    }, []);


    const handleLoadMore = async () => {

        if (isFetching) return;
        setIsFetching(true);
        if (page <= getMaxPages(per_page, total)) {
            dispatch(setPage(page + 1));
            await dispatch(fetchCampers({
                page: page + 1,
                limit: per_page,
                filters: getActiveFilters(filters)
            }));
        }
        setIsFetching(false);

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
                component="ul"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "32px",
                    width: "100%",
                    padding:0
                }}
            >
                {!error  &&  campers && campers.length > 0 &&
                    campers.map((camper) => (
                        <VehicleCard key={camper.id} camper={camper}/>
                    ))
                }
                {error && <Typography sx={{color:theme.button.main}}>{error.message}</Typography>}
                {campers.length===0 && <Typography>Nothing found</Typography>}

            </Box>

            {page <= getMaxPages(per_page, total) &&
                 <PrimaryButton loading={isLoading} onClick={handleLoadMore} text="Load More" variant="outlined"/>}

        </Box>
    );
};

export default ResultPane;
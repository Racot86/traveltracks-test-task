import VehicleCard from "@components/UI/VehicleCard.jsx";
import {useGetCampersQuery} from "@store/slices/apiSlice.js";
import Box from "@mui/material/Box";

const ResultPane = () => {
    const { data: campers, error, isLoading } = useGetCampersQuery();
    return (
        <Box
            component='div'
            sx={{
                display:'flex',
                flexDirection:'column',
                rowGap:'32px',
                width:'100%',
            }}
        >
            {!isLoading && campers && campers.items.length > 0 && campers.items.map((camper) => (
                <VehicleCard key={camper.id} camper={camper} />
            ))}

        </Box>
    )
}

export default ResultPane;
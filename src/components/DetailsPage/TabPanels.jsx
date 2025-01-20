import {Box} from '@mui/material';
import PrimaryCard from "@components/UI/PrimaryCard.jsx";
import {theme} from "@theme/theme.js";
import ChipsPack from "@components/UI/ChipsPack.jsx";
import VehicleDetails from "@components/DetailsPage/VehicleDetails.jsx";
import Review from "@components/DetailsPage/Review.jsx";
import PropTypes from "prop-types";

const TabPanels = ({value, camper, ...other}) => {
    return (
        <Box
            {...other}
        >
            <Box
                component="div"
                hidden={value !== 0}
            >
                <PrimaryCard
                    bgColor={theme.input}
                    borderColor={"transparent"}
                    padding={"44px 52px"}
                    radius={'10px'}
                    sx={{height: '588px', display: 'flex', flexDirection: 'column'}}
                >
                    <ChipsPack camper={camper}/>
                    <VehicleDetails camper={camper}/>
                </PrimaryCard>
            </Box>
            <Box
                component="div"
                hidden={value !== 1}
            >
                <PrimaryCard
                    bgColor={theme.white}
                    borderColor={"transparent"}
                    padding={"44px 52px"}
                    radius={'10px'}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap:'44px',
                        overflow:'scroll',
                    }}
                >
                    {camper.reviews.map((review, index) => (
                        <Review key={index} review={review}/>
                    ))}
                </PrimaryCard>
            </Box>
        </Box>

    );
};
TabPanels.propTypes = {
    value: PropTypes.number.isRequired,
    camper: PropTypes.object.isRequired,

}
export default TabPanels;
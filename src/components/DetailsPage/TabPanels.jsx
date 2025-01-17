

import { Box } from '@mui/material';
import PrimaryCard from "@components/UI/PrimaryCard.jsx";
import {theme} from "@theme/theme.js";
import ChipsPack from "@components/UI/ChipsPack.jsx";

const TabPanels = ({value, camper, ...other }) => {
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
            >
                <ChipsPack camper={camper} />
            </PrimaryCard>
        </Box>
            <Box
                component="div"
                hidden={value !== 1}
            >
                <PrimaryCard
                    bgColor={theme.input}
                    borderColor={"transparent"}
                    padding={"44px 52px"}
                    radius={'10px'}
                >
                    tab2
                </PrimaryCard>
            </Box>
        </Box>

    );
};

export default TabPanels;
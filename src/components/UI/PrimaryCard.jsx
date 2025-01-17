import Box from "@mui/material/Box";
import {theme} from "@theme/theme.js";

const PrimaryCard = ({bgColor="white", radius="2px",padding="10px",borderColor="black", children})=>{
    return (
        <Box
            component="div"
            sx={{
                backgroundColor: bgColor,
                borderRadius: radius,
                padding: padding,
                border: `1px solid ${theme.lightGray}`,
                borderColor: borderColor,
            }}
        >
            {children}
        </Box>
    )
}
export default PrimaryCard;
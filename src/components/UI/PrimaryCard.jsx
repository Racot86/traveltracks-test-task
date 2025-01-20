import Box from "@mui/material/Box";
import {theme} from "@theme/theme.js";
import PropTypes from "prop-types";

const PrimaryCard = ({bgColor = "white", radius = "2px", padding = "10px", borderColor = "black", children, sx}) => {
    return (
        <Box
            component="div"
            sx={{
                backgroundColor: bgColor,
                borderRadius: radius,
                padding: padding,
                border: `1px solid ${theme.lightGray}`,
                borderColor: borderColor,
                flexGrow: 1,
                ...sx
            }}
        >
            {children}
        </Box>
    )
}

PrimaryCard.propTypes = {
    bgColor: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.string,
    padding: PropTypes.string,
    borderColor: PropTypes.string,
    sx: PropTypes.object,
    radius: PropTypes.string,
}

export default PrimaryCard;
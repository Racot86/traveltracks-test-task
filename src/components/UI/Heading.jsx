import Box from "@mui/material/Box";
import {theme} from "@theme/theme.js";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const Heading = ({sx, text}) => {
    return (
        <Box
            component='div'
            sx={{
                display: 'flex',
                borderBottom: `1px solid ${theme.lightGray}`,
                paddingBottom: '24px',
                ...sx
            }}
        >
            <Typography sx={{color: theme.primary,...theme.font.h3}}>
                {text}
            </Typography>
        </Box>
    )
}
Heading.propTypes = {
    sx:PropTypes.object,
    text: PropTypes.string.isRequired,
}
export default Heading
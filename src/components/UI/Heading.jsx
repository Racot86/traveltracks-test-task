import Box from "@mui/material/Box";
import {theme} from "@theme/theme.js";
import Typography from "@mui/material/Typography";

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
            <Typography sx={{color: theme.primary}}>
                {text}
            </Typography>
        </Box>
    )
}
export default Heading
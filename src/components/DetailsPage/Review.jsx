import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@components/UI/Rating.jsx";
import {theme} from "@theme/theme.js";

const Review = ({review}) => {
    return (
        <Box component='div'
             sx={{
                 flexGrow: 1,
                 maxWidth: "631px",
            }}
        >
            <Box
                component='div'
                sx={{display:'flex'}}
            >
                <Box
                    component='div'
                    sx={{
                        display: "flex",
                        width: "60px",
                        height: "60px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius:'60px',
                        backgroundColor: theme.badges,
                    }}
                >
                    <Typography>
                        {review.reviewer_name[0].toUpperCase()}
                    </Typography>
                </Box>
                <Box component='div' sx={{}}>
                    <Typography>
                        {review.reviewer_name}
                    </Typography>
                    <Rating value={review.reviewer_rating} max={5} />
                </Box>
            </Box>
            <Typography>
                {review.comment}
            </Typography>
        </Box>
    )
}
export default Review
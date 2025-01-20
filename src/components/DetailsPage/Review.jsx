import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@components/UI/Rating.jsx";
import {theme} from "@theme/theme.js";
import PropTypes from "prop-types";

const Review = ({review}) => {
    return (
        <Box component='div'
             sx={{
                 flexGrow: 1,
                 maxWidth: "631px",
                 display: "flex",
                 flexDirection: "column",
                 rowGap:'16px'
             }}
        >
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    gap:'16px',
                    alignItems: 'center',
                }}
            >
                <Box
                    component='div'
                    sx={{
                        display: "flex",
                        width: "60px",
                        height: "60px",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: '60px',
                        backgroundColor: theme.badges,
                    }}
                >
                    <Typography sx={{...theme.font.h2,color:theme.button.main}}>
                        {review.reviewer_name[0].toUpperCase()}
                    </Typography>
                </Box>
                <Box component='div' sx={{display: "flex", flexDirection: "column", rowGap:'4px'}}>
                    <Typography sx={{...theme.font.body2}}>
                        {review.reviewer_name}
                    </Typography>
                    <Rating value={review.reviewer_rating} max={5}/>
                </Box>
            </Box>
            <Typography sx={{...theme.font.body,color:theme.text}}>
                {review.comment}
            </Typography>
        </Box>
    )
}
Review.propTypes = {
    review: PropTypes.object.isRequired,
}
export default Review
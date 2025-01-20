import Box from "@mui/material/Box";
import blankStar from '@assets/ico-star-blank.svg'
import star from '@assets/ico-star.svg'
import PropTypes from "prop-types";

const Rating = ({value, max}) => {

    return (
        <Box>
            {Array.from({length: max}, (_, index) => (
                <Box
                    key={index}
                    component='img'
                    src={index < value ? star : blankStar}
                />
            ))}
        </Box>
    )
}
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

export default Rating;
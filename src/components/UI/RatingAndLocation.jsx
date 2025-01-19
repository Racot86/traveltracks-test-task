import Box from "@mui/material/Box";
import icoStar from "@assets/ico-star.svg";
import Typography from "@mui/material/Typography";
import icoMap from "@assets/ico-map.svg";

const RatingAndLocation = ({sx, camper})=>{
    const reviewsTextFormatting = (reviews) => {
        if (reviews > 0){
            if (reviews > 1){
                return `(${reviews} Reviews)`;
            }else {
                return `(${reviews} Review)`;
            }
        }else {
            return ''
        }
    }

    return (
        <Box
            component='div'
            sx={{
                display: 'flex',
                gap:'16px',
                alignItems: 'center',
                ...sx
            }}
        >
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    gap: '4px'
                }}
            >
                <Box component='img' src={icoStar} sx={{}}/>
                <Typography sx={{textDecoration:'underline'}}>
                    {`${camper.rating}${reviewsTextFormatting(camper.reviews.length)}`}
                </Typography>
            </Box>
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    gap:'4px',
                    alignItems: 'center',
                }}
            >
                <Box component='img' src={icoMap} sx={{width:'16px', height:'16px'}}/>
                <Typography>
                    {camper.location}
                </Typography>
            </Box>
        </Box>

    )
}
export default RatingAndLocation;
import Box from "@mui/material/Box";
import {theme} from "@theme/theme.js";
import Typography from "@mui/material/Typography";
import icoFavorite from '@assets/ico-favorite.svg'
import icoStar from '@assets/ico-star.svg'

const VehicleCard = ({camper}) => {
    console.log(camper)
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
            component="div"
            sx={{
                display: 'flex',
                padding: '24px',
                border: `1px solid ${theme.lightGray}`,
                borderRadius: '20px',
                gap: '24px',
                width: '100%',
            }}
        >
            <Box
                component='img'
                src={camper.gallery[0].thumb}
                sx={{
                    width: '292px',
                    height: '320px',
                    objectFit: 'cover',
                    borderRadius: '10px'

                }}
            />
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                }}
            >
                <Box
                    component='div'
                    sx={{
                        display: 'flex',
                        width: '100%',
                    }}
                >
                    <Typography>
                        {camper.name}
                    </Typography>
                    <Box
                        component='div'
                        sx={{
                            display: 'flex',
                            gap: '6px',
                            marginLeft: 'auto'
                        }}
                    >
                        <Typography>
                            {`€${camper.price}`}
                        </Typography>
                        <Box
                            component='img'
                            src={icoFavorite}
                            sx={{
                                width: '24px',
                            }}
                        />
                    </Box>

                </Box>
                <Box
                    component='div'
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Box component='img' src={icoStar} sx={{}}/>
                    <Typography>
                        {`${camper.rating}${reviewsTextFormatting(camper.reviews.length)}`}
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}
export default VehicleCard
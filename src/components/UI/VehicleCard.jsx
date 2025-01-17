import Box from "@mui/material/Box";
import {theme} from "@theme/theme.js";
import Typography from "@mui/material/Typography";
import icoFavorite from '@assets/ico-favorite.svg'
import ChipsPack from "@components/UI/ChipsPack.jsx";
import {PrimaryButton} from "@components/UI/PrimaryButton.jsx";
import {useNavigate} from "react-router-dom";
import RatingAndLocation from "@components/UI/RatingAndLocation.jsx";

const VehicleCard = ({camper}) => {
    const navigate = useNavigate()
    const navigateToDetails = ()=>{
        navigate("/catalog/"+camper.id)

    }

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
                <RatingAndLocation camper={camper} />
                <Typography
                    noWrap
                    sx={{

                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        maxWidth: '525px',
                    }}
                >
                    {camper.description}
                </Typography>
                <ChipsPack camper={camper} />
                <PrimaryButton onClick={navigateToDetails} sx={{marginTop:'auto',maxWidth:'173px'}} text='Show more' />
            </Box>
        </Box>
    )
}
export default VehicleCard
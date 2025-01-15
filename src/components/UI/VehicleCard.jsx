import Box from "@mui/material/Box";
import {theme} from "@theme/theme.js";
import Typography from "@mui/material/Typography";

const VehicleCard = ({camper}) => {
    console.log(camper)
    return (
        <Box
            component="div"
            sx={{
                display: 'flex',
                padding:'24px',
                border:`1px solid ${theme.lightGray}`,
                borderRadius:'20px',
                gap:'24px',
                width:'100%',
            }}
        >
            <Box
                component='img'
                src={camper.gallery[0].thumb}
                sx={{
                    width:'292px',
                    height:'320px',
                    objectFit: 'cover',
                    borderRadius:'10px'

                }}
            />
            <Box
                component='div'
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    width:'100%',
                }}
            >
                <Box
                    component='div'
                    sx={{
                        display:'flex',
                        width:'100%',
                    }}
                >
                    <Typography >
                        {camper.name}
                    </Typography>
                    <Typography sx={{marginLeft:'auto'}} >
                        {`€${camper.price}` }
                    </Typography>
                </Box>

            </Box>

        </Box>
    )
}
export default VehicleCard
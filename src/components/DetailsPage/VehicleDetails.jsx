import Box from "@mui/material/Box";
import Heading from "@components/UI/Heading.jsx";
import Typography from "@mui/material/Typography";

const VehicleDetails = ({camper}) => {
    console.log(camper);
    const liStyle = {
        display: "flex",
    }
    const ulStyle = {
        padding:0,
        margin:0,
    }
    return (
        <Box sx={{marginTop:'auto'}}>
            <Heading sx={{marginBottom:'24px'}} text='Vehicle Details' />
            <Box sx={ulStyle} component='ul'>
                <li style={liStyle}>
                    <Typography>
                        Form
                    </Typography>
                    <Typography sx={{marginLeft: "auto"}}>
                        {camper.form}
                    </Typography>
                </li>
                <li style={liStyle}>
                    <Typography>
                        Length
                    </Typography>
                    <Typography sx={{marginLeft: "auto"}}>
                        {camper.length}
                    </Typography>
                </li>
                <li style={liStyle}>
                    <Typography>
                        Width
                    </Typography>
                    <Typography sx={{marginLeft: "auto"}}>
                        {camper.width}
                    </Typography>
                </li>
                <li style={liStyle}>
                    <Typography>
                        Height
                    </Typography>
                    <Typography sx={{marginLeft: "auto"}}>
                        {camper.height}
                    </Typography>
                </li>
                <li style={liStyle}>
                    <Typography>
                        Tank
                    </Typography>
                    <Typography sx={{marginLeft: "auto"}}>
                        {camper.tank}
                    </Typography>
                </li>
                <li style={liStyle}>
                    <Typography>
                        Consumption
                    </Typography>
                    <Typography sx={{marginLeft: "auto"}}>
                        {camper.consumption}
                    </Typography>
                </li>
            </Box>
        </Box>
    )
}
export default VehicleDetails;
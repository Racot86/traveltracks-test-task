import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NotFoundPage = () => {
    return(
        <Box
            sx={{
                display:'flex',
                height:'calc(100vh - 72px)',
                alignItems:'center',
                justifyContent:'center'
            }} fullWidth>
            <Typography variant="h2" color="textSecondary">
                Something went wrong
            </Typography>
        </Box>
        )

}
export default NotFoundPage;
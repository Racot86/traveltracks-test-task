import Box from "@mui/material/Box";
import background from '../assets/HomePage/background.jpg'
import {theme} from "../theme/theme.js";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../components/UI/PrimaryButton.jsx";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box
                sx={{
                    padding: '0 64px',
                    backgroundImage: `url(${background})`,
                    height: 'calc(100vh - 72px)',
                    width: '100%',
                    color: theme.text,
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        alignItems: 'start',
                        maxWidth: '576px',
                        gap: '40px'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}
                    >
                        <Typography sx={{color: theme.input, ...theme.font.h1}}>
                            Campers of your dreams
                        </Typography>
                        <Typography sx={{color: theme.input, ...theme.font.h2}}>
                            You can find everything you want in our catalog
                        </Typography>
                    </Box>
                    <PrimaryButton onClick={() => navigate('/catalog')} text='View Now'/>
                </Box>
            </Box>
        </>
    )
}
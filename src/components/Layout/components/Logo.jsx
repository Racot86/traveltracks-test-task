import Box from '@mui/material/Box';
import svgLogo from '../../../assets/logo.svg';
import {useNavigate} from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <Box
            component="img"
            sx={{
                height: 16,
                position: 'absolute',
                top: 28,
                left: 64,
                cursor: "pointer",
            }}
            alt="Material-UI Logo"
            src={svgLogo}
            onClick={() => navigate('/')}
        />
    );
};

export default Logo;
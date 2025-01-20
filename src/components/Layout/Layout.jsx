import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {theme} from "@theme/theme.js";
import Logo from "./components/Logo.jsx";
import {NavMenu} from "./components/NavMenu.jsx";
import PropTypes from "prop-types";

const Layout = ({children}) => {

    return (<>
            <Box sx={{flexGrow: 1, padding: 0}}>
                <AppBar
                    sx={{
                        backgroundColor: theme.input,
                        boxShadow: 'none',
                    }}
                    position="static">
                    <Toolbar
                        sx={{
                            height: '72px',
                            padding: '0  !important',
                            position: 'relative',
                        }}
                    >
                        <Logo/>
                        <NavMenu/>
                    </Toolbar>
                </AppBar>
            </Box>

            {children}
        </>);
}
Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Layout;

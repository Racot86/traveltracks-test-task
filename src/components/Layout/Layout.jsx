import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer} from "@mui/material";
import {useState} from "react";
import {theme} from "../../theme/theme.js";
import Logo from "./components/Logo.jsx";
import {NavMenu} from "./components/NavMenu.jsx";

const Layout = ({children}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = () => setDrawerOpen(!drawerOpen)

    return (
        <>
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
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            onClick={toggleDrawer}
                            sx={{display: 'none'}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <NavMenu/>
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer
                anchor={'left'}
                open={drawerOpen}
                onClose={toggleDrawer}
            >
                <p>Drawer</p>
            </Drawer>
            {children}
        </>
    );
}
export default Layout;

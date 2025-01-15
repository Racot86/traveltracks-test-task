import {theme} from "../../../theme/theme.js";
import Typography from "@mui/material/Typography";
import {Link } from 'react-router-dom';
import {NLink} from "../../UI/NLink.jsx";

export const NavMenu = () =>{
    return (
        <Typography
            color={theme.primary}
            variant="h6" component="div"
            sx={{
                display:"inline-flex",
                flexGrow: 1,
                justifyContent:"center",
                gap:'32px',
                ...theme.font.basic,
                ...theme.font.body2
            }}
        >
            <NLink to='/' text='Home' />
            <NLink to='/catalog' text='Catalog' />
            <NLink to='/favorites' text='Favorites' />
        </Typography>
    )
}
import {theme} from "../../../theme/theme.js";
import Typography from "@mui/material/Typography";
import {NLink} from "../../UI/NLink.jsx";
import Box from "@mui/material/Box";
import {useSelector} from "react-redux";
import {selectGetFavorites} from "@store/selectors.js";

export const NavMenu = () => {
    const favorites = useSelector(selectGetFavorites)
    return (
        <Typography
            color={theme.primary}
            variant="h6" component="div"
            sx={{
                display: "inline-flex",
                flexGrow: 1,
                justifyContent: "center",
                gap: '32px',
                ...theme.font.basic,
                ...theme.font.body2
            }}
        >
            <NLink to='/' text='Home'/>
            <NLink to='/catalog' text='Catalog'/>
            <Box
                sx={{
                    display: 'flex',
                    gap: '1px',
                }}>
                <NLink to='/favorites' text='Favorites'/>
                {favorites.length > 0 &&
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                            padding: '4px',
                            background: theme.button.hover,
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                        }}
                    >
                        <Typography sx={{color: theme.lightGray}}> {favorites.length}</Typography>
                    </Box>
                }
            </Box>
        </Typography>
    )
}
import {Button} from "@mui/material";
import {theme} from "../../theme/theme.js";

export const PrimaryButton = ({text, ...props}) => {
    return (
        <Button
            sx={{
                background:theme.button.main,
                '&:hover': {background:theme.button.hover},
                color: theme.white,
                padding:'16px 49px',
                borderRadius:'200px'
            }}
            {...props}
        >
            {text}
        </Button>
    )
}
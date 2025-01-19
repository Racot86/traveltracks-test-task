import {Button} from "@mui/material";
import {theme} from "../../theme/theme.js";

export const PrimaryButton = ({text, sx,variant='filled', ...props}) => {

    const filledStyle ={
        background:theme.button.main,
        '&:hover': {background:theme.button.hover},
        color: theme.white,
        padding:'16px 49px',
        borderRadius:'200px',
        textTransform: 'none',
        ...sx
    }
    const outlinedStyle ={
        background:theme.white,
        border:`1px solid ${theme.lightGray}`,
        '&:hover': {border:`1px solid ${theme.button.hover}`},
        color: theme.text,
        padding:'16px 49px',
        borderRadius:'200px',
        textTransform: 'none',
        ...sx
    }

    return (
        <Button

            sx={variant === 'outlined' ? outlinedStyle : filledStyle}
            {...props}
        >
            {text}
        </Button>
    )
}
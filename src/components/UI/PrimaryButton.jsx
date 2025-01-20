import {Button, CircularProgress} from "@mui/material";
import {theme} from "@theme/theme.js";
import PropTypes from "prop-types";

const PrimaryButton = ({loading=false, text, sx, variant = 'filled', ...props}) => {

    const filledStyle = {
        background: theme.button.main,
        '&:hover': {background: theme.button.hover},
        color: theme.white,
        padding: '16px 49px',
        borderRadius: '200px',
        textTransform: 'none',
        ...sx
    }
    const outlinedStyle = {
        background: theme.white,
        border: `1px solid ${theme.lightGray}`,
        '&:hover': {border: `1px solid ${theme.button.hover}`},
        color: theme.text,
        padding: '16px 49px',
        borderRadius: '200px',
        textTransform: 'none',
        ...sx
    }

    return (
        <Button

            sx={variant === 'outlined' ? outlinedStyle : filledStyle}
            {...props}
        >
            {loading ? <CircularProgress />:text}

        </Button>
    )
}
PrimaryButton.propTypes = {
    variant: PropTypes.string,
    text: PropTypes.string.isRequired,
    sx: PropTypes.object,
    loading: PropTypes.bool,
}

export default PrimaryButton;
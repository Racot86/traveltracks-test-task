import {Tab, Tabs} from "@mui/material";
import {theme} from "@theme/theme.js";
import PropTypes from "prop-types";

const TabList = ({sx, value, valueHandler}) => {

    return (
        <Tabs
            value={value}
            onChange={(e, newVal) => {
                valueHandler(newVal)
            }}
            sx={{
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 2,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    backgroundColor: theme.lightGray,
                    zIndex: -1,
                },
                '& .MuiTabs-indicator': {
                    backgroundColor: theme.button.main,
                    height: '5px',
                },
                ...sx
            }}
        >
            <Tab
                sx={{
                    textTransform: "none",
                    ...theme.font.h3,
                    color:theme.primary,
                    "&.Mui-selected": { color: theme.primary }
                }}
                label="Features"
            />
            <Tab
                sx={{
                    textTransform: "none",
                    ...theme.font.h3,
                    color:theme.primary,
                    "&.Mui-selected": { color: theme.primary }
                }}
                label="Reviews"
            />
        </Tabs>
    )
}
TabList.propTypes = {
    value: PropTypes.number.isRequired,
    valueHandler: PropTypes.func.isRequired,
    sx: PropTypes.object,
}
export default TabList;
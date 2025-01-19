import {Tab, Tabs} from "@mui/material";
import {theme} from "@theme/theme.js";

const TabList = ({sx, value, valueHandler}) => {

    return (
        <Tabs
            value={value}
            onChange={(e,newVal)=>{valueHandler(newVal)}}
            sx={{
                position: 'relative',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    backgroundColor: theme.lightGray,
                },
                '& .MuiTabs-indicator': {
                    backgroundColor: theme.button.main,
                    height: '5px',
                },
                ...sx
            }}
        >
            <Tab label="Features"  />
            <Tab label="Reviews"  />
        </Tabs>
    )
}
export default TabList;
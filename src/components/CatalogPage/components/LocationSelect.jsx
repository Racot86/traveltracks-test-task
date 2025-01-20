import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useSelector} from "react-redux";

import {selectGetLocations} from "@store/selectors.js";
import {useState} from "react";
import Box from "@mui/material/Box";
import mapIco from '@assets/ico-map.svg'
import {theme} from "@theme/theme.js";


const LocationSelect = ({value, setValue, ...props}) => {

    const [location, setLocation] = useState(value);
    const locations = useSelector(selectGetLocations)
    const handleChange = (event) => {
        setLocation(event.target.value);
        setValue(event.target.value);
    };

    return (
        <>
            <Select

                displayEmpty // Ensure empty values render using renderValue
                renderValue={(selected) => {
                    if (!selected) {
                        // Handle empty value
                        return (
                            <Box sx={{
                                background: theme.input,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: 'calc(100% - 18px)',
                                height: '100%',
                                paddingLeft: '18px',
                                borderRadius: '12px',
                                color: theme.secondary,
                            }} display="flex" alignItems="center" gap="8px">
                                <Box
                                    component="img"
                                    src={mapIco}
                                    alt="Map Icon"
                                    sx={{
                                        width: 20,
                                        height: 20,
                                        color: "red", // This works for some SVGs
                                        "& path": {
                                            fill: "red", // Ensure path inside SVG is targeted
                                        },
                                    }}
                                />

                                <Box sx={{color: 'inherit'}}>City</Box>
                            </Box>
                        );
                    } else {
                        return (
                            <Box
                                sx={{
                                    background: theme.input,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: 'calc(100% - 18px)',
                                    height: '100%',
                                    paddingLeft: '18px',
                                    borderRadius: '20px',
                                }}
                                display="flex"
                                alignItems="center"
                                gap="8px"
                            >
                                <Box
                                    component="img"
                                    src={mapIco}
                                    alt="Map Icon"
                                    sx={{width: 20, height: 20}} // Set icon dimensions
                                />
                                {location}
                            </Box>
                        );
                    }

                    // Handle selected value
                    return (
                        <Box display="flex" alignItems="center" gap="8px">
                            <Box
                                component="img"
                                src={mapIco}
                                alt="Map Icon"
                                sx={{width: 20, height: 20}} // Set icon dimensions
                            />
                            {selected}
                        </Box>
                    );
                }}
                value={location}
                onChange={handleChange}
                sx={{
                    borderRadius: '12px',
                    background: theme.input,
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: `1px solid ${theme.input}`, // Custom border color
                        borderRadius: "12px", // Custom border radius
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.input, // Hover border color
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.input, // Focused border color
                    },
                }}
                {...props}
                fullWidth
            >
                <MenuItem value="">
                    <em>Any</em>
                </MenuItem>
                {locations && locations.map((item, index) => (
                    <MenuItem key={index} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </>
    );
}

export default LocationSelect;
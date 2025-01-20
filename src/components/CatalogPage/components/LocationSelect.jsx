import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useSelector} from "react-redux";

import {selectGetLocations} from "@store/selectors.js";
import {useState} from "react";
import Box from "@mui/material/Box";
import mapIco from '@assets/ico-map.svg'
import {theme} from "@theme/theme.js";
import PropTypes from "prop-types";


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

                displayEmpty
                renderValue={(selected) => {
                    if (!selected) {

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
                                        color: "red",
                                        "& path": {
                                            fill: "red",
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
                                    sx={{width: 20, height: 20}}
                                />
                                {location}
                            </Box>
                        );
                    }


                }}
                value={location}
                onChange={handleChange}
                sx={{
                    borderRadius: '12px',
                    background: theme.input,
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: `1px solid ${theme.input}`,
                        borderRadius: "12px",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.input,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.input,
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
LocationSelect.propTypes = {
    setValue: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

export default LocationSelect;


import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import {useState} from "react";


const LocationSelect = ({data,sx}) => {
    const [location, setLocation] = useState('');

    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    return (
                <Select
                    value={location}
                    onChange={handleChange}
                    sx={{...sx}}
                >
                    <MenuItem value="">
                        <em>Any</em>
                    </MenuItem>
                    {data.map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))}
                </Select>
    );
}

export default LocationSelect;
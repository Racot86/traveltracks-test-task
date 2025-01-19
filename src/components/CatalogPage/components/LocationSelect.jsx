import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "@store/slices/filtersSlice.js";
import {selectGetLocations, useGetFilters} from "@store/selectors.js";
import {useState} from "react";


const LocationSelect = ({sx, setValue, ...props}) => {

    const [location, setLocation] = useState('');
    const locations = useSelector(selectGetLocations)
    const handleChange = (event) => {
        setLocation(event.target.value);
        setValue(event.target.value);
    };

    return (
                <Select
                    value={location}
                    onChange={handleChange}
                    sx={{...sx}}
                    {...props}
                    fullWidth
                >
                    <MenuItem value="">
                        <em>Any</em>
                    </MenuItem>
                    {locations.map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))}
                </Select>
    );
}

export default LocationSelect;
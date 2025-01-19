import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {theme} from "@theme/theme.js";

import {useDispatch, useSelector} from "react-redux";
import {setFilter, toggleFilter} from "@store/slices/filtersSlice.js";
import {useGetFilters} from "@store/selectors.js";
import {useEffect} from "react";
const FilterCheckBox = ({data}) =>{
    const filters = useSelector(useGetFilters);
    const dispatch = useDispatch();
    const icons = import.meta.glob('/src/assets/filterIcons/*.svg', { eager: true });

    const handleChange = () => {
        dispatch(toggleFilter(data.flag));
    }
    const checked = filters[data.flag];
    useEffect(() => {
        if (data.category==='fuel' && checked) {
            dispatch(setFilter({name: 'engine', value: ''}));
            switch (data.flag){
                case 'petrol':
                    dispatch(setFilter({name:'diesel',value:false}));
                    dispatch(setFilter({name:'gas',value:false}));
                    dispatch(setFilter({name:'hybrid',value:false}));
                    break;
                case 'diesel':
                    dispatch(setFilter({name:'petrol',value:false}));
                    dispatch(setFilter({name:'gas',value:false}));
                    dispatch(setFilter({name:'hybrid',value:false}));
                    break;
                case 'gas':
                    dispatch(setFilter({name:'diesel',value:false}));
                    dispatch(setFilter({name:'petrol',value:false}));
                    dispatch(setFilter({name:'hybrid',value:false}));
                    break;
                case 'hybrid':
                    dispatch(setFilter({name:'diesel',value:false}));
                    dispatch(setFilter({name:'petrol',value:false}));
                    dispatch(setFilter({name:'gas',value:false}));
                    break;

            }
            dispatch(setFilter({name: 'engine', value: data.flag}));
        }else if(data.category==='fuel' && filters['diesel']+filters['petrol']+filters['gas']+filters['hybrid']===0) {
                dispatch(setFilter({name:'engine',value:''}));
        }
        if (data.category==='trans'){
            if (checked) {
                dispatch(setFilter({name:'transmission',value:data.flag}));
            }else {
                dispatch(setFilter({name:'transmission',value:''}));
            }
        }

    },[checked]);

    return (

            <Box
                onClick={handleChange}
                component='div'
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent:'center',
                    rowGap:'8px',
                    padding:'16px 40px',
                    border: `1px solid ${ checked?theme.button.main:theme.lightGray}`,
                    borderRadius: '12px',
                    maxWidth:'112px',
                    transition: '0.3s ease-in-out',
                    cursor: 'pointer',
                    color:theme.primary
                }}
            >
                <Box
                    component="img"
                    src={icons[`/src/assets/filterIcons/${data.ico}`]?.default || ''}
                    alt={data.text}
                    sx={{ width: 32, height: 32 }}
                />
                <Typography>
                    {data.text}
                </Typography>
            </Box>

    )
}
export default FilterCheckBox
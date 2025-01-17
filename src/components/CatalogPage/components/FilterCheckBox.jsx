import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {theme} from "@theme/theme.js";
import {useState} from "react";


const FilterCheckBox = ({data}) =>{
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked)
    };
    const icons = import.meta.glob('/src/assets/filterIcons/*.svg', { eager: true });
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
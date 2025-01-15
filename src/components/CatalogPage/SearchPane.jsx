import Typography from "@mui/material/Typography";
import {theme} from "@theme/theme.js";
import {Autocomplete, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import FilterCheckBox from "./components/FilterCheckBox.jsx";
import {filterCheckBoxData} from "@constants/filterCheckBoxData.js";
import {PrimaryButton} from "@components/UI/PrimaryButton.jsx";

const SearchPane = () => {
    return (
        <>
            <form
                onSubmit={e => e.preventDefault()}
                style={{
                    minWidth:'360px',
                    color:theme.text,
                }}
            >
                <Box component='div'>
                    <Typography sx={{...theme.font.body, ...theme.secondary}} color="textSecondary" component="p">
                        Location
                    </Typography>
                    <Autocomplete
                        disablePortal

                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />
                </Box>
                <Box component='div'>
                    <Typography>
                        Filters
                    </Typography>
                    <Box component='div'>
                        <Typography sx={{color: theme.primary}}>
                            Vehicle equipment
                        </Typography>
                        <hr/>
                        <Box
                            component='div'
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "12px",
                                rowGap:'8px'
                            }}
                        >
                            {
                                filterCheckBoxData.filters.map((item) => (
                                    <FilterCheckBox data={item} key={item.id} />
                                ))
                            }


                        </Box>
                    </Box>
                    <Box component='div'>
                        <Typography sx={{color: theme.primary}}>
                            Vehicle type
                        </Typography>
                        <hr/>
                        <Box
                            component='div'
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "12px",
                                rowGap:'8px'
                            }}
                        >
                            {
                                filterCheckBoxData.vehicle_types.map((item) => (
                                    <FilterCheckBox data={item} key={item.id} />
                                ))
                            }


                        </Box>
                    </Box>
                </Box>
                <PrimaryButton type="submit" text="Search" />
            </form>
        </>
    )
}

export default SearchPane
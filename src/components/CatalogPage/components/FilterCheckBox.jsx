import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { theme } from "@theme/theme.js";
import { useEffect, useState } from "react";

const FilterCheckBox = ({ data, filters, setFilters }) => {
    const icons = import.meta.glob('/src/assets/filterIcons/*.svg', { eager: true });

    const handleChange = () => {
        const updatedFilters = { ...filters, [data.flag]: !filters[data.flag] };
        setFilters(updatedFilters);
    };

    const checked = filters[data.flag];

    useEffect(() => {
        if (data.category === 'fuel' && checked) {
            setFilters((prev) => ({
                ...prev,
                engine: data.flag,
                petrol: data.flag === 'petrol',
                diesel: data.flag === 'diesel',
                gas: data.flag === 'gas',
                hybrid: data.flag === 'hybrid',
            }));
        } else if (
            data.category === 'fuel' &&
            !filters.diesel &&
            !filters.petrol &&
            !filters.gas &&
            !filters.hybrid
        ) {
            setFilters((prev) => ({
                ...prev,
                engine: '',
            }));
        }

        if (data.category === 'trans') {
            setFilters((prev) => ({
                ...prev,
                transmission: checked ? data.flag : '',
            }));
        }
        if (data.category === 'form' && checked) {
            setFilters((prev) => ({
                ...prev,
                form: data.flag,
                panelTruck: data.flag === 'panelTruck',
                fullyIntegrated: data.flag === 'fullyIntegrated',
                alcove: data.flag === 'alcove',

            }));
        } else if (
            data.category === 'form' &&
            !filters.panelTruck &&
            !filters.fullyIntegrated &&
            !filters.alcove
        ) {
            setFilters((prev) => ({
                ...prev,
                form: '',
            }));
        }
    }, [checked]);

    return (
        <Box
            onClick={handleChange}
            component="div"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                rowGap: "8px",
                padding: "16px 40px",
                border: `1px solid ${checked ? theme.button.main : theme.lightGray}`,
                borderRadius: "12px",
                maxWidth: "112px",
                transition: "0.3s ease-in-out",
                cursor: "pointer",
                color: theme.primary,
            }}
        >
            <Box
                component="img"
                src={icons[`/src/assets/filterIcons/${data.ico}`]?.default || ''}
                alt={data.text}
                sx={{ width: 32, height: 32 }}
            />
            <Typography>{data.text}</Typography>
        </Box>
    );
};

export default FilterCheckBox;
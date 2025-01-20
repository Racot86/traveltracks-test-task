import React from "react";
import {useSelector} from "react-redux";
import {selectGetFavorites} from "@store/selectors.js";
import VehicleCard from "@components/UI/VehicleCard.jsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {PrimaryButton} from "@components/UI/PrimaryButton.jsx";
import {useNavigate} from "react-router-dom";

export const FavoritesPage = () => {
    const favorites = useSelector(selectGetFavorites); // Directly use the Redux selector
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "78px 24px",
            }}
        >
            <PrimaryButton
                text='Back'
                onClick={() => {
                    navigate(-1)
                }}
                sx={{
                    position: 'absolute',
                    top: '120px',
                    right: '64px',
                }}
            />
            {favorites.length > 0 ? (
                favorites.map((item) => (
                    <VehicleCard sx={{maxWidth: '70%'}} key={item.id} camper={item}/>
                ))
            ) : (
                <Typography variant="h6" color="textSecondary">
                    No favorites added yet.
                </Typography>
            )}
        </Box>
    );
};
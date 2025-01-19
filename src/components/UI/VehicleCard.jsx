import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { theme } from "@theme/theme.js";
import Typography from "@mui/material/Typography";
import icoFavorite from "@assets/ico-favorite.svg";
import icoFavoritePressed from "@assets/ico-favorite-pressed.svg";
import ChipsPack from "@components/UI/ChipsPack.jsx";
import { PrimaryButton } from "@components/UI/PrimaryButton.jsx";
import { useNavigate } from "react-router-dom";
import RatingAndLocation from "@components/UI/RatingAndLocation.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@store/slices/favoritesSlice.js";
import { isFavoritePresent } from "@store/selectors.js";

const VehicleCard = ({sx, camper }) => {
    const isFavorite = useSelector((state) => isFavoritePresent(state, camper.id));
    const [pressed, setPressed] = useState(isFavorite);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navigateToDetails = () => {
        navigate("/catalog/" + camper.id);
    };

    useEffect(() => {
        setPressed(isFavorite); // Sync pressed state with Redux
    }, [isFavorite]);

    const handleFavoriteToggle = () => {
        setPressed((prev) => !prev);
        if (!pressed) {
            dispatch(addFavorite(camper)); // Add to favorites
        } else {
            dispatch(removeFavorite(camper.id)); // Remove from favorites
        }
    };

    return (
        <Box
            component="div"
            sx={{
                display: "flex",
                padding: "24px",
                border: `1px solid ${theme.lightGray}`,
                borderRadius: "20px",
                gap: "24px",
                width: "100%",
                ...sx
            }}
        >
            <Box
                component="img"
                src={camper.gallery[0].thumb}
                sx={{
                    width: "292px",
                    height: "320px",
                    objectFit: "cover",
                    borderRadius: "10px",
                }}
            />
            <Box
                component="div"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        width: "100%",
                        marginBottom: "8px",
                    }}
                >
                    <Typography>{camper.name}</Typography>
                    <Box
                        component="div"
                        sx={{
                            display: "flex",
                            gap: "6px",
                            marginLeft: "auto",
                        }}
                    >
                        <Typography>{`€${camper.price}`}</Typography>
                        <Box
                            onClick={handleFavoriteToggle}
                            component="img"
                            src={pressed ? icoFavoritePressed : icoFavorite}
                            sx={{
                                width: "24px",
                                height: "24px",
                                cursor: "pointer",
                            }}
                        />
                    </Box>
                </Box>
                <RatingAndLocation camper={camper} />
                <Typography
                    noWrap
                    sx={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "525px",
                        paddingTop: "24px",
                        paddingBottom: "24px",
                    }}
                >
                    {camper.description}
                </Typography>
                <ChipsPack camper={camper} />
                <PrimaryButton
                    onClick={navigateToDetails}
                    sx={{ marginTop: "auto", maxWidth: "173px" }}
                    text="Show more"
                />
            </Box>
        </Box>
    );
};

export default VehicleCard;
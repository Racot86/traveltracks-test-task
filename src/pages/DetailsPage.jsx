import Box from "@mui/material/Box";
import {useNavigate, useParams} from "react-router-dom";
import {useGetCamperByIdQuery} from "@store/slices/apiSlice.js";
import RatingAndLocation from "@components/UI/RatingAndLocation.jsx";
import Typography from "@mui/material/Typography";
import {PrimaryButton} from "@components/UI/PrimaryButton.jsx";
import TabList from "@components/DetailsPage/TabList.jsx";
import {useState} from "react";
import TabPanels from "@components/DetailsPage/TabPanels.jsx";
import BookForm from "@components/DetailsPage/BookForm.jsx";


const DetailsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: camper, isLoading, error} = useGetCamperByIdQuery(id)
    const[tabValue, setTabValue] = useState(0);
    return (

        <Box
            component='div'
            sx={{
                padding: '48px 64px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
            }}
        >
            <PrimaryButton
                text='Back'
                onClick={() => {navigate(-1)}}
                sx={{
                    position: 'absolute',
                    top: '48px',
                    right: '64px',
                }}
            />
            {!isLoading ? (
            <>
            {camper.name}
            <RatingAndLocation camper={camper} />
            <Typography>
                {`€${camper.price}`}
            </Typography>
            <Box
                component='div'
                sx={{
                    display: "flex",
                    gap: '48px',
                }}

            >
                {camper.gallery.map((gallery, index) => (
                    <Box
                        key={index}
                        component='div'
                        sx={{
                            width: '292px',
                            height: '312px',
                            borderRadius:'10px',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                    <Box
                        component='img'
                        src={gallery.original}
                        alt={camper.name}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', /* Scales image to fit without stretching */
                        }}
                    />
                    </Box>
                ))}
            </Box>
                <Typography>
                    {camper.description}
                </Typography>
                <TabList value={tabValue} valueHandler={setTabValue} />
                <Box
                    component='div'
                    sx={{
                        display: 'flex',
                    }}
                >

                    <TabPanels
                        value={tabValue}
                        camper={camper}
                        sx={{maxWidth:'631px'}}
                    />

                    <BookForm />
                </Box>

                <hr/>





            </>
            ): <p>Loading</p>}
        </Box>
    )
}
export default DetailsPage;
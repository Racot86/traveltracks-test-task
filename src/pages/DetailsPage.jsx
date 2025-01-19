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
import ImageViewer from "@components/UI/ImageViewer.jsx";


const DetailsPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: camper, isLoading, error} = useGetCamperByIdQuery(id)
    const[tabValue, setTabValue] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const handleOpen = (image) => {
        setImageSrc(image);
        setIsModalOpen(true);
    }
    const handleClose = () => setIsModalOpen(false);
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
            <RatingAndLocation sx={{paddingTop:'8px', paddingBottom:'16px'}} camper={camper} />
            <Typography>
                {`€${camper.price}`}
            </Typography>
            <Box
                component='div'
                sx={{
                    display: "flex",
                    gap: '48px',
                    paddingBottom:'28px',
                    paddingTop:'28px',
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
                        src={gallery.thumb}
                        alt={camper.name}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleOpen(gallery.original)}
                    />
                    </Box>
                ))}
            </Box>
                <Typography sx={{marginBottom:'60px'}}>
                    {camper.description}
                </Typography>
                <TabList sx={{marginBottom:'44px'}} value={tabValue} valueHandler={setTabValue} />
                <Box
                    component='div'
                    sx={{
                        display: 'flex',
                        gap:'40px'
                    }}
                >

                    <TabPanels
                        value={tabValue}
                        camper={camper}
                        sx={{maxWidth:'631px', height:'588px'}}
                    />

                    <BookForm />
                </Box>


                <ImageViewer open={isModalOpen} handleClose={handleClose} imageSrc={imageSrc} />
            </>
            ): <p>Loading</p>}
        </Box>
    )
}
export default DetailsPage;
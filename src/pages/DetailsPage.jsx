import Box from "@mui/material/Box";
import {useNavigate, useParams} from "react-router-dom";
import RatingAndLocation from "@components/UI/RatingAndLocation.jsx";
import Typography from "@mui/material/Typography";
import PrimaryButton from "@components/UI/PrimaryButton.jsx";
import TabList from "@components/DetailsPage/TabList.jsx";
import {useEffect, useState} from "react";
import TabPanels from "@components/DetailsPage/TabPanels.jsx";
import BookForm from "@components/DetailsPage/BookForm.jsx";
import ImageViewer from "@components/UI/ImageViewer.jsx";
import {fetchCampersById} from "@api/apiService.js";
import {useDispatch, useSelector} from "react-redux";
import {selectCampersQuery} from "@store/slices/campersSlice.js";
import {CircularProgress} from "@mui/material";
import {theme} from "@theme/theme.js";


const DetailsPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [tabValue, setTabValue] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const {camper, isLoading, error} = useSelector(selectCampersQuery)


    useEffect(() => {
        dispatch(fetchCampersById(id))
    }, []);

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
                onClick={() => {
                    navigate(-1)
                }}
                sx={{
                    position: 'absolute',
                    top: '48px',
                    right: '64px',
                }}
            />
            {!isLoading && !error && Object.keys(camper).length ? (
                <>
                    <Typography sx={{...theme.font.h2}}>
                        {camper.name}
                    </Typography>
                    <RatingAndLocation sx={{paddingTop: '8px', paddingBottom: '16px'}} camper={camper}/>
                    <Typography sx={{...theme.font.h2}}>
                        {`€${camper.price}`}
                    </Typography>
                    <Box
                        component='div'
                        sx={{
                            display: "flex",
                            gap: '48px',
                            paddingBottom: '28px',
                            paddingTop: '28px',
                        }}

                    >
                        {camper.gallery.map((gallery, index) => (
                            <Box
                                key={index}
                                component='div'
                                sx={{
                                    width: '292px',
                                    height: '312px',
                                    borderRadius: '10px',
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
                    <Typography sx={{marginBottom: '60px',color: theme.text}}>
                        {camper.description}
                    </Typography>
                    <TabList sx={{marginBottom: '44px'}} value={tabValue} valueHandler={setTabValue}/>
                    <Box
                        component='div'
                        sx={{
                            display: 'flex',
                            gap: '40px'
                        }}
                    >

                        <TabPanels
                            value={tabValue}
                            camper={camper}
                            sx={{maxWidth: '631px', height: '588px'}}
                        />

                        <BookForm/>
                    </Box>


                    <ImageViewer open={isModalOpen} handleClose={handleClose} imageSrc={imageSrc}/>
                </>
            ) : <CircularProgress sx={{marginLeft: 'auto', marginRight: 'auto'}}/>}
        </Box>
    )
}
export default DetailsPage;
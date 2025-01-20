import {Box, IconButton, Modal} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const ImageViewer = ({imageSrc, open, handleClose}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="image-viewer-title"
            aria-describedby="image-viewer-description"
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",

                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 2,
                    borderRadius: 2,
                }}
            >
                <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </Box>
                <Box
                    component="img"
                    src={imageSrc}
                    alt="Preview"
                    sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                    }}
                />
            </Box>
        </Modal>
    );
};
ImageViewer.propTypes = {
    imageSrc: PropTypes.string,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default ImageViewer;
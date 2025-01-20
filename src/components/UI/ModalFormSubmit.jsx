import {Box, IconButton, Modal} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import {theme} from "@theme/theme.js";

const ModalFormSubmit = ({open, handleClose}) => {
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
                    width: "40%",
                    bgcolor: "lightgreen",
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
                <Box component='div' sx={{display:'flex',flexDirection:'column',rowGap:'12px'}}>
                    <Typography sx={{...theme.font.h1}}>
                        Form successfully submitted.
                    </Typography>
                    <Typography sx={{...theme.font.h2}}>
                        Thank you!
                    </Typography>
                </Box>
            </Box>
        </Modal>
    );
};
ModalFormSubmit.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default ModalFormSubmit;
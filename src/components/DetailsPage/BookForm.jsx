import * as Yup from 'yup';
import {Form, Formik} from "formik";
import {InputAdornment, TextField} from "@mui/material";
import {PrimaryButton} from "@components/UI/PrimaryButton.jsx";
import PrimaryCard from "@components/UI/PrimaryCard.jsx";
import {theme} from "@theme/theme.js";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    date: Yup.date()
        .required('Date is required')
        .min(new Date(), 'Date cannot be in the past'),
});

const BookForm = () => {
    const initialValues = {
        name: '',
        email: '',
        date: null,
        comment: '',
    };
    const handleSubmit = (values) => {
        console.log('Form Data:', values);
    };


    const textFieldStyles = {
        '& .MuiOutlinedInput-root.Mui-error': {
            '& fieldset': {
                borderColor: theme.input, // Custom error border color
            },
        },
        '& .MuiInputLabel-root': {
            color: theme.text, // Default label color
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: theme.text, // Focused label color
        },
        '& .MuiInputLabel-root.Mui-error': {
            color: theme.button.hover, // Error label color
        },
        '& .MuiInputBase-input': {
            color: theme.text,
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor: theme.input,
            '& fieldset': {
                borderColor: theme.input,

            },
            '&:hover fieldset': {
                borderColor: theme.input, //// Customize hover border color
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.input, // Customize focus border color
            },
            '& .Mui-error': {
                background: theme.button.hover, // Error label color
            },

        },
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <PrimaryCard
                padding='44px 57px'
                radius='10px'
                borderColor={theme.lightGray}
            >
                <Typography sx={{marginBottom: '8px'}}>
                    Book your campervan now
                </Typography>
                <Typography sx={{marginBottom: '24px'}}>
                    Stay connected! We are always ready to help you.
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({setFieldValue, errors, touched, handleChange, handleBlur, values}) => (
                        <Form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '14px'}}>

                            {/* Name Field */}
                            <TextField
                                label="Name"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && !!errors.name}
                                fullWidth
                                sx={textFieldStyles}
                                InputProps={{
                                    endAdornment: (
                                        touched.name && errors.name && (
                                            <InputAdornment position="end">
                                                <Box
                                                    sx={{
                                                        color: "red",
                                                        fontSize: "0.75rem",
                                                        marginLeft: "8px",
                                                    }}
                                                >
                                                    {errors.name}
                                                </Box>
                                            </InputAdornment>
                                        )
                                    ),
                                }}
                            />

                            {/* Email Field */}
                            <TextField
                                label="Email*"
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && !!errors.email}
                                fullWidth
                                sx={textFieldStyles}
                                InputProps={{
                                    endAdornment: (
                                        touched.name && errors.name && (
                                            <InputAdornment position="end">
                                                <Box
                                                    sx={{
                                                        color: "red",
                                                        fontSize: "0.75rem",
                                                        marginLeft: "8px",
                                                    }}
                                                >
                                                    {errors.email}
                                                </Box>
                                            </InputAdornment>
                                        )
                                    ),
                                }}
                            />

                            <DatePicker
                                label="Date"
                                value={values.date}
                                onChange={(newValue) => setFieldValue("date", newValue)}
                                slotProps={{
                                    textField: {
                                        name: "date",
                                        onBlur: handleBlur,
                                        error: touched.date && !!errors.date,
                                        helperText: touched.date && errors.date,
                                        fullWidth: true,
                                        sx: textFieldStyles,
                                    },
                                    openPickerIcon: {
                                        sx: {
                                            color: theme.text, // Customize the icon color
                                        },
                                    },
                                }}
                            />


                            <TextField
                                label="Comment"
                                name="comment"
                                value={values.comment}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.comment && !!errors.comment}
                                helperText={touched.comment && errors.comment}
                                fullWidth
                                multiline
                                rows={4}
                                sx={textFieldStyles}
                            />

                            <PrimaryButton sx={{marginTop: '10px', maxWidth: '166px'}} type="submit" text="Send"/>

                        </Form>
                    )}
                </Formik>
            </PrimaryCard>
        </LocalizationProvider>
    )
}
export default BookForm
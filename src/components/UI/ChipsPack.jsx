import {filterCheckBoxData} from "@constants/filterCheckBoxData.js";
import {Chip} from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const ChipsPack = ({camper, max=12}) => {
    const icons = import.meta.glob('/src/assets/filterIcons/*.svg', {eager: true});
    const getFeatures = (camper) => {
        let features = []
        filterCheckBoxData.filters.forEach(feature => {
            if (feature.category === 'int') {
                if (camper[feature.flag]) {
                    features.push({
                        id: feature.id,
                        ico: feature.ico,
                        text: feature.text,
                    })
                }
            } else if (feature.category === 'fuel') {
                if (camper['engine'] === feature.flag) {
                    features.push({
                        id: feature.id,
                        ico: feature.ico,
                        text: feature.text,
                    })
                }
            } else if (feature.category === 'trans') {
                if (camper['transmission'] === 'automatic' || camper['transmission'] === 'manual') {
                    features.push({
                        id: feature.id,
                        ico: feature.ico,
                        text: camper['transmission'],
                    })
                }
            }
        })
        return features
    }
    return (
        <Box
            component='ul'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                padding:0,
                listStyle:'none'
            }}
        >
            {getFeatures(camper).map((feature,index) => (
                index<max && <Box
                    component="li"
                    key={feature.id}
                >
                <Chip

                    label={feature.text}
                    sx={{padding: '2px 8px', borderRadius: '100px', height: '48px'}}
                    icon={
                        <Box
                            component='img'
                            src={icons[`/src/assets/filterIcons/${feature.ico}`]?.default || ''}

                            sx={{width: '20px', height: '20px'}}
                        />
                    }
                />
                </Box>
            ))}
        </Box>
    )
}
ChipsPack.propTypes = {
    camper:PropTypes.object.isRequired,
    max: PropTypes.number,
}
export default ChipsPack
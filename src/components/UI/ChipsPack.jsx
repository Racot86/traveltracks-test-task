import {filterCheckBoxData} from "@constants/filterCheckBoxData.js";
import {Chip} from "@mui/material";
import Box from "@mui/material/Box";
import {theme} from "@theme/theme.js";

const ChipsPack = ({camper}) => {
    const icons = import.meta.glob('/src/assets/filterIcons/*.svg', { eager: true });
    const getFeatures = (camper) => {
        let features = []
        filterCheckBoxData.filters.forEach(feature => {
            if(feature.category === 'int'){
                if (camper[feature.flag]){
                    features.push({
                        id: feature.id,
                        ico:feature.ico,
                        text:feature.text,
                    })
                }
            }else if(feature.category === 'fuel'){
                if (camper['engine']===feature.flag){
                    features.push({
                        id: feature.id,
                        ico:feature.ico,
                        text:feature.text,
                    })
                }
            }else if(feature.category==='trans'){
                if (camper['transmission']===feature.flag){
                    features.push({
                        id: feature.id,
                        ico:feature.ico,
                        text:feature.text,
                    })
                }
            }
        })
        console.log(features)
        return features
    }
    return (
        <Box
            component='div'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap:'8px'
        }}
        >
            {getFeatures(camper).map(feature => (
                <Chip
                    key={feature.id}
                    label={feature.text}
                    sx={{padding: '12px', borderRadius:'100px',height:'48px'}}
                    icon={
                    <Box
                        component='img'
                        src={icons[`/src/assets/filterIcons/${feature.ico}`]?.default || ''}
                       
                        sx={{width:'20px',height:'20px'}}
                    />
                    }
                />
            ))}
        </Box>
    )
}
export default ChipsPack
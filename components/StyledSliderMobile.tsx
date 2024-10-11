import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const StyledSliderMobile = styled(Slider)({
    height: 40,
    marginTop: 0,
    borderRadius: 50,
    '& .MuiSlider-track': {
        border: 'none',
        color: '#DC662D',
        boxShadow: '0px 4px 20px 0px #DC662D',
    },
    '& .MuiSlider-thumb': {
        height: 0,
        width: 0,
    },
    '& .MuiSlider-mark': {
        height: 0,
        width: 0,
        opacity: 0,
    },
    '& .MuiSlider-rail': {
        opacity: 1,
        backgroundColor: '#F4F2F2',
    },
    '& .MuiSlider-markLabel': {
        fontSize: 18,
        color: '#BDBDBD',
        fontWeight: 700,
        fontStyle: 'normal',
        top: 60,
    },
    '& .MuiSlider-markLabelActive': {
        color: '#5F6061',
    },
});

export default StyledSliderMobile;
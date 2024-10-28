import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const StyledSlider = styled(Slider)(({ theme }) => ({
    [theme.breakpoints.down(2378)]: {
        height: 5,
    },
    [theme.breakpoints.up(2378)]: {
        height: 7,
    },
    [theme.breakpoints.up(3644)]: {
        height: 11,
    },
    marginTop: 0,
    '& .MuiSlider-track': {
        border: 'none',
        color: '#DC662D',
    },
    '&.Mui-disabled': {
        '& .MuiSlider-track': {
            color: '#F0F0F0',
        },
        '& .MuiSlider-thumb': {
            backgroundColor: '#F0F0F0',
        },
        '& .MuiSlider-markActive': {
            border: '2px solid #F0F0F0',
            backgroundColor: 'white',
        },
    },
    '& .MuiSlider-thumb': {
        [theme.breakpoints.down(2378)]: {
            width: 16,
            height: 16,
        },
        [theme.breakpoints.up(2378)]: {
            width: 20,
            height: 20,
        },
        [theme.breakpoints.up(3644)]: {
            width: 30,
            height: 30,
        },
        backgroundColor: '#DC662D',
        boxShadow: 'none',
        '&:focus, &:hover, &.Mui-active': {
            boxShadow: 'none',
        },
    },
    '& .MuiSlider-mark': {
        [theme.breakpoints.down(2378)]: {
            width: 16,
            height: 16,
            marginLeft: -7,
        },
        [theme.breakpoints.up(2378)]: {
            width: 20,
            height: 20,
            marginLeft: -9,
        },
        [theme.breakpoints.up(3644)]: {
            width: 30,
            height: 30,
            marginLeft: -14,
        },
        backgroundColor: '#F4F2F2',
        borderRadius: 30,
        opacity: 1
    },
    '& .MuiSlider-markActive': {
        border: '2px solid #DC662D',
        backgroundColor: 'white',
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
        top: -20,
    },
    '& .MuiSlider-markLabelActive': {
        color: '#5F6061',
        '&::before, &::after': {
            color: '#BDBDBD',
        }
    },
}));

export default StyledSlider;
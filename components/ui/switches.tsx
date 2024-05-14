import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import  { useState } from 'react';
import cross from '@/public/img/switch_cross.svg';
import checkmark from '@/public/img/switch_checkmark.svg';
import pp from '../../public/img/globe_white.png';
import zIndex from '@mui/material/styles/zIndex';


const DemoSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: '100%',
    height: '100%',
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      [theme.breakpoints.down(2378)]: {
        margin: 5,
      },
      [theme.breakpoints.up(2378)]: {
        margin: 7,
      },
      [theme.breakpoints.up(3644)]: {
        margin: 10,
      },
      transitionDuration: '200ms',
      '&.Mui-checked': {
        transform: 'translateX(138%)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#123853' : 'white',
          opacity: 1,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      [theme.breakpoints.down(2378)]: {
        width: 38,
        height: 38,
      },
      [theme.breakpoints.up(2378)]: {
        width: 49,
        height: 49,
      },
      [theme.breakpoints.up(3644)]: {
        width: 74,
        height: 74,
      },
      backgroundColor: '#DC662D',
    },
    '& .MuiSwitch-track': {
      borderRadius: 200,
      backgroundColor: theme.palette.mode === 'light' ? 'white' : '#123853',
      opacity: 1,
      borderWidth: 1,
      borderColor: '#BDBDBD'
    },

}));

const DemoSwitchRegular = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: '100%',
    height: '100%',
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      
      [theme.breakpoints.down(2378)]: {
        margin: 5,
      },
      [theme.breakpoints.up(2378)]: {
        margin: 7,
      },
      [theme.breakpoints.up(3644)]: {
        margin: 10,
      },
      transitionDuration: '200ms',
      '&.Mui-checked': {
        transform: 'translateX(138%)',
        color: '#51B18B',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#123853' : '#51B18B',
          opacity: 1,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
          border: 0,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      [theme.breakpoints.down(2378)]: {
        width: 38,
        height: 38,
      },
      [theme.breakpoints.up(2378)]: {
        width: 49,
        height: 49,
      },
      [theme.breakpoints.up(3644)]: {
        width: 74,
        height: 74,
      },
      backgroundColor: 'white',
      boxShadow: 'none'
    },
    '& .MuiSwitch-track': {
      borderRadius: 200,
      backgroundColor: theme.palette.mode === 'light' ? '#DC662D' : '#123853',
      
      opacity: 1,
      border: 0,
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [theme.breakpoints.down(2378)]: {
          width: 20,
          height: 20,
        },
        [theme.breakpoints.up(2378)]: {
          width: 24,
          height: 24,
        },
        [theme.breakpoints.up(3644)]: {
          width: 36,
          height: 36,
        },
      },
      '&::before': {
        [theme.breakpoints.down(2378)]: {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main),
          )}" d="M9.61517 18.921C9.54457 19.121 9.44202 19.3111 9.27498 19.4667C8.72279 19.9796 7.8555 19.9509 7.3381 19.4039L1.07249 13.679C0.554947 13.1327 0.583323 12.2728 1.1357 11.7618C1.68789 11.2469 2.55518 11.2756 3.07256 11.8232L7.97611 16.3026L16.7404 1.26409C17.1188 0.614559 17.9569 0.391734 18.6125 0.766171C19.2679 1.1419 19.4925 1.97047 19.114 2.62L9.61517 18.921Z"/></svg>')`,
          backgroundRepeat: "no-repeat",
          left: 15,
        },
        [theme.breakpoints.up(2378)]: {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main),
          )}" d="M9.61517 18.921C9.54457 19.121 9.44202 19.3111 9.27498 19.4667C8.72279 19.9796 7.8555 19.9509 7.3381 19.4039L1.07249 13.679C0.554947 13.1327 0.583323 12.2728 1.1357 11.7618C1.68789 11.2469 2.55518 11.2756 3.07256 11.8232L7.97611 16.3026L16.7404 1.26409C17.1188 0.614559 17.9569 0.391734 18.6125 0.766171C19.2679 1.1419 19.4925 1.97047 19.114 2.62L9.61517 18.921Z"/></svg>')`,
          backgroundRepeat: "no-repeat",
          left: 20,
        },
        [theme.breakpoints.up(3644)]: {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main),
          )}" d="M9.61517 18.921C9.54457 19.121 9.44202 19.3111 9.27498 19.4667C8.72279 19.9796 7.8555 19.9509 7.3381 19.4039L1.07249 13.679C0.554947 13.1327 0.583323 12.2728 1.1357 11.7618C1.68789 11.2469 2.55518 11.2756 3.07256 11.8232L7.97611 16.3026L16.7404 1.26409C17.1188 0.614559 17.9569 0.391734 18.6125 0.766171C19.2679 1.1419 19.4925 1.97047 19.114 2.62L9.61517 18.921Z"/></svg>')`,
          backgroundRepeat: "no-repeat",
          left: 29,
        },
        
      },
      '&::after': {
        [theme.breakpoints.down(2378)]: {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main),
          )}" d="M18.312 2.95035C18.8393 2.42314 18.8393 1.56837 18.312 1.04116C17.7848 0.51395 16.9301 0.51395 16.4029 1.04116L9.6766 7.76742L2.95035 1.04116C2.42314 0.51395 1.56837 0.51395 1.04116 1.04116C0.51395 1.56837 0.51395 2.42314 1.04116 2.95035L7.76742 9.6766L1.04116 16.4029C0.51395 16.9301 0.51395 17.7848 1.04116 18.312C1.56837 18.8393 2.42314 18.8393 2.95035 18.312L9.6766 11.5858L16.4029 18.312C16.9301 18.8393 17.7848 18.8393 18.312 18.312C18.8393 17.7848 18.8393 16.9301 18.312 16.4029L11.5858 9.6766L18.312 2.95035Z"/></svg>')`,
          backgroundRepeat: "no-repeat",
          right: 15,
        },
        [theme.breakpoints.up(2378)]: {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main),
          )}" d="M18.312 2.95035C18.8393 2.42314 18.8393 1.56837 18.312 1.04116C17.7848 0.51395 16.9301 0.51395 16.4029 1.04116L9.6766 7.76742L2.95035 1.04116C2.42314 0.51395 1.56837 0.51395 1.04116 1.04116C0.51395 1.56837 0.51395 2.42314 1.04116 2.95035L7.76742 9.6766L1.04116 16.4029C0.51395 16.9301 0.51395 17.7848 1.04116 18.312C1.56837 18.8393 2.42314 18.8393 2.95035 18.312L9.6766 11.5858L16.4029 18.312C16.9301 18.8393 17.7848 18.8393 18.312 18.312C18.8393 17.7848 18.8393 16.9301 18.312 16.4029L11.5858 9.6766L18.312 2.95035Z"/></svg>')`,
          backgroundRepeat: "no-repeat",
          right: 20,
        },
        [theme.breakpoints.up(3644)]: {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main),
          )}" d="M18.312 2.95035C18.8393 2.42314 18.8393 1.56837 18.312 1.04116C17.7848 0.51395 16.9301 0.51395 16.4029 1.04116L9.6766 7.76742L2.95035 1.04116C2.42314 0.51395 1.56837 0.51395 1.04116 1.04116C0.51395 1.56837 0.51395 2.42314 1.04116 2.95035L7.76742 9.6766L1.04116 16.4029C0.51395 16.9301 0.51395 17.7848 1.04116 18.312C1.56837 18.8393 2.42314 18.8393 2.95035 18.312L9.6766 11.5858L16.4029 18.312C16.9301 18.8393 17.7848 18.8393 18.312 18.312C18.8393 17.7848 18.8393 16.9301 18.312 16.4029L11.5858 9.6766L18.312 2.95035Z"/></svg>')`,
          backgroundRepeat: "no-repeat",
          right: 29,
        },
        
      },
    },

}));

export function TarifsSwitch({isTarifsSwitch, setTarifsSwitch}:any) {

  const toggle = () =>{
    setTarifsSwitch(!isTarifsSwitch);
  }
    return (
      <div className={`min-[3644px]:w-[195px] min-[3644px]:h-[93px] w-[130px] h-[62px] max-[2377px]:w-[100px] max-[2377px]:h-[48px] rounded-full`}>
        <DemoSwitch checked={isTarifsSwitch} onChange={toggle}/>
      </div>
    )
};

export function RegularSwitch({switchState, state}:any) {

    const toggleChecker = () => {
      switchState(!state);
    };
    
    return (
      <div className={`${state? 'shadow-[0px_4px_20px_0px_#51B18B]':'shadow-[0px_4px_20px_0px_#DC662D]'} min-[3644px]:w-[195px] min-[3644px]:h-[93px] w-[130px] h-[62px] max-[2377px]:w-[100px] max-[2377px]:h-[48px] rounded-full`}>
          <DemoSwitchRegular checked={state} onChange={toggleChecker}/>
      </div>
    )
};
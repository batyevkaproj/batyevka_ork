import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

const MIN_MOBILE = 3;
const MID_G_MOBILE = 4;
const MID_MOBILE = 5;
const MAX_MOBILE = 10;

const MIN = 1;
const MID_G = 3;
const MID = 5;
const MAX = 10;

const marks = [
    {
      value: MIN,
    },
    {
      value: MID,
    },
    {
      value: MAX,
    },
  ];

const marks_mobile = [
  {
    value: MIN_MOBILE,
  },
  {
    value: MID_MOBILE,
  },
  {
    value: MAX_MOBILE,
  },
];

const marks_GPON = [
  {
    value: MID_G,
  },
  {
    value: MAX,
  },
];

const marks_GPON_mobile = [
  {
    value: MID_G_MOBILE,
  },
  {
    value: MAX_MOBILE,
  },
];

const megogo_overpay = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
];

const months = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
];

const DemoSlider = styled(Slider)(({ theme }) => ({
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
    '&::before, &::after':{
      color: '#BDBDBD',
    }
  },
  
}));

const DemoSliderMobile = styled(Slider)({
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

export function TarifsSlider({setSpeed, speed}:any){
  const [val, setVal] = React.useState<number>(MIN);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };
    return (
      <div className={``}>
        <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
          <button className={`${val==MIN ? 'text-[#5F6061]' :'text-[#BDBDBD]'} ml-[6%]`} onClick={() => setVal(MIN)}> 100 Мбіт</button>
          <button className={`${val==MID ? 'text-[#5F6061]' :'text-[#BDBDBD]'} mr-[14%]`} onClick={() => setVal(MID)}> 500 Мбіт</button>
          <button className={`${val==MAX ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(MAX)}><span className={`absolute min-[3644px]:ml-[-50px] ml-[-34px] max-[2377px]:ml-[-24px] mt-[-13px] min-[3644px]:mt-[-20px] max-[2377px]:mt-[-11px] w-[70px] min-[3644px]:w-[100px] max-[2377px]:w-[50px]`}>1 Гбіт</span></button>
        </div>
        <DemoSlider
            defaultValue={MIN}
            step={null}
            marks={marks}
            max={MAX}
            value={val}
            aria-label="Default"
            onChange={handleChange}
        />
        
      </div>
    );
}

export function TarifsSliderGPON({setSpeed}:any){
  const [val, setVal] = React.useState<number>(MID_G);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };
  return (
    <div className={``}>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] ">
          <button className={`${val==MID_G ? 'text-[#5F6061]' :'text-[#BDBDBD]'} ml-[26%]`} onClick={() => setVal(MID_G)}> 300 Мбіт</button>
          <button className={`${val==MAX ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(MAX)}><span className={`absolute min-[3644px]:ml-[-50px] ml-[-34px] max-[2377px]:ml-[-24px] mt-[-13px] min-[3644px]:mt-[-20px] max-[2377px]:mt-[-11px]`}>1 Гбіт</span></button>
      </div>
      <DemoSlider
          defaultValue={MID_G}
          step={null}
          marks={marks_GPON}
          max={MAX}
          value={val}
          aria-label="Default"
          onChange={handleChange}
      />
      </div>
  );
}

export function OverpaySlider(){
  const [val, setVal] = React.useState<number>(0);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };
  return (
    <div className={``}>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
        <div className={`flex justify-between w-full mx-[16%]`}>
          <button className={`${val==(1) ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(1)}> Легка</button>
          <button className={`${val==(2) ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(2)}> Оптимальна</button>
          <button className={`${val==(3) ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(3)}>Максимальна</button>
          <button className={`${val==(4) ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(4)}> Спорт</button>
        </div>
        <button className={`${val==(5) ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(5)}><span className={`absolute min-[3644px]:ml-[-50px] ml-[-34px] max-[2377px]:ml-[-24px] mt-[-13px] min-[3644px]:mt-[-20px] max-[2377px]:mt-[-11px] `}>Кіно+</span></button>
      </div>
      <DemoSlider
        defaultValue={0}
        step={1}
        marks={megogo_overpay}
        max={5}
        value={val}
        aria-label="Default"
        onChange={handleChange}
      />
    </div>
  );
}

export function MonthsSlider(){
  const [val, setVal] = React.useState<number>(0);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };
  return (
    <div className={``}>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
        <div className={`flex justify-between w-full ml-[17%] mr-[16%]`}>
          <button className={`${val==(1) ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(1)}> 1 міс</button>
          <button className={`${val==(2) ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(2)}> 6 міс</button>
          <button className={`${val==(3) ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(3)}>12 міс</button>
          <button className={`${val==(4) ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(4)}> 24 міс</button>
        </div>
        <button className={`${val==(5) ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(5)}><span className={`absolute min-[3644px]:ml-[-54px] ml-[-36px] max-[2377px]:ml-[-26px] mt-[-13px] min-[3644px]:mt-[-20px] max-[2377px]:mt-[-11px] w-[78px] min-[3644px]:w-[120px] max-[2377px]:w-[59px]`}>36 міс</span></button>
      </div>
      <DemoSlider
        defaultValue={0}
        step={1}
        marks={months}
        max={5}
        value={val}
        aria-label="Default"
        onChange={handleChange}
      />
    </div>
  );
}



export function TarifsSliderMobile({setSpeed}:any){
  const [val, setVal] = React.useState<number>(MIN_MOBILE);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };
  return (
    <div className={``}>
      <DemoSliderMobile
          defaultValue={MIN_MOBILE}
          value={val}
          step={null}
          marks={marks_mobile}
          min={0}
          max={MAX_MOBILE}
          onChange={handleChange}
      />
      <div className="flex justify-between font-bold leading-[22px] text-[18px] relative top-[-11px]">
          <button className={`${val==MIN_MOBILE ? 'text-[#5F6061]' :'text-[#BDBDBD]'} ml-[10%]`} onClick={() => setVal(MIN_MOBILE)}> 100 Мбіт</button>
          <button className={`${val==MID_MOBILE ? 'text-[#5F6061]' :'text-[#BDBDBD]'} mr-[10%]`} onClick={() => setVal(MID_MOBILE)}> 500 Мбіт</button>
          <button className={`${val==MAX_MOBILE ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(MAX_MOBILE)}>1 Гбіт</button>
      </div>
      </div>
  );
}

export function TarifsSliderMobileGPON({setSpeed}:any){
  const [val, setVal] = React.useState<number>(MID_G_MOBILE);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };
  return (
    <div className={``}>
      <DemoSliderMobile
          defaultValue={MID_G_MOBILE}
          value={val}
          step={null}
          marks={marks_GPON_mobile}
          max={MAX_MOBILE}
          onChange={handleChange}
      />
      <div className="flex justify-between font-bold leading-[22px] text-[18px] relative top-[-11px]">
          <button className={`${val==MID_G_MOBILE ? 'text-[#5F6061]' :'text-[#BDBDBD]'} ml-[24%]`} onClick={() => setVal(MID_G_MOBILE)}> 300 Мбіт</button>
          <button className={`${val==MAX_MOBILE ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(MAX_MOBILE)}>1 Гбіт</button>
      </div>
      </div>
  );
}
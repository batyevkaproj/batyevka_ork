import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

const MIN = 3;
const MID_G = 4;
const MID = 5;
const MAX = 10;

const marks = [
    {
      value: 1,
      label: '100 Мбіт',
    },
    {
      value: 5,
      label: '500 Мбіт',
    },
    {
      value: 10,
      label: '1 Гбіт',
    },
  ];

const marks_mobile = [
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

const marks_GPON = [
  {
    value: 3,
    label: '300 Мбіт',
  },
  {
    value: 10,
    label: '1 Гбіт',
  },
];

const marks_GPON_mobile = [
  {
    value: MID_G,
  },
  {
    value: MAX,
  },
];

const megogo_overpay = [
  {
    value: 1,
    label: 'Легка'
  },
  {
    value: 2,
    label: 'Оптимальна'
  },
  {
    value: 3,
    label: 'Максимальна'
  },
  {
    value: 4,
    label: 'Спорт'
  },
  {
    value: 5,
    label: 'Кіно+'
  },
];

const months = [
  {
    value: 1,
    label: '1 міс'
  },
  {
    value: 2,
    label: '6 міс'
  },
  {
    value: 3,
    label: '12 міс'
  },
  {
    value: 4,
    label: '24 міс'
  },
  {
    value: 5,
    label: '36 міс'
  },
];

const DemoSlider = styled(Slider)({
  height: 5,
  marginTop: 20,
  '& .MuiSlider-track': {
    border: 'none',
    color: '#DC662D',
  },
  '& .MuiSlider-thumb': {
    height: 16,
    width: 16,
    backgroundColor: '#DC662D',
    boxShadow: 'none',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: 'none',
      
    },
  },
  '& .MuiSlider-mark': {
    height: 16,
    width: 16,
    backgroundColor: '#F4F2F2',
    borderRadius: 30,
    marginLeft: -7,
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
  
});

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

export function TarifsSlider(){
    return (
        <DemoSlider
            defaultValue={1}
            step={null}
            marks={marks}
            max={10}
            aria-label="Default"
        />
    );
}

export function TarifsSliderGPON(){
  return (
      <DemoSlider
          defaultValue={3}
          step={null}
          marks={marks_GPON}
          max={10}
          aria-label="Default"
      />
  );
}

export function OverpaySlider(){
  return (
      <DemoSlider
        defaultValue={0}
        step={1}
        marks={megogo_overpay}
        max={5}
        aria-label="Default"
      />
  );
}

export function MonthsSlider(){
    return (
        <DemoSlider
          defaultValue={0}
          step={1}
          marks={months}
          max={5}
          aria-label="Default"
        />
    );
}



export function TarifsSliderMobile(){
  const [val, setVal] = React.useState<number>(MIN);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };
  return (
    <div className={``}>
      <DemoSliderMobile
          defaultValue={MIN}
          value={val}
          step={null}
          marks={marks_mobile}
          min={0}
          max={MAX}
          onChange={handleChange}
      />
      <div className="flex justify-between font-bold leading-[22px] text-[18px] relative top-[-11px]">
          <button className={`${val==MIN ? 'text-[#5F6061]' :'text-[#BDBDBD]'} ml-[10%]`} onClick={() => setVal(MIN)}> 100 Мбіт</button>
          <button className={`${val==MID ? 'text-[#5F6061]' :'text-[#BDBDBD]'} mr-[10%]`} onClick={() => setVal(MID)}> 500 Мбіт</button>
          <button className={`${val==MAX ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(MAX)}>1 Гбіт</button>
      </div>
      </div>
  );
}

export function TarifsSliderMobileGPON(){
  const [val, setVal] = React.useState<number>(MID_G);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };
  return (
    <div className={``}>
      <DemoSliderMobile
          defaultValue={MID_G}
          value={val}
          step={null}
          marks={marks_GPON_mobile}
          max={MAX}
          onChange={handleChange}
      />
      <div className="flex justify-between font-bold leading-[22px] text-[18px] relative top-[-11px]">
          <button className={`${val==MID_G ? 'text-[#5F6061]' :'text-[#BDBDBD]'} ml-[24%]`} onClick={() => setVal(MID_G)}> 300 Мбіт</button>
          <button className={`${val==MAX ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(MAX)}>1 Гбіт</button>
      </div>
      </div>
  );
}
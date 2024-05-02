import * as React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

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
  }
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

export function OverpaySlider(){
  return (
      <DemoSlider
        defaultValue={0}
        step={null}
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
          step={null}
          marks={months}
          max={5}
          aria-label="Default"
        />
    );
}
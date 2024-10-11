import * as React from 'react';

import {
  GPON_SPEEDS,
  UTP_SPEEDS
} from "@/constants/internet_speeds"

import {
  MIN_MOBILE,
  MID_G_MOBILE,
  MID_MOBILE,
  MAX_MOBILE,
  MIN,
  MID_G,
  MID,
  MAX,
  marks,
  marks_mobile,
  megogo_overpay,
  months
} from '@/constants/slider';

import StyledSlider from '@/components/StyledSlider';
import StyledSliderMobile from '@/components/StyledSliderMobile';

const marks_GPON = GPON_SPEEDS.map(item => ({ value: item.speed }));
const marks_UTP = UTP_SPEEDS.map(item => ({ value: item.speed }));
const marks_GPON_mobile = GPON_SPEEDS.map(item => ({ value: item.speed }));

export function OverpaySlider({outerSetter, outer}:any){
  const [val, setVal] = React.useState<number>(outer??0);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number)
    outerSetter(newValue as number)
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
      <StyledSlider
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

export function MonthsSlider({outerSetter, outer}:any){
  const [val, setVal] = React.useState<number>(outer??0);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    outerSetter(newValue as number);
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
      <StyledSlider
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



export function TarifsSliderMobile({setSpeed, speed}:any){
  const [val, setVal] = React.useState<number>(speed??MIN_MOBILE);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };
  return (
    <div className={``}>
      <StyledSliderMobile
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

export function TarifsSliderMobileGPON({setSpeed, speed}:any){
  const [val, setVal] = React.useState<number>(speed??MID_G_MOBILE);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };
  return (
    <div className={``}>
      <StyledSliderMobile
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
          <button className={`${val==MAX_MOBILE ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(MAX_MOBILE)}>2,5 Гбіт</button>
          <button className={`${val==MAX_MOBILE ? 'text-[#5F6061]' :'text-[#BDBDBD]'}`} onClick={() => setVal(MAX_MOBILE)}>5 Гбіт</button>
      </div>
      </div>
  );
}

export function TarifsSlider({setSpeed, speed}:any){
  const [val, setVal] = React.useState<number>(speed??MIN);
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
        <StyledSlider
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

export function TarifsSliderGPON({setSpeed, speed}:any){
  const [val, setVal] = React.useState<number>(speed);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };
  
  return (
    <div className={``}>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
        {marks_GPON.map((mark, index) => (
          <button
            key={index}
            className={`${val === mark.value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`}
            onClick={() => setVal(mark.value)}
          >
            {`${mark.value} ${mark.value <= 10 ? 'Гбіт' : 'Мбіт'}`}
          </button>
        ))}
      </div>
      <span className='hidden'>{val}</span>
      <StyledSlider
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
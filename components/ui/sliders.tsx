import { useState } from "react";

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
  megogo_bundles,
  months
} from '@/constants/slider';

import StyledSlider from '@/components/StyledSlider';
import StyledSliderMobile from '@/components/StyledSliderMobile';

const marks_GPON = GPON_SPEEDS.map(item => ({ value: item.value }));
const marks_UTP = UTP_SPEEDS.map(item => ({ value: item.value }));
const marks_GPON_mobile = GPON_SPEEDS.map(item => ({ value: item.value }));

export function MegogoSlider({ outerSetter, outer }: any) {
  const [val, setVal] = useState<number>(outer ?? 1);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    outerSetter(newValue as number);
  };

  const lastIndex = megogo_bundles.length - 1;
  const mainButtons = megogo_bundles;

  return (
    <div>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
        <div className="flex justify-between w-full">
          {mainButtons.map((bundle) => (
            <button
              key={bundle.value}
              className={`${val === bundle.value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`}
              onClick={() => setVal(bundle.value)}
            >
              {bundle.name}
            </button>
          ))}
        </div>
      </div>
      <StyledSlider
        defaultValue={1}
        step={1}
        marks={megogo_bundles}
        min={1}
        max={megogo_bundles[lastIndex].value}
        value={val}
        aria-label="Default"
        onChange={handleChange}
      />
    </div>
  );
}

export function MonthsSlider({ outerSetter, outer }: any) {
  const [val, setVal] = useState<number>(outer ?? 1);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    outerSetter(newValue as number);
  };
  const lastIndex = months.length - 1;

  return (
    <div>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
        <div className={`flex justify-between w-full  mr-[16%]`}>
          {months.slice(0, -1).map((item) => (
            <button
              key={item.value}
              className={`${val === item.value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`}
              onClick={() => setVal(item.value)}
            >
              {item.months} міс
            </button>
          ))}
        </div>
        <button
          className={`${val === months[lastIndex].value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`}
          onClick={() => setVal(months[lastIndex].value)}
        >
          <span className={`absolute min-[3644px]:ml-[-54px] ml-[-36px] max-[2377px]:ml-[-26px] mt-[-13px] min-[3644px]:mt-[-20px] max-[2377px]:mt-[-11px] w-[78px] min-[3644px]:w-[120px] max-[2377px]:w-[59px]`}>
            {months[lastIndex].months} міс
          </span>
        </button>
      </div>
      <StyledSlider
        defaultValue={1}
        step={1}
        marks={months}
        min={1}
        max={months[lastIndex].value}
        value={val}
        aria-label="Default"
        onChange={handleChange}
      />
    </div>
  );
}



export function TarifsSliderMobile({ setSpeed, speed }: any) {
  const [val, setVal] = useState<number>(speed ?? MIN_MOBILE);
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
        <button className={`${val == MIN_MOBILE ? 'text-[#5F6061]' : 'text-[#BDBDBD]'} ml-[10%]`} onClick={() => setVal(MIN_MOBILE)}> 100 Мбіт</button>
        <button className={`${val == MID_MOBILE ? 'text-[#5F6061]' : 'text-[#BDBDBD]'} mr-[10%]`} onClick={() => setVal(MID_MOBILE)}> 500 Мбіт</button>
        <button className={`${val == MAX_MOBILE ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`} onClick={() => setVal(MAX_MOBILE)}>1 Гбіт</button>
      </div>
    </div>
  );
}

export function TarifsSliderMobileGPON({ setSpeed, speed }: any) {
  const [val, setVal] = useState<number>(speed ?? MID_G_MOBILE);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };
  return (
    <div className={``}>
      <StyledSliderMobile
        defaultValue={MID_G_MOBILE}
        value={val}
        step={1}
        marks={marks_GPON_mobile}
        max={MAX_MOBILE}
        onChange={handleChange}
      />
      <div className="flex justify-between font-bold leading-[22px] text-[18px] relative top-[-11px]">
        <button className={`${val == MID_G_MOBILE ? 'text-[#5F6061]' : 'text-[#BDBDBD]'} ml-[24%]`} onClick={() => setVal(MID_G_MOBILE)}> 300 Мбіт</button>
        <button className={`${val == MAX_MOBILE ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`} onClick={() => setVal(MAX_MOBILE)}>1 Гбіт</button>
        <button className={`${val == MAX_MOBILE ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`} onClick={() => setVal(MAX_MOBILE)}>2,5 Гбіт</button>
        <button className={`${val == MAX_MOBILE ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`} onClick={() => setVal(MAX_MOBILE)}>5 Гбіт</button>
      </div>
    </div>
  );
}

export function TarifsSlider({ setSpeed, speed }: any) {
  const [val, setVal] = useState<number>(speed ?? MIN);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };

  const maxIndex = UTP_SPEEDS.length - 1;

  return (
    <div className={``}>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
        {UTP_SPEEDS.map((mark, index) => (
          <button
            key={index}
            className={`${val === mark.value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`}
            onClick={() => setVal(mark.value)}
          >
            {`${mark.speed} ${mark.measure}`}
          </button>
        ))}</div>
      <StyledSlider
        defaultValue={1}
        step={null}
        marks={marks_UTP}
        max={UTP_SPEEDS[maxIndex].value}
        value={val}
        aria-label="Default"
        onChange={handleChange}
      />

    </div>
  );
}

export function TarifsSliderGPON({ setSpeed, speed }: any) {
  const [val, setVal] = useState<number>(speed);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };

  const min_index = GPON_SPEEDS[0];
  const last_index = GPON_SPEEDS.length - 1;

  return (
    <div className={``}>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
        {GPON_SPEEDS.map((mark, index) => (
          <button
            key={index}
            className={`${val === mark.value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`}
            onClick={() => setVal(mark.value)}
          >
            {`${mark.speed} ${mark.measure}`}
          </button>
        ))}
      </div>
      <span className='hidden'>{val}</span>
      <StyledSlider
        defaultValue={1}
        step={null}
        marks={marks_GPON}
        max={GPON_SPEEDS[last_index].value}
        value={val}
        aria-label="Default"
        onChange={handleChange}
      />
    </div>
  );
}
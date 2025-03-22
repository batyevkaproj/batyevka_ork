import { useState } from "react";

import {
  GPON_SPEEDS,
  UTP_SPEEDS
} from "@/constants/internet_speeds";

import {
  MIN,
  MEGOGO_BUNDLES,
  MONTHS
} from '@/constants/slider';

type MegogoSliderType = {
  disableSwap: boolean,
  outerSetter: (value: number) => void,
  outer: number,
  isEnabled: boolean
}

import StyledSlider from '@/components/StyledSlider';
import StyledSliderMobile from '@/components/StyledSliderMobile';

const marks_GPON = GPON_SPEEDS.map(item => ({ value: item.value }));
const marks_UTP = UTP_SPEEDS.map(item => ({ value: item.value }));

export function MegogoSlider({ outerSetter, outer, isEnabled }: MegogoSliderType) {
  const [val, setVal] = useState<number>(outer ?? 1);
  const handleChange = (_: Event, newValue: number | number[]) => {
    if (isEnabled) {
      setVal(newValue as number);
      outerSetter(newValue as number);
    }
  };

  const handleButtonClick = (newValue: number | number[]) => {
    setVal(newValue as number);
    outerSetter(newValue as number);
  };

  const lastIndex = MEGOGO_BUNDLES.length - 1;
  const mainButtons = MEGOGO_BUNDLES;

  return (
    <div>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
        <div className="flex justify-between w-full">
          {mainButtons.map((bundle) => (
            <button
              key={bundle.value}
              disabled={!isEnabled}
              className={`${val === bundle.value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`}
              onClick={() => handleButtonClick(bundle.value)}
            >
              {bundle.name}
            </button>
          ))}
        </div>
      </div>
      <StyledSlider
        defaultValue={1}
        step={1}
        marks={MEGOGO_BUNDLES}
        min={1}
        max={MEGOGO_BUNDLES[lastIndex].value}
        value={val}
        aria-label="Default"
        onChange={handleChange}
        disabled={!isEnabled}
      />
    </div>
  );
}

export type MonthsSliderType = {
  outerSetter: (number: number) => void,
  outer: number,
  setMonths: (number: number) => void,
}

export function MonthsSlider({ outerSetter, outer, setMonths }: MonthsSliderType) {
  const [val, setVal] = useState<number>(outer ?? 1);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    outerSetter(newValue as number);
    setMonths(MONTHS.find((element) => element.value === newValue)?.months ?? 1);
  };

  const buttonClickHandle = (newValue: number | number[]) => {
    setVal(newValue as number);
    outerSetter(newValue as number);
    setMonths(MONTHS.find((element) => element.value === newValue)?.months ?? 1);

  };

  const lastIndex = MONTHS.length - 1;

  return (
    <div>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
        <div className={`flex justify-between w-full  mr-[47%]`}> 
          {/* All Right, Agent 47  */}
          {MONTHS.slice(0, -1).map((item) => (
            <button
              key={item.value}
              className={`${val === item.value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`}
              onClick={() => buttonClickHandle(item.value)}
            >
              {item.months} міс
            </button>
          ))}
        </div>
        <button
          className={`${val === MONTHS[lastIndex].value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`}
          onClick={() => buttonClickHandle(MONTHS[lastIndex].value)}
        >
          <span className={`absolute min-[3644px]:ml-[-54px] ml-[-36px] max-[2377px]:ml-[-26px] mt-[-13px] min-[3644px]:mt-[-20px] max-[2377px]:mt-[-11px] w-[78px] min-[3644px]:w-[120px] max-[2377px]:w-[59px]`}>
            {MONTHS[lastIndex].months} міс
          </span>
        </button>
      </div>
      <StyledSlider
        defaultValue={1}
        step={1}
        marks={MONTHS}
        min={1}
        max={MONTHS[lastIndex].value}
        value={val}
        aria-label="Default"
        onChange={handleChange}
      />
    </div>
  );
}

export type TarifsSliderType = {
  setSpeed: (item: number) => void,
  speed: number
}

export function TarifsSliderMobile({ setSpeed, speed }: TarifsSliderType) {
  const [val, setVal] = useState<number>(speed ?? UTP_SPEEDS[0].value);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };

  const handleButtonClick = (newValue: number) => {
    setVal(newValue);
    setSpeed(newValue);
  };

  const marks = UTP_SPEEDS.map(item => ({ value: item.value }));

  return (
    <div>
      <StyledSliderMobile
        defaultValue={UTP_SPEEDS[0].value}
        value={val}
        step={null}
        marks={marks}
        min={0}
        max={UTP_SPEEDS[UTP_SPEEDS.length - 1].value}
        onChange={handleChange}
      />
      <div className="flex justify-between font-bold leading-[22px] text-[18px] relative top-[-11px]">
        {UTP_SPEEDS.map((speed, index) => (
          <button
            key={index}
            className={`${val === speed.value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'} 
              ${index === 0 ? 'ml-[10%]' : ''} 
              ${index === UTP_SPEEDS.length - 1 ? 'mr-[10%]' : ''}`}
            onClick={() => handleButtonClick(speed.value)}
          >
            {speed.speed} {speed.measure}
          </button>
        ))}
      </div>
    </div>
  );
}

export function TarifsSliderMobileGPON({ setSpeed, speed }: TarifsSliderType) {
  const [val, setVal] = useState<number>(speed ?? GPON_SPEEDS[0].value);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };

  const handleButtonClick = (newValue: number) => {
    setVal(newValue);
    setSpeed(newValue);
  };

  const marks = GPON_SPEEDS.map(item => ({ value: item.value }));

  return (
    <div>
      <StyledSliderMobile
        defaultValue={GPON_SPEEDS[0].value}
        value={val}
        step={null}
        marks={marks}
        min={0}
        max={GPON_SPEEDS[GPON_SPEEDS.length - 1].value}
        onChange={handleChange}
      />
      <div className="flex justify-between flex-wrap font-bold leading-[22px] text-[18px] relative top-[-11px]">
        {GPON_SPEEDS.map((speed, index) => (
          <button
            key={index}
            className={`${val === speed.value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}
              ${index === 0 ? 'ml-[5%]' : ''}
              ${index === GPON_SPEEDS.length - 1 ? 'mr-[5%]' : ''}`}
            onClick={() => handleButtonClick(speed.value)}
          >
            {speed.speed} {speed.measure}
          </button>
        ))}
      </div>
    </div>
  );
}

export function TarifsSlider({ setSpeed, speed }: TarifsSliderType) {
  const [val, setVal] = useState<number>(speed ?? MIN);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };

  const handleButtonClick = (newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };

  const maxIndex = UTP_SPEEDS.length - 1;

  return (
    <div>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
        {UTP_SPEEDS.map((mark, index) => (
          <button
            key={index}
            className={`${val === mark.value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`}
            onClick={() => handleButtonClick(mark.value)}
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

export function TarifsSliderGPON({ setSpeed, speed }: TarifsSliderType) {
  const [val, setVal] = useState<number>(speed);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };

  const handleButtonClick = (newValue: number | number[]) => {
    setVal(newValue as number);
    setSpeed(newValue as number);
  };

  const last_index = GPON_SPEEDS.length - 1;

  return (
    <div className={``}>
      <div className="flex justify-between font-bold max-[2377px]:leading-[22px] max-[2377px]:text-[18px] leading-[28px] text-[24px] min-[3644px]:leading-[42px] min-[3644px]:text-[36px] relative top-[0px]">
        {GPON_SPEEDS.map((mark, index) => (
          <button
            key={index}
            className={`${val === mark.value ? 'text-[#5F6061]' : 'text-[#BDBDBD]'}`}
            onClick={() => handleButtonClick(mark.value)}
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
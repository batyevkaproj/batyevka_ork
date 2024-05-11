
import { TarifsSlider, TarifsSliderGPON, MonthsSlider, OverpaySlider , TarifsSliderMobile, TarifsSliderMobileGPON } from "../ui/sliders";
import { TarifsSwitch, RegularSwitch } from "../ui/switches";
import rocket_blue from '@/public/img/rocket_blue.svg';
import Image from "next/image";
import galochka from '@/public/img/galochka.svg';
import galochka_orange from '@/public/img/galochka_orange.svg';
import  { useEffect, useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox_calculator"
import { Label } from "@/components/ui/label";
import { ChevronsUpDown } from "lucide-react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from '../ui/select';

  
const CalculatorTarifs = ({theme}:any) => {

    const [isTarifsSwitch, setTarifsSwitch] = useState(false);
    const [speedUtp, setSpeedUtp] = useState<number>(1)
    const [speedGpon, setSpeedGpon] = useState<number>(1)
    const [isTVChecked, setTVChecker] = useState(false);
    const [isIPChecked, setIPChecker] = useState(false);
    const [isSelectMenuChecked, setSelectMenu] = useState<number>(1);
    const [tvBoundle, setTvBoundle] = useState<number>(0);

    const outerSetter = (boundle: number) => {
        setTvBoundle(boundle);
    }
    const toggleSelectMenu = (dig: number) => {
        setSelectMenu(dig);
    }

    // console.log(isTarifsSwitch, speedUtp, speedGpon, isTVChecked, isIPChecked, tvBoundle,  isSelectMenuChecked);

    // useEffect(() => {
        // setTarifsSwitch(JSON.parse(window.localStorage.getItem('isTarifsSwitch')));
        // console.log(JSON.parse(window.localStorage.getItem('isTarifsSwitch')))
        // setSpeedUtp(JSON.parse(window.localStorage.getItem('speedUtp')));
        // setSpeedGpon(JSON.parse(window.localStorage.getItem('speedGpon')));
        // setTVChecker(JSON.parse(window.localStorage.getItem('isTVChecked')));
        // setIPChecker(JSON.parse(window.localStorage.getItem('isIPChecked')));
        // setSelectMenu(JSON.parse(window.localStorage.getItem('isSelectMenuChecked')));
        // setTvBoundle(JSON.parse(window.localStorage.getItem('tvBoundle')));

    //     console.log('fire')


    //   }, []);


    
    //   useEffect(() => {
    //     window.localStorage.setItem('isTarifsSwitch', JSON.stringify(isTarifsSwitch));
    //     window.localStorage.setItem('speedUtp', JSON.stringify(speedUtp));
    //     window.localStorage.setItem('speedGpon', JSON.stringify(speedGpon));
    //     window.localStorage.setItem('isTVChecked', JSON.stringify(isTVChecked));
    //     window.localStorage.setItem('isIPChecked', JSON.stringify(isIPChecked));
    //     window.localStorage.setItem('isSelectMenuChecked', JSON.stringify(isSelectMenuChecked));
    //     window.localStorage.setItem('tvBoundle', JSON.stringify(tvBoundle));

    //   }, [isTarifsSwitch, speedUtp, speedGpon, isTVChecked, isIPChecked, tvBoundle,  isSelectMenuChecked]);

    return (
    <div className={`min-[3644px]:mx-[240px] mx-[170px] max-[2377px]:mx-[120px] max-[1800px]:mx-[85px] max-[1247px]:mx-[67px] max-[932px]:mx-[35px] max-[680px]:mx-0 min-[3644px]:mt-[90px] mt-[60px] max-[2377px]:mt-[45px] max-[932px]:mt-[30px] max-[680px]:mt-0 + ${theme=='white'?'text-[#5F6061]':'text-white'}`}>
        <div className={`${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3]':'shadow-[0_4px_29px_0px_#0B273C]'} max-[680px]:shadow-none w-full`}>
            <div className={`min-[3644px]:pt-[117px] pt-[78px] max-[2377px]:pt-[60px] max-[680px]:pt-[20px] rounded-t-[10px] + ${theme=='white'?'bg-[#F4F2F2]':'bg-[#123853]'}`}>
                <h1 className={`flex text-center items-center justify-center font-bold  text-[50px] leading-[62px] max-[2377px]:text-[42px] max-[2377px]:leading-[50px] min-[3644px]:text-[75px] min-[3644px]:leading-[93px] max-[680px]:text-[24px] max-[680px]:leading-[30px]`}>Калькулятор тарифу</h1>
                <p className={`flex text-center items-center justify-center min-[3644px]:text-[48px] min-[3644px]:leading-[63px] text-[32px] leading-[42px] max-[2377px]:text-[24px] max-[2377px]:leading-[32px] max-[680px]:text-[16px] max-[680px]:leading-[20px] min-[3644px]:mt-[30px] mt-[15px] max-[680px]:mt-[10px]`}><span className={`font-bold`}>Створи свій тариф&nbsp;</span> <span className={`font-bold max-[680px]:hidden`}>/</span> <span className={`max-[680px]:hidden`}>&nbsp;Оберiть технологію підключення</span></p>
                <p className={`flex text-center items-center justify-center text-[16px] leading-[20px] mt-[5px] min-[681px]:hidden`}>Оберiть технологію підключення</p>
                <div className={`flex items-center justify-center min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[84px] mt-[56px] max-[2377px]:mt-[30px] max-[680px]:mt-[15px] `}>
                    <p className={`font-bold min-[3644px]:mr-[30px] mr-[20px] max-[2377px]:mr-[15px]`}>G-PON</p>
                        <TarifsSwitch isTarifsSwitch={isTarifsSwitch} setTarifsSwitch={setTarifsSwitch}/>
                    <p className={`font-bold min-[3644px]:ml-[30px] ml-[20px] max-[2377px]:ml-[15px]`}>UTP</p>
                </div>
                <div className={`min-[3644px]:h-[60px] h-[40px] max-[2377px]:h-[30px]`}></div>
            </div>
            <div className={`${theme=='white'?'bg-white':'bg-[#0E2D43]'} grid grid-cols-2 max-[1800px]:grid-cols-1 min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] min-[3644px]:gap-[170px] gap-[100px] max-[2377px]:gap-[60px] min-[3644px]:pb-[117px] pb-[78px] max-[2377px]:pb-[60px] max-[680px]:pb-0`}>
                <div className={`col-span-1 min-[3644px]:ml-[117px] ml-[78px] max-[2377px]:ml-[60px] max-[1800px]:mr-[60px] max-[1000px]:mx-[35px] max-[680px]:mx-[20px] flex justify-center`}>
                    <div className={`max-[1800px]:max-w-[750px]`}>
                        <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] max-[680px]:flex max-[680px]:justify-center max-[680px]:text-center`}>Обери Інтернет швидкість</p>
                        <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:hidden">
                            {isTarifsSwitch?<TarifsSlider setSpeed={setSpeedUtp} speed={speedUtp}/>:<TarifsSliderGPON setSpeed={setSpeedGpon} />}
                        </div>
                        <div className={`min-[681px]:hidden`}>
                            {isTarifsSwitch?<TarifsSliderMobile setSpeed={setSpeedUtp}/>:<TarifsSliderMobileGPON setSpeed={setSpeedGpon}/>}
                        </div>
                        <div className={`flex items-center min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px] min-[3644px]:mt-[110px] mt-[71px] max-[2377px]:mt-[53px] max-[680px]:hidden`}>
                            <RegularSwitch switchState={setTVChecker} state={isTVChecked}/>
                            <p className={`font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]`}>Додай MEGOGО Телебачення</p>
                        </div>
                        <p className={`flex text-center items-center justify-center font-bold mt-[40px] text-[18px] leading-[22px] min-[681px]:hidden`}>Додай MEGOGО Телебачення</p>
                        <div className={`flex items-center justify-center mt-[15px] min-[681px]:hidden`}>
                            <RegularSwitch switchState={setTVChecker} state={isTVChecked}/>
                        </div>
                        <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:mt-[15px] max-[680px]:flex max-[680px]:justify-center max-[680px]:text-center`}>Обери передплату MEGOGO</p>
                        <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:hidden">
                            wef
                            <OverpaySlider outerSetter={outerSetter}/>
                        </div>
                        <div className={`font-bold text-[18px] leading-[22px] mt-[20px] text-[#BDBDBD] min-[681px]:hidden`}>
                            <div className={`flex items-center gap-x-[20px]`}>
                                <Checkbox onCheckedChange={() =>setTvBoundle(1)}  className={`size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]`}/>
                                <p className={``}>Легка</p>
                            </div>
                            <div className={`flex items-center gap-x-[20px] mt-[16px]`}>
                                <Checkbox onCheckedChange={() =>setTvBoundle(2)} className={`size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]`}/>
                                <p className={``}>Оптимальна</p>
                            </div>
                            <div className={`flex items-center gap-x-[20px] mt-[16px]`}>
                                <Checkbox onCheckedChange={() =>setTvBoundle(3)} className={`size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]`}/>
                                <p className={``}>Максимальна</p>
                            </div>
                            <div className={`flex items-center gap-x-[20px] mt-[16px]`}>
                                <Checkbox onCheckedChange={() =>setTvBoundle(4)} className={`size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]`}/>
                                <p className={``}>Спорт</p>
                            </div>
                            <div className={`flex items-center gap-x-[20px] mt-[16px]`}>
                                <Checkbox onCheckedChange={() =>setTvBoundle(5)} className={`size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]`}/>
                                <p className={``}>Кіно+</p>
                            </div>
                        </div>
                        <div className={`flex items-center min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px] min-[3644px]:mt-[110px] mt-[71px] max-[2377px]:mt-[53px] max-[680px]:hidden`}>
                            <RegularSwitch switchState={setIPChecker} state={isIPChecked}/>
                            <p className={`font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]`}>Додай зовнішню постійну ІР адресу</p>
                        </div>                            
                        <p className={`flex text-center items-center justify-center mt-[40px] font-bold text-[18px] leading-[22px] min-[681px]:hidden`}>Додай зовнішню постійну ІР адресу</p>
                        <div className={`flex items-center justify-center mt-[15px] min-[681px]:hidden`}>
                            <RegularSwitch switchState={setIPChecker} state={isIPChecked}/>
                        </div>
                        <p className={`max-[680px]:flex max-[680px]:text-center max-[680px]:justify-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px]`}>Внесіть авансом абонплату та отримайте знижку на підключення та обладнання </p>
                        <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:hidden">
                            kljefw
                            <MonthsSlider outerSetter={toggleSelectMenu}/>
                        </div>
                        <div className={`mt-[20px] w-full min-[681px]:hidden`}>
                            <Select>
                                <SelectTrigger className={`pl-[22px] text-[16px] leading-[22px] rounded-full h-[48px] border-[#BDBDBD] ${isSelectMenuChecked ? 'text-[#5F6061] bg-[#F4F2F2] border-[#51B18B]': ''}`}>
                                    <SelectValue className={``} placeholder="Виберіть період" />
                                    <ChevronsUpDown className="w-[22px] h-[33px] mr-[10px]"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <SelectLabel>Виберіть період</SelectLabel>
                                    <SelectItem value='0' onChange={() => toggleSelectMenu(1)}>Без авансу</SelectItem>
                                    <SelectItem value='1' onChange={() => toggleSelectMenu(2)}>1 міс</SelectItem>
                                    <SelectItem value='2' onChange={() => toggleSelectMenu(3)}>6 міс</SelectItem>
                                    <SelectItem value='3' onChange={() => toggleSelectMenu(4)}>12 міс</SelectItem>
                                    <SelectItem value='4' onChange={() => toggleSelectMenu(5)}>24 міс</SelectItem>
                                    <SelectItem value='5' onChange={() => toggleSelectMenu(6)}>32 міс</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <p className="max-[2377px]:w-full w-[717px] min-[3644px]:w-[994px] text-[#BDBDBD] min-[3644px]:mt-[60px] mt-[20px] max-[2377px]:mt-[15px] max-[680px]:mt-[15px] min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">*СТАБІЛЬНІСТЬ ЦІНИ – при внесенні авансового платежу  ми гарантуємо незмінність ціни тарифного плану протягом обраного періоду</p>
                
                        <div className={`flex grid grid-cols-1 items-center font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px]`}>
                            <div className={`flex items-center justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]`}>
                                <h1>* Підключення</h1>
                                <h1 className={`opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]`}>1 грн.</h1>
                            </div>
                            <div className={`flex items-center justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]`}>
                                <h1>* Оптичний термінал <span className={`opacity-[0.5] min-[681px]:hidden relative left-[13px]`}><br/>ONU HG8010H</span></h1>
                                <h1 className={`opacity-[0.5] max-[680px]:hidden`}>ONU HG8010H</h1>
                                <h1 className={`opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]`}>1 грн.</h1>
                            </div>
                            <div className={`flex items-start justify-between max-[680px]:grid max-[680px]:grid-cols-2 max-[680px]:grid-rows-1 max-[680px]:border-b-[2px] max-[680px]:border-[#F4F2F2] max-[680px]:border-solid max-[680px]:pb-[10px]`}>
                                <h1>* Wi-Fi роутер </h1>
                                <h1 className={`items-center justify-center text-center max-[680px]:hidden`}>Ультрапреміум <span className={`opacity-[0.5]`}>MERCUSYS MR90X </span> <br/>стандарт AX6000 </h1>
                                <h1 className={`max-[680px]:text-end opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]`}>1 грн.</h1>
                                <p className={`row-start-3 col-span-2 opacity-[0.5] min-[681px]:hidden relative left-[13px] mt-[-24px]`}><br/>Ультрапреміум <span className={`opacity-[0.5]`}>MERCUSYS <br/>MR90X </span> стандарт AX6000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={``}>
                    <div className={`col-span-1 col-start-2 max-[1800px]:col-start-1 flex justify-center min-[3644px]:h-[1272px] h-[848px] max-[2377px]:h-[648px] min-[3644px]:gap-[80px] gap-[53px] max-[2377px]:gap-[34px] max-[1200px]:gap-[20px] max-[780px]:hidden`}>
                        <div className={`min-[3644px]:w-[687px] w-[458px] max-[2377px]:w-[350px] max-[880px]:w-[320px] shadow-[0_4px_29px_0px_#E6E3E3] bg-white rounded-[10px] min-w-[320px]`}>
                            <p className={`flex items-center justify-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:pt-[78px] pt-[52px] max-[2377px]:pt-[40px]`}>Інтернет</p>
                            <div className={`flex items-center justify-center min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] min-[3644px]:pb-[60px] pb-[40px] max-[2377px]:pb-[30px]`}>
                                <Image src={rocket_blue} alt={''} className={``}/>
                            </div>
                            <h2 className="font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex">
                                Швидкість
                            </h2>
                            <h2 className="text-[#5984B2] font-bold min-[3644px]:text-[70px] min-[3644px]:leading-[70px] text-[47px] leading-[47px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] justify-center flex min-[3644px]:py-[20px] py-[13px] max-[2377px]:py-[10px]">100 Meгабіт</h2>
                            <div className="flex justify-center text-[#5984B2] min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">
                                <span className="flex mr-[20px] ">
                                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    УКРАЇНА
                                </span>
                                <span className="flex">
                                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    СВІТ
                                </span>
                            </div>
                            <h2 className="font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pt-[20px] pt-[13px] max-[2377px]:pt-[8px]">
                                рівнозначна
                            </h2>
                            <div className={'min-[3644px]:mt-[74px] mt-[33px] max-[2377px]:mt-[30px] min-[3644px]:mx-[73px] mx-[39px] max-[2377px]:mx-[38px] min-[3644px]:pb-[78px] pb-[52px] max-[2377px]:pb-[40px] min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]'}>
                                <div className={`flex items-start relative`}>
                                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    <p className="flex font-semibold">
                                        Стабільність ціни*
                                    </p>
                                </div>
                                <div className={`min-[3644px]:mt-[22px] mt-[15px] max-[2377px]:mt-[10px] flex items-start`}>
                                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    <p className="font-semibold ">
                                        Виклик майстра для <br/> будь-якого ремонту безкоштовно 
                                    </p>
                                </div>
                                <div className={`min-[3644px]:mt-[22px] mt-[15px] max-[2377px]:mt-[10px] flex items-start`}>
                                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    <p>
                                        Оптичний модем <br/> безкоштовно *
                                    </p>
                                </div>
                                <div className={`min-[3644px]:mt-[22px] mt-[15px] max-[2377px]:mt-[10px] flex items-start`}>
                                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    <p className="">
                                        Wi-Fi 6 роутер <br/>безкоштовно *
                                    </p>
                                </div>
                                <div className={`min-[3644px]:mt-[22px] mt-[15px] max-[2377px]:mt-[10px] flex items-start`}>
                                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    <p className="">
                                        Без плати за <br/>підключення *
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`text-white min-[3644px]:w-[687px] w-[458px] max-[2377px]:w-[350px] max-[880px]:w-[320px] shadow-[0_4px_29px_0px_#E6E3E3] rounded-[10px] bg-gradient-to-r from-[#3E3D39] to-[#1B211F] min-w-[320px]`}>
                            <p className={`flex items-center justify-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:pt-[78px] pt-[52px] max-[2377px]:pt-[40px]`}>Телебачення</p>
                            <div className={`flex items-center justify-center`}>
                                <p className={`flex items-center justify-center min-[3644px]:mt-[90px] mt-[62px] max-[2377px]:mt-[48px] rounded-[4px] bg-[#FD363B] min-[3644px]:w-[132px] min-[3644px]:h-[51px] w-[88px] h-[34px] max-[2377px]:w-[67px] max-[2377px]:h-[26px] font-bold min-[3644px]:text-[24px] min-[3644px]:leading-[24px] text-[16px] leading-[16px] max-[2377px]:text-[13px] max-[2377px]:leading-[13px]`}>АКЦIЯ</p>
                            </div>
                            <p className={`flex items-center justify-center font-bold min-[3644px]:text-[42px] min-[3644px]:leading-[42px] text-[28px] leading-[28px] max-[2377px]:text-[22px] max-[2377px]:leading-[22px] min-[3644px]:pt-[90px] pt-[65px] max-[2377px]:pt-[50px]`}>Легка</p>
                            <p className={`flex items-center justify-center text-center font-bold text-[#909090] min-[3644px]:mt-[22px] mt-[16px] max-[2377px]:mt-[12px] min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px]`}>298 каналiв для <br/> любителів ТБ, а також <br/>колекцiя фiльмiв,<br/>мультикiв та серiалiв</p>
                            <div className={'flex items-center justify-center min-[3644px]:gap-[143px] gap-[89px] max-[2377px]:gap-[49px] font-bold min-[3644px]:mt-[76px] mt-[51px] max-[2377px]:mt-[39px]'}>
                                <div className={``}>
                                    <p className={`min-[3644px]:text-[72px] min-[3644px]:leading-[72px] text-[48px] leading-[48px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] flex justify-center`}>298</p>
                                    <p className={`min-[3644px]:text-[30px] min-[3644px]:leading-[30px] text-[20px] leading-[20px] max-[2377px]:text-[16px] max-[2377px]:leading-[13px] text-[#909090] pt-[9px] flex justify-center`}>каналiв</p>
                                </div>
                                <div className={``}>
                                    <p className={`min-[3644px]:text-[72px] min-[3644px]:leading-[72px] text-[48px] leading-[48px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] flex justify-center`}>10000+</p>
                                    <p className={`min-[3644px]:text-[30px] min-[3644px]:leading-[30px] text-[20px] leading-[20px] max-[2377px]:text-[16px] max-[2377px]:leading-[13px] text-[#909090] pt-[9px] flex justify-center`}>фiльмiв</p>
                                </div>
                            </div>
                            <p className={`font-bold min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] text-[16px] leading-[22px] flex items-center justify-center text-center min-[3644px]:mt-[76px] mt-[51px] max-[2377px]:mt-[39px]`}>Перемотка i ТБ-архiв на <br/>каналах</p>
                            <div className={`flex items-center justify-center min-[3644px]:w-[519px] min-[3644px]:h-[118px] w-[346px] h-[78px] max-[2377px]:w-[264px] max-[2377px]:h-[60px] bg-[#303030] border-white border-[1px] rounded-[7px] min-[3644px]:ml-[84px] ml-[56px] max-[2377px]:ml-[43px] max-[880px]:ml-[28px] min-[3644px]:mt-[118px] mt-[76px] max-[2377px]:mt-[51px]`}>
                                <p className={` min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px] font-bold`}>Promo 14 днів </p>
                            </div>
                        </div>
                    </div>
                    <div className={`flex justify-center`}>
                        <div className={`min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] max-[680px]:mt-[-30px] min-[3664px]:mr-[117px] mr-[78px] max-[2377px]:mr-[60px] w-full max-[1800px]:w-[750px] max-[1800px]:mr-[20px] max-[1800px]:ml-[20px]`}>
                            <div className={`flex grid grid-cols-1 items-center w-full font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:gap-[22px] gap-[15px] max-[2377px]:gap-[12px] max-[680px]:hidden`}>
                                <div className={`flex items-end justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]`}>
                                    <h1>Акційна абонплата на Перші 4 місяці</h1>
                                    <h1 className={`text-[#DC662D] flex items-end justify-between w-[287px] min-[3644px]:w-[430px] max-[2377px]:w-[258px]`}>
                                        <span className={`min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[60px]`}>0</span>
                                        <span className={`min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[35px]`}>грн/міс</span>
                                    </h1>
                                </div>
                                <div className={`flex items-end justify-between min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]`}>
                                    <h1>Абонплата з 5го місяця</h1>
                                    <h1 className={`text-[#51B18B] flex items-end justify-between w-[287px] min-[3644px]:w-[430px] max-[2377px]:w-[258px]`}>
                                        <span className={`min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[60px]`}>0</span>
                                        <span className={`min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[35px]`}>грн/міс</span>                                   
                                    </h1>
                                </div>
                            </div>
                            <div className={`w-full font-bold text-[18px] leading-[22px] min-[681px]:hidden`}>
                                <div className={`border-b-[2px] border-[#F4F2F2] border-solid pb-[10px]`}>
                                    <h1 className={`mt-[20px] mb-[10px]`}>Акційна абонплата на Перші 4 місяці</h1>
                                    <div className={`flex justify-end items-end text-[#DC662D]`}>
                                        <h1 className={`text-[70px] leading-[70px] `}>0</h1>
                                        <h1 className={`flex justify-end text-[30px] leading-[35px] w-[200px]`}>грн/міс</h1>
                                    </div>
                                </div>
                                <div className={`border-b-[2px] border-[#F4F2F2] border-solid pb-[10px]`}>
                                    <h1 className={`mt-[20px] mb-[10px]`}>Абонплата з 5го місяця</h1>
                                    <div className={`text-[#51B18B] flex items-end justify-end`}>
                                        <h1 className={`text-[70px] leading-[70px]`}>0</h1>
                                        <h1 className={`flex justify-end text-[30px] leading-[35px] w-[200px]`}>грн/міс</h1>                                   
                                    </div>
                                </div>
                            </div>
                            <div className={`min-[3644px]:mt-[66px] mt-[44px] max-[2377px]:mt-[30px] max-[680px]:flex max-[680px]:justify-center`}>
                                <button className={`w-full max-[680px]:w-[270px] bg-[#DC662D] text-white font-semibold rounded-full min-[3644px]:h-[118px] h-[78px] max-[2377px]:h-[60px] shadow-[0_4px_20px_0px_#DC662D50] min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]`}>Підключитись</button>
                            </div>
                            <div className={`flex justify-center min-[3644px]:gap-[30px] gap-[20px] max-[2377px]:gap-[15px] min-[3644px]:mt-[39px] mt-[26px] max-[2377px]:mt-[20px] max-[680px]:hidden`}>
                                <p className={`font-normal min-[3644px]:text-[27px] min-[3644px]:leading-[42px] text-[18px] leading-[28px] max-[2377px]:text-[14px] max-[2377px]:leading-[22px]`}>Є питання? Ми передзвоним Вам через <span className={`font-semibold`}>30 секунд!</span></p>
                                <a href={'#'} className={`font-normal text-[#DC662D] underline underline-offset-[3px] min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px]`}>Передзвонити мені</a>
                            </div>
                            <div className={`min-[681px]:hidden`}>
                                <p className={`flex justify-center font-normal text-[14px] leading-[22px] mt-[15px]`}>Є питання? Ми передзвоним</p> 
                                <p className={`flex justify-center font-normal text-[14px] leading-[22px]`}>Вам через <span className={`font-semibold`}>&nbsp;30 секунд!</span></p>
                                <a href={'#'} className={`flex justify-center font-normal text-[#DC662D] underline underline-offset-[3px] text-[16px] leading-[22px] mt-[10px]`}>Передзвонити мені</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CalculatorTarifs;
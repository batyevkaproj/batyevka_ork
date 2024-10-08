import React, { useState } from 'react'
import Image from 'next/image'
import type { ThemeProps } from '@/types/Theme'


import { ChevronDown } from 'lucide-react'

import speedometer from '@/public/img/option_card_1.svg'
import blue_speedometer from '@/public/img/option_card_2.svg'
import ip from '@/public/img/option_card_3.svg'
import snowflake from '@/public/img/option_card_4.svg'
import something from '@/public/img/option_card_5.svg'
import messages from '@/public/img/option_card_6.svg'



const AdditionalOptions = ({theme}:ThemeProps) => {

    const [isFast1, setIsFast1Visible] = useState(false);
    const [isFast5, setIsFast5Visible] = useState(false);
    const [isIP, setIsIPVisible] = useState(false);
    const [isFreeze, setIsFreezeVisible] = useState(false);
    const [isInsurance, setIsInsuranceVisible] = useState(false);
    const [isMessanger, setIsMessangerVisible] = useState(false);

    const toggleFast1Visibility = () => {
        setIsFast1Visible(!isFast1);
    };

    const toggleFast5Visibility = () => {
        setIsFast5Visible(!isFast5);
    };

    const toggleIPVisibility = () => {
        setIsIPVisible(!isIP);
    };

    const toggleFreezeVisibility = () => {
        setIsFreezeVisible(!isFreeze);
    };

    const toggleInsuranceVisibility = () => {
        setIsInsuranceVisible(!isInsurance);
    };

    const toggleMessangerVisibility = () => {
        setIsMessangerVisible(!isMessanger);
    };

    return (
        <div className={`max-[680px]:mx-0 mx-[67px] max-[1200px]:mx-[20px] min-[3644px]:mt-[180px] mt-[120px] max-[2377px]:mt-[90px] max-[1000px]:mt-[60px] max-[680px]:mt-[0px] + ${theme=='white'?'text-[#5F6061]':'text-white'}`}>
            <div className={`flex justify-center items-center max-[680px]:hidden`}>
            <div className={`grid grid-cols-3 max-[1200px]:grid-cols-2 min-[3644px]:gap-[78px] gap-[52px] max-[2347px]:gap-[40px] max-[1600px]:gap-x-[30px] max-[1600px]:gap-y-[40px] max-[680px]:mt-[0px]`}>
                <div className={`${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'} min-[3644px]:w-[687px] min-[3644px]:h-[855px] w-[458px] h-[570px] max-[2377px]:w-[350px] max-[2377px]:h-[436px] rounded-[10px]`}>
                    <div className={`flex justify-center max-[2377px]:mt-[60px] mt-[78px] min-[3644px]:mt-[117px]`}>
                        <Image src={speedometer} alt='speedometer'/>
                    </div>
                    <p className={`flex justify-center items-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[66px] text-[32px] leading-[44px] max-[2377px]:text-[24px] max-[2377px]:leading-[36px] max-[2377px]:mt-[10px] mt-[15px] min-[3644px]:mt-[22px]`}>Форсаж 1000</p>
                    <p className={`flex justify-center items-center text-[#DC662D] font-bold min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[36px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>150 грн</p>
                    <p className={`flex justify-center items-center text-center font-normal min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>Збільшує швидкість доступу в Інтернет до кінця місяця на  <br/>1000 Мегабіт</p>
                    <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px] max-[2377px]:mt-[42px] mt-[56px] min-[3644px]:mt-[79px]`}>Детальніше</a>
                </div>
                <div className={`${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'} min-[3644px]:w-[687px] min-[3644px]:h-[855px] w-[458px] h-[570px] max-[2377px]:w-[350px] max-[2377px]:h-[436px] rounded-[10px]`}>
                    <div className={`flex justify-center max-[2377px]:mt-[60px] mt-[78px] min-[3644px]:mt-[117px]`}>
                        <Image src={blue_speedometer} alt='blue_speedometer'/>
                    </div>
                    <p className={`flex justify-center items-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[66px] text-[32px] leading-[44px] max-[2377px]:text-[24px] max-[2377px]:leading-[36px] max-[2377px]:mt-[10px] mt-[15px] min-[3644px]:mt-[22px]`}>Форсаж 5000</p>
                    <p className={`flex justify-center items-center text-[#DC662D] font-bold min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[36px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>2000 грн</p>
                    <p className={`flex justify-center items-center text-center font-normal min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>Збільшує швидкість доступу в Інтернет до кінця місяця на  <br/>5000 Мегабіт</p>
                    <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px] max-[2377px]:mt-[42px] mt-[56px] min-[3644px]:mt-[79px]`}>Детальніше</a>
                </div>
                <div className={`${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'} min-[3644px]:w-[687px] min-[3644px]:h-[855px] w-[458px] h-[570px] max-[2377px]:w-[350px] max-[2377px]:h-[436px] rounded-[10px]`}>
                    <div className={`flex justify-center max-[2377px]:mt-[60px] mt-[78px] min-[3644px]:mt-[117px]`}>
                        <Image src={ip} alt='ip'/>
                    </div>
                    <p className={`flex justify-center items-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[66px] text-[32px] leading-[44px] max-[2377px]:text-[24px] max-[2377px]:leading-[36px] max-[2377px]:mt-[10px] mt-[15px] min-[3644px]:mt-[22px]`}>Зовнішній IP</p>
                    <p className={`flex justify-center items-center text-[#DC662D] font-bold min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[36px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>50 грн</p>
                    <p className={`flex justify-center items-center text-center font-normal min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>Зовнішня статична IP для <br/> особистих потреб, наприклад, <br/> підняття сервера або <br/>відеонагляду</p>
                    <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px] max-[2377px]:mt-[20px] mt-[23px] min-[3644px]:mt-[34px]`}>Детальніше</a>
                </div>
                <div className={`${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'} min-[3644px]:w-[687px] min-[3644px]:h-[855px] w-[458px] h-[570px] max-[2377px]:w-[350px] max-[2377px]:h-[436px] rounded-[10px]`}>
                    <div className={`flex justify-center max-[2377px]:mt-[60px] mt-[78px] min-[3644px]:mt-[117px]`}>
                        <Image src={snowflake} alt='snowflake'/>
                    </div>
                    <p className={`flex justify-center items-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[66px] text-[32px] leading-[44px] max-[2377px]:text-[24px] max-[2377px]:leading-[36px] max-[2377px]:mt-[10px] mt-[15px] min-[3644px]:mt-[22px]`}>Фріз</p>
                    <p className={`flex justify-center items-center text-[#DC662D] font-bold min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[36px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>99 грн</p>
                    <p className={`flex justify-center items-center text-center font-normal min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>Блокування списання <br/> абонплати у період Вашої <br/> відсутності. Відновлення <br/> безкоштовне</p>
                    <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px] max-[2377px]:mt-[20px] mt-[23px] min-[3644px]:mt-[34px]`}>Детальніше</a>
                </div>
                <div className={`${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'} min-[3644px]:w-[687px] min-[3644px]:h-[855px] w-[458px] h-[570px] max-[2377px]:w-[350px] max-[2377px]:h-[436px] rounded-[10px]`}>
                    <div className={`flex justify-center max-[2377px]:mt-[60px] mt-[78px] min-[3644px]:mt-[117px]`}>
                        <Image src={something} alt='something'/>
                    </div>
                    <p className={`flex justify-center items-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[66px] text-[32px] leading-[44px] max-[2377px]:text-[24px] max-[2377px]:leading-[36px] max-[2377px]:mt-[10px] mt-[15px] min-[3644px]:mt-[22px]`}>Страховка</p>
                    <p className={`flex justify-center items-center text-[#DC662D] font-bold min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[36px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>50 грн</p>
                    <p className={`flex justify-center items-center text-center font-normal min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>Стахуємо на 12 місяців <br/> пошкодження оптичної або <br/> мідної кабельної лінії у вашій <br/>оселі</p>
                    <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px] max-[2377px]:mt-[20px] mt-[23px] min-[3644px]:mt-[34px]`}>Детальніше</a>
                </div>
                <div className={`${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'} min-[3644px]:w-[687px] min-[3644px]:h-[855px] w-[458px] h-[570px] max-[2377px]:w-[350px] max-[2377px]:h-[436px] rounded-[10px]`}>
                    <div className={`flex justify-center max-[2377px]:mt-[60px] mt-[78px] min-[3644px]:mt-[117px]`}>
                        <Image src={messages} alt='messages'/>
                    </div>
                    <p className={`flex justify-center items-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[66px] text-[32px] leading-[44px] max-[2377px]:text-[24px] max-[2377px]:leading-[36px] max-[2377px]:mt-[10px] mt-[15px] min-[3644px]:mt-[22px]`}>Месенджер</p>
                    <p className={`flex justify-center items-center text-[#DC662D] font-bold min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[36px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>безкоштовно</p>
                    <p className={`flex justify-center items-center text-center font-normal min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] max-[2377px]:mt-[20px] mt-[27px] min-[3644px]:mt-[40px]`}>Інформування через зручний <br/> месенджер про вожливі події</p>
                    <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px] max-[2377px]:mt-[64px] mt-[83px] min-[3644px]:mt-[124px]`}>Детальніше</a>
                </div>
            </div>
            </div>
            <div className={'min-[681px]:hidden '}>
                <div className={`bg-[#F4F2F2] w-full rounded-t-[20px] mt-[22px] pb-[20px]`}>
                    <p className={`text-[24px] leading-[30px] font-bold mx-[50px] pt-[18px] flex justify-center text-center`}>Додаткові опції до Інтернету</p>
                    <div className={`mx-[20px] mt-[20px]`}>
                        <div onClick={toggleFast1Visibility} className={`${isFast1 ? 'mb-[25px] pb-[5px] rounded-[10px]' : ''} rounded-t-[10px] pt-[0px] + ${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'}`}>
                            <div className={`${isFast1 ? 'flex items-center justify-center pt-[30px]':'flex items-center ml-[40px] gap-[20px] pt-[23px]'}`}>
                                <Image src={speedometer} alt='speedometer'/>
                                <p className={`${isFast1 ? 'hidden':''} text-[24px] leading-[36px] font-bold`}>Форсаж 1000</p>
                            </div>
                            <div className={`${isFast1 ? '':'hidden'}`}>
                                <p className={`flex justify-center items-center font-bold text-[24px] leading-[36px] mt-[10px]`}>Форсаж 1000</p>
                                <p className={`flex justify-center items-center text-[#DC662D] font-bold text-[30px] leading-[36px] mt-[20px]`}>150 грн</p>
                                <p className={`flex justify-center items-center text-center font-normal text-[18px] leading-[22px] mt-[20px]`}>Збільшує швидкість доступу в <br/>Інтернет до кінця місяця на  <br/>1000 Мегабіт</p>
                                <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal text-[16px] leading-[22px] mt-[42px] `}>Детальніше</a>
                            </div>
                            <div className={`flex justify-center items-center  `}>
                                <ChevronDown className={`size-[20px] transition-transform + ${isFast1 ? 'mt-[2px] rotate-[180deg] opacity-[0.5]':''}`}/>
                            </div>
                        </div>
                        <div onClick={toggleFast5Visibility} className={`${isFast5 ? 'mb-[25px] pb-[5px] rounded-[10px]' : ''} rounded-t-[10px] mt-[-5px] + ${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'}`}>
                            <div className={`${isFast5 ? 'flex items-center justify-center pt-[30px]':'flex items-center ml-[40px] gap-[20px] pt-[23px]'}`}>
                                <Image src={blue_speedometer} alt='speedometer'/>
                                <p className={`${isFast5 ? 'hidden':''} text-[24px] leading-[36px] font-bold`}>Форсаж 5000</p>
                            </div>
                            <div className={`${isFast5 ? '':'hidden'}`}>
                                <p className={`flex justify-center items-center font-bold text-[24px] leading-[36px] mt-[10px]`}>Форсаж 5000</p>
                                <p className={`flex justify-center items-center text-[#DC662D] font-bold text-[30px] leading-[36px] mt-[20px]`}>2000 грн</p>
                                <p className={`flex justify-center items-center text-center font-normal text-[18px] leading-[22px] mt-[20px]`}>Збільшує швидкість доступу в <br/>Інтернет до кінця місяця на  <br/>5000 Мегабіт</p>
                                <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal text-[16px] leading-[22px] mt-[42px] `}>Детальніше</a>
                            </div>
                            <div className={`flex justify-center items-center `}>
                                <ChevronDown className={`size-[20px] transition-transform + ${isFast5 ? 'mt-[2px] rotate-[180deg] opacity-[0.5]':''}`}/>
                            </div>
                        </div>
                        <div onClick={toggleIPVisibility} className={`${isIP ? 'mb-[25px] pb-[5px] rounded-[10px]' : ''} rounded-t-[10px] mt-[-5px] + ${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'}`}>
                            <div className={`${isIP ? 'flex items-center justify-center pt-[30px]':'flex items-center ml-[40px] gap-[20px] pt-[23px]'}`}>
                                <Image src={ip} alt='speedometer'/>
                                <p className={`${isIP ? 'hidden':''} text-[24px] leading-[36px] font-bold`}>Зовнішній IP</p>
                            </div>
                            <div className={`${isIP ? '':'hidden'}`}>
                                <p className={`flex justify-center items-center font-bold text-[24px] leading-[36px] mt-[10px]`}>Зовнішній IP</p>
                                <p className={`flex justify-center items-center text-[#DC662D] font-bold text-[30px] leading-[36px] mt-[20px]`}>50 грн/міс</p>
                                <p className={`flex justify-center items-center text-center font-normal text-[18px] leading-[22px] mt-[20px]`}>Зовнішня статична IP для <br/> особистих потреб, наприклад, <br/> підняття сервера або <br/>відеонагляду</p>
                                <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal text-[16px] leading-[22px] mt-[20px] `}>Детальніше</a>
                            </div>
                            <div className={`flex justify-center items-center `}>
                                <ChevronDown className={`size-[20px] transition-transform + ${isIP ? 'mt-[2px] rotate-[180deg] opacity-[0.5]':''}`}/>
                            </div>
                        </div>
                        <div onClick={toggleFreezeVisibility} className={`${isFreeze ? 'mb-[25px] pb-[5px] rounded-[10px]' : ''} rounded-t-[10px] mt-[-5px] + ${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'}`}>
                            <div className={`${isFreeze ? 'flex items-center justify-center pt-[30px]':'flex items-center ml-[40px] gap-[20px] pt-[23px]'}`}>
                                <Image src={snowflake} alt='speedometer'/>
                                <p className={`${isFreeze ? 'hidden':''} text-[24px] leading-[36px] font-bold`}>Фріз</p>
                            </div>
                            <div className={`${isFreeze ? '':'hidden'}`}>
                                <p className={`flex justify-center items-center font-bold text-[24px] leading-[36px] mt-[10px]`}>Фріз</p>
                                <p className={`flex justify-center items-center text-[#DC662D] font-bold text-[30px] leading-[36px] mt-[20px]`}>99 грн</p>
                                <p className={`flex justify-center items-center text-center font-normal text-[18px] leading-[22px] mt-[20px]`}>Блокування списання <br/> абонплати у період Вашої <br/> відсутності. Відновлення <br/> безкоштовне</p>
                                <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal text-[16px] leading-[22px] mt-[20px] `}>Детальніше</a>
                            </div>
                            <div className={`flex justify-center items-center `}>
                                <ChevronDown className={`size-[20px] transition-transform + ${isFreeze ? 'mt-[2px] rotate-[180deg] opacity-[0.5]':''}`}/>
                            </div>
                        </div>
                        <div onClick={toggleInsuranceVisibility} className={`${isInsurance ? 'mb-[25px] pb-[5px] rounded-[10px]' : ''} rounded-t-[10px] mt-[-5px] + ${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'}`}>
                            <div className={`${isInsurance ? 'flex items-center justify-center pt-[30px]':'flex items-center ml-[40px] gap-[20px] pt-[23px]'}`}>
                                <Image src={something} alt='speedometer'/>
                                <p className={`${isInsurance ? 'hidden':''} text-[24px] leading-[36px] font-bold`}>Страховка</p>
                            </div>
                            <div className={`${isInsurance ? '':'hidden'}`}>
                                <p className={`flex justify-center items-center font-bold text-[24px] leading-[36px] mt-[10px]`}>Страховка</p>
                                <p className={`flex justify-center items-center text-[#DC662D] font-bold text-[30px] leading-[36px] mt-[20px]`}>100 грн</p>
                                <p className={`flex justify-center items-center text-center font-normal text-[18px] leading-[22px] mt-[20px]`}>Стахуємо на 12 місяців <br/> пошкодження оптичної або <br/> мідної кабельної лінії у вашій <br/>оселі</p>
                                <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal text-[16px] leading-[22px] mt-[20px] `}>Детальніше</a>
                            </div>
                            <div className={`flex justify-center items-center `}>
                                <ChevronDown className={`size-[20px] transition-transform + ${isInsurance ? 'mt-[2px] rotate-[180deg] opacity-[0.5]':''}`}/>
                            </div>
                        </div>
                        <div onClick={toggleMessangerVisibility} className={`${isMessanger ? 'pb-[5px] rounded-[10px]' : ''} rounded-t-[10px] mt-[-5px] + ${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3] bg-white':'shadow-[0_4px_29px_0px_#0B273C]'}`}>
                            <div className={`${isMessanger ? 'flex items-center justify-center pt-[30px]':'flex items-center ml-[40px] gap-[20px] pt-[23px]'}`}>
                                <Image src={messages} alt='speedometer'/>
                                <p className={`${isMessanger ? 'hidden':''} text-[24px] leading-[36px] font-bold`}>Месенджер</p>
                            </div>
                            <div className={`${isMessanger ? '':'hidden'}`}>
                                <p className={`flex justify-center items-center font-bold text-[24px] leading-[36px] mt-[10px]`}>Месенджер</p>
                                <p className={`flex justify-center items-center text-[#DC662D] font-bold text-[30px] leading-[36px] mt-[20px]`}>безкоштовно</p>
                                <p className={`flex justify-center items-center text-center font-normal text-[18px] leading-[22px] mt-[20px]`}>Інформування через зручний <br/> месенджер про вожливі події</p>
                                <a href='#' className={`flex justify-center items-center underline text-[#DC662D] font-normal text-[16px] leading-[22px] mt-[64px] `}>Детальніше</a>
                            </div>
                            <div className={`flex justify-center items-center `}>
                                <ChevronDown className={`size-[20px] transition-transform + ${isMessanger ? 'mt-[2px] rotate-[180deg] opacity-[0.5]':''}`}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalOptions;
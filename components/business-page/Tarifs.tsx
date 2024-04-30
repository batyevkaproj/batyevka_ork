import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import { type CarouselApi } from "@/components/ui/carousel"
// import { useEffect, useState } from 'react';

import WhiteGreyIpCheck from './WhiteGreyIpCheck';
import galochka from '../../public/img/galochka.svg';
import green_galochka from '../../public/img/green_galochka.svg';
import prom_small from '../../public/img/prom_small.svg';
import prom_middle from '../../public/img/prom_middle.svg';
import prom_large from '../../public/img/prom_large.svg';
import Image from 'next/image';
import Heading from '@/components/Heading';
import OpticCableReverse from "./OpticCableReverse";
import React, { useState } from 'react'
import { ChevronDown, FlipVertical } from "lucide-react"
import OpticCable from '@/components/business-page/OpticCable';


const Tarifs = () => {

    const tarifs_simple = [
        {id: 1, price: '799', speed: '300', promotion: false, promotionString: ''},
        {id: 2, price: '1 399', speed: '1000', promotion: true, promotionString: 'з 3 місяця 1 899'},
        {id: 3, price: '2 299', speed: '2500', promotion: false, promotionString: ''}
    ];


    const tarifs_premium = [
        {id: 1, price: '2 699', speed: '300', promotion: true, promotionString: 'Знижка 30% на перший місяць'},
        {id: 2, price: '4 999', speed: '1000', promotion: false, promotionString: 'Знижка 30% на перший місяць'},
        {id: 3, price: '9 999', speed: '2500', promotion: true, promotionString: 'Знижка 30% на перший місяць'}
    ];

    const [isMechanicVisible_1, setMechanicVisible_1] = useState(false);
    const [isMechanicVisible_2, setMechanicVisible_2] = useState(false);
    const [isMechanicVisible_3, setMechanicVisible_3] = useState(false);
    const [isMechanicVisible_4, setMechanicVisible_4] = useState(false);

    const toggleMechanicVisibility_1 = () => {
        setMechanicVisible_1(!isMechanicVisible_1);
    };

    const toggleMechanicVisibility_2 = () => {
        setMechanicVisible_2(!isMechanicVisible_2);
    };

    const toggleMechanicVisibility_3 = () => {
        setMechanicVisible_3(!isMechanicVisible_3);
    };

    const toggleMechanicVisibility_4 = () => {
        setMechanicVisible_4(!isMechanicVisible_4);
    };

    const [isPromotionGPONVisible_1] = useState(false);
    const [isPromotionGPONVisible_2] = useState(true);
    const [isPromotionGPONVisible_3] = useState(true);
    const [isPromotionXGPONVisible_1] = useState(false);
    const [isPromotionXGPONVisible_2] = useState(true);
    const [isPromotionXGPONVisible_3] = useState(true);

    return (
        <>  {/* GPON biggest*/}
            <div className="max-[1247px]:hidden">
                <Heading text={`Бізнес тарифи "GPON"`} text_size={42} /> 
                <div className="max-[2377px]:my-[60px] my-[75px] min-[3644px]:my-[129px] w-[1200px] mr-[68px] min-[2378px]:scale-[1.33] min-[3644px]:scale-[1.96]">
                    <OpticCable/>
                </div>
                <div className="min-[3644px]:text-[51px] min-[3644px]:leading-[51px] text-[34px] leading-[34px] max-[2377px]:text-[26px] max-[2377px]:leading-[26px] font-bold text-white flex items-center justify-center">
                    <h1 className="text-center flex items-center justify-center">Підключаємо ОПТИЧНИМ кабелем</h1>
                </div>
                <div className="pt-[24px] min-[3644px]:pt-[36px] max-[2377px]:pt-[18px] font-bold text-white flex justify-center min-[3644px]:mb-[117px] mb-[78px] max-[2377px]:mb-[60px]">
                    <h1 className="text-center min-[3644px]:text-[48px] min-[3644px]:leading-[66px] text-[32px] leading-[44px] max-[2377px]:text-[24px] max-[2377px]:leading-[36px] align-bottom">Всього за<span className=" text-[#56AABF] px-[6px] min-[3644px]:text-[82px] min-[3644px]:leading-[82px] text-[55px] leading-[50px] max-[2377px]:text-[42px] max-[2377px]:text-[36px]">2 599</span>грн.</h1>
                </div>


                <div className="flex justify-center box-border max-[2377px]:gap-[40px] max-[1600px]:gap-[30px] gap-[52px] min-[3644px]:gap-[78px]">


                {
                tarifs_simple.map((tarif) =>
                    
                    <div key={tarif.id} className="max-[2377px]:h-[573px] max-[2377px]:w-[350px] w-[458px] h-[750px] min-[3644px]:h-[1125px] min-[3644px]:w-[693px] rounded-md bg-[#123853]">
                        <Image src={prom_small} alt='prom_large' className={`self-start absolute ml-[20px] mt-[-20px] min-[2378px]:hidden + ${tarif.promotion ? '' : 'hidden'}`} />
                        <Image src={prom_middle} alt='prom_large' className={`self-start absolute ml-[26px] mt-[-26px] max-[2377px]:hidden min-[3644px]:hidden + ${tarif.promotion ? '' : 'hidden'}`} />
                        <Image src={prom_large} alt='prom_large' className={`self-start absolute ml-[39px] mt-[-39px] max-[3643px]:hidden + ${tarif.promotion ? '' : 'hidden'}`} />
                        <h2 className="text-[#DC662D] font-bold justify-center flex min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[70px]">
                            {tarif.price}
                        </h2>
                        <h2 className="text-[#DC662D] font-normal min-[3644px]:text-[39px] min-[3644px]:leading-[45px] text-[26px] leading-[30px] max-[2377px]:text-[20px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pb-[30px] pb-[20px] max-[2377px]:pb-[15px]">
                            грн/міс
                        </h2>
                        <h2 className={`text-[#8B6CB0] font-semibold min-[3644px]:text-[48px] min-[3644px]:leading-[48px] text-[32px] leading-[32px] max-[2377px]:text-[22px] max-[2377px]:leading-[24px] justify-center flex min-[3644px]:pb-[72px] pb-[48px] max-[2377px]:pb-[40px] + ${isPromotionGPONVisible_1 ? '' : 'min-[3644px]:pb-[120px] pb-[80px] max-[2377px]:pb-[64px]'}`}>
                            <span className={tarif.promotion ? '' : 'hidden'}>{tarif.promotionString}</span>
                        </h2>
                        <h2 className="text-[#56AABF] font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex ">
                            Швидкість
                        </h2>
                        <h2 className="text-white font-bold min-[3644px]:text-[70px] min-[3644px]:leading-[70px] text-[47px] leading-[47px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] justify-center flex min-[3644px]:py-[20px] py-[13px] max-[2377px]:py-[10px]">
                            {tarif.speed} Мегабіт
                        </h2>
                        <div className="flex justify-center text-white min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">
                            <span className="flex mr-[20px] ">
                                <Image src={galochka} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                УКРАЇНА
                            </span>
                            <span className="flex">
                                <Image src={galochka} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                СВІТ
                            </span>
                        </div>
                        <h2 className="text-[#56AABF] font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pb-[73px] pb-[49px] max-[2377px]:pb-[40px] min-[3644px]:pt-[20px] pt-[13px] max-[2377px]:pt-[10px]">
                            рівнозначна
                        </h2>
                        <div className="flex justify-center min-[3644px]:mb-[60px] mb-[40px] max-[2377px]:mb-[30px]">
                            <WhiteGreyIpCheck />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#56AABF] mx-[32px] text-white rounded-full min-[3644px]:h-[118px] min-[3644px]:w-[531px] h-[78px] w-[351px] max-[2377px]:h-[60px] max-[2377px]:w-[270px] min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                        </div>
                    </div>
                  )
                }
                </div>
            </div>

            {/*GPON middle */}
            <div className="min-[1248px]:hidden max-[823px]:hidden">
                <Heading text={`Бізнес тарифи "GPON"`} text_size={42} />
                <div className="my-[60px] mr-[68px]">
                    <OpticCable/>
                </div>
                <div className="text-[26px] leading-[26px] font-bold text-white flex items-center justify-center">
                    <h1 className="text-center w-[913px] flex items-center justify-center">Підключаємо ОПТИЧНИМ кабелем</h1>
                </div>
                <div className=" text-[24px] leading-[36px] font-bold text-white flex justify-center pt-[18px]">
                    <h1 className="text-center text-[24px] align-bottom">Всього за<span className=" text-[#56AABF] px-[10px] text-[42px]">2 599</span>грн</h1>
                </div>

                <div className="flex justify-center box-border pt-[40px] mx-[35px]">
                <Carousel className="w-[760px]" opts={{ loop: false, slidesToScroll : 2 }}>
                    <CarouselContent className="-ml-1" >
                        <CarouselItem key={1} className="basis-1/2 flex justify-between items-center ">
                            <div className="p-1">
                                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853]">
                                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionGPONVisible_1 ? '' : 'hidden'}`} />
                                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                                            799 
                                        </h2>
                                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                                            грн/міс
                                        </h2>
                                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionGPONVisible_1 ? '' : 'pb-[64px]'}`}>
                                            <span className={isPromotionGPONVisible_1 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                                        </h2>
                                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                                            Швидкість
                                        </h2>
                                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                                            300 Мегабіт
                                        </h2>
                                        <div className="flex justify-center text-white text-[18px]">
                                            <span className="flex mr-[20px] ">
                                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                                УКРАЇНА
                                            </span>
                                            <span className="flex ml-1.5">
                                                <Image src={galochka} alt="galochka" className="mr-2" />
                                                СВІТ
                                            </span>
                                        </div>
                                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[40px]">
                                            рівнозначна
                                        </h2>
                                        <div className="flex justify-center mb-[30px]">
                                            <WhiteGreyIpCheck />
                                        </div>
                                        <div className="flex justify-center">
                                            <button className="bg-[#56AABF] mx-[32px] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </CarouselItem>
                        <CarouselItem key={2} className="basis-1/2 flex justify-between items-center">
                            <div className="p-1">
                                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853]">
                                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionGPONVisible_2 ? '' : 'hidden'}`} />
                                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex pt-[60px] leading-[70px]">
                                            1 399
                                        </h2>
                                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                                            грн/міс
                                        </h2>
                                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionGPONVisible_2 ? '' : 'pb-[64px]'}`}>
                                            <span className={isPromotionGPONVisible_2 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                                        </h2>
                                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                                            Швидкість
                                        </h2>
                                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                                            1000 Мегабіт
                                        </h2>
                                        <div className="flex justify-center text-white text-[18px]">
                                            <span className="flex mr-[20px] ">
                                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                                УКРАЇНА
                                            </span>
                                            <span className="flex ml-1.5">
                                                <Image src={galochka} alt="galochka" className="mr-2" />
                                                СВІТ
                                            </span>
                                        </div>
                                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[40px]">
                                            рівнозначна
                                        </h2>
                                        <div className="flex justify-center mb-[30px]">
                                            <WhiteGreyIpCheck />
                                        </div>
                                        <div className="flex justify-center">
                                            <button className="bg-[#56AABF] mx-[32px] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                                        </div>                                 
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={3} className="basis-1/2 flex justify-between items-center ">
                            <div className="p-1">
                                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853]">
                                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionGPONVisible_3 ? '' : 'hidden'}`} />

                                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                                            2 299
                                        </h2>
                                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                                            грн/міс
                                        </h2>
                                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionGPONVisible_3 ? '' : 'pb-[64px]'}`}>
                                            <span className={isPromotionGPONVisible_3 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                                        </h2>
                                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                                            Швидкість
                                        </h2>
                                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                                            2500 Мегабіт
                                        </h2>
                                        <div className="flex justify-center text-white text-[18px]">
                                            <span className="flex mr-[20px] ">
                                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                                УКРАЇНА
                                            </span>
                                            <span className="flex ml-1.5">
                                                <Image src={galochka} alt="galochka" className="mr-2" />
                                                СВІТ
                                            </span>
                                        </div>
                                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[40px]">
                                            рівнозначна
                                        </h2>
                                        <div className="flex justify-center mb-[30px]">
                                            <WhiteGreyIpCheck />
                                        </div>
                                        <div className="flex justify-center">
                                            <button className="bg-[#56AABF] mx-[32px] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="ml-[48px] bg-[#3C7199] border-[#3C7199] text-white"/>
                    <CarouselNext className="mr-[44px] bg-[#3C7199] border-[#3C7199] text-white"/>
                </Carousel>
                </div>
            </div>

            {/*GPON mobile*/}
            <div className="min-[824px]:hidden mt-[30px]">
                <Heading text={`Бізнес тарифи "GPON"`} text_size={24} />
                <div className="mt-[15px] mb-[15px] mr-[68px]">
                    <OpticCable/>
                </div>
                
                <div className="text-[16px] leading-[22px] font-bold text-white flex items-center justify-center mx-[20px]">
                    <h1 className="text-center w-[913px] flex items-center justify-center">Підключаємо ОПТИЧНИМ кабелем</h1>
                </div>
                <div className="text-[16px] leading-[22px] font-bold text-white flex justify-center mt-[5px] mx-[20px]">
                    <h1 className="text-center align-bottom">Всього за<span className=" text-[#56AABF] leading-[22px] px-[6px] text-[32px]">2 599</span>грн</h1>
                </div>

                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                    <div className="h-[573px] w-[350px] mx-[20px] rounded-md bg-[#123853] ">
                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionGPONVisible_1 ? '' : 'hidden'}`} />

                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            799
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                            грн/міс
                        </h2>
                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionGPONVisible_1 ? '' : 'pb-[64px]'}`}>
                            <span className={isPromotionGPONVisible_1 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                        </h2>
                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                            300 Мегабіт
                        </h2>
                        <div className="flex justify-center text-white text-[18px]">
                            <span className="flex mr-[20px] ">
                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                УКРАЇНА
                            </span>
                            <span className="flex ml-1.5">
                                <Image src={galochka} alt="galochka" className="mr-2" />
                                СВІТ
                            </span>
                        </div>
                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[40px]">
                            рівнозначна
                        </h2>
                        <div className="flex justify-center mb-[30px]">
                            <WhiteGreyIpCheck />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#56AABF] mx-[32px] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                    <div className="h-[573px] w-[350px] mx-[20px] rounded-md bg-[#123853]">
                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionGPONVisible_2 ? '' : 'hidden'}`} />

                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex pt-[60px] leading-[70px]">
                            1 399
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                            грн/міс
                        </h2>
                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionGPONVisible_2 ? '' : 'pb-[64px]'}`}>
                            <span className={isPromotionGPONVisible_2 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                        </h2>
                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                            1000 Мегабіт
                        </h2>
                        <div className="flex justify-center text-white text-[18px]">
                            <span className="flex mr-[20px] ">
                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                УКРАЇНА
                            </span>
                            <span className="flex ml-1.5">
                                <Image src={galochka} alt="galochka" className="mr-2" />
                                СВІТ
                            </span>
                        </div>
                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[40px]">
                            рівнозначна
                        </h2>
                        <div className="flex justify-center mb-[30px]">
                            <WhiteGreyIpCheck />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#56AABF] mx-[32px] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                        </div>
                        
                    </div>
                </div>
                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                    <div className="h-[573px] w-[350px] mx-[20px] rounded-md bg-[#123853]">
                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionGPONVisible_3 ? '' : 'hidden'}`} />

                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            2 299
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                            грн/міс
                        </h2>
                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionGPONVisible_3 ? '' : 'pb-[64px]'}`}>
                            <span className={isPromotionGPONVisible_3 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                        </h2>
                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                            2500 Мегабіт
                        </h2>
                        <div className="flex justify-center text-white text-[18px]">
                            <span className="flex mr-[20px] ">
                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                УКРАЇНА
                            </span>
                            <span className="flex ml-1.5">
                                <Image src={galochka} alt="galochka" className="mr-2" />
                                СВІТ
                            </span>
                        </div>
                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[40px]">
                            рівнозначна
                        </h2>
                        <div className="flex justify-center mb-[30px]">
                            <WhiteGreyIpCheck />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#56AABF] mx-[32px] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*XG-GPON biggest */}
            <div className="max-[1247px]:hidden">
                <Heading text={`Бизнес тарифы "XG-PON"`} text_size={42}/>
                <div className="max-[2377px]:my-[60px] my-[75px] min-[3644px]:my-[129px] ml-[45vw]">
                    <OpticCableReverse/>
                </div>
                <div className="min-[3644px]:text-[51px] min-[3644px]:leading-[51px] text-[34px] leading-[34px] max-[2377px]:text-[26px] max-[2377px]:leading-[26px] font-bold text-white flex items-center justify-center">
                    <h1 className="text-center flex items-center justify-center">Підключаємо виділеним ОПТИЧНИМ кабелем із точки обміну трафіком</h1>
                </div>
                <div className="pt-[24px] min-[3644px]:pt-[36px] max-[2377px]:pt-[18px] font-bold text-white flex justify-center min-[3644px]:mb-[117px] mb-[78px] max-[2377px]:mb-[60px]">
                    <h1 className="text-center min-[3644px]:text-[48px] min-[3644px]:leading-[66px] text-[32px] leading-[44px] max-[2377px]:text-[24px] max-[2377px]:leading-[36px] align-bottom">Всього за<span className=" text-[#56AABF] px-[6px] min-[3644px]:text-[82px] min-[3644px]:leading-[82px] text-[55px] leading-[50px] max-[2377px]:text-[42px] max-[2377px]:text-[36px]">14 99</span>грн.</h1>
                </div>
                <div className="flex justify-center box-border max-[2377px]:gap-[40px] max-[1600px]:gap-[30px] gap-[52px] min-[3644px]:gap-[78px]">
                    <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                        <div className="max-[2377px]:h-[573px] max-[2377px]:w-[350px] w-[458px] h-[750px]  min-[3644px]:h-[1125px] min-[3644px]:w-[693px] rounded-md bg-[#123853]">
                            <Image src={prom_small} alt='prom_large' className={`self-start absolute ml-[20px] mt-[-20px] min-[2378px]:hidden + ${isPromotionXGPONVisible_1 ? '' : 'hidden'}`} />
                            <Image src={prom_middle} alt='prom_large' className={`self-start absolute ml-[26px] mt-[-26px] max-[2377px]:hidden min-[3644px]:hidden + ${isPromotionXGPONVisible_1 ? '' : 'hidden'}`} />
                            <Image src={prom_large} alt='prom_large' className={`self-start absolute ml-[39px] mt-[-39px] max-[3643px]:hidden + ${isPromotionXGPONVisible_1 ? '' : 'hidden'}`} />
                            <h2 className="text-[#DC662D] font-bold justify-center flex min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[70px]">
                                2 699
                            </h2>
                            <h2 className="text-[#DC662D] font-normal min-[3644px]:text-[39px] min-[3644px]:leading-[45px] text-[26px] leading-[30px] max-[2377px]:text-[20px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pb-[30px] pb-[20px] max-[2377px]:pb-[15px]">
                                грн/міс
                            </h2>
                            <h2 className={`text-[#8B6CB0] font-semibold min-[3644px]:text-[48px] min-[3644px]:leading-[48px] text-[32px] leading-[32px] max-[2377px]:text-[22px] max-[2377px]:leading-[24px] justify-center flex min-[3644px]:pb-[72px] pb-[48px] max-[2377px]:pb-[40px] + ${isPromotionXGPONVisible_1 ? '' : 'min-[3644px]:pb-[120px] pb-[80px] max-[2377px]:pb-[64px]'}`}>
                                <span className={isPromotionXGPONVisible_1 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                            </h2>
                            <h2 className="text-[#56AABF] font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex ">
                                Швидкість
                            </h2>
                            <h2 className="text-white font-bold min-[3644px]:text-[70px] min-[3644px]:leading-[70px] text-[47px] leading-[47px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] justify-center flex min-[3644px]:py-[20px] py-[13px] max-[2377px]:py-[10px]">
                                300 Мегабіт
                            </h2>
                            <div className="flex justify-center text-white min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">
                                <span className="flex mr-[20px] ">
                                    <Image src={galochka} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    УКРАЇНА
                                </span>
                                <span className="flex">
                                    <Image src={galochka} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    СВІТ
                                </span>
                            </div>
                            <h2 className="text-[#56AABF] font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pb-[73px] pb-[49px] max-[2377px]:pb-[40px] min-[3644px]:pt-[20px] pt-[13px] max-[2377px]:pt-[10px]">
                                рівнозначна
                            </h2>
                            <div className="flex justify-center min-[3644px]:mb-[60px] mb-[40px] max-[2377px]:mb-[30px]">
                                <WhiteGreyIpCheck />
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-[#56AABF] text-white rounded-full min-[3644px]:h-[118px] min-[3644px]:w-[531px] h-[78px] w-[351px] max-[2377px]:h-[60px] max-[2377px]:w-[270px] mx-[32px] min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                        <div className="max-[2377px]:h-[573px] max-[2377px]:w-[350px] w-[458px] h-[750px]  min-[3644px]:h-[1125px] min-[3644px]:w-[693px] rounded-md bg-[#123853]">
                            <Image src={prom_small} alt='prom_large' className={`self-start absolute ml-[20px] mt-[-20px] min-[2378px]:hidden + ${isPromotionXGPONVisible_2 ? '' : 'hidden'}`} />
                            <Image src={prom_middle} alt='prom_large' className={`self-start absolute ml-[26px] mt-[-26px] max-[2377px]:hidden min-[3644px]:hidden + ${isPromotionXGPONVisible_2 ? '' : 'hidden'}`} />
                            <Image src={prom_large} alt='prom_large' className={`self-start absolute ml-[39px] mt-[-39px] max-[3643px]:hidden + ${isPromotionXGPONVisible_2 ? '' : 'hidden'}`} />
                            <h2 className="text-[#DC662D]  font-bold justify-center flex min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[70px]">
                                4 999
                            </h2>
                            <h2 className="text-[#DC662D] font-normal min-[3644px]:text-[39px] min-[3644px]:leading-[45px] text-[26px] leading-[30px] max-[2377px]:text-[20px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pb-[30px] pb-[20px] max-[2377px]:pb-[15px]">
                                грн/міс
                            </h2>
                            <h2 className={`text-[#8B6CB0] font-semibold min-[3644px]:text-[48px] min-[3644px]:leading-[48px] text-[32px] leading-[32px] max-[2377px]:text-[22px] max-[2377px]:leading-[24px] justify-center flex min-[3644px]:pb-[72px] pb-[48px] max-[2377px]:pb-[40px] + ${isPromotionXGPONVisible_2 ? '' : 'min-[3644px]:pb-[120px] pb-[80px] max-[2377px]:pb-[64px]'}`}>
                                <span className={isPromotionXGPONVisible_2 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                            </h2>
                            <h2 className="text-[#56AABF] font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex">
                                Швидкість
                            </h2>
                            <h2 className="text-white  font-bold min-[3644px]:text-[70px] min-[3644px]:leading-[70px] text-[47px] leading-[47px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] justify-center flex min-[3644px]:py-[20px] py-[13px] max-[2377px]:py-[10px]">
                                1000 Мегабіт
                            </h2>
                            <div className="flex justify-center text-white min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">
                                <span className="flex mr-[20px] ">
                                    <Image src={galochka} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    УКРАЇНА
                                </span>
                                <span className="flex">
                                    <Image src={galochka} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    СВІТ
                                </span>
                            </div>
                            <h2 className="text-[#56AABF] font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pb-[73px] pb-[49px] max-[2377px]:pb-[40px] min-[3644px]:pt-[20px] pt-[13px] max-[2377px]:pt-[10px]">
                                рівнозначна
                            </h2>
                            <div className="flex justify-center min-[3644px]:mb-[60px] mb-[40px] max-[2377px]:mb-[30px]">
                                <WhiteGreyIpCheck />
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-[#56AABF] text-white rounded-full min-[3644px]:h-[118px] min-[3644px]:w-[531px] h-[78px] w-[351px] max-[2377px]:h-[60px] max-[2377px]:w-[270px] mx-[32px] min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                        <div className="max-[2377px]:h-[573px] max-[2377px]:w-[350px] w-[458px] h-[750px]  min-[3644px]:h-[1125px] min-[3644px]:w-[693px] rounded-md bg-[#123853]">
                            <Image src={prom_small} alt='prom_large' className={`self-start absolute ml-[20px] mt-[-20px] min-[2378px]:hidden + ${isPromotionXGPONVisible_3 ? '' : 'hidden'}`} />
                            <Image src={prom_middle} alt='prom_large' className={`self-start absolute ml-[26px] mt-[-26px] max-[2377px]:hidden min-[3644px]:hidden + ${isPromotionXGPONVisible_3 ? '' : 'hidden'}`} />
                            <Image src={prom_large} alt='prom_large' className={`self-start absolute ml-[39px] mt-[-39px] max-[3643px]:hidden + ${isPromotionXGPONVisible_3 ? '' : 'hidden'}`} />
                            <h2 className="text-[#DC662D] font-bold justify-center flex min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[70px]">
                                9 999
                            </h2>
                            <h2 className="text-[#DC662D] font-normal min-[3644px]:text-[39px] min-[3644px]:leading-[45px] text-[26px] leading-[30px] max-[2377px]:text-[20px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pb-[30px] pb-[20px] max-[2377px]:pb-[15px]">
                                грн/міс
                            </h2>
                            <h2 className={`text-[#8B6CB0] font-semibold min-[3644px]:text-[48px] min-[3644px]:leading-[48px] text-[32px] leading-[32px] max-[2377px]:text-[22px] max-[2377px]:leading-[24px] justify-center flex min-[3644px]:pb-[72px] pb-[48px] max-[2377px]:pb-[40px] + ${isPromotionXGPONVisible_3 ? '' : 'min-[3644px]:pb-[120px] pb-[80px] max-[2377px]:pb-[64px]'}`}>
                                <span className={isPromotionXGPONVisible_3 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                            </h2>
                            <h2 className="text-[#56AABF] font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex">
                                Швидкість
                            </h2>
                            <h2 className="text-white  font-bold min-[3644px]:text-[70px] min-[3644px]:leading-[70px] text-[47px] leading-[47px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] justify-center flex min-[3644px]:py-[20px] py-[13px] max-[2377px]:py-[10px]">
                                2500 Мегабіт
                            </h2>
                            <div className="flex justify-center text-white min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">
                                <span className="flex mr-[20px] ">
                                    <Image src={galochka} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    УКРАЇНА
                                </span>
                                <span className="flex">
                                    <Image src={galochka} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    СВІТ
                                </span>
                            </div>
                            <h2 className="text-[#56AABF] font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pb-[73px] pb-[49px] max-[2377px]:pb-[40px] min-[3644px]:pt-[20px] pt-[13px] max-[2377px]:pt-[10px]">
                                рівнозначна
                            </h2>
                            <div className="flex justify-center min-[3644px]:mb-[60px] mb-[40px] max-[2377px]:mb-[30px]">
                                <WhiteGreyIpCheck />
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-[#56AABF] text-white rounded-full min-[3644px]:h-[118px] min-[3644px]:w-[531px] h-[78px] w-[351px] max-[2377px]:h-[60px] max-[2377px]:w-[270px] mx-[32px] min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*XG-GPON middle */}
            <div className="min-[1248px]:hidden max-[823px]:hidden mt-[-24px]">
            <Heading text={`Бізнес тарифи "XG-PON"`} text_size={42} />
                <div className="my-[60px] scale-x-[-1] ml-[68px]">
                    <OpticCable/>
                </div>
                <div className="text-[26px] leading-[32px] font-bold text-white flex items-center justify-center mx-[147px]">
                    <h1 className="text-center w-[913px] flex items-center justify-center">Підключаємо виділеним ОПТИЧНИМ кабелем із точки обміну трафіком</h1>
                </div>
                <div className="text-[24px] leading-[36px] font-bold text-white flex justify-center pt-[18px]">
                    <h1 className="text-center text-[24px] align-bottom">Всього за<span className=" text-[#56AABF] px-[10px] text-[42px]">14 999</span>грн</h1>
                </div>

                <div className="flex justify-center box-border pt-[40px] mx-[35px]">
                <Carousel className="w-[760px]" opts={{loop :false, slidesToScroll : 2}}>
                    <CarouselContent className="-ml-1" >
                        <CarouselItem key={1} className="basis-1/2 flex justify-between items-center ">
                            <div className="p-1">
                                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853]">
                                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionXGPONVisible_1 ? '' : 'hidden'}`} />
                                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                                            1 299
                                        </h2>
                                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                                            грн/міс
                                        </h2>
                                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionXGPONVisible_1 ? '' : 'pb-[64px]'}`}>
                                            <span className={isPromotionXGPONVisible_1 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                                        </h2>
                                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                                            Швидкість
                                        </h2>
                                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                                            2000 Мегабіт
                                        </h2>
                                        <div className="flex justify-center text-white text-[18px]">
                                            <span className="flex mr-[20px] ">
                                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                                УКРАЇНА
                                            </span>
                                            <span className="flex ml-1.5">
                                                <Image src={galochka} alt="galochka" className="mr-2" />
                                                СВІТ
                                            </span>
                                        </div>
                                        <h2 className="text-[#56AABF]  font-semibold text-[18px] justify-center flex pb-[40px]">
                                            рівнозначна
                                        </h2>
                                        <div className="flex justify-center mb-[30px]">
                                            <WhiteGreyIpCheck />
                                        </div>
                                        <div className="flex justify-center">
                                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[270px] mx-[32px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </CarouselItem>
                        <CarouselItem key={2} className="basis-1/2 flex justify-between items-center">
                            <div className="p-1">
                                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853]">
                                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionXGPONVisible_2 ? '' : 'hidden'}`} />
                                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                                            1 699
                                        </h2>
                                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                                            грн/міс
                                        </h2>
                                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionXGPONVisible_2 ? '' : 'pb-[64px]'}`}>
                                            <span className={isPromotionXGPONVisible_2 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                                        </h2>
                                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                                            Швидкість
                                        </h2>
                                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                                            2000 Мегабіт
                                        </h2>
                                        <div className="flex justify-center text-white text-[18px]">
                                            <span className="flex mr-[20px] ">
                                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                                УКРАЇНА
                                            </span>
                                            <span className="flex ml-1.5">
                                                <Image src={galochka} alt="galochka" className="mr-2" />
                                                СВІТ
                                            </span>
                                        </div>
                                        <h2 className="text-[#56AABF]  font-semibold text-[18px] justify-center flex pb-[40px]">
                                            рівнозначна
                                        </h2>
                                        <div className="flex justify-center mb-[30px]">
                                            <WhiteGreyIpCheck />
                                        </div>
                                        <div className="flex justify-center">
                                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[270px] mx-[32px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem key={3} className="basis-1/2 flex justify-between items-center ">
                            <div className="p-2">
                                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853]">
                                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionXGPONVisible_3 ? '' : 'hidden'}`} />
                                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                                            3 999
                                        </h2>
                                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                                            грн/міс
                                        </h2>
                                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionXGPONVisible_3 ? '' : 'pb-[64px]'}`}>
                                            <span className={isPromotionXGPONVisible_3 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                                        </h2>
                                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                                            Швидкість
                                        </h2>
                                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                                            2000 Мегабіт
                                        </h2>
                                        <div className="flex justify-center text-white text-[18px]">
                                            <span className="flex mr-[20px] ">
                                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                                УКРАЇНА
                                            </span>
                                            <span className="flex ml-1.5">
                                                <Image src={galochka} alt="galochka" className="mr-2" />
                                                СВІТ
                                            </span>
                                        </div>
                                        <h2 className="text-[#56AABF]  font-semibold text-[18px] justify-center flex pb-[40px]">
                                            рівнозначна
                                        </h2>
                                        <div className="flex justify-center mb-[30px]">
                                            <WhiteGreyIpCheck />
                                        </div>
                                        <div className="flex justify-center">
                                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[270px] mx-[32px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="ml-[48px] bg-[#3C7199] border-[#3C7199] text-white"/>
                    <CarouselNext className="mr-[44px] bg-[#3C7199] border-[#3C7199] text-white"/>
                </Carousel>
                </div>
            </div>

            {/* XG-GPON mobile */}
            <div className="min-[824px]:hidden">
                <Heading text={`Бизнес тарифы "XG-PON"`} text_size={24}/>
                <div className="mt-[15px] mb-[15px] scale-x-[-1] ml-[68px]">
                    <OpticCable/>
                </div>
                <div className="text-[16px] leading-[22px] font-bold text-white flex items-center justify-center mx-[20px]">
                    <h1 className="text-center w-[913px] flex items-center justify-center">Підключаємо виділеним ОПТИЧНИМ кабелем із точки обміну трафіком</h1>
                </div>
                <div className="text-[16px] leading-[22px] font-bold text-white flex justify-center mt-[5px] mx-[20px]">
                    <h1 className="text-center align-bottom">всього за<span className=" text-[#56AABF] leading-[22px] px-[6px] text-[32px]">14 999</span>грн.</h1>
                </div>
                
                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                    <div className="h-[573px] w-[350px] mx-[20px] rounded-md bg-[#123853]">
                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionXGPONVisible_1 ? '' : 'hidden'}`} />

                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            1 299
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                            грн/міс
                        </h2>
                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionXGPONVisible_1 ? '' : 'pb-[64px]'}`}>
                            <span className={isPromotionXGPONVisible_1 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                        </h2>
                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                            2000 Мегабіт
                        </h2>
                        <div className="flex justify-center text-white text-[18px]">
                            <span className="flex mr-[20px] ">
                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                УКРАЇНА
                            </span>
                            <span className="flex ml-1.5">
                                <Image src={galochka} alt="galochka" className="mr-2" />
                                СВІТ
                            </span>
                        </div>
                        <h2 className="text-[#56AABF]  font-semibold text-[18px] justify-center flex pb-[40px]">
                            рівнозначна
                        </h2>
                        <div className="flex justify-center mb-[30px]">
                            <WhiteGreyIpCheck />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[270px] mx-[32px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                    <div className="h-[573px] w-[350px] mx-[20px] rounded-md bg-[#123853]">
                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionXGPONVisible_2 ? '' : 'hidden'}`} />

                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            1 699
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                            грн/міс
                        </h2>
                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionXGPONVisible_2 ? '' : 'pb-[64px]'}`}>
                            <span className={isPromotionXGPONVisible_2 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                        </h2>
                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                            2000 Мегабіт
                        </h2>
                        <div className="flex justify-center text-white text-[18px]">
                            <span className="flex mr-[20px] ">
                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                УКРАЇНА
                            </span>
                            <span className="flex ml-1.5">
                                <Image src={galochka} alt="galochka" className="mr-2" />
                                СВІТ
                            </span>
                        </div>
                        <h2 className="text-[#56AABF]  font-semibold text-[18px] justify-center flex pb-[40px]">
                            рівнозначна
                        </h2>
                        <div className="flex justify-center mb-[30px]">
                            <WhiteGreyIpCheck />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[270px] mx-[32px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                    <div className="h-[573px] w-[350px] mx-[20px] rounded-md bg-[#123853]">
                        <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${isPromotionXGPONVisible_3 ? '' : 'hidden'}`} />

                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            3 999
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                            грн/міс
                        </h2>
                        <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${isPromotionXGPONVisible_3 ? '' : 'pb-[64px]'}`}>
                            <span className={isPromotionXGPONVisible_3 ? '' : 'hidden'}>з 3 місяця 799 грн.</span>
                        </h2>
                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                            2000 Мегабіт
                        </h2>
                        <div className="flex justify-center text-white text-[18px]">
                            <span className="flex mr-[20px] ">
                                <Image src={galochka} alt="galochka" className="mr-2 " />
                                УКРАЇНА
                            </span>
                            <span className="flex ml-1.5">
                                <Image src={galochka} alt="galochka" className="mr-2" />
                                СВІТ
                            </span>
                        </div>
                        <h2 className="text-[#56AABF]  font-semibold text-[18px] justify-center flex pb-[40px]">
                            рівнозначна
                        </h2>
                        <div className="flex justify-center mb-[30px]">
                            <WhiteGreyIpCheck />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[270px] mx-[32px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* */}
            <div className={'max-[643px]:hidden mr-[170px] ml-[170px] max-[2377px]:mr-[120px] max-[2377px]:ml-[120px] max-[1600px]:mr-[85px] max-[1600px]:ml-[85px] max-[1247px]:mr-[67px] max-[1247px]:ml-[67px] max-[932px]:mr-[35px] max-[932px]:ml-[35px] min-[3644px]:mr-[240px] min-[3644px]:ml-[240px] max-[1247px]:mt-[-48px]'}>
                <Heading text="Механіка тарифів та розрахунків" text_size={42}/>
                <div className="min-[2377px]:grid min-[2377px]:grid-cols-2 gap-[40px] min-[3644px]:gap-[60px] font-normal text-white flex flex-col items-center justify-center mt-[52px] max-[2377px]:mt-[40px] min-[3644px]:mt-[78px] mb-[120px] max-[2377px]:leading-[24px] max-[2377px]:text-[16px] leading-[28px] text-[20px] min-[3644px]:leading-[42px] min-[3644px]:text-[30px]">
                    <div className="col-span-1 max-[2377px]:mb-[-38px]">
                        <div className="flex mb-[40px] max-[2377px]:mb-[20px] min-[3644px]:mb-[60px]">
                            <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                            <p>При підключенні, Абоненту за замовчуванням надається внутрішня ІР-адреса. Всі тарифи безлімітні по трафіку Мир та Україна – немає поділу. Швидкість Входу та Виходу однакові.</p>
                        </div>
                        <div className="flex flex mb-[40px] max-[2377px]:mb-[20px] min-[3644px]:mb-[60px]">
                            <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                            <p>Абонентна плата нараховується за календарний місяць та оплачується шляхом передоплати. Для безперервного користування послугою Абонент до 1-го числа кожного місяця вносить на свій особовий рахунок суму в розмірі абонентної плати та всіх замовлених додаткових послуг (рекомендуємо внести гроші за 3 дні до вказаної дати).</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex mb-[40px] max-[2377px]:mb-[20px] min-[3644px]:mb-[60px]">
                            <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                            <p>Якщо Абонент не сплатив більше 40 днів від останнього дня надання послуг, його договір /ликовий рахунок блокується (дія тарифу, акцій, у яких Абонент брав участь, припиняється). Повторна активація договору платна - у розмірі вартості підключення на обраному тарифі.</p>
                        </div>
                        <div className="flex flex mb-[40px] max-[2377px]:mb-[20px] min-[3644px]:mb-[60px]">
                            <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                            <p>Перехід на тариф Інтернет з меншою вартістю – 100 грн. разово тариф змінюється з 1 числа наступного місяця. Перехід на тариф Інтернет із більшою вартістю – 45 грн. разово тариф змінюється з наступного робочого дня з перерахунком абонентної плати. Увімкнення/вимкнення передплати Телебачення від МЕГОГО – безкоштовно.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'min-[644px]:hidden mr-[20px] ml-[20px] mt-[-18px] relative'}>
                <Heading text="Механіка тарифів та розрахунків" text_size={24}/>
                <div className="font-normal text-white flex flex-col items-center justify-center mt-[10px] mb-[20px] leading-[18px] text-[12px]">
                    <div className={"flex mb-[10px]"} onClick={toggleMechanicVisibility_1}>
                        <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                        <p>При підключенні, Абоненту за замовчуванням надається внутрішня ІР-адреса.<span className={isMechanicVisible_1 ? 'hidden' : ''}>..</span>
                        <span className={isMechanicVisible_1 ? '' : 'hidden'}> Всі тарифи безлімітні по трафіку Мир та Україна – немає поділу. Швидкість Входу та Виходу однакові.</span>
                        <ChevronDown className={`inline-flex absolute right-0 h-4 w-4 transition-transform + ${isMechanicVisible_1 ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`}/>
                        </p>
                    </div>
                    <div className="flex mb-[10px]" onClick={toggleMechanicVisibility_2}>
                        <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                        <p>Абонентна плата нараховується за календарний місяць та оплачується шляхом передоплати.<span className={isMechanicVisible_2 ? 'hidden' : ''}>..</span>
                        <span className={isMechanicVisible_2 ? '' : 'hidden'}> Для безперервного користування послугою Абонент до 1-го числа кожного місяця вносить на свій особовий рахунок суму в розмірі абонентної плати та всіх замовлених додаткових послуг (рекомендуємо внести гроші за 3 дні до вказаної дати).</span>
                        <ChevronDown className={`inline-flex absolute right-0 end h-4 w-4 transition-transform + ${isMechanicVisible_2 ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`} />
                        </p>
                    </div>
                    <div className="flex mb-[10px]" onClick={toggleMechanicVisibility_3}>
                        <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                        <p>Якщо Абонент не сплатив більше 40 днів від останнього дня надання послуг, його договір<span className={isMechanicVisible_3 ? 'hidden' : ''}>...</span>
                        <span className={isMechanicVisible_3 ? '' : 'hidden'}>/ликовий рахунок блокується (дія тарифу, акцій, у яких Абонент брав участь, припиняється). Повторна активація договору платна - у розмірі вартості підключення на обраному тарифі.</span>
                        <ChevronDown className={`inline-flex absolute right-0 end h-4 w-4 transition-transform + ${isMechanicVisible_3 ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`} />
                        </p>
                    </div>
                    <div className="flex mb-[10px]" onClick={toggleMechanicVisibility_4}>
                        <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                        <p>Перехід на тариф Інтернет з меншою вартістю – 100 грн. разово тариф змінюється<span className={isMechanicVisible_4 ? 'hidden' : ''}>...</span>
                        <span className={isMechanicVisible_4 ? '' : 'hidden'}> з 1 числа наступного місяця. Перехід на тариф Інтернет із більшою вартістю – 45 грн. разово тариф змінюється з наступного робочого дня з перерахунком абонентної плати. Увімкнення/вимкнення передплати Телебачення від МЕГОГО – безкоштовно.</span>
                        <ChevronDown className={`inline-flex absolute right-0 end h-4 w-4 transition-transform + ${isMechanicVisible_4 ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`}/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tarifs;
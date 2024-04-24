import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import WhiteGreyIpCheck from './WhiteGreyIpCheck';
import galochka from '../../public/img/galochka.svg';
import green_galochka from '../../public/img/green_galochka.svg';
import Image from 'next/image';
import Heading from '@/components/Heading';
import OpticCableReverse from "./OpticCableReverse";
import React, { useState } from 'react'
import { ChevronDown } from "lucide-react"
import OpticCable from '@/components/business-page/OpticCable';

const Tarifs = () => {

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
    return (
        <>  {/* GPON biggest*/}
            <div className="max-[1247px]:hidden">
                <Heading text={`Бізнес тарифи "GPON"`} text_size={42} /> 
                <OpticCable/>
                <div className="text-[26px] font-bold text-white flex items-center justify-center">
                    <h1 className="text-center w-[913px] flex items-center justify-center">Підключаємо ОПТИЧНИМ кабелем</h1>
                </div>
                <div className=" text-[24px] font-bold text-white flex justify-center">
                    <h1 className="text-center text-[24px] align-bottom">Всього за<span className=" text-[#56AABF] px-[6px] text-[42px]">2 599</span>грн</h1>
                </div>


                <div className="flex justify-center box-border pt-[60px]">
                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853] mr-5">
                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            499
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] justify-center flex pb-[72px]">
                            грн/міс
                        </h2>

                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[7px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] justify-center flex pb-[10px]">
                            100 Мегабіт
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
                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Прдключення</button>
                        </div>
                    </div>

                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853] mr-5">
                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            300
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] justify-center flex pb-[72px]">
                            грн/міс
                        </h2>

                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[7px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] justify-center flex pb-[10px]">
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
                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[40px]">
                            рівнозначна
                        </h2>
                        <div className="flex justify-center mb-[30px]">
                            <WhiteGreyIpCheck />
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Прдключення</button>
                        </div>
                    </div>

                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853] mr-5">
                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            1 499
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] justify-center flex pb-[72px]">
                            грн/міс
                        </h2>

                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[7px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] justify-center flex pb-[10px]">
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
                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Прдключення</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*GPON middle */}
            <div className="min-[1248px]:hidden max-[558px]:hidden mt-[90px]">
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
                <Carousel className="w-[760px]">
                    <CarouselContent className="-ml-1">
                        <CarouselItem key={1} className="basis-1/2 flex justify-between items-center ">
                            <div className="p-1">
                                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853]">
                                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                                            499
                                        </h2>
                                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[77px]">
                                            грн/міс
                                        </h2>

                                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                                            Швидкість
                                        </h2>
                                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                                            100 Мегабіт
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
                        <CarouselItem key={2} className="basis-1/2 flex justify-between items-center ">
                            <div className="p-1">
                                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853]">                 
                                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex pt-[60px] leading-[70px]">
                                            699
                                        </h2>
                                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[77px]">
                                            грн/міс
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
                            <div className="p-2">
                                <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853]">
                                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                                            1 499
                                        </h2>
                                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[77px]">
                                            грн/міс
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
                    </CarouselContent>
                    <CarouselPrevious className="ml-[32px]"/>
                    <CarouselNext className="mr-[32px]"/>
                </Carousel>
                </div>
            </div>

            {/*GPON mobile*/}
            <div className="min-[559px]:hidden mt-[52px]">
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
                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            499
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[77px]">
                            грн/міс
                        </h2>

                        <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                            100 Мегабіт
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
                       
                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex pt-[60px] leading-[70px]">
                            699
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[77px]">
                            грн/міс
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
                        <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            1 499
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[77px]">
                            грн/міс
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

            {/*XG-GPON biggest */}
            <div className="max-[1247px]:hidden">
                <Heading text={`Бизнес тарифы "XG-PON"`} text_size={42}/>

                <div className=" text-[26px] font-bold text-white flex items-center justify-center">
                    <h1 className="text-center w-[913px] flex items-center justify-center">Підключаємо виділеним ОПТИЧНИМ кабелем із точки обміну трафіком</h1>
                </div>
                <div className=" text-[24px] font-bold text-white flex justify-center">
                    <h1 className="text-center text-[24px] align-bottom">Всього за<span className=" text-[#56AABF] px-[6px] text-[42px]">14 99</span>грн.</h1>
                </div>


                <div className="flex justify-center box-border pt-[60px]">
                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853] mr-5">
                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            1 299
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] justify-center flex pb-[72px]">
                            грн/міс
                        </h2>

                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[7px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] justify-center flex pb-[10px]">
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
                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]">Прдключення</button>
                        </div>
                    </div>
                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853] mr-5">
                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            1 699
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] justify-center flex pb-[72px]">
                            грн/міс
                        </h2>

                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[7px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] justify-center flex pb-[10px]">
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
                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]">Прдключення</button>
                        </div>
                    </div>
                    <div className="h-[573px] w-[350px] rounded-md bg-[#123853] mr-5">
                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            3 999
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] justify-center flex pb-[72px]">
                            грн/міс
                        </h2>

                        <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[7px]">
                            Швидкість
                        </h2>
                        <h2 className="text-white  font-bold text-[36px] justify-center flex pb-[10px]">
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
                            <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]">Прдключення</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*XG-GPON middle */}
            <div className="min-[1248px]:hidden max-[558px]:hidden">
             
            </div>

            {/* XG-GPON mobile */}
            <div className="min-[559px]:hidden">
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
                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            1 299
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[77px]">
                            грн/міс
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
                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            1 699
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[77px]">
                            грн/міс
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
                        <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                            3 999
                        </h2>
                        <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[77px]">
                            грн/міс
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
            <div className={'max-[558px]:hidden mr-[170px] ml-[170px] max-[2377px]:mr-[120px] max-[2377px]:ml-[120px] max-[1600px]:mr-[85px] max-[1600px]:ml-[85px] max-[1247px]:mr-[67px] max-[1247px]:ml-[67px] max-[932px]:mr-[35px] max-[932px]:ml-[35px] min-[3644px]:mr-[240px] min-[3644px]:ml-[240px]'}>
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
            <div className={'min-[559px]:hidden mr-[20px] ml-[20px] relative'}>
                <Heading text="Механіка тарифів та розрахунків" text_size={24}/>
                <div className="font-normal text-white flex flex-col items-center justify-center mt-[10px] mb-[20px] leading-[18px] text-[12px]">
                    <div className="flex mb-[10px]">
                        <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                        <p>При підключенні, Абоненту за замовчуванням надається внутрішня ІР-адреса.<span className={isMechanicVisible_1 ? 'hidden' : ''}>..</span>
                        <span className={isMechanicVisible_1 ? '' : 'hidden'}> Всі тарифи безлімітні по трафіку Мир та Україна – немає поділу. Швидкість Входу та Виходу однакові.</span>
                        <ChevronDown className={`inline-flex absolute right-0 h-4 w-4 transition-transform + ${isMechanicVisible_1 ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`} onClick={toggleMechanicVisibility_1}/>
                        </p>
                    </div>
                    <div className="flex mb-[10px]">
                        <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                        <p>Абонентна плата нараховується за календарний місяць та оплачується шляхом передоплати.<span className={isMechanicVisible_2 ? 'hidden' : ''}>..</span>
                        <span className={isMechanicVisible_2 ? '' : 'hidden'}> Для безперервного користування послугою Абонент до 1-го числа кожного місяця вносить на свій особовий рахунок суму в розмірі абонентної плати та всіх замовлених додаткових послуг (рекомендуємо внести гроші за 3 дні до вказаної дати).</span>
                        <ChevronDown className={`inline-flex absolute right-0 end h-4 w-4 transition-transform + ${isMechanicVisible_2 ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`} onClick={toggleMechanicVisibility_2}/>
                        </p>
                    </div>
                    <div className="flex mb-[10px]">
                        <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                        <p>Якщо Абонент не сплатив більше 40 днів від останнього дня надання послуг, його договір<span className={isMechanicVisible_3 ? 'hidden' : ''}>...</span>
                        <span className={isMechanicVisible_3 ? '' : 'hidden'}>/ликовий рахунок блокується (дія тарифу, акцій, у яких Абонент брав участь, припиняється). Повторна активація договору платна - у розмірі вартості підключення на обраному тарифі.</span>
                        <ChevronDown className={`inline-flex absolute right-0 end h-4 w-4 transition-transform + ${isMechanicVisible_3 ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`} onClick={toggleMechanicVisibility_3}/>
                        </p>
                    </div>
                    <div className="flex mb-[10px]">
                        <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                        <p>Перехід на тариф Інтернет з меншою вартістю – 100 грн. разово тариф змінюється<span className={isMechanicVisible_4 ? 'hidden' : ''}>...</span>
                        <span className={isMechanicVisible_4 ? '' : 'hidden'}> з 1 числа наступного місяця. Перехід на тариф Інтернет із більшою вартістю – 45 грн. разово тариф змінюється з наступного робочого дня з перерахунком абонентної плати. Увімкнення/вимкнення передплати Телебачення від МЕГОГО – безкоштовно.</span>
                        <ChevronDown className={`inline-flex absolute right-0 end h-4 w-4 transition-transform + ${isMechanicVisible_4 ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`} onClick={toggleMechanicVisibility_4}/>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tarifs;
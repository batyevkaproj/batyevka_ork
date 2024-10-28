import Image from 'next/image';
import React, { useState } from 'react';
import type { ThemeProps } from '@/types/Theme';

import { ChevronDown } from "lucide-react";
import green_galochka from '../../public/img/green_galochka.svg';

const TarifsCountInfo = ( {theme}: ThemeProps ) => {
    const [isMechanicVisible_1, setMechanicVisible_1] = useState<boolean>(false);
    const [isMechanicVisible_2, setMechanicVisible_2] = useState<boolean>(false);
    const [isMechanicVisible_3, setMechanicVisible_3] = useState<boolean>(false);
    const [isMechanicVisible_4, setMechanicVisible_4] = useState<boolean>(false);
    

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
        <div className={`${theme=='white' ? 'text-[#5F6061]' : 'text-white' }`}>
            <div className={`max-[563px]:hidden mr-[170px] ml-[170px] max-[2377px]:mr-[120px] max-[2377px]:ml-[120px] max-[1600px]:mr-[85px] max-[1600px]:ml-[85px] max-[1247px]:mr-[67px] max-[1247px]:ml-[67px] max-[932px]:mr-[35px] max-[932px]:ml-[35px] min-[3644px]:mr-[240px] min-[3644px]:ml-[240px] max-[1247px]:mt-[-48px]`}>
                <h1 className={`mx-auto font-bold min-[3644px]:mt-[180px] mt-[120px] max-[2377px]:mt-[90px] text-center flex items-center justify-center text-[50px] leading-[62px] max-[2377px]:text-[42px] max-[2377px]:leading-[50px] min-[3644px]:text-[75px] min-[3644px]:leading-[93px] z-[1]`}>Механіка тарифів і розрахунків</h1>
                <div className={` min-[2378px]:grid min-[2378px]:grid-cols-2 gap-[40px] min-[3644px]:gap-[60px] font-normal  flex flex-col items-center justify-center mt-[52px] max-[2377px]:mt-[40px] min-[3644px]:mt-[78px] mb-[120px] max-[2377px]:leading-[24px] max-[2377px]:text-[16px] leading-[28px] text-[20px] min-[3644px]:leading-[42px] min-[3644px]:text-[30px]`}>
                    <div className="min-[2378px]:col-span-1 max-[2377px]:mb-[-38px]">
                        <div className="flex mb-[40px] max-[2377px]:mb-[20px] min-[3644px]:mb-[60px]">
                            <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                            <p>При підключенні, Абоненту за замовчуванням надається внутрішня ІР-адреса. Всі тарифи безлімітні по трафіку Мир та Україна – немає поділу. Швидкість Входу та Виходу однакові.</p>
                        </div>
                        <div className="flex mb-[40px] max-[2377px]:mb-[20px] min-[3644px]:mb-[60px]">
                            <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                            <p>Абонентна плата нараховується за календарний місяць та оплачується шляхом передоплати. Для безперервного користування послугою Абонент до 1-го числа кожного місяця вносить на свій особовий рахунок суму в розмірі абонентної плати та всіх замовлених додаткових послуг (рекомендуємо внести гроші за 3 дні до вказаної дати).</p>
                        </div>
                    </div>
                    <div className="min-[2378px]:col-span-1">
                        <div className="flex mb-[40px] max-[2377px]:mb-[20px] min-[3644px]:mb-[60px]">
                            <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                            <p>Якщо Абонент не сплатив більше 40 днів від останнього дня надання послуг, його договір /ликовий рахунок блокується (дія тарифу, акцій, у яких Абонент брав участь, припиняється). Повторна активація договору платна - у розмірі вартості підключення на обраному тарифі.</p>
                        </div>
                        <div className="flex mb-[40px] max-[2377px]:mb-[20px] min-[3644px]:mb-[60px]">
                            <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                            <p>Перехід на тариф Інтернет з меншою вартістю – 100 грн. разово тариф змінюється з 1 числа наступного місяця. Перехід на тариф Інтернет із більшою вартістю – 45 грн. разово тариф змінюється з наступного робочого дня з перерахунком абонентної плати. Увімкнення/вимкнення передплати Телебачення від МЕГОГО – безкоштовно.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'min-[564px]:hidden mr-[20px] ml-[20px] mt-[20px] relative'}>
                <h1 className={`mx-auto font-bold text-center flex items-center justify-center text-[24px] leading-[30px] z-[1]`}>Механіка тарифів і розрахунків</h1>
                <div className="font-normal flex flex-col items-center justify-center mt-[10px] mb-[20px] leading-[18px] text-[12px]">
                    <div className={"flex text-start mb-[10px]"} onClick={toggleMechanicVisibility_1}>
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
                        <p>Якщо Абонент <span></span>не сплатив більше 40 днів від останнього дня надання послуг, його договір<span className={isMechanicVisible_3 ? 'hidden' : ''}>...</span>
                        <span className={isMechanicVisible_3 ? '' : 'hidden'}>/особистий рахунок блокується (дія тарифу, акцій, в яких брав участь Абонент, припиняється).  Повторна активація договору платна - у розмірі вартості підключення на обраному тарифі.</span>
                        <ChevronDown className={`inline-flex absolute right-0 end h-4 w-4 transition-transform + ${isMechanicVisible_3 ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`} />
                        </p>
                    </div>
                    <div className="flex mb-[10px]" onClick={toggleMechanicVisibility_4}>
                        <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                        <p>Перехід на тариф Інтернет з меншою вартістю – 100 грн. разово тариф змінюється<span className={isMechanicVisible_4 ? 'hidden' : ''}>...</span>
                        <span className={isMechanicVisible_4 ? '' : 'hidden'}> із  1 числа наступного місяця. Перехід на тариф Інтернет із більшою вартістю – 45 грн. разово, тариф змінюється із наступного робочого дня із перерахунком абонентної плати. Підключення/відключення підписки ТБ від  МЕГОГО – безкоштовно.</span>
                        <ChevronDown className={`inline-flex absolute right-0 end h-4 w-4 transition-transform + ${isMechanicVisible_4 ? 'rotate-0 text-[#DC662D]': 'rotate-[-90deg]'}`}/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TarifsCountInfo;
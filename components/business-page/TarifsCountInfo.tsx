import Image from 'next/image';
import React, { useState } from 'react';
import type { ThemeProps } from '@/types/Theme';

import { ChevronDown } from "lucide-react";
import green_galochka from '../../public/img/green_galochka.svg';

// Механіка тарифів і розрахунків. Текст узгоджено 15.09.2026;
// розбитий на пункти без змін формулювань. На мобільному видно перше речення, решта — по тапу.
const MECHANICS: { lead: string; rest?: string }[] = [
    {
        lead: 'Абонентна плата нараховується за календарний місяць і сплачується наперед: до 1-го числа на особовому рахунку має бути сума абонплати та всіх замовлених додаткових послуг.',
    },
    {
        lead: 'Якщо 1-го числа коштів не вистачає, доступ скорочується; за повні місяці без доступу плата не нараховується і борг не виникає.',
        rest: 'Якщо ви поповнюєте рахунок після 1-го числа і не оформили паузу, доступ поновлюється в день оплати, а абонплата за цей місяць нараховується повністю. Поновлення доступу безоплатне.',
    },
    {
        lead: 'Пауза — за зверненням через особистий кабінет, повними календарними місяцями, безоплатно, на строк до одного року.',
        rest: 'Зовнішня IP-адреса оплачується, поки закріплена за вами, у тому числі під час паузи; відмовитися від неї можна зверненням у кабінеті.',
    },
    {
        lead: 'Акційна ціна діє за умови безперервної оплати: після повного місяця без оплати або паузи діє регулярний тариф.',
    },
    {
        lead: 'Перехід на тариф з меншою вартістю — безоплатно з 1-го числа наступного місяця; на тариф з більшою вартістю — безоплатно з наступного робочого дня з перерахунком абонплати.',
    },
    {
        lead: 'Усі тарифи безлімітні, швидкість входу та виходу однакова; при підключенні надається внутрішня IP-адреса.',
    },
];

const TarifsCountInfo = ( {theme}: ThemeProps ) => {
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

    const toggleItem = (index: number) => {
        setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
    };

    // На десктопі — дві колонки, порівну пунктів у кожній
    const half = Math.ceil(MECHANICS.length / 2);
    const columns = [MECHANICS.slice(0, half), MECHANICS.slice(half)];

    return (
        <div className={`${theme=='white' ? 'text-[#5F6061]' : 'text-white' }`}>
            <div className={`max-[563px]:hidden mr-[170px] ml-[170px] max-[2377px]:mr-[120px] max-[2377px]:ml-[120px] max-[1600px]:mr-[85px] max-[1600px]:ml-[85px] max-[1247px]:mr-[67px] max-[1247px]:ml-[67px] max-[932px]:mr-[35px] max-[932px]:ml-[35px] min-[3644px]:mr-[240px] min-[3644px]:ml-[240px] max-[1247px]:mt-[-48px]`}>
                <h1 className={`mx-auto font-bold min-[3644px]:mt-[180px] mt-[120px] max-[2377px]:mt-[90px] text-center flex items-center justify-center text-[50px] leading-[62px] max-[2377px]:text-[42px] max-[2377px]:leading-[50px] min-[3644px]:text-[75px] min-[3644px]:leading-[93px] z-[1]`}>Механіка тарифів і розрахунків</h1>
                <div className={` min-[2378px]:grid min-[2378px]:grid-cols-2 gap-[40px] min-[3644px]:gap-[60px] font-normal  flex flex-col items-center justify-center mt-[52px] max-[2377px]:mt-[40px] min-[3644px]:mt-[78px] mb-[120px] max-[2377px]:leading-[24px] max-[2377px]:text-[16px] leading-[28px] text-[20px] min-[3644px]:leading-[42px] min-[3644px]:text-[30px]`}>
                    {columns.map((column, colIndex) => (
                        <div key={colIndex} className={`min-[2378px]:col-span-1 ${colIndex === 0 ? 'max-[2377px]:mb-[-38px]' : ''}`}>
                            {column.map((item) => (
                                <div key={item.lead} className="flex mb-[40px] max-[2377px]:mb-[20px] min-[3644px]:mb-[60px]">
                                    <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                                    <p>{item.rest ? `${item.lead} ${item.rest}` : item.lead}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className={'min-[564px]:hidden mr-[20px] ml-[20px] mt-[20px] relative'}>
                <h1 className={`mx-auto font-bold text-center flex items-center justify-center text-[24px] leading-[30px] z-[1]`}>Механіка тарифів і розрахунків</h1>
                <div className="font-normal flex flex-col items-center justify-center mt-[10px] mb-[20px] leading-[18px] text-[12px]">
                    {MECHANICS.map((item, index) => {
                        const isOpen = !!openItems[index];
                        return (
                            <div
                                key={item.lead}
                                className="flex text-start mb-[10px] w-full"
                                onClick={item.rest ? () => toggleItem(index) : undefined}
                            >
                                <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                                <p className={item.rest ? 'pr-[20px]' : ''}>
                                    {item.lead}
                                    {item.rest && (
                                        <>
                                            <span className={isOpen ? '' : 'hidden'}> {item.rest}</span>
                                            <ChevronDown className={`inline-flex absolute right-0 h-4 w-4 transition-transform ${isOpen ? 'rotate-0 text-[#DC662D]' : 'rotate-[-90deg]'}`} />
                                        </>
                                    )}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TarifsCountInfo;

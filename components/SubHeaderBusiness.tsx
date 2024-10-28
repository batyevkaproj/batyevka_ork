import React from 'react';

import Link from 'next/link';

import { ChevronDown } from "lucide-react";

const SubHeaderBusiness = () => {
    return (
    <div className="h-full w-4/6 max-[1650px]:w-3/4 flex items-center justify-right justify-end gap-[60px]">
        <div className={`rounded-full bg-none hover:border-2 hover:border-[#DC662D] hover:text-[#DC662D] min-[2430px]:w-[186px] min-[2430px]:h-[65px] w-[142px] h-[50px] flex justify-center items-center`}>
            <Link href='#' className={`font-semibold leading-[22px] text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center `}>Доступ  в Інтернет</Link>
        </div>
        <div className={`max-[951px]:hidden rounded-full bg-none hover:border-2 hover:border-[#DC662D] hover:text-[#DC662D] min-[2430px]:w-[386px] min-[2430px]:h-[65px] w-[292px] h-[50px] flex justify-center items-center`}>
            <Link href='#' className={`font-semibold text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>Трансляції ТБ і футболу <br/> для закладів</Link>
        </div>
        <div className={`max-[1280px]:hidden rounded-full bg-none hover:border-2 hover:border-[#DC662D] hover:text-[#DC662D] min-[2430px]:w-[386px] min-[2430px]:h-[65px] w-[292px] h-[50px] flex justify-center items-center`}>
            <Link href='#' className={`font-semibold text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>Будівництво  локальних<br/> мереж для офісів</Link>
        </div>
        <div className={`max-[1970px]:hidden rounded-full bg-none hover:border-2 hover:border-[#DC662D] hover:text-[#DC662D] min-[2430px]:w-[386px] min-[2430px]:h-[65px] w-[292px] h-[50px] flex justify-center items-center`}>
            <Link href='#' className={` font-semibold text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>Відеоспостереження <br/>для бізнесу</Link>
        </div>
        <div className="bg-none min-[2430px]:w-[180px] w-[150px] hover:text-[#DC662D]">
            <Link href='#' className={`inline-flex font-semibold  text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center `}>Всі опції <ChevronDown className={`inline-flex ml-[12px] mt-[3px] size-[18px] min-[2430px]:size-[22px]`}/></Link>
        </div>
    </div>
    );
};

export default SubHeaderBusiness;
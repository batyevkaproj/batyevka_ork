import React from 'react';

import Link from 'next/link';

import { ChevronDown } from "lucide-react";

const SubHeader = () => {
    return (

    <div className="h-full w-4/6 max-[1650px]:w-3/4 flex items-center justify-end">
        <div className={`max-[951px]:hidden rounded-full bg-none hover:border-2 hover:border-[#DC662D] hover:text-[#DC662D] px-[50px] h-[50px] flex justify-center items-center`}>
            <Link href='https://business.batyevka.net/prices' className={`font-semibold text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>Тарифи</Link>
        </div>
        <div className={`max-[1280px]:hidden rounded-full bg-none hover:border-2 hover:border-[#DC662D] hover:text-[#DC662D] px-[50px] h-[50px] flex justify-center items-center`}>
            <Link href='https://www.batyevka.net/uk/internet' className={`font-semibold text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>PON-Інтернет</Link>
        </div>
        <div className={`max-[1970px]:hidden rounded-full bg-none hover:border-2 hover:border-[#DC662D] hover:text-[#DC662D] px-[50px] h-[50px] flex justify-center items-center`}>
            <Link href='https://www.batyevka.net/uk/tv-unlimited' className={` font-semibold text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>Телебачення</Link>
        </div>
        <div className="bg-none px-[50px] hover:text-[#DC662D]">
            <Link href='https://www.batyevka.net/uk/promotions' className={`inline-flex font-semibold  text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center `}>Акції <ChevronDown className={`inline-flex ml-[12px] mt-[3px] size-[18px] min-[2430px]:size-[22px]`}/></Link>
        </div>
    </div>
    );
};

export default SubHeader;
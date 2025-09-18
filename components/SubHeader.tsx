"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SubHeader = () => {
    const pathname = usePathname();

    return (
        <div className="h-full w-4/6 max-[1650px]:w-3/4 flex items-center justify-end">
            
            {/* // <-- CHANGED THIS ENTIRE BLOCK --> */}
            <div 
                className={`rounded-full bg-none px-[50px] h-[50px] flex justify-center items-center transition-colors duration-200 ${pathname === '/promotions' ? 'border-2 border-[#DC662D] text-[#DC662D]' : 'hover:border-2 hover:border-[#DC662D] hover:text-[#DC662D]'}`}
            >
                <Link href='/promotions' className={`font-semibold text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>
                    Акції
                </Link>
            </div>
            {/* // <-- END OF CHANGE --> */}

            <div 
                className={`max-[951px]:hidden rounded-full bg-none px-[50px] h-[50px] flex justify-center items-center transition-colors duration-200 ${pathname === '/prices' ? 'border-2 border-[#DC662D] text-[#DC662D]' : 'hover:border-2 hover:border-[#DC662D] hover:text-[#DC662D]'}`}
            >
                <Link href='/prices' className={`font-semibold text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>
                    Тарифи
                </Link>
            </div>

            <div 
                className={`max-[1280px]:hidden rounded-full bg-none px-[50px] h-[50px] flex justify-center items-center transition-colors duration-200 ${pathname === '/xgspon' ? 'border-2 border-[#DC662D] text-[#DC662D]' : 'hover:border-2 hover:border-[#DC662D] hover:text-[#DC662D]'}`}
            >
                <Link href='/xgspon' className={`font-semibold text-[16px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>
                    10G-PON
                </Link>
            </div>

        </div>
    );
};

export default SubHeader;
"use client"

import type { SpeedItemProps } from '@/constants/internet_speeds';

import rocket_blue from '@/public/img/rocket_blue.svg';
import Image from "next/image";
import galochka_orange from '@/public/img/galochka_orange.svg';

interface InternetBlockProps {
    speedItem: SpeedItemProps;
  }

const InternetBlock = ({speedItem}: InternetBlockProps) => {
    return (
        <div className={`min-[3644px]:w-[687px] w-[458px] max-[2377px]:w-[350px] max-[880px]:w-[320px] shadow-[0_4px_29px_0px_#E6E3E3] bg-white rounded-[10px] min-w-[320px]`}>
            <p className={`flex items-center justify-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:pt-[78px] pt-[52px] max-[2377px]:pt-[40px]`}>Інтернет</p>
            <div className={`flex items-center justify-center min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] min-[3644px]:pb-[60px] pb-[40px] max-[2377px]:pb-[30px]`}>
                <Image src={rocket_blue} alt={''} className={``} />
            </div>
            <h2 className="font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex">
                Швидкість
            </h2>
            <h2 className="text-[#5984B2] font-bold min-[3644px]:text-[70px] min-[3644px]:leading-[70px] text-[47px] leading-[47px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] justify-center flex min-[3644px]:py-[20px] py-[13px] max-[2377px]:py-[10px]">
            {`${speedItem?.speed ?? 0} ${speedItem?.measure}`}
            </h2>
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
                        Виклик майстра для <br /> будь-якого ремонту безкоштовно
                    </p>
                </div>
                <div className={`min-[3644px]:mt-[22px] mt-[15px] max-[2377px]:mt-[10px] flex items-start`}>
                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                    <p>
                        Оптичний модем <br /> безкоштовно *
                    </p>
                </div>
                <div className={`min-[3644px]:mt-[22px] mt-[15px] max-[2377px]:mt-[10px] flex items-start`}>
                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                    <p className="">
                        Wi-Fi 6 роутер <br />безкоштовно *
                    </p>
                </div>
                <div className={`min-[3644px]:mt-[22px] mt-[15px] max-[2377px]:mt-[10px] flex items-start`}>
                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                    <p className="">
                        Без плати за <br />підключення *
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InternetBlock;
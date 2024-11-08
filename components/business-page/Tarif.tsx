
import { useState } from 'react';
import Image from 'next/image';
import { useModal } from "@/hooks/use-modal-store";
import WhiteGreyIpCheck from './WhiteGreyIpCheck';
import { insertSpaceInDecimal } from "@/lib/utils";

import galochka from '../../public/img/galochka.svg';
import prom_small from '../../public/img/prom_small.svg';
import prom_middle from '../../public/img/prom_middle.svg';
import prom_large from '../../public/img/prom_large.svg';

import { TariffProps } from "@/types/home";

import { REAL_IP_PRICE } from '@/constants/internet_speeds';


interface TarifGponBiggestProps {
    tarif: TariffProps;
}

export const TarifGponBiggest = ({ tarif }: TarifGponBiggestProps) => {

    const { onOpen } = useModal();
    const [realIpChecked, setIpChecked] = useState(tarif.checked);

    const handleConnectClick = (tarif: TariffProps) => {
        onOpen("request-connection", {
            type: "G-PON", // или "XGS-PON"
            speed: tarif.speed,
            measure: '',
            price: tarif.price,
            nonPromoPrice: tarif.nonPromoPrice,
            promotion: tarif.promotion,
            hasStaticIp: realIpChecked,
            setupPrice: tarif.setupPrice
          });
    };

    const tarifPrice = insertSpaceInDecimal(tarif.price);
    const tarifNonPromoPrice = insertSpaceInDecimal(tarif.nonPromoPrice);
    const tarifPriceWithIp = insertSpaceInDecimal(tarif.price + REAL_IP_PRICE);
    const tarifNonPromoPriceWithIp = insertSpaceInDecimal(tarif.nonPromoPrice + REAL_IP_PRICE);

    return (
        <div className="max-[2377px]:h-[573px] max-[2377px]:w-[350px] w-[458px] h-[750px] min-[3644px]:h-[1125px] min-[3644px]:w-[693px] rounded-md bg-[#123853] z-10">
            <Image src={prom_small} alt='prom_large' className={`self-start absolute ml-[20px] mt-[-20px] min-[2378px]:hidden ${tarif.promotion ? '' : 'hidden'}`} />
            <Image src={prom_middle} alt='prom_large' className={`self-start absolute ml-[26px] mt-[-26px] max-[2377px]:hidden min-[3644px]:hidden ${tarif.promotion ? '' : 'hidden'}`} />
            <Image src={prom_large} alt='prom_large' className={`self-start absolute ml-[39px] mt-[-39px] max-[3643px]:hidden ${tarif.promotion ? '' : 'hidden'}`} />
            <h2 className="text-[#DC662D] font-bold justify-center flex min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[70px]">
                {realIpChecked ? tarifPriceWithIp : tarifPrice}
            </h2>
            <h2 className="text-[#DC662D] font-normal min-[3644px]:text-[39px] min-[3644px]:leading-[45px] text-[26px] leading-[30px] max-[2377px]:text-[20px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pb-[30px] pb-[20px] max-[2377px]:pb-[15px]">
                грн/міс
            </h2>
            <h2 className={`text-[#8B6CB0] font-semibold min-[3644px]:text-[48px] min-[3644px]:leading-[48px] text-[32px] leading-[32px] max-[2377px]:text-[22px] max-[2377px]:leading-[24px] justify-center flex min-[3644px]:pb-[72px] pb-[48px] max-[2377px]:pb-[40px] ${tarif.promotion ? '' : 'min-[3644px]:pb-[120px] pb-[80px] max-[2377px]:pb-[64px]'}`}>
                {tarif.promotion && 
                    <span>
                        {`з 5 місяця ${realIpChecked ? tarifNonPromoPriceWithIp : tarifNonPromoPrice} грн.`}
                    </span>
                }
                
            </h2>
            <h2 className="text-[#56AABF] font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex">
                Швидкість
            </h2>
            <h2 className="text-white font-bold min-[3644px]:text-[70px] min-[3644px]:leading-[70px] text-[47px] leading-[47px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] justify-center flex min-[3644px]:py-[20px] py-[13px] max-[2377px]:py-[10px]">
                {tarif.speed}
            </h2>
            <div className="flex justify-center text-white min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">
                <span className="flex mr-[20px]">
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
                <WhiteGreyIpCheck
                    checked={realIpChecked}
                    setChecked={(value: boolean) => setIpChecked(value)}
                />
            </div>
            <div className="flex justify-center">
                <button 
                    onClick={() => handleConnectClick(tarif)} 
                    className="bg-[#56AABF] mx-[32px] text-white rounded-full min-[3644px]:h-[118px] min-[3644px]:w-[531px] h-[78px] w-[351px] max-[2377px]:h-[60px] max-[2377px]:w-[270px] min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]"
                >
                    Підключити
                </button>
            </div>
        </div>
    );
};


interface TarifGponMiddleProps {
    tarif: TariffProps;
}


export const TarifGponMiddle = ({ tarif }: TarifGponMiddleProps) => {

    const { onOpen } = useModal();
    const [realIpChecked, setIpChecked] = useState(tarif.checked);

    const handleConnectClick = (tarif: TariffProps) => {
        onOpen("request-connection", {
            type: "G-PON", // или "XGS-PON"
            speed: tarif.speed,
            measure: '',
            price: tarif.price,
            nonPromoPrice: tarif.nonPromoPrice,
            promotion: tarif.promotion,
            hasStaticIp: realIpChecked,
            setupPrice: tarif.setupPrice
          });
      };


    const tarifPrice = insertSpaceInDecimal(tarif.price);
    const tarifNonPromoPrice = insertSpaceInDecimal(tarif.nonPromoPrice);
    const tarifPriceWithIp = insertSpaceInDecimal(tarif.price + REAL_IP_PRICE);
    const tarifNonPromoPriceWithIp = insertSpaceInDecimal(tarif.nonPromoPrice + REAL_IP_PRICE);

    return (
        <div className="p-1">
            <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                <div className="h-[573px] w-[350px] rounded-md bg-[#123853]">
                    <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${tarif.promotion ? '' : 'hidden'}`} />
                    <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                        {realIpChecked ? tarifPriceWithIp : tarifPrice}
                    </h2>
                    <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                        грн/міс
                    </h2>
                    <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${tarif.promotion ? '' : 'pb-[64px]'}`}>
                        <span className={tarif.promotion ? '' : 'hidden'}>
                            з 5 місяця {realIpChecked ? tarifNonPromoPriceWithIp : tarifNonPromoPrice} грн.
                        </span>
                    </h2>
                    <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                        Швидкість
                    </h2>
                    <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                        {tarif.speed}
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
                        <WhiteGreyIpCheck
                            checked={realIpChecked}
                            setChecked={setIpChecked}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() => handleConnectClick(tarif)} className="bg-[#56AABF] mx-[32px] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface TarifGponMobileProps {
    tarif: TariffProps;
}

export const TarifGponMobile = ({ tarif }: TarifGponMobileProps) => {

    const { onOpen } = useModal();
    const [realIpChecked, setIpChecked] = useState(tarif.checked);

    

    const handleConnectClick = (tarif: TariffProps) => {
        onOpen("request-connection", {
            type: "G-PON", // или "XGS-PON"
            speed: tarif.speed,
            measure: '',
            price: tarif.price,
            nonPromoPrice: tarif.nonPromoPrice,
            promotion: tarif.promotion,
            hasStaticIp: realIpChecked,
            setupPrice: tarif.setupPrice
          });
      };

    const tarifPrice = insertSpaceInDecimal(tarif.price);
    const tarifNonPromoPrice = insertSpaceInDecimal(tarif.nonPromoPrice);
    const tarifPriceWithIp = insertSpaceInDecimal(tarif.price + REAL_IP_PRICE);
    const tarifNonPromoPriceWithIp = insertSpaceInDecimal(tarif.nonPromoPrice + REAL_IP_PRICE);

    return (
        <div className="h-[573px] w-[350px] mx-[20px] rounded-md bg-[#123853] z-10">
            <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${tarif.promotion ? '' : 'hidden'}`} />

            <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                {realIpChecked ? tarifPriceWithIp : tarifPrice}
            </h2>
            <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                грн/міс
            </h2>
            <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${tarif.promotion ? '' : 'pb-[64px]'}`}>
                <span className={tarif.promotion ? '' : 'hidden'}>
                    з 5 місяця {realIpChecked ? tarifNonPromoPriceWithIp : tarifNonPromoPrice} грн.
                </span>
            </h2>
            <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                Швидкість
            </h2>
            <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                {tarif.speed}
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
                <WhiteGreyIpCheck
                    checked={realIpChecked}
                    setChecked={setIpChecked}
                />
            </div>
            <div className="flex justify-center">
                <button onClick={() => handleConnectClick(tarif)} className="bg-[#56AABF] mx-[32px] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
            </div>
        </div>
    );
};

interface TarifXGponBiggestProps {
    tarif: TariffProps;
}

export const TarifXGponBiggest = ({ tarif }: TarifXGponBiggestProps) => {

    const { onOpen } = useModal();
    const [realIpChecked, setIpChecked] = useState(tarif.checked);

    const handleConnectClick = (tarif: TariffProps) => {
        onOpen("request-connection", {
            type: "XGS-PON",
            speed: tarif.speed,
            measure: '',
            price: tarif.price,
            nonPromoPrice: tarif.nonPromoPrice,
            promotion: tarif.promotion,
            hasStaticIp: realIpChecked,
            setupPrice: tarif.setupPrice
          });
    };

    const tarifPrice = insertSpaceInDecimal(tarif.price);
    const tarifNonPromoPrice = insertSpaceInDecimal(tarif.nonPromoPrice);
    const tarifPriceWithIp = insertSpaceInDecimal(tarif.price + REAL_IP_PRICE);
    const tarifNonPromoPriceWithIp = insertSpaceInDecimal(tarif.nonPromoPrice + REAL_IP_PRICE);

    return (
        <div className="max-[2377px]:h-[573px] max-[2377px]:w-[350px] w-[458px] h-[750px]  min-[3644px]:h-[1125px] min-[3644px]:w-[693px] rounded-md bg-[#123853]">
            <Image src={prom_small} alt='prom_large' className={`self-start absolute ml-[20px] mt-[-20px] min-[2378px]:hidden + ${tarif.promotion ? '' : 'hidden'}`} />
            <Image src={prom_middle} alt='prom_large' className={`self-start absolute ml-[26px] mt-[-26px] max-[2377px]:hidden min-[3644px]:hidden + ${tarif.promotion ? '' : 'hidden'}`} />
            <Image src={prom_large} alt='prom_large' className={`self-start absolute ml-[39px] mt-[-39px] max-[3643px]:hidden + ${tarif.promotion ? '' : 'hidden'}`} />
            <h2 className="text-[#DC662D] font-bold justify-center flex min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[70px]">
                {realIpChecked ? tarifPriceWithIp : tarifPrice}
            </h2>
            <h2 className="text-[#DC662D] font-normal min-[3644px]:text-[39px] min-[3644px]:leading-[45px] text-[26px] leading-[30px] max-[2377px]:text-[20px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pb-[30px] pb-[20px] max-[2377px]:pb-[15px]">
                грн/міс
            </h2>
            <h2 className={`text-[#8B6CB0] font-semibold min-[3644px]:text-[48px] min-[3644px]:leading-[48px] text-[32px] leading-[32px] max-[2377px]:text-[22px] max-[2377px]:leading-[24px] justify-center flex min-[3644px]:pb-[72px] pb-[48px] max-[2377px]:pb-[40px] + ${tarif.promotion ? '' : 'min-[3644px]:pb-[120px] pb-[80px] max-[2377px]:pb-[64px]'}`}>
                <span className={tarif.promotion ? '' : 'hidden'}>
                    з 5 місяця {realIpChecked ? tarifNonPromoPriceWithIp : tarifNonPromoPrice} грн.
                </span>
            </h2>
            <h2 className="text-[#56AABF] font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex ">
                Швидкість
            </h2>
            <h2 className="text-white font-bold min-[3644px]:text-[70px] min-[3644px]:leading-[70px] text-[47px] leading-[47px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] justify-center flex min-[3644px]:py-[20px] py-[13px] max-[2377px]:py-[10px]">
                {tarif.speed}
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
                <WhiteGreyIpCheck
                    checked={realIpChecked}
                    setChecked={setIpChecked}
                />
            </div>
            <div className="flex justify-center">
                <button onClick={() => handleConnectClick(tarif)} className="bg-[#56AABF] text-white rounded-full min-[3644px]:h-[118px] min-[3644px]:w-[531px] h-[78px] w-[351px] max-[2377px]:h-[60px] max-[2377px]:w-[270px] mx-[32px] min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
            </div>
        </div>
    );
};

interface TarifXGponMiddleProps {
    tarif: TariffProps;
}

export const TarifXGponMiddle = ({ tarif }: TarifXGponMiddleProps) => {

    const { onOpen } = useModal();
    const [realIpChecked, setIpChecked] = useState(tarif.checked);

    const handleConnectClick = (tarif: TariffProps) => {
        onOpen("request-connection", {
            type: "XGS-PON",
            speed: tarif.speed,
            measure: '',
            price: tarif.price,
            nonPromoPrice: tarif.nonPromoPrice,
            promotion: tarif.promotion,
            hasStaticIp: realIpChecked,
            setupPrice: tarif.setupPrice
          });
    };

    const tarifPrice = insertSpaceInDecimal(tarif.price);
    const tarifNonPromoPrice = insertSpaceInDecimal(tarif.nonPromoPrice);
    const tarifPriceWithIp = insertSpaceInDecimal(tarif.price + REAL_IP_PRICE);
    const tarifNonPromoPriceWithIp = insertSpaceInDecimal(tarif.nonPromoPrice + REAL_IP_PRICE);

    return (
        <div className="p-1">
            <div className="flex justify-center items-center pt-[20px] mb-[20px]">
                <div className="h-[573px] w-[350px] rounded-md bg-[#123853]">
                    <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${tarif.promotion ? '' : 'hidden'}`} />
                    <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                        {realIpChecked ? tarifPriceWithIp : tarifPrice}
                    </h2>
                    <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                        грн/міс
                    </h2>
                    <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${tarif.promotion ? '' : 'pb-[64px]'}`}>
                        <span className={tarif.promotion ? '' : 'hidden'}>
                            з 5 місяця {realIpChecked ? tarifNonPromoPriceWithIp : tarifNonPromoPrice} грн.
                        </span>
                    </h2>
                    <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                        Швидкість
                    </h2>
                    <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                        {tarif.speed}
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
                        <WhiteGreyIpCheck
                    checked={realIpChecked}
                    setChecked={setIpChecked}
                />
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() => handleConnectClick(tarif)} className="bg-[#56AABF] text-white rounded-full h-[60px] w-[270px] mx-[32px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface TarifXGponMobileProps {
    tarif: TariffProps;
}

export const TarifXGponMobile = ({ tarif }: TarifXGponMobileProps) => {

    const { onOpen } = useModal();
    const [realIpChecked, setIpChecked] = useState(tarif.checked);

    const handleConnectClick = (tarif: TariffProps) => {
        onOpen("request-connection", {
            type: "XGS-PON",
            speed: tarif.speed,
            measure: '',
            price: tarif.price,
            nonPromoPrice: tarif.nonPromoPrice,
            promotion: tarif.promotion,
            hasStaticIp: realIpChecked,
            setupPrice: tarif.setupPrice
          });
    };

    const tarifPrice = insertSpaceInDecimal(tarif.price);
    const tarifNonPromoPrice = insertSpaceInDecimal(tarif.nonPromoPrice);
    const tarifPriceWithIp = insertSpaceInDecimal(tarif.price + REAL_IP_PRICE);
    const tarifNonPromoPriceWithIp = insertSpaceInDecimal(tarif.nonPromoPrice + REAL_IP_PRICE);

    return (
        <div className="h-[573px] w-[350px] mx-[20px] rounded-md bg-[#123853] z-10">
            <Image src={prom_small} alt='prom_small1' className={`self-start absolute ml-[20px] mt-[-20px] + ${tarif.promotion ? '' : 'hidden'}`} />

            <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                {realIpChecked ? tarifPriceWithIp : tarifPrice}
            </h2>
            <h2 className="text-[#DC662D] font-normal text-[20px] leading-[22px] justify-center flex pb-[15px]">
                грн/міс
            </h2>
            <h2 className={`text-[#8B6CB0] font-semibold leading-[24px] text-[22px] justify-center flex pb-[40px] + ${tarif.promotion ? '' : 'pb-[64px]'}`}>
                <span className={tarif.promotion ? '' : 'hidden'}>
                    з 5 місяця {realIpChecked ? tarifNonPromoPriceWithIp : tarifNonPromoPrice} грн.
                </span>
            </h2>
            <h2 className="text-[#56AABF] font-semibold text-[18px] leading-[22px] justify-center flex pb-[10px]">
                Швидкість
            </h2>
            <h2 className="text-white  font-bold text-[36px] leading-[36px] justify-center flex pb-[8px]">
                {tarif.speed}
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
                <WhiteGreyIpCheck
                    checked={realIpChecked}
                    setChecked={setIpChecked}
                />
            </div>
            <div className="flex justify-center">
                <button onClick={() => handleConnectClick(tarif)} className="bg-[#56AABF] text-white rounded-full h-[60px] w-[270px] mx-[32px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]">Підключити</button>
            </div>
        </div>
    );
};


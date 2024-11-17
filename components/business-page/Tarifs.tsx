import { TariffProps } from "@/types/home";
import OpticCableReverse from "./OpticCableReverse";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Heading from '@/components/Heading';
import OpticCable from '@/components/business-page/OpticCable';
import {
    TarifGponBiggest,
    TarifGponMiddle,
    TarifGponMobile,
    TarifXGponMobile,
    TarifXGponMiddle,
    TarifXGponBiggest
} from "@/components/business-page/Tarif";


const Tarifs = () => {

    const TARIFF_SIMPLE: TariffProps[] = [
        { id: 1, price: 499, speed: '100 Мегабіт', promotion: true, nonPromoPrice: 799, checked: false, type: 'G-PON', setupPrice: 2599 },
        { id: 2, price: 799, speed: '300 Мегабіт', promotion: true, nonPromoPrice: 1299, checked: false, type: 'G-PON', setupPrice: 2599 },
        { id: 3, price: 999, speed: '1000 Мегабіт', promotion: true, nonPromoPrice: 1599, checked: false, type: 'G-PON', setupPrice: 2599 }

    ];

    const TARIFF_PREMIUM: TariffProps[] = [
        { id: 1, price: 999, speed: '1 Гбіт', promotion: true, nonPromoPrice: 1599, checked: false, type: 'XGS-PON', setupPrice: 14999 },
        { id: 2, price: 1999, speed: '2,5 Гбіт', promotion: true, nonPromoPrice: 2999, checked: false, type: 'XGS-PON', setupPrice: 14999 },
        { id: 3, price: 2999, speed: '5 Гбіт', promotion: true, nonPromoPrice: 3999, checked: false, type: 'XGS-PON', setupPrice: 14999 }
    ];

    return (
        <>  {/* GPON biggest*/}
            <div className="max-[1247px]:hidden">
                <Heading text={`Бізнес тарифи "Стандарт"`} text_size={42} />
                <div className="max-[2377px]:my-[60px] my-[75px] min-[3644px]:my-[129px] w-[1200px] mr-[68px] min-[2378px]:scale-[1.33] min-[3644px]:scale-[1.96]">
                    <OpticCable />
                </div>
                <div className="min-[3644px]:text-[51px] min-[3644px]:leading-[51px] text-[34px] leading-[34px] max-[2377px]:text-[26px] max-[2377px]:leading-[26px] font-bold text-white flex items-center justify-center">
                    <h1 className="text-center flex items-center justify-center">Підключаємо ОПТИЧНИМ кабелем G-PON  -  Інтернет без світла</h1>
                </div>
                <div className="pt-[24px] min-[3644px]:pt-[36px] max-[2377px]:pt-[18px] font-bold text-white flex justify-center min-[3644px]:mb-[117px] mb-[78px] max-[2377px]:mb-[60px]">
                    <h1 className="text-center min-[3644px]:text-[48px] min-[3644px]:leading-[66px] text-[32px] leading-[44px] max-[2377px]:text-[24px] max-[2377px]:leading-[36px] align-bottom">Всього за<span className=" text-[#56AABF] px-[6px] min-[3644px]:text-[82px] min-[3644px]:leading-[82px] text-[55px] leading-[50px] max-[2377px]:text-[42px] max-[2377px]:text-[36px]">2 599</span>грн.</h1>
                </div>


                <div className="flex justify-center box-border max-[2377px]:gap-[40px] max-[1600px]:gap-[30px] gap-[52px] min-[3644px]:gap-[78px]">
                    {
                        TARIFF_SIMPLE.map((tarif) =>
                            <TarifGponBiggest key={tarif.id} tarif={tarif} />
                        )
                    }
                </div>
            </div>

            {/*GPON middle */}
            <div className="min-[1248px]:hidden max-[823px]:hidden">
                <Heading text={`Бізнес тарифи "Стандарт"`} text_size={42} />
                <div className="my-[60px] mr-[68px]">
                    <OpticCable />
                </div>
                <div className="text-[26px] leading-[26px] font-bold text-white flex items-center justify-center">
                    <h1 className="text-center w-[913px] flex items-center justify-center z-10">Підключаємо ОПТИЧНИМ кабелем G-PON  -  Інтернет без світла</h1>
                </div>
                <div className=" text-[24px] leading-[36px] font-bold text-white flex justify-center pt-[18px]">
                    <h1 className="text-center text-[24px] align-bottom">Всього за<span className=" text-[#56AABF] px-[10px] text-[42px]">2 599</span>грн</h1>
                </div>

                <div className="flex justify-center box-border pt-[40px] mx-[35px]">
                    <Carousel className="w-[760px]" opts={{ loop: false, slidesToScroll: 2 }}>
                        <CarouselContent className="-ml-1" >
                            {
                                TARIFF_SIMPLE.map((tarif) =>
                                    <CarouselItem key={tarif.id} className="basis-1/2 flex justify-between items-center ">
                                        <TarifGponMiddle key={tarif.id} tarif={tarif} />
                                    </CarouselItem>
                                )
                            }
                        </CarouselContent>
                        <CarouselPrevious className="ml-[48px] bg-[#3C7199] border-[#3C7199] text-white" />
                        <CarouselNext className="mr-[44px] bg-[#3C7199] border-[#3C7199] text-white" />
                    </Carousel>
                </div>
            </div>

            {/*GPON mobile*/}
            <div className="min-[824px]:hidden mt-[30px]">
                <Heading text={`Бізнес тарифи "Стандарт"`} text_size={24} />
                <div className="mt-[15px] mb-[15px] mr-[68px]">
                    <OpticCable />
                </div>

                <div className="text-[16px] leading-[22px] font-bold text-white flex items-center justify-center mx-[20px]">
                    <h1 className="text-center w-[913px] flex items-center justify-center z-10">Підключаємо ОПТИЧНИМ кабелем G-PON  -  Інтернет без світла</h1>
                </div>
                <div className="text-[16px] leading-[22px] font-bold text-white flex justify-center mt-[5px] mx-[20px]">
                    <h1 className="text-center align-bottom z-10">Всього за<span className=" text-[#56AABF] leading-[22px] px-[6px] text-[32px]">2 599</span>грн</h1>
                </div>

                {
                    TARIFF_SIMPLE.map((tarif) =>
                        <div key={tarif.id} className="flex justify-center items-center pt-[20px] mb-[20px]">
                            <TarifGponMobile key={tarif.id} tarif={tarif} />
                        </div>

                    )
                }
            </div>

            {/*XG-GPON biggest */}
            <div className="max-[1247px]:hidden">
                <Heading text={`Бізнес тарифи "Преміум"`} text_size={42} />
                <div className="max-[2377px]:my-[60px] my-[75px] min-[3644px]:my-[129px] ml-[45vw]">
                    <OpticCableReverse />
                </div>
                <div className="min-[3644px]:text-[51px] min-[3644px]:leading-[51px] text-[34px] leading-[34px] max-[2377px]:text-[26px] max-[2377px]:leading-[26px] font-bold text-white flex items-center justify-center">
                    <h1 className="text-center flex items-center justify-center z-10">Підключаємо ОПТИЧНИМ волокном по технології XGS-PON</h1>
                </div>
                <div className="pt-[24px] min-[3644px]:pt-[36px] max-[2377px]:pt-[18px] font-bold text-white flex justify-center min-[3644px]:mb-[117px] mb-[78px] max-[2377px]:mb-[60px]">
                    <h1 className="text-center min-[3644px]:text-[48px] min-[3644px]:leading-[66px] text-[32px] leading-[44px] max-[2377px]:text-[24px] max-[2377px]:leading-[36px] align-bottom">Всього за<span className=" text-[#56AABF] px-[6px] min-[3644px]:text-[82px] min-[3644px]:leading-[82px] text-[55px] leading-[50px] max-[2377px]:text-[42px] max-[2377px]:text-[36px]">14 999</span>грн.</h1>
                </div>
                <div className="flex justify-center box-border max-[2377px]:gap-[40px] max-[1600px]:gap-[30px] gap-[52px] min-[3644px]:gap-[78px]">

                    {
                        TARIFF_PREMIUM.map(tarif =>
                            <div key={tarif.id} className="flex justify-center items-center pt-[20px] mb-[20px] z-10">
                                <TarifXGponBiggest key={tarif.id} tarif={tarif} />
                            </div>
                        )
                    }
                </div>
            </div>

            {/*XG-GPON middle */}
            <div className="min-[1248px]:hidden max-[823px]:hidden mt-[-24px]">
                <Heading text={`Бізнес тарифи "Преміум"`} text_size={42} />
                <div className="my-[60px] scale-x-[-1] ml-[68px]">
                    <OpticCable />
                </div>
                <div className="text-[26px] leading-[32px] font-bold text-white flex items-center justify-center mx-[147px]">
                    <h1 className="text-center w-[913px] flex items-center justify-center z-10">Підключаємо ОПТИЧНИМ волокном по технології XGS-PON</h1>
                </div>
                <div className="text-[24px] leading-[36px] font-bold text-white flex justify-center pt-[18px]">
                    <h1 className="text-center text-[24px] align-bottom">Всього за<span className=" text-[#56AABF] px-[10px] text-[42px]">14 999</span>грн</h1>
                </div>

                <div className="flex justify-center box-border pt-[40px] mx-[35px]">
                    <Carousel className="w-[760px]" opts={{ loop: false, slidesToScroll: 2 }}>
                        <CarouselContent className="-ml-1" >
                            {
                                TARIFF_PREMIUM.map(tarif =>
                                    <CarouselItem key={tarif.id} className="basis-1/2 flex justify-between items-center ">
                                        <TarifXGponMiddle key={tarif.id} tarif={tarif} />
                                    </CarouselItem>
                                )
                            }
                        </CarouselContent>
                        <CarouselPrevious className="ml-[48px] bg-[#3C7199] border-[#3C7199] text-white" />
                        <CarouselNext className="mr-[44px] bg-[#3C7199] border-[#3C7199] text-white" />
                    </Carousel>
                </div>
            </div>

            {/* XG-GPON mobile */}
            <div className="min-[824px]:hidden">
                <Heading text={`Бізнес тарифи "Преміум"`} text_size={24} />
                <div className="mt-[15px] mb-[15px] scale-x-[-1] ml-[68px]">
                    <OpticCable />
                </div>
                <div className="text-[16px] leading-[22px] font-bold text-white flex items-center justify-center mx-[20px]">
                    <h1 className="text-center w-[913px] flex items-center justify-center">Підключаємо ОПТИЧНИМ волокном по технології XGS-PON</h1>
                </div>
                <div className="text-[16px] leading-[22px] font-bold text-white flex justify-center mt-[5px] mx-[20px]">
                    <h1 className="text-center align-bottom">всього за<span className=" text-[#56AABF] leading-[22px] px-[6px] text-[32px]">14 999</span>грн.</h1>
                </div>

                {
                    TARIFF_PREMIUM.map(tarif =>
                        <div key={tarif.id} className="flex justify-center items-center pt-[20px] mb-[20px]">
                            <TarifXGponMobile key={tarif.id} tarif={tarif} />
                        </div>
                    )
                }
            </div>

        </>
    );
};

export default Tarifs;
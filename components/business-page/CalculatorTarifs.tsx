import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    GPON_SPEEDS,
    UTP_SPEEDS
} from "@/constants/internet_speeds"
import { megogo_bundles } from '@/constants/slider';
import { TVinfoItems as TVinfo } from '@/constants/megogo';

import { useModal } from '@/hooks/use-modal-store';

import type { ThemeProps } from '@/types/Theme';

import {
    TarifsSlider,
    TarifsSliderGPON,
    MonthsSlider,
    MegogoSlider,
    TarifsSliderMobile,
    TarifsSliderMobileGPON
} from "../ui/sliders";
import { TarifsSwitch, RegularSwitch } from "../ui/switches";
import { Checkbox } from "@/components/ui/checkbox_calculator"

import InternetBlock from "@/components/tariff-page/InternetBlock";
import TVBlock from "@/components/tariff-page/TVBlock";
import { Button } from '@/components/ui/button';

const CalculatorTarifs = ({ theme }: ThemeProps) => {
    const [isTarifsSwitch, setTarifsSwitch] = useState(false);
    const [speedUtp, setSpeedUtp] = useState(1);
    const [speedGpon, setSpeedGpon] = useState(5);
    const [isTVChecked, setTVChecker] = useState(false);
    const [isIPChecked, setIPChecker] = useState(false);
    const [isSelectMenuChecked, setSelectMenu] = useState(1);
    const [tvBundle, setTvBundle] = useState(0);

    const [internetPrice, setInternetPrice] = useState(0);
    const [tvPrice, setTvPrice] = useState(0);
    const [ipPrice, setIpPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let newInternetPrice = 0;
        if (isTarifsSwitch) {
            const selectedUtp = UTP_SPEEDS.find(item => item.value === speedUtp);
            newInternetPrice = selectedUtp ? selectedUtp.price : 0;
        } else {
            const selectedGpon = GPON_SPEEDS.find(item => item.value === speedGpon);
            newInternetPrice = selectedGpon ? selectedGpon.price : 0;
        }
        setInternetPrice(newInternetPrice);

        const newTvPrice = isTVChecked ? megogo_bundles[tvBundle]?.price : 0;
        setTvPrice(newTvPrice);

        const newIpPrice = isIPChecked ? 50 : 0; // Assuming static IP costs 50
        setIpPrice(newIpPrice);

        setTotalPrice(newInternetPrice + newTvPrice + newIpPrice);
    }, [isTarifsSwitch, speedUtp, speedGpon, isTVChecked, tvBundle, isIPChecked]);

    const handleTVswitch = () => {
        setTVChecker(!isTVChecked);
        if (!isTVChecked) {
            setTvBundle(1);
        } else {
            setTvBundle(0);
        }
    }

    const { onOpen } = useModal();

    return (
        <div className={`min-[3644px]:mx-[240px] mx-[170px] max-[2377px]:mx-[120px] max-[1800px]:mx-[85px] max-[1247px]:mx-[67px] max-[932px]:mx-[35px] max-[680px]:mx-0 min-[3644px]:mt-[90px] mt-[60px] max-[2377px]:mt-[45px] max-[932px]:mt-[30px] max-[680px]:mt-[30px] + ${theme == 'white' ? 'text-[#5F6061]' : 'text-white'}`}>
            <div className={`${theme == 'white' ? 'shadow-[0_4px_29px_0px_#E6E3E3]' : 'shadow-[0_4px_29px_0px_#0B273C]'} max-[680px]:shadow-none w-full`}>
                <div className={`min-[3644px]:pt-[117px] pt-[78px] max-[2377px]:pt-[60px] max-[680px]:pt-[20px] rounded-t-[10px] + ${theme == 'white' ? 'bg-[#F4F2F2]' : 'bg-[#123853]'}`}>
                    <h1 className={`flex text-center items-center justify-center font-bold  text-[50px] leading-[62px] max-[2377px]:text-[42px] max-[2377px]:leading-[50px] min-[3644px]:text-[75px] min-[3644px]:leading-[93px] max-[680px]:text-[24px] max-[680px]:leading-[30px]`}>Калькулятор тарифу</h1>
                    <p className={`flex text-center items-center justify-center min-[3644px]:text-[48px] min-[3644px]:leading-[63px] text-[32px] leading-[42px] max-[2377px]:text-[24px] max-[2377px]:leading-[32px] max-[680px]:text-[16px] max-[680px]:leading-[20px] min-[3644px]:mt-[30px] mt-[15px] max-[680px]:mt-[10px]`}><span className={`font-bold`}>Створи свій тариф&nbsp;</span> <span className={`font-bold max-[680px]:hidden`}>/</span> <span className={`max-[680px]:hidden`}>&nbsp;Оберiть технологію підключення</span></p>
                    <p className={`flex text-center items-center justify-center text-[16px] leading-[20px] mt-[5px] min-[681px]:hidden`}>Оберiть технологію підключення</p>
                    <div className={`flex items-center justify-center min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[84px] mt-[56px] max-[2377px]:mt-[30px] max-[680px]:mt-[15px] `}>
                        <p className={`font-bold min-[3644px]:mr-[30px] mr-[20px] max-[2377px]:mr-[15px]`}>G-PON</p>
                        <TarifsSwitch isTarifsSwitch={isTarifsSwitch} setTarifsSwitch={setTarifsSwitch} />
                        <p className={`font-bold min-[3644px]:ml-[30px] ml-[20px] max-[2377px]:ml-[15px]`}>UTP</p>
                    </div>
                    <div className={`min-[3644px]:h-[60px] h-[40px] max-[2377px]:h-[30px]`}></div>
                </div>
                <div className={`${theme == 'white' ? 'bg-white' : 'bg-[#0E2D43]'} grid grid-cols-2 max-[1800px]:grid-cols-1 min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] min-[3644px]:gap-[170px] gap-[100px] max-[2377px]:gap-[60px] min-[3644px]:pb-[117px] pb-[78px] max-[2377px]:pb-[60px] max-[680px]:pb-0`}>
                    <div className={`col-span-1 min-[3644px]:ml-[117px] ml-[78px] max-[2377px]:ml-[60px] max-[1800px]:mr-[60px] max-[1000px]:mx-[35px] max-[680px]:mx-[20px] flex justify-center`}>
                        <div className={`max-[1800px]:max-w-[750px]`}>
                            <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] max-[680px]:flex max-[680px]:justify-center max-[680px]:text-center`}>Обери Інтернет швидкість</p>
                            <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:hidden">
                                {isTarifsSwitch ? <TarifsSlider setSpeed={setSpeedUtp} speed={speedUtp} /> : <TarifsSliderGPON setSpeed={setSpeedGpon} speed={speedGpon} />}
                            </div>
                            <div className={`min-[681px]:hidden`}>
                                {isTarifsSwitch ? <TarifsSliderMobile setSpeed={setSpeedUtp} speed={speedUtp} /> : <TarifsSliderMobileGPON setSpeed={setSpeedGpon} speed={speedGpon} />}
                            </div>
                            <div className={`flex items-center min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px] min-[3644px]:mt-[110px] mt-[71px] max-[2377px]:mt-[53px] max-[680px]:hidden`}>
                                <RegularSwitch switchState={handleTVswitch} state={isTVChecked} />
                                <p className="font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">Додай MEGOGО Телебачення</p>
                            </div>
                            <p className="flex text-center items-center justify-center font-bold mt-[40px] text-[18px] leading-[22px] min-[681px]:hidden">Додай MEGOGО Телебачення</p>
                            <div className="flex items-center justify-center mt-[15px] min-[681px]:hidden">
                                <RegularSwitch switchState={setTVChecker} state={isTVChecked} />
                            </div>
                            {isTVChecked &&
                                <>
                                    <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:mt-[15px] max-[680px]:flex max-[680px]:justify-center max-[680px]:text-center`}>Обери передплату MEGOGO</p>
                                    <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:hidden">
                                        <MegogoSlider disableSwap="true" outerSetter={setTvBundle} outer={tvBundle} />
                                    </div>
                                </>
                            }
                            <div className="font-bold text-[18px] leading-[22px] mt-[20px] text-[#BDBDBD] min-[681px]:hidden">
                                <div className={`flex items-center gap-x-[20px]`}>
                                    <Checkbox onCheckedChange={() => setTvBundle(1)} className="size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]" />
                                    <p>Легка</p>
                                </div>
                                <div className="flex items-center gap-x-[20px] mt-[16px]">
                                    <Checkbox onCheckedChange={() => setTvBundle(2)} className="size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]" />
                                    <p>Оптимальна</p>
                                </div>
                                <div className={`flex items-center gap-x-[20px] mt-[16px]`}>
                                    <Checkbox onCheckedChange={() => setTvBundle(3)} className="size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]" />
                                    <p>Максимальна</p>
                                </div>
                                <div className="flex items-center gap-x-[20px] mt-[16px]">
                                    <Checkbox onCheckedChange={() => setTvBundle(4)} className="size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]" />
                                    <p>Спорт</p>
                                </div>
                                <div className="flex items-center gap-x-[20px] mt-[16px]">
                                    <Checkbox onCheckedChange={() => setTvBundle(5)} className="size-[40px] border-[1px] border-[#BDBDBD] rounded-[10px]" />
                                    <p>Кіно+</p>
                                </div>
                            </div>
                            <div className="flex items-center min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px] min-[3644px]:mt-[110px] mt-[71px] max-[2377px]:mt-[53px] max-[680px]:hidden">
                                <RegularSwitch switchState={setIPChecker} state={isIPChecked} />
                                <p className="font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">Додай зовнішню постійну ІР адресу</p>
                            </div>
                            <p className="flex text-center items-center justify-center mt-[40px] font-bold text-[18px] leading-[22px] min-[681px]:hidden">Додай зовнішню постійну ІР адресу</p>
                            <div className="flex items-center justify-center mt-[15px] min-[681px]:hidden">
                                <RegularSwitch switchState={setIPChecker} state={isIPChecked} />
                            </div>
                            <p className="max-[680px]:flex max-[680px]:text-center max-[680px]:justify-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px]">Внесіть авансом абонплату та отримайте знижку на підключення та обладнання </p>
                            <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:hidden">
                                <MonthsSlider outerSetter={setSelectMenu} outer={isSelectMenuChecked} />
                            </div>
                            <div className="mt-[20px] w-full min-[681px]:hidden">

                            </div>
                            <p className="max-[2377px]:w-full w-[717px] min-[3644px]:w-[994px] text-[#BDBDBD] min-[3644px]:mt-[60px] mt-[20px] max-[2377px]:mt-[15px] max-[680px]:mt-[15px] min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">*СТАБІЛЬНІСТЬ ЦІНИ – при внесенні авансового платежу  ми гарантуємо незмінність ціни тарифного плану протягом обраного періоду</p>

                            <div className="flex grid grid-cols-1 items-center font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px]">
                                <div className="flex items-center justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]">
                                    <h1>* Підключення</h1>
                                    <h1 className="opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]">1 500 грн.</h1>
                                </div>
                                <div className="flex items-center justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]">
                                    <h1>* Оптичний термінал <span className={`opacity-[0.5] min-[681px]:hidden relative left-[13px]`}><br />ONU HG8010H</span></h1>
                                    <h1 className="opacity-[0.5] max-[680px]:hidden">ONU HG8010H</h1>
                                    <h1 className="opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]">безкоштовна оренда</h1>
                                </div>
                                <div className="flex items-start justify-between max-[680px]:grid max-[680px]:grid-cols-2 max-[680px]:grid-rows-1 max-[680px]:border-b-[2px] max-[680px]:border-[#F4F2F2] max-[680px]:border-solid max-[680px]:pb-[10px]">
                                    <h1>* Wi-Fi роутер </h1>
                                    <h1 className="items-center justify-center text-center max-[680px]:hidden">Ультрапреміум <span className="opacity-[0.5]">MERCUSYS MR90X </span> <br />стандарт AX6000 </h1>
                                    <h1 className="max-[680px]:text-end opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]">3000 грн.</h1>
                                    <p className="row-start-3 col-span-2 opacity-[0.5] min-[681px]:hidden relative left-[13px] mt-[-24px]"><br />Ультрапреміум <span className="opacity-[0.5]">MERCUSYS <br />MR90X </span> стандарт AX6000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-span-1 col-start-2 max-[1800px]:col-start-1 flex justify-center min-[3644px]:h-[1272px] h-[848px] max-[2377px]:h-[648px] min-[3644px]:gap-[12px] gap-[10px] max-[2377px]:gap-[8px] max-[780px]:hidden">

                            <InternetBlock speedItem={(isTarifsSwitch ? UTP_SPEEDS.find(item => item.value === speedUtp) : GPON_SPEEDS.find(item => item.value === speedGpon)) ?? GPON_SPEEDS[0]} />
                            <div className={`${TVinfo[tvBundle].show ? '' : 'opacity-[0.4]'} min-[3644px]:text-[120px] min-[3644px]:leading-[120px] text-[80px] leading-[80px] max-[2377px]:text-[60px] max-[2377px]:leading-[60px] font-bold text-[#5F6061] flex items-center`}>
                                <p>+</p>
                            </div>
                            <TVBlock TVinfo={TVinfo} tvBundle={tvBundle} />
                        </div>
                        <div className="flex justify-center">
                            <div className="min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] max-[680px]:mt-[-30px] min-[3664px]:mr-[117px] mr-[78px] max-[2377px]:mr-[60px] w-full max-[1800px]:w-[750px] max-[1800px]:mr-[20px] max-[1800px]:ml-[20px]">
                                <div className="flex grid grid-cols-1 items-center w-full font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:gap-[22px] gap-[15px] max-[2377px]:gap-[12px] max-[680px]:hidden">
                                    <div className="flex items-end justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]">
                                        <h1>Акційна абонплата на Перші 4 місяці</h1>
                                        <h1 className="text-[#DC662D] flex items-end justify-between w-[287px] min-[3644px]:w-[430px] max-[2377px]:w-[258px]">
                                            <span className="min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[60px]">{Math.round(totalPrice * 0.6)}</span>
                                            <span className="min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[35px]">грн/міс</span>
                                        </h1>
                                    </div>
                                    <div className="flex items-end justify-between min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]">
                                        <h1>Абонплата з 5го місяця</h1>
                                        <h1 className="text-[#51B18B] flex items-end justify-between w-[287px] min-[3644px]:w-[430px] max-[2377px]:w-[258px]">
                                            <span className="min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[60px]">{Math.round(totalPrice)}</span>
                                            <span className="min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[35px]">грн/міс</span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full font-bold text-[18px] leading-[22px] min-[681px]:hidden">
                                    <div className="border-b-[2px] border-[#F4F2F2] border-solid pb-[10px]">
                                        <h1 className={`mt-[20px] mb-[10px]`}>Акційна абонплата на Перші 4 місяці</h1>
                                        <div className={`flex justify-end items-end text-[#DC662D]`}>
                                            <h1 className={`text-[70px] leading-[70px] `}>0</h1>
                                            <h1 className={`flex justify-end text-[30px] leading-[35px] w-[200px]`}>грн/міс</h1>
                                        </div>
                                    </div>
                                    <div className={`border-b-[2px] border-[#F4F2F2] border-solid pb-[10px]`}>
                                        <h1 className={`mt-[20px] mb-[10px]`}>Абонплата з 5го місяця</h1>
                                        <div className={`text-[#51B18B] flex items-end justify-end`}>
                                            <h1 className={`text-[70px] leading-[70px]`}>0</h1>
                                            <h1 className={`flex justify-end text-[30px] leading-[35px] w-[200px]`}>грн/міс</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className={`min-[3644px]:mt-[66px] mt-[44px] max-[2377px]:mt-[30px] max-[680px]:flex max-[680px]:justify-center`}>
                                    <Button className="w-full max-[680px]:w-[270px] bg-[#DC662D] text-white font-semibold rounded-full min-[3644px]:h-[118px] h-[78px] max-[2377px]:h-[60px] shadow-[0_4px_20px_0px_#DC662D50] min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]" onClick={() => onOpen("phone-input")} variant="connect">Підключитись</Button>
                                </div>
                                <div className={`flex justify-center min-[3644px]:gap-[30px] gap-[20px] max-[2377px]:gap-[15px] min-[3644px]:mt-[39px] mt-[26px] max-[2377px]:mt-[20px] max-[680px]:hidden`}>
                                    <p className={`font-normal min-[3644px]:text-[27px] min-[3644px]:leading-[42px] text-[18px] leading-[28px] max-[2377px]:text-[14px] max-[2377px]:leading-[22px]`}>Є питання? Ми передзвоним Вам через <span className={`font-semibold`}>30 секунд!</span></p>
                                    <Link href={'#'} className={`font-normal text-[#DC662D] underline underline-offset-[3px] min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px]`}>Передзвонити мені</Link>
                                </div>
                                <div className={`min-[681px]:hidden`}>
                                    <p className={`flex justify-center font-normal text-[14px] leading-[22px] mt-[15px]`}>Є питання? Ми передзвоним</p>
                                    <p className={`flex justify-center font-normal text-[14px] leading-[22px]`}>Вам через <span className={`font-semibold`}>&nbsp;30 секунд!</span></p>
                                    <Link href={'#'} className={`flex justify-center font-normal text-[#DC662D] underline underline-offset-[3px] text-[16px] leading-[22px] mt-[10px]`}>Передзвонити мені</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CalculatorTarifs;
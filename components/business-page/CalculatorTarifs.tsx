import { useState, useEffect, useMemo } from 'react';
import { useToast } from "@/hooks/use-toast";
import {
    GPON_SPEEDS,
    UTP_SPEEDS,
    REAL_IP_PRICE_physic as REAL_IP_PRICE,
    ONT_model
} from "@/constants/internet_speeds";
import {
    UTP_SETUP_PRICES,
    GPON_SETUP_PRICES
} from "@/constants/setup_prices";
import { ROUTER_PRICE } from '@/constants/router_price';
import { MEGOGO_BUNDLES } from '@/constants/slider';
import { MONTHS } from '@/constants/slider';
import { TV_INFO_ITEMS as TVinfo } from '@/constants/megogo';

import { useModal } from '@/hooks/use-modal-store';

import type { ThemeProps } from '@/types/Theme';
import type { OrderData as OrderDataProps } from '@/hooks/use-modal-store';

import {
    TarifsSlider,
    TarifsSliderGPON,
    MonthsSlider,
    MegogoSlider,
    TarifsSliderMobile,
    TarifsSliderMobileGPON
} from "../ui/sliders";
import { TarifsSwitch, RegularSwitch } from "../ui/switches";
import MegogoSliderMobile from '@/components/business-page/MegogoSliderMobile';

import InternetBlock from "@/components/tariff-page/InternetBlock";
import TVBlock from "@/components/tariff-page/TVBlock";
import { Button } from '@/components/ui/button';
import MobileMonthsSelect from './MobileMonthsSelect';

const CalculatorTarifs = ({ theme }: ThemeProps) => {
    // In YOUR UI (based on the screenshot): when the switch is on the RIGHT (G-PON),
    // you render TarifsSlider (UTP_SPEEDS). That corresponds to isTarifsSwitch === true.
    const [isTarifsSwitch, setTarifsSwitch] = useState<boolean>(true);
const XGS_DEFAULT_SPEED = useMemo(
  () => GPON_SPEEDS.find(s => s.speed === 2.5)?.value ?? GPON_SPEEDS[0].value,
  []
);

    const [speedUtp, setSpeedUtp] = useState<number>(3);
const [speedGpon, setSpeedGpon] = useState<number>(XGS_DEFAULT_SPEED);
    const [isTVChecked, setTVChecker] = useState<boolean>(true);
    const [isIPChecked, setIPChecker] = useState<boolean>(false);
    const [isSelectMenuChecked, setSelectMenu] = useState<number>(1);
    const [tvBundle, setTvBundle] = useState<number>(0);
    const [prepaidMonths, setPrepaidMonths] = useState<number>(1);
    const [setupPrice, setSetupPrice] = useState<number>(1500);
    const [routerPrice, setRouterPrice] = useState<number>(1799);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [discountValue, setDiscountValue] = useState<number>(100);
    const [periodDiscountValue, setPeriodDiscountValue] = useState<number>(1);

    const [lastActiveTvBundle, setLastActiveTvBundle] = useState<number>(0); // Stores the bundle when TV was last on

    const { toast } = useToast();
    const { onOpen } = useModal();

    // =========================
    // LOCK "Обери Інтернет швидкість" AT 1 Гбіт WHEN G-PON IS SELECTED
    // =========================
    const isGponSelected = isTarifsSwitch; // <-- IMPORTANT for your current UI screenshot

    // pick the 1Gb option from UTP_SPEEDS. If you don't have explicit "1 Гбіт",
    // fallback to "max value" (usually the last mark).
    const oneGigUtpValue = useMemo(() => {
        const byGb = UTP_SPEEDS.find(
            (x: any) => x?.speed === 1 && typeof x?.measure === 'string' && /гб/i.test(x.measure)
        );
        if (byGb) return byGb.value;

        const by1000 = UTP_SPEEDS.find(
            (x: any) => x?.speed === 1000 && typeof x?.measure === 'string' && /мб/i.test(x.measure)
        );
        if (by1000) return by1000.value;

        // fallback: assume highest value corresponds to 1Gb
        const vals = UTP_SPEEDS.map((x: any) => Number(x?.value)).filter((n: any) => Number.isFinite(n));
        return vals.length ? Math.max(...vals) : (UTP_SPEEDS[0]?.value ?? 3);
    }, []);

    const setSpeedUtpGuarded = (v: number) => {
        // If NOT on G-PON -> allow user to choose any speed
        if (!isGponSelected) {
            setSpeedUtp(v);
            return;
        }

        // If on G-PON -> always force 1Gb
        if (v === oneGigUtpValue) {
            setSpeedUtp(v);
            return;
        }

        setSpeedUtp(oneGigUtpValue);

        toast({
            variant: "destructive",
            title: "Доступно лише 1 Гбіт",
            description: "На G-PON доступна тільки швидкість 1 Гбіт."
        });
    };

    // When user switches to G-PON => force 1Gb immediately
    useEffect(() => {
        if (isGponSelected) {
            setSpeedUtp(oneGigUtpValue);
        }
    }, [isGponSelected, oneGigUtpValue]);

    // Safety: if something else tries to change speed while on G-PON, snap back
    useEffect(() => {
        if (isGponSelected && speedUtp !== oneGigUtpValue) {
            setSpeedUtp(oneGigUtpValue);
        }
    }, [isGponSelected, speedUtp, oneGigUtpValue]);

    // Also block mouse/touch interaction on the slider when locked (works even if the slider is uncontrolled)
    const sliderLockClass = isGponSelected ? 'pointer-events-none select-none opacity-60' : '';

    useEffect(() => {
            setTvBundle(0);
    }, [isTarifsSwitch]);

useEffect(() => {
  // XGS-PON is when isTarifsSwitch === false
  if (!isTarifsSwitch) {
    setSpeedGpon(XGS_DEFAULT_SPEED);
  }
}, [isTarifsSwitch, XGS_DEFAULT_SPEED]);

    useEffect(() => {

        // Internet price
        let newInternetPrice = 0;
        if (isTarifsSwitch) {
            const selectedUtp = UTP_SPEEDS.find(item => item.value === speedUtp);
            newInternetPrice = selectedUtp ? selectedUtp.price : 0;
        } else {
            const selectedGpon = GPON_SPEEDS.find(item => item.value === speedGpon);
            newInternetPrice = selectedGpon ? selectedGpon.price : 0;
        }

        const periodDiscount = prepaidMonths !== undefined
            ? MONTHS.find((element) => element.months == prepaidMonths)?.sum
            : 1;
        setPeriodDiscountValue(periodDiscount ?? 1);

        // TV price
        let newTvPrice = 0;
        if (isTVChecked) {
            if (!isTarifsSwitch && (tvBundle === 0 || tvBundle === 1)) {
                newTvPrice = 0;
            } else {
                newTvPrice = MEGOGO_BUNDLES.find((element) => element.value === tvBundle)?.price ?? 0;
            }
        }

        // Static IP monthly
        const newIpPrice = isIPChecked ? REAL_IP_PRICE : 0;

        // Setup price
        let newSetupPrice = (isTarifsSwitch ? UTP_SETUP_PRICES : GPON_SETUP_PRICES)
            .find(tier => prepaidMonths == tier.months)?.price ?? 1500;

        // High-speed GPON setup pricing (kept from your original logic)
        if (!isTarifsSwitch) {
            const selectedSpeed = GPON_SPEEDS.find(item => item.value === speedGpon);
            if (selectedSpeed && (selectedSpeed.speed === 2.5)) {
                newSetupPrice = 2999;
            } else if (selectedSpeed && (selectedSpeed.speed === 5)) {
                newSetupPrice = 2999;
            } else if (selectedSpeed && (selectedSpeed.speed === 10)) {
                newSetupPrice = 2999;
            }
        }

        if (isIPChecked) {
            newSetupPrice = newSetupPrice + 100;
        }
        setSetupPrice(newSetupPrice);

        // Router price
        const newRouterPrice = ROUTER_PRICE.find(tier => prepaidMonths == tier.months)?.price ?? 3000;
        setRouterPrice(newRouterPrice);

        // Discount FIX (prevents -550). If base is 250 and promo must be 150 => discount = 100.
        let newDiscountValue = 100;

        if (!isTarifsSwitch) {
            if (speedGpon === 1) newDiscountValue = 100;
            else if (speedGpon === 2) newDiscountValue = 400;
            else if (speedGpon === 3) newDiscountValue = 250;

            if (tvBundle === 2) newDiscountValue = 150;
        } else {
            newDiscountValue = 100;
        }

        setDiscountValue(newDiscountValue);

        // Total monthly
        setTotalPrice(newInternetPrice + newTvPrice + newIpPrice);
    }, [
        isTarifsSwitch,
        speedUtp,
        speedGpon,
        isTVChecked,
        tvBundle,
        isIPChecked,
        prepaidMonths
    ]);

    const handleTVswitch = () => {
        const newIsTVChecked = !isTVChecked;
        // your original code effectively keeps TV always ON
        setTVChecker(true);

        if (newIsTVChecked) {
            setTvBundle(lastActiveTvBundle === 0 ? 0 : lastActiveTvBundle);
        } else {
            if (tvBundle !== 0) {
                setLastActiveTvBundle(tvBundle);
            }
            setTvBundle(0);
        }
    };

    const prepareOrderData = () => {
        const selectedSpeed = isTarifsSwitch
            ? UTP_SPEEDS.find(item => item.value === speedUtp)
            : GPON_SPEEDS.find(item => item.value === speedGpon);

        const tvPackage = isTVChecked && tvBundle ? {
            id: tvBundle,
            name: TVinfo[tvBundle].name,
            price: MEGOGO_BUNDLES.find(bundle => bundle.value === tvBundle)?.price || 0
        } : undefined;

        const orderData: OrderDataProps = {
            internetType: isTarifsSwitch ? "UTP" : "GPON",

            internetSpeed: selectedSpeed?.speed || 0,
            internetMeasure: selectedSpeed?.measure || 'мбіт',
            internetPrice: selectedSpeed?.price || 0,

            hasTV: isTVChecked,
            tvPackage,

            hasStaticIP: isIPChecked,

            prepaidMonths,
            setupPrice,
            routerPrice,
            totalMonthlyPrice: totalPrice,

            additionalInfo: [
                `${isTarifsSwitch ? 'UTP' : 'GPON'} ${selectedSpeed?.speed}${selectedSpeed?.measure}`,
                isTVChecked ? `ТВ пакет: ${TVinfo[tvBundle].name}` : 'Без ТВ',
                isIPChecked ? 'Зі статичною IP-адресою' : 'Без статичної IP-адреси',
                `Передплата на ${prepaidMonths} місяців`,
                `Вартість підключення: ${setupPrice} грн`,
                `Вартість роутера: ${routerPrice} грн`,
                `Щомісячний платіж: ${totalPrice} грн`
            ].join('\n')
        };

        if (!selectedSpeed) {
            throw new Error('Не вибрана швидкість інтернету');
        }

        return orderData;
    };

    const handleOpenModal = () => {
        try {
            const orderData = prepareOrderData();
            onOpen("phone-input", { orderData });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Помилка",
                description: error instanceof Error ? error.message : "Помилка формування заявки"
            });
        }
    };

    return (
        <div className={`min-[3644px]:mx-[240px] mx-[170px] max-[2377px]:mx-[120px] max-[1800px]:mx-[85px] max-[1247px]:mx-[67px] max-[932px]:mx-[35px] max-[680px]:mx-0 min-[3644px]:mt-[90px] mt-[60px] max-[2377px]:mt-[45px] max-[932px]:mt-[30px] max-[680px]:mt-[30px] + ${theme == 'white' ? 'text-[#5F6061]' : 'text-white'}`}>
            <div className={`${theme == 'white' ? 'shadow-[0_4px_29px_0px_#E6E3E3]' : 'shadow-[0_4px_29px_0px_#0B273C]'} max-[680px]:shadow-none w-full`}>
                <div className={`min-[3644px]:pt-[117px] pt-[78px] max-[2377px]:pt-[60px] max-[680px]:pt-[20px] rounded-t-[10px] + ${theme == 'white' ? 'bg-[#F4F2F2]' : 'bg-[#123853]'}`}>
                    <h1 className={`flex text-center items-center justify-center font-bold  text-[50px] leading-[62px] max-[2377px]:text-[42px] max-[2377px]:leading-[50px] min-[3644px]:text-[75px] min-[3644px]:leading-[93px] max-[680px]:text-[24px] max-[680px]:leading-[30px]`}>Калькулятор тарифу</h1>
                    <p className={`flex text-center items-center justify-center min-[3644px]:text-[48px] min-[3644px]:leading-[63px] text-[32px] leading-[42px] max-[2377px]:text-[24px] max-[2377px]:leading-[32px] max-[680px]:text-[16px] max-[680px]:leading-[20px] min-[3644px]:mt-[30px] mt-[15px] max-[680px]:mt-[10px]`}><span className={`font-bold`}>Створи свій тариф&nbsp;</span> <span className={`font-bold max-[680px]:hidden`}>/</span> <span className={`max-[680px]:hidden`}>&nbsp;Оберiть технологію підключення</span></p>
                    <p className={`flex text-center items-center justify-center text-[16px] leading-[20px] mt-[5px] min-[681px]:hidden`}>Оберiть технологію підключення</p>
                    <div className={`flex items-center justify-center min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[84px] mt-[56px] max-[2377px]:mt-[30px] max-[680px]:mt-[15px] `}>
                        <p className={`font-bold min-[3644px]:mr-[30px] mr-[20px] max-[2377px]:mr-[15px]`}>XGS-PON</p>
                        <TarifsSwitch isTarifsSwitch={isTarifsSwitch} setTarifsSwitch={setTarifsSwitch} />
                        <p className={`font-bold min-[3644px]:ml-[30px] ml-[20px] max-[2377px]:ml-[15px]`}>G-PON</p>
                    </div>
                    <div className="min-[3644px]:h-[60px] h-[40px] max-[2377px]:h-[30px]"></div>
                </div>

                <div className={`${theme == 'white' ? 'bg-white' : 'bg-[#0E2D43]'} grid grid-cols-2 max-[1800px]:grid-cols-1 min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] min-[3644px]:gap-[170px] gap-[100px] max-[2377px]:gap-[60px] min-[3644px]:pb-[117px] pb-[78px] max-[2377px]:pb-[60px] max-[680px]:pb-0`}>
                    <div className={`col-span-1 min-[3644px]:ml-[117px] ml-[78px] max-[2377px]:ml-[60px] max-[1800px]:mr-[60px] max-[1000px]:mx-[35px] max-[680px]:mx-[20px] flex justify-center`}>
                        <div className={`max-[1800px]:max-w-[750px]`}>
                            <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] max-[680px]:flex max-[680px]:justify-center max-[680px]:text-center`}>Обери Інтернет швидкість</p>

                            <div className={`min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:hidden ${sliderLockClass}`}>
                                {isTarifsSwitch
                                    ? <TarifsSlider setSpeed={setSpeedUtpGuarded} speed={speedUtp} />
                                    : <TarifsSliderGPON setSpeed={setSpeedGpon} speed={speedGpon} />
                                }
                            </div>

                            <div className={`min-[681px]:hidden ${sliderLockClass}`}>
                                {isTarifsSwitch
                                    ? <TarifsSliderMobile setSpeed={setSpeedUtpGuarded} speed={speedUtp} />
                                    : <TarifsSliderMobileGPON setSpeed={setSpeedGpon} speed={speedGpon} />
                                }
                            </div>

                            <div className={`flex items-center min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px] min-[3644px]:mt-[110px] mt-[71px] max-[2377px]:mt-[53px] max-[680px]:hidden`}>
                                <RegularSwitch switchState={handleTVswitch} state={isTVChecked} />
                                <p className="font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">Додай MEGOGО Телебачення</p>
                            </div>
                            <p className="flex text-center items-center justify-center font-bold mt-[40px] text-[18px] leading-[22px] min-[681px]:hidden">Додай MEGOGО Телебачення</p>
                            <div className="flex items-center justify-center mt-[15px] min-[681px]:hidden">
                                {/* <RegularSwitch switchState={setTVChecker} state={isTVChecked} /> */}
                            </div>

                            <>
                                <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:mt-[15px] max-[680px]:flex max-[680px]:justify-center max-[680px]:text-center`}>Обери передплату MEGOGO</p>
                                <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:hidden">
                                    <MegogoSlider disableSwap={true} outerSetter={setTvBundle} outer={tvBundle} isEnabled={isTVChecked} />
                                </div>
                            </>
                            <MegogoSliderMobile selectedBundle={tvBundle} onBundleSelect={setTvBundle} isEnabled={isTVChecked} />

                            <div className="flex items-center min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px] min-[3644px]:mt-[110px] mt-[71px] max-[2377px]:mt-[53px] max-[680px]:hidden">
                                <RegularSwitch switchState={setIPChecker} state={isIPChecked} />
                                <p className="font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">Додай зовнішню постійну ІРv4 адресу</p>
                            </div>
                            <p className="flex text-center items-center justify-center mt-[40px] font-bold text-[18px] leading-[22px] min-[681px]:hidden">Додай зовнішню постійну ІРv4 адресу</p>
                            <div className="flex items-center justify-center mt-[15px] min-[681px]:hidden">
                                <RegularSwitch switchState={setIPChecker} state={isIPChecked} />
                            </div>

                            <p className="max-[680px]:flex max-[680px]:text-center max-[680px]:justify-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px]">Внесіть авансом абонплату та отримайте знижку на підключення та обладнання </p>

                            <div className="mt-[20px] w-full min-[681px]:hidden">
                                <MobileMonthsSelect
                                    outerSetter={setSelectMenu}
                                    outer={isSelectMenuChecked}
                                    setMonths={setPrepaidMonths}
                                />
                            </div>

                            <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:hidden">
                                <MonthsSlider outerSetter={setSelectMenu} setMonths={setPrepaidMonths} outer={isSelectMenuChecked} />
                            </div>

                            <p className="max-[2377px]:w-full w-[717px] min-[3644px]:w-[994px] text-[#BDBDBD] min-[3644px]:mt-[60px] mt-[20px] max-[2377px]:mt-[15px] max-[680px]:mt-[15px] min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">*СТАБІЛЬНІСТЬ ЦІНИ – при внесенні авансового платежу  ми гарантуємо незмінність ціни тарифного плану протягом обраного періоду</p>

                            <div className="grid grid-cols-1 items-center font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px]">
                                <div className="flex items-center justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]">
                                    <h1>* Підключення</h1>
                                    <h1 className="opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]">{setupPrice} грн.</h1>
                                </div>

                                <div className="flex items-center justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]">
                                    <h1>* Оптичний термінал <span className={`opacity-[0.5] min-[681px]:hidden relative left-[13px]`}><br />{!isTarifsSwitch ? 'ONU XGS-PON' : 'ONU  EG8010H'}</span></h1>
                                    <h1 className="opacity-[0.5] max-[680px]:hidden">{!isTarifsSwitch ? 'ONU XGS-PON' : 'ONU  EG8010H'}</h1>
                                    <h1 className="opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]">безкоштовна оренда</h1>
                                </div>

                                <div className="flex items-start justify-between max-[680px]:grid max-[680px]:grid-cols-2 max-[680px]:grid-rows-1 max-[680px]:border-b-[2px] max-[680px]:border-[#F4F2F2] max-[680px]:border-solid max-[680px]:pb-[10px]">
                                    <div className='text-center'>
                                        <h1>* Wi-Fi роутер </h1>
                                        <p className='text-sm'>За потреби</p>
                                    </div>
                                    <h1 className="items-center justify-center text-center max-[680px]:hidden">
                                        <span className="opacity-[0.5]">
                                            {!isTarifsSwitch ? '' : 'MERCUSYS MR80X'}
                                        </span>
                                    </h1>
                                    <h1 className="max-[680px]:text-end opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]">
                                        {!isTarifsSwitch ? 'Договірна ціна' : `${routerPrice} грн.`}
                                    </h1>
                                    <p className="row-start-3 col-span-2 opacity-[0.5] min-[681px]:hidden relative left-[13px] mt-[-24px]">
                                        <br />
                                        <span className="opacity-[0.5]">
                                            {!isTarifsSwitch ? '' : <>MERCUSYS <br />MR80X</>}
                                        </span>
                                    </p>
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
                                <div className="grid grid-cols-1 items-center w-full font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:gap-[22px] gap-[15px] max-[2377px]:gap-[12px] max-[680px]:hidden">
                                    <div className="flex items-end justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]">
                                        <h1>Акційна абонплата на перші 2 місяці</h1>
                                        <h1 className="text-[#DC662D] flex items-end justify-between gap-3">
                                            <span className="min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[60px]">{totalPrice - discountValue}</span>
                                            <span className="text-nowrap min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[35px]">грн/міс</span>
                                        </h1>
                                    </div>
                                    <div className="flex items-end justify-between min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]">
                                        <h1>Абонплата з 3го місяця</h1>
                                        <h1 className="text-[#51B18B] flex items-end justify-between gap-3">
                                            <span className="min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[60px]">{totalPrice - periodDiscountValue}</span>
                                            <span className="text-nowrap min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[35px]">грн/міс</span>
                                        </h1>
                                    </div>
                                </div>

                                <div className="w-full font-bold text-[18px] leading-[22px] min-[681px]:hidden">
                                    <div className="border-b-[2px] border-[#F4F2F2] border-solid pb-[10px]">
                                        <h1 className={`mt-[20px] mb-[10px]`}>Акційна абонплата на перші 2 місяці</h1>
                                        <div className="flex justify-between items-end text-[#DC662D]">
                                            <h1 className="text-[70px] leading-[70px]">{totalPrice - discountValue}</h1>
                                            <h1 className="text-nowrap text-[30px] leading-[35px]">грн/міс</h1>
                                        </div>
                                    </div>
                                    <div className={`border-b-[2px] border-[#F4F2F2] border-solid pb-[10px]`}>
                                        <h1 className={`mt-[20px] mb-[10px]`}>Абонплата з 3го місяця</h1>
                                        <div className={`text-[#51B18B] flex items-end justify-between`}>
                                            <h1 className={`text-[70px] leading-[70px]`}>{totalPrice - periodDiscountValue}</h1>
                                            <h1 className="text-nowrap text-[30px] leading-[35px]">грн/міс</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Button
                                        onClick={() => handleOpenModal()}
                                        className="mt-10"
                                        variant="MobConnect2"
                                    >
                                        Підключитись
                                    </Button>
                                </div>

                                <div className={`min-[3644px]:mt-[66px] mt-[44px] max-[2377px]:mt-[30px] max-[680px]:flex max-[680px]:justify-center`}>
                                    <Button
                                        className="w-full max-[680px]:w-[270px] bg-[#DC662D] text-white font-semibold rounded-full min-[3644px]:h-[118px] h-[78px] max-[2377px]:h-[60px] shadow-[0_4px_20px_0px_#DC662D50] min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]"
                                        onClick={() => handleOpenModal()}
                                        variant="connect"
                                    >
                                        Підключитись
                                    </Button>
                                </div>

                                <div className={`flex justify-center min-[3644px]:gap-[30px] gap-[20px] max-[2377px]:gap-[15px] min-[3644px]:mt-[39px] mt-[26px] max-[2377px]:mt-[20px] max-[680px]:hidden`}>
                                    <p className={`font-normal min-[3644px]:text-[27px] min-[3644px]:leading-[42px] text-[18px] leading-[28px] max-[2377px]:text-[14px] max-[2377px]:leading-[22px]`}>Є питання? Ми передзвоним Вам через <span className={`font-semibold`}>30 секунд!</span></p>
                                    <div onClick={() => onOpen("call")} className={`cursor-pointer font-normal text-[#DC662D] underline underline-offset-[3px] min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px]`}>Передзвонити мені</div>
                                </div>

                                <div className={`min-[681px]:hidden`}>
                                    <p className={`flex justify-center font-normal text-[14px] leading-[22px] mt-[15px]`}>Є питання? Ми передзвоним</p>
                                    <p className={`flex justify-center font-normal text-[14px] leading-[22px]`}>Вам через <span className={`font-semibold`}>&nbsp;30 секунд!</span></p>
                                    <div onClick={() => onOpen("call")} className={`flex justify-center font-normal text-[#DC662D] underline underline-offset-[3px] text-[16px] leading-[22px] mt-[10px]`}>Передзвонити мені</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CalculatorTarifs;

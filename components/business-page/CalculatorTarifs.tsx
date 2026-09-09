"use client";

import { useState, useEffect, useMemo } from 'react';
import { useToast } from "@/hooks/use-toast";
import {
    GPON_SPEEDS,
    UTP_SPEEDS,
    REAL_IP_PRICE_physic as REAL_IP_PRICE,
    ONT_model,
    isXgsPon
} from "@/constants/internet_speeds";
import { getSetupPrice } from "@/constants/setup_prices";
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

// Допоміжні функції для визначення включених пакетів та цін
const getIncludedTvBundle = (mbps: number) => {
    if (mbps >= 10000) return 3; // Оптимальна (3)
    if (mbps >= 5000)  return 2; // Легка (2)
    return 0;                    // Безкоштовне (0) — 3 Гбіт/с включно
};
const getMegogoPrice = (bundleId: number) => {
    const bundle = MEGOGO_BUNDLES?.find(b => b.value === bundleId);
    if (bundle) return bundle.price;
    // Фолбек на ціни з лендінгу
    const fallbackPrices: Record<number, number> = { 0: 0, 1: 50, 2: 85, 3: 200, 4: 350 };
    return fallbackPrices[bundleId] || 0;
};

const CalculatorTarifs = ({ theme }: ThemeProps) => {

    const [isTarifsSwitch, setTarifsSwitch] = useState<boolean>(true);

    const XGS_DEFAULT_SPEED = useMemo(
        () => GPON_SPEEDS.find(s => s.mbps === 5000)?.value ?? GPON_SPEEDS[0].value,[]
    );

    const UTP_DEFAULT_SPEED = useMemo(
        () => UTP_SPEEDS.find(s => s.mbps === 1000)?.value ?? UTP_SPEEDS[0].value, []
    );

    const[speedUtp, setSpeedUtp] = useState<number>(UTP_DEFAULT_SPEED);
    const[speedGpon, setSpeedGpon] = useState<number>(XGS_DEFAULT_SPEED);

    const[isTVChecked, setTVChecker] = useState<boolean>(true);
    const [isIPChecked, setIPChecker] = useState<boolean>(false);
    const [isSelectMenuChecked, setSelectMenu] = useState<number>(1);

    const [tvBundle, setTvBundle] = useState<number>(0);

    const[prepaidMonths, setPrepaidMonths] = useState<number>(1);
    const[setupPrice, setSetupPrice] = useState<number>(1500);
    const[routerPrice, setRouterPrice] = useState<number>(1799);

    // Зберігаємо базову ціну інтернету для передачі у заявку
    const [internetBasePrice, setInternetBasePrice] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    const { toast } = useToast();
    const { onOpen } = useModal();

    // Обраний тариф — єдине джерело правди для цін, ТБ-пакета та заявки
    const selectedSpeedItem = useMemo(
        () => (isTarifsSwitch
            ? UTP_SPEEDS.find(i => i.value === speedUtp)
            : GPON_SPEEDS.find(i => i.value === speedGpon)) ?? UTP_SPEEDS[0],
        [isTarifsSwitch, speedUtp, speedGpon]
    );

    // Технологія — від обраної швидкості: 3 Гбіт/с і вище працюють на XGS-PON
    const isXgs = isXgsPon(selectedSpeedItem.mbps);

    // Скидання швидкості XGS-PON на дефолтну при перемиканні технології
    useEffect(() => {
        if (!isTarifsSwitch) {
            setSpeedGpon(XGS_DEFAULT_SPEED);
        }
    },[isTarifsSwitch, XGS_DEFAULT_SPEED]);

    // ТБ-пакет завжди йде за тарифом: піднявся на 10 Гбіт — Оптимальна,
    // повернувся на нижчу швидкість — повзунок MEGOGO опускається разом із ним
    useEffect(() => {
        if (!isTVChecked) return;

        setTvBundle(getIncludedTvBundle(selectedSpeedItem.mbps));
    },[selectedSpeedItem, isTVChecked]);

    // Основна логіка перерахунку цін
    useEffect(() => {
        const { mbps } = selectedSpeedItem;

        // 1. Абонплата за інтернет — з тарифної шкали
        const newInternetPrice = selectedSpeedItem.price;
        setInternetBasePrice(newInternetPrice);

        // 2. ТБ ціна (доплата за вищий пакет або 0, якщо обрано базовий для тарифу)
        let newTvPrice = 0;
        if (isTVChecked) {
            const includedBundleId = getIncludedTvBundle(mbps);

            if (tvBundle === includedBundleId) {
                // Якщо обрано пакет, що вже включений у тариф (бандл) — ТБ безкоштовне (0 грн)
                newTvPrice = 0;
            } else {
                // Якщо обрано будь-який інший пакет — додаємо його ПОВНУ вартість, без жодних мінусів
                newTvPrice = getMegogoPrice(tvBundle);
            }
        }

        const newIpPrice = isIPChecked ? REAL_IP_PRICE : 0;

        // 3. Ціна підключення — залежить від швидкості та строку передплати
        let newSetupPrice = getSetupPrice(mbps, prepaidMonths);

        // Додаткова вартість за налаштування статичної IP-адреси
        if (isIPChecked) {
            newSetupPrice += 100;
        }

        setSetupPrice(newSetupPrice);

        // 4. Ціна роутера
        const newRouterPrice = ROUTER_PRICE
            .find(t => prepaidMonths == t.months)?.price ?? 3000;
        setRouterPrice(newRouterPrice);

        // 5. Загальна ціна за місяць
        setTotalPrice(newInternetPrice + newTvPrice + newIpPrice);

    },[
        selectedSpeedItem,
        isTVChecked,
        tvBundle,
        isIPChecked,
        prepaidMonths
    ]);

    const handleTVswitch = () => {
        const newState = !isTVChecked;
        setTVChecker(newState);

        // Увімкнення поверне пакет через ефект вище, вимкнення — обнуляє
        if (!newState) {
            setTvBundle(0);
        }
    };

    // Абонент може підняти пакет вручну; наступна зміна тарифу знову його вирівняє
    const handleTvBundleSelect = (bundle: number) => {
        setTvBundle(bundle);
    };

    const prepareOrderData = () => {
        const selectedSpeed = selectedSpeedItem;

        const tvPackage = isTVChecked && tvBundle ? {
            id: tvBundle,
            name: TVinfo[tvBundle].name,
            price: getMegogoPrice(tvBundle)
        } : undefined;

        const orderData: OrderDataProps = {
            internetType: isXgs ? "XGS-PON" : "G-PON",
            internetSpeed: selectedSpeed?.speed || 0,
            internetMeasure: selectedSpeed?.measure || 'мбіт',
            internetPrice: internetBasePrice,

            hasTV: isTVChecked,
            tvPackage,

            hasStaticIP: isIPChecked,

            prepaidMonths,
            setupPrice,
            routerPrice,
            totalMonthlyPrice: totalPrice,

            additionalInfo:[
                `${isXgs ? 'XGS-PON' : 'G-PON'} ${selectedSpeed?.speed} ${selectedSpeed?.measure}`,
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
                    <p className={`flex text-center items-center justify-center min-[3644px]:text-[48px] min-[3644px]:leading-[63px] text-[32px] leading-[42px] max-[2377px]:text-[24px] max-[2377px]:leading-[32px] max-[680px]:text-[16px] max-[680px]:leading-[20px] min-[3644px]:mt-[30px] mt-[15px] max-[680px]:mt-[10px]`}><span className={`font-bold`}>Створи свій тариф&nbsp;</span> <span className={`font-bold max-[680px]:hidden`}>/</span> <span className={`max-[680px]:hidden`}>&nbsp;Регулярні тарифи для діючих абонентів</span></p>
                    <p className={`flex text-center items-center justify-center text-[16px] leading-[20px] mt-[5px] min-[681px]:hidden`}>Регулярні тарифи для діючих абонентів</p>
                    <div className={`flex items-center justify-center min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[84px] mt-[56px] max-[2377px]:mt-[30px] max-[680px]:mt-[15px] `}>
                        <p className={`font-bold`}>Єдина технологія: 100% Оптика PON</p>
                    </div>
                    <div className="min-[3644px]:h-[60px] h-[40px] max-[2377px]:h-[30px]"></div>
                </div>

                <div className={`${theme == 'white' ? 'bg-white' : 'bg-[#0E2D43]'} grid grid-cols-2 max-[1800px]:grid-cols-1 min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] min-[3644px]:gap-[170px] gap-[100px] max-[2377px]:gap-[60px] min-[3644px]:pb-[117px] pb-[78px] max-[2377px]:pb-[60px] max-[680px]:pb-0`}>
                    <div className={`col-span-1 min-[3644px]:ml-[117px] ml-[78px] max-[2377px]:ml-[60px] max-[1800px]:mr-[60px] max-[1000px]:mx-[35px] max-[680px]:mx-[20px] flex justify-center`}>
                        <div className={`max-[1800px]:max-w-[750px] w-full`}>
                            <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] max-[680px]:flex max-[680px]:justify-center max-[680px]:text-center`}>Обери Інтернет швидкість</p>

                            <div className={`min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:hidden`}>
                                {isTarifsSwitch
                                    ? <TarifsSlider setSpeed={setSpeedUtp} speed={speedUtp} />
                                    : <TarifsSliderGPON setSpeed={setSpeedGpon} speed={speedGpon} />
                                }
                            </div>

                            <div className={`min-[681px]:hidden`}>
                                {isTarifsSwitch
                                    ? <TarifsSliderMobile setSpeed={setSpeedUtp} speed={speedUtp} />
                                    : <TarifsSliderMobileGPON setSpeed={setSpeedGpon} speed={speedGpon} />
                                }
                            </div>

                            <div className={`flex items-center min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px] min-[3644px]:mt-[110px] mt-[71px] max-[2377px]:mt-[53px] max-[680px]:hidden`}>
                                <RegularSwitch switchState={handleTVswitch} state={isTVChecked} />
                                <p className="font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">Додай MEGOGО Телебачення</p>
                            </div>
                            <p className="flex text-center items-center justify-center font-bold mt-[40px] text-[18px] leading-[22px] min-[681px]:hidden">Додай MEGOGО Телебачення</p>
                            <div className="flex items-center justify-center mt-[15px] min-[681px]:hidden">
                                <RegularSwitch switchState={handleTVswitch} state={isTVChecked} />
                            </div>

                            <>
                                <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:mt-[15px] max-[680px]:flex max-[680px]:justify-center max-[680px]:text-center`}>Обери передплату MEGOGO</p>
                                <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] max-[680px]:hidden">
                                    <MegogoSlider disableSwap={true} outerSetter={handleTvBundleSelect} outer={tvBundle} isEnabled={isTVChecked} />
                                </div>
                            </>
                            <MegogoSliderMobile selectedBundle={tvBundle} onBundleSelect={handleTvBundleSelect} isEnabled={isTVChecked} />

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
                                    <h1>* Оптичний термінал <span className={`opacity-[0.5] min-[681px]:hidden relative left-[13px]`}><br />{isXgs ? ONT_model : 'ONU  EG8010H'}</span></h1>
                                    <h1 className="opacity-[0.5] max-[680px]:hidden">{isXgs ? ONT_model : 'ONU  EG8010H'}</h1>
                                    <h1 className="opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]">безкоштовна оренда</h1>
                                </div>

                                <div className="flex items-start justify-between max-[680px]:grid max-[680px]:grid-cols-2 max-[680px]:grid-rows-1 max-[680px]:border-b-[2px] max-[680px]:border-[#F4F2F2] max-[680px]:border-solid max-[680px]:pb-[10px]">
                                    <div className='text-center'>
                                        <h1>* Wi-Fi роутер </h1>
                                        <p className='text-sm'>За потреби</p>
                                    </div>
                                    <h1 className="items-center justify-center text-center max-[680px]:hidden">
                                        <span className="opacity-[0.5]">
                                            {isXgs ? '' : 'MERCUSYS MR80X'}
                                        </span>
                                    </h1>
                                    <h1 className="max-[680px]:text-end opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]">
                                        {isXgs ? 'Договірна ціна' : `${routerPrice} грн.`}
                                    </h1>
                                    <p className="row-start-3 col-span-2 opacity-[0.5] min-[681px]:hidden relative left-[13px] mt-[-24px]">
                                        <br />
                                        <span className="opacity-[0.5]">
                                            {isXgs ? '' : <>MERCUSYS <br />MR80X</>}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="col-span-1 col-start-2 max-[1800px]:col-start-1 flex justify-center min-[3644px]:h-[1272px] h-[848px] max-[2377px]:h-[648px] min-[3644px]:gap-[12px] gap-[10px] max-[2377px]:gap-[8px] max-[780px]:hidden">
                            <InternetBlock speedItem={selectedSpeedItem} />
                            <div className={`${TVinfo[tvBundle].show ? '' : 'opacity-[0.4]'} min-[3644px]:text-[120px] min-[3644px]:leading-[120px] text-[80px] leading-[80px] max-[2377px]:text-[60px] max-[2377px]:leading-[60px] font-bold text-[#5F6061] flex items-center`}>
                                <p>+</p>
                            </div>
                            <TVBlock TVinfo={TVinfo} tvBundle={tvBundle} />
                        </div>

                        <div className="flex justify-center">
                            <div className="min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] max-[680px]:mt-[-30px] min-[3664px]:mr-[117px] mr-[78px] max-[2377px]:mr-[60px] w-full max-[1800px]:w-[750px] max-[1800px]:mr-[20px] max-[1800px]:ml-[20px]">

                                {/* Desktop Total Price Block */}
                                <div className="grid grid-cols-1 items-center w-full font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:gap-[22px] gap-[15px] max-[2377px]:gap-[12px] max-[680px]:hidden">
                                    <div className="flex items-end justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]">
                                        <h1>Щомісячна абонплата</h1>
                                        <h1 className="text-[#51B18B] flex items-end justify-between gap-3">
                                            <span className="min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[60px]">{totalPrice}</span>
                                            <span className="text-nowrap min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[35px]">грн/міс</span>
                                        </h1>
                                    </div>
                                    <div className="flex items-start justify-start min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]">
                                        <h1 className="text-[#BDBDBD] font-normal text-[18px] max-[2377px]:text-[16px]">
                                            * Базова абонентська плата для діючих клієнтів (поза межами стартових акцій).
                                        </h1>
                                    </div>
                                </div>

                                {/* Mobile Total Price Block */}
                                <div className="w-full font-bold text-[18px] leading-[22px] min-[681px]:hidden">
                                    <div className="border-b-[2px] border-[#F4F2F2] border-solid pb-[10px]">
                                        <h1 className={`mt-[20px] mb-[10px]`}>Щомісячна абонплата</h1>
                                        <div className="flex justify-between items-end text-[#51B18B]">
                                            <h1 className="text-[70px] leading-[70px]">{totalPrice}</h1>
                                            <h1 className="text-nowrap text-[30px] leading-[35px]">грн/міс</h1>
                                        </div>
                                    </div>
                                    <div className={`pb-[10px]`}>
                                        <h1 className="text-[#BDBDBD] font-normal text-[14px] mt-[10px]">
                                            * Базова абонентська плата для діючих клієнтів (поза межами стартових акцій).
                                        </h1>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Button
                                        onClick={() => handleOpenModal()}
                                        className="mt-10 max-[680px]:hidden"
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


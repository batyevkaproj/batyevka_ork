import { Label } from "@/components/ui/label";
import { TarifsSlider, MonthsSlider, OverpaySlider } from "../ui/sliders";
import { TarifsSwitch, RegularSwitch } from "../ui/switches";
import rocket_blue from '@/public/img/rocket_blue.svg';
import Image from "next/image";
import galochka from '@/public/img/galochka.svg';
import galochka_orange from '@/public/img/galochka_orange.svg';
import  { useState } from 'react'




const CalculatorTarifs = ({theme}:any) => {

    const [isTVChecked, setTVChecker] = useState(false);

    const toggleTVChecker = () => {
        setTVChecker(!isTVChecked);
    };

    const [isIPChecked, setIPChecker] = useState(false);

    const toggleIPChecker = () => {
        setIPChecker(!isIPChecked);
    };

    return (
    <div className={`min-[3644px]:mx-[240px] mx-[170px] max-[2377px]:mx-[120px] max-[1800px]:mx-[85px] max-[1247px]:mx-[67px] max-[932px]:mx-[35px] max-[640px]:mx-0 min-[3644px]:mt-[90px] mt-[60px] max-[2377px]:mt-[45px] max-[932px]:mt-[30px] max-[640px]:mt-0 + ${theme=='white'?'text-[#5F6061]':'text-white'}`}>
        <div className={`${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3]':'shadow-[0_4px_29px_0px_#0B273C]'} w-full`}>
            <div className={`min-[3644px]:pt-[117px] pt-[78px] max-[2377px]:pt-[60px] max-[640px]:pt-[20px] + ${theme=='white'?'bg-[#F4F2F2]':'bg-[#123853]'}`}>
                <h1 className={`flex text-center items-center justify-center font-bold  text-[50px] leading-[62px] max-[2377px]:text-[42px] max-[2377px]:leading-[50px] min-[3644px]:text-[75px] min-[3644px]:leading-[93px] max-[640px]:text-[24px] max-[640px]:leading-[30px]`}>Калькулятор тарифу</h1>
                <p className={`flex text-center items-center justify-center min-[3644px]:text-[48px] min-[3644px]:leading-[63px] text-[32px] leading-[42px] max-[2377px]:text-[24px] max-[2377px]:leading-[32px] max-[640px]:text-[16px] max-[640px]:leading-[20px] min-[3644px]:mt-[30px] mt-[15px] max-[640px]:mt-[10px]`}><span className={`font-bold`}>Створи свій тариф / </span> Оберiть технологію підключення</p>
                <div className={`flex items-center justify-center min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[84px] mt-[56px] max-[2377px]:mt-[30px] max-[640px]:mt-[15px] `}>
                    <p className={`font-bold min-[3644px]:mr-[30px] mr-[20px] max-[2377px]:mr-[15px]`}>G-PON</p>
                    <TarifsSwitch/>
                    <p className={`font-bold min-[3644px]:ml-[30px] ml-[20px] max-[2377px]:ml-[15px]`}>UTP</p>
                </div>
                <div className={`min-[3644px]:h-[60px] h-[40px] max-[2377px]:h-[30px]`}></div>
            </div>
            <div className={`${theme=='white'?'bg-white':'bg-[#0E2D43]'} grid grid-cols-2 max-[1800px]:grid-cols-1 min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] min-[3644px]:gap-[170px] gap-[100px] max-[2377px]:gap-[60px] min-[3644px]:pb-[117px] pb-[78px] max-[2377px]:pb-[60px]`}>
                <div className={`col-span-1 min-[3644px]:ml-[117px] ml-[78px] max-[2377px]:ml-[60px] max-[1800px]:mr-[60px] flex justify-center`}>
                    <div className={`max-[1800px]:max-w-[750px]`}>
                        <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]`}>Обери Інтернет швидкість</p>
                        <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px]">
                            <TarifsSlider/>
                        </div>
                        <div className={`flex items-center min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px] min-[3644px]:mt-[87px] mt-[48px] max-[2377px]:mt-[30px]`}>
                            <RegularSwitch />
                            <p className={`font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]`}>Додай MEGOGО Телебачення</p>
                        </div>
                        <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px]`}>Обери передплату MEGOGO</p>
                        <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px]">
                            <OverpaySlider/>
                        </div>
                        <div className={`flex items-center min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px] min-[3644px]:mt-[87px] mt-[48px] max-[2377px]:mt-[30px]`}>
                            <RegularSwitch/>
                            <p className={`font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]`}>Додай зовнішню постійну ІР адресу</p>
                        </div>
                        <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px]`}>Внесіть авансом абонплату та отримайте знижку на підключення та обладнання </p>
                        <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px]">
                            <MonthsSlider/>
                            <p className="opacity-[0.5] min-[3644px]:mt-[30px] mt-[-10px] max-[2377px]:mt-[-15px] min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]">*СТАБІЛЬНІСТЬ ЦІНИ – при внесенні авансового платежу  ми гарантуємо незмінність ціни тарифного плану протягом обраного періоду</p>
                        </div>
                        <div className={`flex grid grid-cols-1 items-center font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px]`}>
                            <div className={`flex items-center justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]`}>
                                <h1>* Підключення</h1>
                                <h1 className={`opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]`}>1 грн.</h1>
                            </div>
                            <div className={`flex items-center justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]`}>
                                <h1>* Оптичний термінал</h1>
                                <h1 className={`opacity-[0.5]`}>ONU HG8010H</h1>
                                <h1 className={`opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]`}>1 грн.</h1>
                            </div>
                            <div className={`flex items-center justify-between`}>
                                <h1>* Wi-Fi роутер</h1>
                                <h1 className={`items-center justify-center text-center`}>Ультрапреміум <span className={`opacity-[0.5]`}>MERCUSYS MR90X </span> <br/>стандарт AX6000 </h1>
                                <h1 className={`opacity-[0.5] min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]`}>1 грн.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={``}>
                    <div className={`col-span-1 col-start-2 max-[1800px]:col-start-1 flex justify-center min-[3644px]:h-[1272px] h-[848px] max-[2377px]:h-[648px]`}>
                        <div className={`min-[3644px]:w-[687px] w-[458px] max-[2377px]:w-[350px] max-[880px]:w-[320px] shadow-[0_4px_29px_0px_#E6E3E3] bg-white rounded-[10px] max-[1800px]:ml-[60px] max-[880px]:ml-[20px] min-w-[320px]`}>
                            <p className={`flex items-center justify-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:pt-[78px] pt-[52px] max-[2377px]:pt-[40px]`}>Інтернет</p>
                            <div className={`flex items-center justify-center min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] min-[3644px]:pb-[60px] pb-[40px] max-[2377px]:pb-[30px]`}>
                                <Image src={rocket_blue} alt={''} className={``}/>
                            </div>
                            <h2 className="font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex">
                                Швидкість
                            </h2>
                            <h2 className="text-[#5984B2] font-bold min-[3644px]:text-[70px] min-[3644px]:leading-[70px] text-[47px] leading-[47px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] justify-center flex min-[3644px]:py-[20px] py-[13px] max-[2377px]:py-[10px]">100 Meгабіт</h2>
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
                                        Виклик майстра для <br/> будь-якого ремонту безкоштовно 
                                    </p>
                                </div>
                                <div className={`min-[3644px]:mt-[22px] mt-[15px] max-[2377px]:mt-[10px] flex items-start`}>
                                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    <p>
                                        Оптичний модем <br/> безкоштовно *
                                    </p>
                                </div>
                                <div className={`min-[3644px]:mt-[22px] mt-[15px] max-[2377px]:mt-[10px] flex items-start`}>
                                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    <p className="">
                                        Wi-Fi 6 роутер <br/>безкоштовно *
                                    </p>
                                </div>
                                <div className={`min-[3644px]:mt-[22px] mt-[15px] max-[2377px]:mt-[10px] flex items-start`}>
                                    <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                    <p className="">
                                        Без плати за <br/>підключення *
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={`text-white min-[3644px]:w-[687px] w-[458px] max-[2377px]:w-[350px] max-[880px]:w-[320px] shadow-[0_4px_29px_0px_#E6E3E3] rounded-[10px] bg-gradient-to-r from-[#3E3D39] to-[#1B211F] max-[2377px]:ml-[49px] ml-[53px] min-[3664px]:ml-[80px] min-[3664px]:mr-[117px] mr-[78px] max-[2377px]:mr-[60px] max-[880px]:mr-[20px] min-w-[320px]`}>
                            <p className={`flex items-center justify-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:pt-[78px] pt-[52px] max-[2377px]:pt-[40px]`}>Телебачення</p>
                            <div className={`flex items-center justify-center`}>
                                <p className={`flex items-center justify-center min-[3644px]:mt-[90px] mt-[62px] max-[2377px]:mt-[48px] rounded-[4px] bg-[#FD363B] min-[3644px]:w-[132px] min-[3644px]:h-[51px] w-[88px] h-[34px] max-[2377px]:w-[67px] max-[2377px]:h-[26px] font-bold min-[3644px]:text-[24px] min-[3644px]:leading-[24px] text-[16px] leading-[16px] max-[2377px]:text-[13px] max-[2377px]:leading-[13px]`}>АКЦIЯ</p>
                            </div>
                            <p className={`flex items-center justify-center font-bold min-[3644px]:text-[42px] min-[3644px]:leading-[42px] text-[28px] leading-[28px] max-[2377px]:text-[22px] max-[2377px]:leading-[22px] min-[3644px]:pt-[90px] pt-[65px] max-[2377px]:pt-[50px]`}>Легка</p>
                            <p className={`flex items-center justify-center text-center font-bold text-[#909090] min-[3644px]:mt-[22px] mt-[16px] max-[2377px]:mt-[12px] min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px]`}>298 каналiв для <br/> любителів ТБ, а також <br/>колекцiя фiльмiв,<br/>мультикiв та серiалiв</p>
                            <div className={'flex items-center justify-center min-[3644px]:gap-[143px] gap-[89px] max-[2377px]:gap-[49px] font-bold min-[3644px]:mt-[76px] mt-[51px] max-[2377px]:mt-[39px]'}>
                                <div className={``}>
                                    <p className={`min-[3644px]:text-[72px] min-[3644px]:leading-[72px] text-[48px] leading-[48px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] flex justify-center`}>298</p>
                                    <p className={`min-[3644px]:text-[30px] min-[3644px]:leading-[30px] text-[20px] leading-[20px] max-[2377px]:text-[16px] max-[2377px]:leading-[13px] text-[#909090] pt-[9px] flex justify-center`}>каналiв</p>
                                </div>
                                <div className={``}>
                                    <p className={`min-[3644px]:text-[72px] min-[3644px]:leading-[72px] text-[48px] leading-[48px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] flex justify-center`}>10000+</p>
                                    <p className={`min-[3644px]:text-[30px] min-[3644px]:leading-[30px] text-[20px] leading-[20px] max-[2377px]:text-[16px] max-[2377px]:leading-[13px] text-[#909090] pt-[9px] flex justify-center`}>фiльмiв</p>
                                </div>
                            </div>
                            <p className={`font-bold min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] text-[16px] leading-[22px] flex items-center justify-center text-center min-[3644px]:mt-[76px] mt-[51px] max-[2377px]:mt-[39px]`}>Перемотка i ТБ-архiв на <br/>каналах</p>
                            <div className={`flex items-center justify-center min-[3644px]:w-[519px] min-[3644px]:h-[118px] w-[346px] h-[78px] max-[2377px]:w-[264px] max-[2377px]:h-[60px] bg-[#303030] border-white border-[1px] rounded-[7px] min-[3644px]:ml-[84px] ml-[56px] max-[2377px]:ml-[43px] max-[880px]:ml-[28px] min-[3644px]:mt-[118px] mt-[76px] max-[2377px]:mt-[51px]`}>
                                <p className={` min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px] font-bold`}>Promo 14 днів </p>
                            </div>
                        </div>
                    </div>
                    <div className={`flex justify-center`}>
                        <div className={`min-[3644px]:mt-[117px] mt-[78px] max-[2377px]:mt-[60px] min-[3664px]:mr-[117px] mr-[78px] max-[2377px]:mr-[60px] w-full max-[1800px]:w-[750px] max-[1800px]:mr-[20px] max-[1800px]:ml-[20px]`}>
                            <div className={`flex grid grid-cols-1 items-center w-full font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px]`}>
                                <div className={`flex items-end justify-between border-b-[2px] border-[#F4F2F2] border-solid min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]`}>
                                    <h1>Акційна абонплата на Перші 4 місяці</h1>
                                    <h1 className={`text-[#DC662D] flex items-end justify-between w-[287px] min-[3644px]:w-[430px] max-[2377px]:w-[258px]`}>
                                        <span className={`min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[70px]`}>0</span>
                                        <span className={`min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[35px]`}>грн/міс</span>
                                    </h1>
                                </div>
                                <div className={`flex items-end justify-between min-[3644px]:pb-[20px] pb-[13px] max-[2377px]:pb-[10px]`}>
                                    <h1>Абонплата з 5го місяця</h1>
                                    <h1 className={`text-[#51B18B] flex items-end justify-between w-[287px] min-[3644px]:w-[430px] max-[2377px]:w-[258px]`}>
                                        <span className={`min-[3644px]:text-[138px] min-[3644px]:leading-[138px] text-[92px] leading-[92px] max-[2377px]:text-[70px] max-[2377px]:leading-[70px]`}>0</span>
                                        <span className={`min-[3644px]:text-[60px] min-[3644px]:leading-[72px] text-[40px] leading-[48px] max-[2377px]:text-[30px] max-[2377px]:leading-[35px]`}>грн/міс</span>                                   
                                    </h1>
                                </div>
                            </div>
                            <div className={`min-[3644px]:mt-[66px] mt-[44px] max-[2377px]:mt-[30px]`}>
                                <button className={`w-full bg-[#DC662D] text-white font-semibold rounded-full min-[3644px]:h-[118px] h-[78px] max-[2377px]:h-[60px] shadow-[0_4px_20px_0px_#DC662D50] min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]`}>Підключитись</button>
                            </div>
                            <div className={`flex justify-center min-[3644px]:gap-[30px] gap-[20px] max-[2377px]:gap-[15px] min-[3644px]:mt-[39px] mt-[26px] max-[2377px]:mt-[20px]`}>
                                <p className={`font-normal min-[3644px]:text-[27px] min-[3644px]:leading-[42px] text-[18px] leading-[28px] max-[2377px]:text-[14px] max-[2377px]:leading-[22px]`}>Є питання? Ми передзвоним Вам через <span className={`font-semibold`}>30 секунд!</span></p>
                                <a href={'#'} className={`font-normal text-[#DC662D] underline underline-offset-[3px] min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px]`}>Передзвонити мені</a>
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
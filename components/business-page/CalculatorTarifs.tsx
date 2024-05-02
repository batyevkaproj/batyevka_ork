import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { TarifsSlider, MonthsSlider, OverpaySlider } from "../ui/sliders";
import rocket_blue from '@/public/img/rocket_blue.svg';
import Image from "next/image";
import galochka from '@/public/img/galochka.svg';
import galochka_orange from '@/public/img/galochka_orange.svg';

const CalculatorTarifs = ({theme}:any) => {

    return (
    <div className={`min-[3644px]:mx-[240px] mx-[170px] max-[2377px]:mx-[120px] max-[1770px]:mx-[85px] max-[1247px]:mx-[67px] max-[932px]:mx-[35px] max-[640px]:mx-0 min-[3644px]:mt-[90px] mt-[60px] max-[2377px]:mt-[45px] max-[932px]:mt-[30px] max-[640px]:mt-0 + ${theme=='white'?'text-[#5F6061]':'text-white'}`}>
        <div className={`${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3]':'shadow-[0_4px_29px_0px_#0B273C]'} w-full `}>
            <div className={`min-[3644px]:pt-[117px] pt-[78px] max-[2377px]:pt-[60px] max-[640px]:pt-[20px] + ${theme=='white'?'bg-[#F4F2F2]':'bg-[#123853]'}`}>
                <h1 className={`flex text-center items-center justify-center font-bold  text-[50px] leading-[62px] max-[2377px]:text-[42px] max-[2377px]:leading-[50px] min-[3644px]:text-[75px] min-[3644px]:leading-[93px] max-[640px]:text-[24px] max-[640px]:leading-[30px]`}>Калькулятор тарифу</h1>
                <p className={`flex text-center items-center justify-center min-[3644px]:text-[48px] min-[3644px]:leading-[63px] text-[32px] leading-[42px] max-[2377px]:text-[24px] max-[2377px]:leading-[32px] max-[640px]:text-[16px] max-[640px]:leading-[20px] min-[3644px]:mt-[30px] mt-[15px] max-[640px]:mt-[10px]`}><span className={`font-bold`}>Створи свій тариф / </span> Оберiть технологію підключення</p>
                <div className={`flex items-center justify-center min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[84px] mt-[56px] max-[2377px]:mt-[30px] max-[640px]:mt-[15px] `}>
                    <p className={`min-[3644px]:mr-[30px] mr-[20px] max-[2377px]:mr-[15px]`}>G-PON</p>
                    <Switch className={`scale-[1]`} id="packet-type"></Switch>
                    <p className={`min-[3644px]:ml-[30px] ml-[20px] max-[2377px]:ml-[15px]`}>UTP</p>
                </div>
                <div className={`min-[3644px]:h-[60px] h-[40px] max-[2377px]:h-[30px]`}></div>
            </div>
            <div className={`${theme=='white'?'bg-white':'bg-[#0E2D43]'} grid grid-cols-2 max-[1770px]:grid-cols-1 min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] min-[3644px]:gap-[170px] gap-[100px] max-[2377px]:gap-[60px] min-[3644px]:pb-[117px] pb-[78px] max-[2377px]:pb-[60px]`}>
                <div className={`col-span-1 min-[3644px]:ml-[117px] ml-[78px] max-[2377px]:ml-[60px] max-[1770px]:mr-[60px]`}>
                    <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]`}>Обери Інтернет швидкість</p>
                    <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px]">
                        <TarifsSlider/>
                    </div>
                    <div className={`flex items-center min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px] min-[3644px]:mt-[87px] mt-[48px] max-[2377px]:mt-[30px]`}>
                        <Switch className={`scale-[1]`} id="packet-type"></Switch>
                        <p className={`font-bold min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]`}>Додай MEGOGО Телебачення</p>
                    </div>
                    <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px]`}>Обери передплату MEGOGO</p>
                    <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px]">
                        <OverpaySlider/>
                    </div>
                    <div className={`flex items-center min-[3644px]:gap-[39px] gap-[26px] max-[2377px]:gap-[20px] min-[3644px]:mt-[87px] mt-[48px] max-[2377px]:mt-[30px]`}>
                        <Switch className={`scale-[1]`} id="packet-type"></Switch>
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
                <div className={`col-span-1 col-start-2 max-[1770px]:col-start-1 `}>
                    <div className={`min-[3644px]:w-[687px] w-[458px] max-[2377px]:w-[350px] shadow-[0_4px_29px_0px_#E6E3E3] rounded-[20px]`}>
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
                        <h2 className="font-semibold min-[3644px]:text-[36px] min-[3644px]:leading-[45px] text-[24px] leading-[30px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] justify-center flex min-[3644px]:pt-[20px] pt-[13px] max-[2377px]:pt-[10px]">
                            рівнозначна
                        </h2>
                        <div className={'min-[3644px]:mt-[74px] mt-[33px] max-[2377px]:mt-[30px] min-[3644px]:mx-[73px] mx-[39px] max-[2377px]:mx-[38px] min-[3644px]:pb-[78px] pb-[52px] max-[2377px]:pb-[40px] min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px]'}>
                            <p className="flex font-bold">
                                <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                Стабільність ціни*
                            </p>
                            <p className="flex font-bold min-[3644px]:mt-[22px] mt-[15px]">
                                <Image src={galochka_orange} alt="galochka" className="inline mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                Виклик майстра для <br/> будь-якого ремонту безкоштовно 
                            </p>
                            <p className="flex min-[3644px]:mt-[22px] mt-[15px]">
                                <Image src={galochka_orange} alt="galochka" className="inline mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                Оптичний модем <br/> безкоштовно *
                            </p>
                            <p className="flex min-[3644px]:mt-[22px] mt-[15px]">
                                <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                Wi-Fi 6 роутер <br/>безкоштовно *
                            </p>
                            <p className="flex min-[3644px]:mt-[22px] mt-[15px]">
                                <Image src={galochka_orange} alt="galochka" className="mr-2 min-[3644px]:size-[32px] min-[2378px]:mt-1 min-[2378px]:size-[20px]" />
                                Без плати за <br/>підключення *
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    );
}

export default CalculatorTarifs;
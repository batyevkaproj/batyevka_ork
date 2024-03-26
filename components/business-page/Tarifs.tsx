import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import WhiteGreyIpCheck from './WhiteGreyIpCheck';
import galochka from '../../public/img/galochka.svg';
import green_galochka from '../../public/img/green_galochka.svg';
import Image from 'next/image';
import Heading from '@/components/Heading';
import OpticCableReverse from "./OpticCableReverse";


const Tarifs = () => {
    return (
        <>
            <div className="h-[60px]"></div>
            <div className=" text-[26px] font-bold text-white flex items-center justify-center">
                <h1 className="text-center w-[913px] flex items-center justify-center">Підключаємо ОПТИЧНИМ кабелем</h1>
            </div>
            <div className=" text-[24px] font-bold text-white flex justify-center">
                <h1 className="text-center text-[24px] align-bottom">Всього за<span className=" text-[#56AABF] px-[6px] text-[42px]">2 599</span>грн</h1>
            </div>


            <div className="flex justify-center box-border pt-[60px]">
                <div className="h-[573px] w-[350px] rounded-md bg-[#123853] mr-5">
                    <h2 className="text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                        1999
                    </h2>
                    <h2 className="text-[#DC662D] font-normal text-[20px] justify-center flex pb-[72px]">
                        грн/міс
                    </h2>

                    <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[7px]">
                        Швидкість
                    </h2>
                    <h2 className="text-white  font-bold text-[36px] justify-center flex pb-[10px]">
                        2000 Мегабіт
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
                        Одинакові
                    </h2>
                    <div className="flex justify-center mb-[30px]">
                        <WhiteGreyIpCheck />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]">Прдключення</button>
                    </div>
                </div>
            </div>

            

            

            <Heading text={`Бизнес тарифы "XG-PON"`} />


            <div className="flex justify-center box-border pt-[60px]">
                <div className="h-[573px] w-[350px] rounded-md bg-[#123853] mr-5">
                    <h2 className="text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]">
                        1999
                    </h2>
                    <h2 className="text-[#DC662D] font-normal text-[20px] justify-center flex pb-[72px]">
                        грн/міс
                    </h2>

                    <h2 className="text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[7px]">
                        Швидкість
                    </h2>
                    <h2 className="text-white  font-bold text-[36px] justify-center flex pb-[10px]">
                        2000 Мегабіт
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
                        Одинакові
                    </h2>
                    <div className="flex justify-center mb-[30px]">
                        <WhiteGreyIpCheck />
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]">Прдключення</button>
                    </div>
                </div>
            </div>

            <Heading text="Механіка тарифів та розрахунків" />
            <div className="font-normal text-white flex flex-col items-center justify-center mt-[120px] mb-[120px]">
                <div className="flex mb-[10px]">
                    <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                    <p>При підключенні, Абоненту за замовчуванням надається внутрішня ІР-адреса. Всі тарифи безлімітні по трафіку Мир та Україна – немає поділу. Швидкість Входу та Виходу однакові.</p>
                </div>
                <div className="flex mb-[10px]">
                    <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                    <p>Абонентна плата нараховується за календарний місяць та оплачується шляхом передоплати. Для безперервного користування послугою Абонент до 1-го числа кожного місяця вносить на свій особовий рахунок суму в розмірі абонентної плати та всіх замовлених додаткових послуг (рекомендуємо внести гроші за 3 дні до вказаної дати).</p>
                </div>
                <div className="flex mb-[10px]">
                    <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                    <p>Якщо Абонент не сплатив більше 40 днів від останнього дня надання послуг, його договір /ликовий рахунок блокується (дія тарифу, акцій, у яких Абонент брав участь, припиняється). Повторна активація договору платна - у розмірі вартості підключення на обраному тарифі.</p>
                </div>
                <div className="flex mb-[10px]">
                    <Image src={green_galochka} alt='green_checkArrow' className="shrink-0 self-start mr-[8px] mt-[2px]" />
                    <p>Перехід на тариф Інтернет з меншою вартістю – 100 грн. разово тариф змінюється з 1 числа наступного місяця. Перехід на тариф Інтернет із більшою вартістю – 45 грн. разово тариф змінюється з наступного робочого дня з перерахунком абонентної плати. Увімкнення/вимкнення передплати Телебачення від МЕГОГО – безкоштовно.</p>
                </div>
            </div>
        </>
    );
}

export default Tarifs;
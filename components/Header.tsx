import { useModal } from "@/hooks/use-modal-store";

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/img/logo.svg';
import logo_grey from '@/public/img/logo_grey.svg'
import arrow_down from '@/public/img/arrow_down.svg';
import globe_small from '@/public/img/globe_small.svg';
import wallet_white from '@/public/img/wallet_white.svg';
import _247 from '@/public/img/247.svg';
import telephon from '@/public/img/phone.svg';
import telephon_grey from '@/public/img/telephon_grey.svg';
import arrow_down_grey from '@/public/img/arrow_down_grey.svg'
import rectangle from '@/public/img/rectangle.svg';
import rectangle_grey from '@/public/img/rectangle_grey.svg';
import connect from '@/public/img/connect.svg';
import connectGrey from '@/public/img/cabinet_grey.svg';
import wrench from '@/public/img/wrench.svg'
import wkey from '@/public/img/wkey.svg'
import { Button } from '@/components/ui/button';
import Navbar from "./Navbar";
import { ChevronDown } from "lucide-react"
import SubHeader from "./SubHeader";
import SubHeaderBusiness from "./SubHeaderBusiness";

const Header = ({theme, business}:any) => {

    const { onOpen } = useModal();

    return (
        <header>
        <div className={`flex justify-between items-center ${theme=='white'?'bg-white text-[#5F6061]': 'bg-[#56AABF] text-white'} h-[60px] min-[2430px]:h-[78px] min-[3644px]:h-[117px] min-[3644px]:text-[27px] max-[720px]:bg-[#0E2D43] px-[50px] min-[2430px]:px-[65px] max-[780px]:hidden min-[2430px]:text-[18px]`}>
            <nav className={`space-x-4`}>
                <Link href=''>Акції</Link>
                <Link href=''>Мапа покриття</Link>
            </nav>
            <nav className={`items-center flex justify-between max-[720px]:min-w-full`}>
                <Link href='#'  className={`pr-[30px]`}>
                    <label className={`font-normal max-[902px]:hidden max-[720px]:block max-[720px]:w-[122px] max-[720px]:text-[11px] max-[720px]:ml-[20px] max-[720]:color-[#BDBDBD]`}>Телефонуй! У нас швидке з’єднання<label className={`max-[1140px]:hidden max-[720px]:block`}>і реальні оператори!</label></label>
                </Link>
            </nav>

            <nav className={`flex items-center space-x-4 font-normal`}>
                <Link href='#'  className={`inline-flex items-center ml-4`}>
                    <Image src={globe_small} width={4} height={4} className={`w-4 h-4`} alt={'ArrowDown'}/>
                    <span className={`ml-2`}>Укр</span>
                </Link>
            </nav>
        </div>

        <div className={`flex justify-between items-center my-[30px] max-[720px]:h-[50px] max-[720px]:my-0 min-[2430px]:h-[92px] px-[50px] min-[2430px]:px-[65px] max-[780px]:hidden`}>
            <nav className={`flex items-center max-[2430px]:space-x-4 max-[720px]:ml-[20px] max-[833px]:space-x-0`}>
                <Link href='#' className={`min-[2429px]:mr-[78px] min-[1920px]:mr-[33px] mr-[22px]`}>
                    <Image src={theme=='white'?logo_grey:logo} height={1} className={`flex-shrink-0 min-w-max max-[720px]:w-[203px] max-[720px]:h-[35px] min-[2430px]:h-[70px] min-[3644px]:h-[104px] max-[1080px]:w-[308px] max-[1080px]:h-[53px] min-[1080px]:w-[308px] min-[1080px]:h-[53px] min-[2430px]:w-[403px]`} alt={'Batyevka logo'}/>
                </Link>
                <div>
                    <div className={`${theme=='white'?'bg-white text-[#5F6061]': 'bg-[#8B6CB0] text-white'} w-[275px] h-[60px] flex items-center justify-center max-[1280px]:hidden min-[2430px]:w-[360px] min-[2430px]:h-[78px] rounded-[5px]`}>
                    <Image src={theme=='white'?telephon_grey:telephon} className={`w-[20px] h-[20px] mr-[9.75px] min-[2430px]:w-[26px] min-[2430px]:h-[26px]`} alt={'phone'}/>
                        <a className='font-semibold text-[24px] leading-[22px] min-[2430px]:text-[32px]' href={`tel:0800303230`}>0 800 30 32 30</a> 
                    <Image src={theme=='white'?arrow_down_grey:arrow_down} width={4} height={4} className={`w-[10px] h-[6px] ml-[12px] min-[2430px]:w-[17px] min-[2430px]:h-[13px]`} alt={'ArrowDown'}/>
                    </div>
                </div>
            </nav>

            <nav className={`flex items-center`}>
                <div className={`flex items-center justify-end font-semibold min-[2430px]:w-[699px]`}>
                    <Link href='#'  className={`text-[#56AABF] flex items-center h-[60px] font-semibold mr-[25px] min-[2430px]:mr-[40px]`}>
                        <Image src={_247} className={`relative w-8 h-8 min-w-max min-[2430px]:w-[42px] min-[2430px]:h-[42px]`} alt={'_247'}></Image><span className={`ml-[15px] min-[2430px]:text-[21px] max-[1920px]:hidden`}>Підтримка</span>
                    </Link>
                    <Link href='#'  className={`text-[#5984B3] flex items-center h-[60px] font-semibold min-[2430px]:mr-[40px] mr-[25px]`}>
                        <Image src={wrench} className={`relative w-8 h-8 min-w-max min-[2430px]:w-[42px] min-[2430px]:h-[42px]`} alt={'wrench'}></Image><span className={`ml-[15px] min-[2430px]:text-[21px] max-[1920px]:hidden`}>Обладнання</span>
                    </Link>
                    <Link href='https://next.privat24.ua/payments/form/%7B%22token%22:%22a163f3a4-7bfa-4921-8d8e-4c4737e6c0f4%22%7D'  className={`text-[#51B18B] flex items-center h-[60px] min-[2430px]:h-[78px]`}>
                        <Button variant="pay">
                        <Image src={wallet_white} className={`relative w-7 h-7 fill-white mr-[15px] min-[2430px]:w-[36px] min-[2430px]:h-[36px]`} alt={'wallet'}></Image>
                        Оплата
                        </Button>
                    </Link>
                </div>
                <Link href='https://next.privat24.ua/payments/form/%7B%22token%22:%22a163f3a4-7bfa-4921-8d8e-4c4737e6c0f4%22%7D' className={`text-[#51B18B] flex items-center h-[60px]`}>
                    <Button variant="payMob">
                    <Image src={wallet_white} className={`relative w-7 h-7 fill-white `} alt={'wallet'}></Image>
                    </Button>
                </Link>
                <Button variant={theme=='white'?'cabinetGrey':'cabinet'}>
                <Image src={theme=='white'?connectGrey:connect} alt='connect' className={`pr-2 min-[2430px]:w-[34px] min-[2430px]:h-[34px]`}>
                </Image>
                    Кабінет абонента
                </Button>
                <Button variant={theme=='white'?'cabinetGreyMob':'cabinetMob'}>
                <Image src={theme=='white'?connectGrey:connect} alt='connect' className={``}>
                </Image>
                </Button>
                <Button onClick={() => onOpen("call")} variant="connect">Заявка на підключення</Button>
                <Button onClick={() => onOpen("call")} variant="connectMob">
                <Image src={wkey} alt='wkey'>
                </Image>
                </Button>
            </nav>
        </div>
        <div className={`${theme=='white'?'bg-white text-[#5F6061]': 'bg-[#123853] text-white'} h-20 flex justify-around items-center rounded-full shadow-lg max-[780px]:hidden min-[2430px]:h-[104px] mx-[50px] min-[2430px]:mx-[65px] max-[690px]:hidden pl-[50px] pr-[30px] min-[2430px]:pl-[68px] min-[2430px]:pr-[40px]`}>
            <Link href='https://www.batyevka.net/uk/internet'  className={`max-[1650px]:hidden font-semibold text-[13px] leading-[22px] uppercase min-[2430px]:text-[17px] min-[2430px]:leading-[26px] text-center hover:text-[#DC662D]`}>Для багатоповерхівок</Link>
            <Link href='https://www.batyevka.net/uk/internet-tv-home'  className={`max-[1650px]:hidden font-semibold text-[13px] leading-[22px] uppercase min-[2430px]:text-[17px] min-[2430px]:leading-[26px] text-center hover:text-[#DC662D]`}>Приватному сектору</Link>
            <Link href='https://business.batyevka.net/'  className={`font-semibold text-[13px] leading-[22px] uppercase min-[2430px]:text-[17px] min-[2430px]:leading-[26px] text-center hover:text-[#DC662D]`}>Бiзнесу <ChevronDown className={`inline-flex ml-[10px] size-[16px] mb-[3px] min-[1651px]:hidden`}/></Link>
            <Image src={theme=='white'?rectangle_grey:rectangle} alt='rect'/>
            {
                business?<SubHeaderBusiness/>:<SubHeader/>
            }
        </div>
        <Navbar/>
        </header>
    );
}

export default Header;
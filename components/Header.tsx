import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/img/logo.svg';
import msg_small from '../public/img/msg_small.svg';
import arrow_down from '../public/img/arrow_down.svg';
import ket_small from '../public/img/ket_small.svg';
import globe_small from '../public/img/globe_small.svg';
import wallet from '../public/img/wallet.svg';
import wallet_white from '../public/img/wallet_white.svg';
import _247 from '../public/img/247.svg';
import gear from '../public/img/gear.svg';
import bandit_ban from '../public/img/bandit-ban.svg';
import telephon from '../public/img/phone.svg';
import rectangle from '../public/img/rectangle.svg';
import all_services from '../public/img/all_services.svg';
import connect from '../public/img/connect.svg';
import wrench from '../public/img/wrench.svg'
import MobileModal from '@/components/MobileModal';
import { Button } from '@/components/ui/button';



const Header = () => {


    return (
        <header>
        <div className={`flex justify-between items-center bg-[#56AABF] h-[60px] min-[2430px]:h-[78px] min-[3644px]:h-[117px] min-[3644px]:text-[27px] max-[720px]:bg-[#0E2D43]`}>
            <nav className={`space-x-4 ml-[50px] text-white max-[720px]:hidden`}>
                <Link href='#'>Акції</Link>
                <Link href='#'>Мапа покриття</Link>
            </nav>
            <nav className={`items-center flex justify-between max-[720px]:min-w-full`}>
                <Link href='#'  className={` text-white pr-[30px]`}>
                    <label className={`font-normal max-[902px]:hidden max-[720px]:block max-[720px]:w-[122px] max-[720px]:text-[11px] max-[720px]:ml-[20px] max-[720]:color-[#BDBDBD]`}>Телефонуй! У нас швидке з’єднання<label className={`max-[1140px]:hidden max-[720px]:block`}>і реальні оператори!</label></label>
                </Link>
            </nav>

            <nav className={`flex items-center space-x-4 mr-[50px] max-[720px]:hidden font-normal`}>
                <Link href='#'  className={`text-white inline-flex items-center ml-4`}>
                    <Image src={globe_small} width={4} height={4} className={`w-4 h-4`} alt={'ArrowDown'}/>
                    <span className={`ml-2`}>Укр</span>
                </Link>
            </nav>
        </div>

        <div className={`flex justify-between items-center my-[30px] max-[720px]:h-[50px] max-[720px]:my-0 min-[2430px]:h-[92px]`}>
            <nav className={`flex items-center space-x-4 ml-[50px] min-w-max max-[720px]:ml-[20px]`}>
                <Link href='#'  className={``}>
                    <Image src={logo} height={1} className={`flex-shrink-0 max-[720px]:w-[203px] max-[720px]:h-[35px] min-[2430px]:h-[70px] min-[3644px]:h-[104px] max-[1080px]:w-[308px] max-[1080px]:h-[53px] min-[1080px]:w-[308px] min-[1080px]:h-[53px] min-[2430px]:w-[403px] min-[3644px]:h-[104 px]`} alt={'Batyevka logo'}/>
                </Link>
                <Link href='#'  className={`max-[1666px]:hidden`}>
                    {/* <Image src={bandit_ban} className={`min-w-full min-[2430px]:h-[92px] min-[2430px]:w-[590px]`} alt={'bandit_ban'}/> */}
                    <div className='bg-[#8B6CB0] w-[275px] h-[60px] flex items-center justify-around'>
                    <Image src={telephon} className={`relative ml-[15px] w-8 h-8`} alt={'phone'}/>
                    0 800 30 32 30
                    <Image src={arrow_down} width={4} height={4} className={`w-4 h-4`} alt={'ArrowDown'}/>
                    </div>
                </Link>
            <Link href='#'  className={`text-[#56AABF] min-[1280px]:hidden max-[801px]:hidden`}>
                <Image src={_247} className={`relative ml-[15px] w-8 h-8`} alt={'_247'}/>
            </Link>
            <Link href='#'  className={`text-[#5984B3] min-[1280px]:hidden max-[801px]:hidden`}>
                <Image src={wrench} className={`relative ml-[15px] w-8 h-8`} alt={'wrench'}/>
            </Link>

                <div className={`flex items-center max-[1280px]:hidden mr-[76px] font-semibold`}>
                    <Link href='#'  className={`text-[#56AABF] flex items-center`}>
                        <Image src={_247} className={`relative ml-[15px] w-8 h-8`} alt={'_247'}></Image><span className={`ml-[15px] min-[2430px]:text-[21px]`}>Підтримка</span>
                    </Link>
                    <Link href='#'  className={`text-[#5984B3] flex items-center`}>
                        <Image src={wrench} className={`relative ml-[15px] w-8 h-8`} alt={'wrench'}></Image><span className={`ml-[15px] min-[2430px]:text-[21px]`}>Обладнання</span>
                    </Link>
                    <Link href='#'  className={`text-[#51B18B] flex items-center h-[60px]`}>
                        <Button variant="pay">
                        <Image src={wallet_white} className={`relative w-8 h-8 fill-white pr-[15px]`} alt={'wallet'}></Image>
                        Оплата
                        </Button>
                    </Link>
                </div>
            </nav>

            <nav className={`mr-[50px] max-[720px]:mr-[20px] flex items-center`}>
                <Button variant="cabinet">
                <Image src={connect} alt='connect' className={`pr-2`}></Image>
                    Кабінет абонента
                </Button>
                <Button variant="connect">
                    Заявка на підключення
                </Button>
                    <MobileModal />
            </nav>
        </div>
        <div className={`h-20 flex justify-around items-center rounded-full bg-[#123853] shadow-lg mx-8 max-[720px]:hidden min-[2430px]:h-[104px]`}>
            <Link href='#'  className={`max-[1420px]:hidden text-white font-semibold text-[13px] uppercase min-[2430px]:text-[17px] min-[2430px]:leading-[26px] text-center`}>Для багатоповерхівок</Link>
            <Link href='#'  className={`max-[1420px]:hidden text-white font-semibold text-[13px] uppercase min-[2430px]:text-[17px] min-[2430px]:leading-[26px] text-center`}>Приватним будинкам</Link>
            <Link href='#'  className={`max-[1420px]:m-1 text-white font-semibold text-[13px] uppercase min-[2430px]:text-[17px] min-[2430px]:leading-[26px] text-center`}>Для бізнеса</Link>
            <Image src={rectangle} alt='rect'/>
            <Link href='#'  className={`text-white font-semibold  text-[13px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>Доступ  в Інтернет</Link>
            <Link href='#'  className={`max-[801px]:hidden text-white font-semibold text-[13px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>Трансляції ТБ і футболу <br/> для закладів</Link>
            <Link href='#'  className={`max-[1024px]:hidden text-white font-semibold text-[13px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>Будівництво <br/> локальних мереж для офісів</Link>
            <Link href='#'  className={`max-[1420px]:hidden text-white font-semibold text-[13px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>Відеоспостереження <br/>для бізнесу</Link>
            <Link href='#'  className={`text-white inline-flex font-semibold  text-[13px] min-[2430px]:text-[21px] min-[2430px]:leading-[28px] text-center`}>Всі послуги <Image src={all_services} className={`ml-2`} alt='All Services'/></Link>
        </div>
        <div className={`flex items-center justify-center min-w-max flex-col min-[720px]:hidden mt-2`}>
            <div className={` bg-[#8B6CB0] w-[335px] h-[70px] flex items-center justify-center flex-col text-white rounded-md`}>
                <h3>Спецпропозиція!</h3>
                <p>Бандітский інтернет
                    Yahoo4it  не по-детски!</p>
            </div>
            <Button variant="connectMobile">Заявка на
                підключення</Button>
        </div>
        </header>
    );
}

export default Header;
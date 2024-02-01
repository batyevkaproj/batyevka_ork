import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/img/logo.svg';
import msg_small from '../public/img/msg_small.svg';
import arrow_down from '../public/img/arrow_down.svg';
import ket_small from '../public/img/ket_small.svg';
import globe_small from '../public/img/globe_small.svg';
import wallet from '../public/img/wallet.svg';
import _247 from '../public/img/247.svg';
import gear from '../public/img/gear.svg';
import bandit_ban from '../public/img/bandit-ban.svg';
import rectangle from '../public/img/rectangle.svg';
import all_services from '../public/img/all_services.svg';

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
                    <label className={`font-normal max-[902px]:hidden max-[720px]:block max-[720px]:w-[122px] max-[720px]:text-[11px] max-[720px]:ml-[20px] max-[720]:color-[#BDBDBD]`}>Дзвони нам! У нас быстрый дозвон,<label className={`max-[1140px]:hidden max-[720px]:block`}>живые операторы</label></label>
                </Link>
                <div className={`flex`}>
                <Link href='#'  className={`text-white text-base font-semibold cursor-pointer mr-2.5`}>
                    <Image src={msg_small} width={4} height={4} className={`w-4 h-4`} alt={'ArrowDown'}/>
                </Link>
                <Link href='#'  className={`text-white text-20 font-semibold mr-2.5`}>0 800 30 32 30</Link>
                <Link href='#'  className={`text-white`}>
                    <Image src={arrow_down} width={4} height={4} className={`w-4 h-4 max-[720px]:hidden`} alt={'ArrowDown'}/>
                </Link>
                </div>
            </nav>

            <nav className={`flex items-center space-x-4 mr-[50px] max-[720px]:hidden font-normal`}>
                <Link href='#'  className={`text-white inline-flex items-center`}>
                    <Image src={ket_small} width={4} height={4} className={`w-4 h-4`} alt={'ArrowDown'}/>
                    <span className={`ml-2`}>Війти</span>
                </Link>
                
                <Link href='#'  className={`text-white inline-flex items-center ml-4`}>
                    <Image src={globe_small} width={4} height={4} className={`w-4 h-4`} alt={'ArrowDown'}/>
                    <span className={`ml-2`}>Укр</span>
                </Link>
            </nav>
        </div>

        <div className={`flex justify-between items-center h-[70px] my-[30px] max-[720px]:h-[50px] max-[720px]:my-0`}>
            <nav className={`flex items-center space-x-4 ml-[50px] min-w-max max-[720px]:ml-[20px]`}>
                <Link href='#'  className={``}>
                    <Image src={logo} width={158} height={1} className={`flex-shrink-0 max-[720px]:w-[158px]`} alt={'ArrowDown'}/>
                </Link>
                <Link href='#'  className={`max-[1666px]:hidden`}>
                    <Image src={bandit_ban} className={`min-w-full`} alt={'ArrowDown'}/>
                </Link>
            </nav>
            <Link href='#'  className={`text-[#51B18B] min-[1280px]:hidden max-[801px]:hidden`}>
                <Image src={wallet} className={`relative ml-[15px] w-8 h-8`} alt={'ArrowDown'}/>
            </Link>
            <Link href='#'  className={`text-[#56AABF] min-[1280px]:hidden max-[801px]:hidden`}>
                <Image src={_247} className={`relative ml-[15px] w-8 h-8`} alt={'ArrowDown'}/>
            </Link>
            <Link href='#'  className={`text-[#5984B3] min-[1280px]:hidden max-[801px]:hidden`}>
                <Image src={gear} className={`relative ml-[15px] w-8 h-8`} alt={'ArrowDown'}/>
            </Link>
            <nav className={`mr-[50px] max-[720px]:mr-[20px] flex items-center`}>
                <div className={`flex items-center max-[1280px]:hidden mr-[76px] font-semibold`}>
                    <Link href='#'  className={`text-[#51B18B] flex items-center`}>
                        <Image src={wallet} className={`relative ml-[15px] w-8 h-8`} alt={'ArrowDown'}></Image><span className={`ml-[15px]`}>Оплата</span>
                    </Link>
                    <Link href='#'  className={`text-[#56AABF] flex items-center`}>
                        <Image src={_247} className={`relative ml-[15px] w-8 h-8`} alt={'ArrowDown'}></Image><span className={`ml-[15px]`}>Підтримка</span>
                    </Link>
                    <Link href='#'  className={`text-[#5984B3] flex items-center`}>
                        <Image src={gear} className={`relative ml-[15px] w-8 h-8`} alt={'ArrowDown'}></Image><span className={`ml-[15px]`}>Опції</span>
                    </Link>
                </div>
                <button className={`bg-[#DC662D] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#DC662D80] max-[779px]:hidden`}>
                    Заявка на підключення</button>
                <Link href='#'  className={`bg-[#56AABF] w-[66.86px] h-[60px] rounded-sm relative ml-[30px] min-[801px]:hidden striped-box  max-[720px]:h-[35px] max-[720px]:w-[39px] cursor-pointer`} id={`burger`}>
                    <span className={`absolute inset-y-1/4 h-[3.43px] w-[60%] bg-white ml-3.5 max-[720px]:ml-2`}></span>
                    <span className={`absolute inset-y-2/4 h-[4px] w-[60%] bg-white ml-3.5  max-[720px]:ml-2`}></span>
                    <span className={`absolute inset-y-3/4 h-[3.43px] w-[60%] bg-white ml-3.5  max-[720px]:ml-2`}></span>
                </Link>
            </nav>
        </div>
        <div className={`h-20 flex justify-around items-center rounded-full bg-[#123853] shadow-lg mx-8 max-[720px]:hidden`}>
            <Link href='#'  className={`max-[1420px]:hidden text-white font-semibold  text-[13px]`}>Для багатоповерхівок</Link>
            <Link href='#'  className={`max-[1420px]:hidden text-white font-semibold  text-[13px]`}>Приватним будинкам</Link>
            <Link href='#'  className={`max-[1420px]:m-1 text-white font-semibold  text-[13px] `}>Для бізнеса</Link>
            <Image src={rectangle} alt='rect'/>
            <Link href='#'  className={`text-white font-semibold  text-[13px]`}>Доступ  в Інтернет</Link>
            <Link href='#'  className={`max-[801px]:hidden text-white font-semibold  text-[13px]`}>Трансляції ТБ і футбола для закладів</Link>
            <Link href='#'  className={`max-[1024px]:hidden text-white font-semibold  text-[13px]`}>Будівництво <br/> локальних мереж для офісів</Link>
            <Link href='#'  className={`max-[1420px]:hidden text-white font-semibold  text-[13px]`}>Відео нагляд <br/> для бізнеса</Link>
            <Link href='#'  className={`text-white inline-flex font-semibold  text-[13px]`}>Всі послуги <Image src={all_services} className={`ml-2`} alt='All Services'/></Link>
        </div>
        <div className={`flex items-center justify-center min-w-max flex-col min-[720px]:hidden mt-2`}>
            <div className={` bg-[#8B6CB0] w-[335px] h-[70px] flex items-center justify-center flex-col text-white rounded-md`}>
                <h3>Спецпропозиція!</h3>
                <p>Бандітский інтернет
                    Yahoo4it  не по-детски!</p>
            </div>
            <button className={`bg-[#DC662D] mt-5 text-white rounded-full h-[60px] w-[270px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#DC662D80]`}>Заявка на
                підключення</button>
        </div>
        </header>
    );
}

export default Header;
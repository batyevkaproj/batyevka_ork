import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
    <header>
            <div className={`flex justify-between items-center bg-[#56AABF] h-[60px]  max-[720px]:bg-[#0E2D43]`}>
                <nav className="space-x-4 ml-[50px] font-montserrat text-white max-[720px]:hidden">
                    <Link href="#">Акции</Link>
                    <Link href="#">Карта покриття</Link>
                </nav>
                <nav className="items-center flex justify-between max-[720px]:min-w-full">
                    <Link href="#" className={`font-montserrat text-white pr-[30px]`}>
                        <label className="font-normal max-[902px]:hidden max-[720px]:block max-[720px]:w-[122px] max-[720px]:text-[11px] max-[720px]:ml-[20px] max-[720]:color-[#BDBDBD]">Звони нам! У нас быстрый дозвон,<label className="max-[1140px]:hidden max-[720px]:block">живые операторы</label></label>
                    </Link>
                    <div className="flex">
                        <Link href="#" className="text-white text-base font-semibold cursor-pointer mr-2.5">
                            <Image src="img/msg_small.svg" className="w-4 h-4" alt="msg_small" width={4} height={4}/>
                        </Link>
                        <Link href="#" className={`text-white font-montserrat text-20 font-semibold mr-2.5`}>0 800 30 32 30</Link>
                        <Link href="#" className="text-white">
                            <Image src="img/arrow_down.svg" width={4} height={4} className="w-4 h-4 max-[720px]:hidden" alt="arrow down" />
                        </Link>
                    </div>
                </nav>

                <nav className={`flex items-center space-x-4 mr-[50px] max-[720px]:hidden font-montserrat font-normal`}>
                    <Link href="#" className="text-white inline-flex items-center">
                        <Image src="img/ket_small.svg" width={4} height={4} className="w-4 h-4" alt="ket small" />
                        <span className="ml-2">Війти</span>
                    </Link>

                    <Link href="#" className="text-white inline-flex items-center ml-4">
                        <Image src="img/globe_small.svg" width={4} height={4} className="w-4 h-4" alt="globe small" />
                        <span className="ml-2">Укр</span>
                    </Link>
                </nav>
            </div>

            <div className="flex justify-between items-center h-[70px] my-[30px] max-[720px]:h-[50px] max-[720px]:my-0">
                <nav className="flex items-center space-x-4 ml-[50px] min-w-max max-[720px]:ml-[20px]">
                    <Link href="#">
                        <Image className="flex-shrink-0 max-[720px]:w-[158px]" src="img/logo.svg" width={308} height={53} alt="logo" />
                    </Link>
                    <Link href="#" className="max-[1666px]:hidden">
                        <Image className="min-w-full" src="img/bandit-ban.svg" width={450} height={70} alt="bandit ban" />
                    </Link>
                </nav>
                <Link href="#" className="text-[#51B18B] min-[1280px]:hidden max-[801px]:hidden">
                    <Image src="img/wallet.svg" className="relative ml-[15px] w-8 h-8" width={8} height={8} alt="wallet" />
                </Link>
                <Link href="#" className="text-[#56AABF] min-[1280px]:hidden max-[801px]:hidden">
                    <Image src="img/247.svg" className="relative ml-[15px] w-8 h-8" width={8} height={8} alt="247" />
                </Link>
                <Link href="#" className="text-[#5984B3] min-[1280px]:hidden max-[801px]:hidden">
                    <Image src="img/gear.svg" className="relative ml-[15px] w-8 h-8" width={8} height={8} alt="gear" />
                </Link>
                <nav className="mr-[50px] max-[720px]:mr-[20px] flex items-center">
                    <div className={`flex items-center max-[1280px]:hidden mr-[76px] font-montserrat font-semibold `}>
                        <Link href="#" className="text-[#51B18B] flex items-center">
                            <Image src="img/wallet.svg"
                                className="relative ml-[15px] w-8 h-8" width={8} height={8} alt="wallet" />
                            <span className="ml-[15px]">Оплата</span>
                        </Link>
                        <Link href="#" className="text-[#56AABF] flex items-center">
                            <Image src="img/247.svg"
                                className="relative ml-[15px] w-8 h-8" width={8} height={8} alt="247" />
                            <span className="ml-[15px]">Підтримка</span>
                        </Link>
                        <Link href="#" className="text-[#5984B3] flex items-center">
                            <Image src="img/gear.svg"
                                className="relative ml-[15px] w-8 h-8" width={8} height={8} alt="gear" />
                            <span className="ml-[15px]">Опції</span>
                        </Link>
                    </div>
                    <button className="bg-[#DC662D] text-white rounded-full h-[60px] w-[270px] cursor-pointer font-montserrat font-semibold shadow-[0_4px_20px_0_#DC662D80] max-[779px]:hidden">Заявка на
                        підключення</button>
                    <Link href="#" className="bg-[#56AABF] w-[66.86px] h-[60px] rounded-sm relative ml-[30px] min-[801px]:hidden striped-box  max-[720px]:h-[35px] max-[720px]:w-[39px] cursor-pointer" id="burger">
                        <span className="absolute inset-y-1/4 h-[3.43px] w-[60%] bg-white ml-3.5 max-[720px]:ml-2"></span>
                        <span className="absolute inset-y-2/4 h-[4px] w-[60%] bg-white ml-3.5  max-[720px]:ml-2"></span>
                        <span className="absolute inset-y-3/4 h-[3.43px] w-[60%] bg-white ml-3.5  max-[720px]:ml-2"></span>
                    </Link>
                </nav>
            </div>
            <div className="h-20 flex rounded-full bg-[#123853] shadow-lg mx-8 items-center justify-between max-[720px]:hidden">
                <Link href="#" className={`max-[1420px]:hidden text-white font-semibold font-montserrat text-[13px]`}>Для многоэтажек</Link>
                <Link href="#" className={`max-[1420px]:hidden text-white font-semibold font-montserrat text-[13px]`}>Частным домам</Link>
                <Link href="#" className={`max-[1420px]:m-1 text-white font-semibold font-montserrat text-[13px]`}>Для бизнеса</Link>
                <Image src="img/rectangle.svg" width={31} height={80} alt="rectangle" />
                <Link href="#" className="text-white font-semibold font-montserrat text-[13px]">Доступ  в Интернет</Link>
                <Link href="#" className="max-[801px]:hidden text-white font-semibold font-montserrat text-[13px]">Трансляция ТВ и футбола для зведений</Link>
                <Link href="#" className="max-[1024px]:hidden text-white font-semibold font-montserrat text-[13px]">Строительство локальных сетей для офисов</Link>
                <Link href="#" className="max-[1420px]:hidden text-white font-semibold font-montserrat text-[13px]">Видео наблюдение для бизнеса</Link>
                <Link href="#" className="text-white inline-flex font-semibold font-montserrat text-[13px]">Все услуги
                    <Image src="img/all_services.svg" width={10} height={19.5} className="ml-2" alt="all services" />
                </Link>
            </div>
            <div className="flex items-center justify-center min-w-max flex-col min-[720px]:hidden mt-2">
                <div className=" bg-[#8B6CB0] w-[335px] h-[70px] flex items-center justify-center flex-col text-white rounded-md">
                    <h3>Спецпредложение!</h3>
                    <p>Бандитский интернет
                        Yahoo4it  не по-детски!</p>
                </div>
                <button className="bg-[#DC662D] mt-5 text-white rounded-full h-[60px] w-[270px] cursor-pointer font-montserrat font-semibold shadow-[0_4px_20px_0_#DC662D80]">Заявка на
                    підключення</button>
            </div>
        </header>
    );
}

export default Header;
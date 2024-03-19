import money    from '../../public/img/money.svg';
import schema   from '../../public/img/schema.svg';
import docks    from '../../public/img/docks.svg';
import speed    from '../../public/img/speed.svg';
import oper     from '../../public/img/oper.svg';
import flash    from '../../public/img/flash.svg';

import Image    from 'next/image';

const Advantages = () => {
    return ( 
        <div className={`grid text-white grid-cols-3 max-[1770px]:grid-cols-2 max-[1180px]:grid-cols-1 justify-center items-center max-[780px]:gap-5`}>
            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col max-[780px]:h-[270px]`}>
                <Image src={flash} alt={`flash`}/>
                <div className={`flex flex-col w-[279px] max-[1180px]:w-[630px] ml-[42px] max-[1045px]:w-[500px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={` text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px]`}>Підключаємо за добу</h3>
                    <p className={` font-normal h-[126px] flex items-center leading-[24px] max-[780px]:h-full max-[780px]:text-[14px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                </div>
            </div>
            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col`}>
                <Image src={money} alt={`money`}/>
                <div className={`flex flex-col w-[279px] max-[1180px]:w-[630px] ml-[42px] max-[1045px]:w-[500px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px]`}>Найбільш адекватні ціни</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                </div>
            </div>
            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col`}>
                <Image src={schema} alt={``} className={``}/>
                <div className={`flex flex-col w-[279px] max-[1180px]:w-[630px] ml-[42px] max-[1045px]:w-[500px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px]`}>Надійність та стабільність</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                </div>
            </div>
            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col`}>
                <Image src={docks} alt={``} className={``}/>
                <div className={`flex flex-col w-[279px] max-[1180px]:w-[630px] ml-[42px] max-[1045px]:w-[500px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px]`}>Якісний бухгалтерський супровід</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                </div>
            </div>
            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col`}>
                <Image src={speed} alt={`speed`} className={``}/>
                <div className={`flex flex-col w-[279px] max-[1180px]:w-[630px] ml-[42px] max-[1045px]:w-[500px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px]`}>Найкраща швидкість</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                </div>
            </div>
            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col`}>
                <Image src={oper} alt={`oper`} className={``}/>
                <div className={`flex flex-col w-[279px] max-[1180px]:w-[630px] ml-[42px] max-[1045px]:w-[500px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={` text-[24px] mt-10 max-[780px]:mt-0 max-[780px]:text-[16px]`}>Підтримка</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Advantages;
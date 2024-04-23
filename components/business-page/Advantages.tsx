import money    from '../../public/img/money.svg';
import schema   from '../../public/img/schema.svg';
import docks    from '../../public/img/docks.svg';
import speed    from '../../public/img/speed.svg';
import oper     from '../../public/img/oper.svg';
import flash    from '../../public/img/flash.svg';

import Image    from 'next/image';

const Advantages = () => {
    return ( 
        <div className={`grid text-white grid-cols-3 max-[1770px]:grid-cols-2 max-[1180px]:grid-cols-1 justify-center items-center max-[780px]:gap-5 place-items-center max-[2430px]:px-[120px] max-[590px]:pt-[40px]`}>
            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col max-[780px]:h-[270px] min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full`}>
                <Image src={flash} alt={`flash`} className='min-[2430px]:h-[238px] min-[2430px]:w-[284px]'/>
                <div className={`flex flex-col ml-[42px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Підключення протягом доби</h3>
                    <p className={`font-normal h-[126px] flex items-center leading-[24px] max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Підключимо наступного дня після подачі заявки без довгої паперової тяганини.</p>
                </div>
            </div>
            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full`}>
                <Image src={docks} alt={``} className='min-[2430px]:h-[238px] min-[2430px]:w-[284px]'/>
                <div className={`flex flex-col ml-[42px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Якісний бухгалтерський супровід</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                </div>
            </div>
            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full`}>
                <Image src={money} alt={`money`} className='min-[2430px]:h-[212px] min-[2430px]:w-[265px]'/>
                <div className={`flex flex-col ml-[42px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Найбільш адекватні ціни</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                </div>
            </div>
            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full`}>
                <Image src={speed} alt={`speed`} className='min-[2430px]:h-[258px] min-[2430px]:w-[284px]'/>
                <div className={`flex flex-col ml-[42px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Найкраща швидкість</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                </div>
            </div>

            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full`}>
                <Image src={schema} alt={``} className='min-[2430px]:h-[238px] min-[2430px]:w-[309px]'/>
                <div className={`flex flex-col ml-[42px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Надійність та стабільність</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                </div>
            </div>
            <div className={`flex items-center justify-center h-[251px] max-[780px]:flex-col min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full`}>
                <Image src={oper} alt={`oper`} className='min-[2430px]:h-[238px] min-[2430px]:w-[277px]'/>
                <div className={`flex flex-col ml-[42px]`}>
                    <span className={`relative -z-1 w-[43px] h-[3px] right-14 top-14 bg-white max-[780px]:hidden`}></span>
                    <h3 className={` text-[24px] mt-10 max-[780px]:mt-0 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Підтримка</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Advantages;
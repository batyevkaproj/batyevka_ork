import money    from '../../public/img/money.svg';
import schema   from '../../public/img/schema.svg';
import docks    from '../../public/img/docks.svg';
import speed    from '../../public/img/speed.svg';
import oper     from '../../public/img/oper.svg';
import flash    from '../../public/img/flash.svg';

import Image    from 'next/image';

const Advantages = () => {
    return (
        
        <div className={`grid text-white grid-cols-3 max-[1770px]:grid-cols-2 max-[1180px]:grid-cols-1 max-[780px]:gap-5 min-[3644px]:px-[240px] px-[170px] max-[2430px]:px-[120px] max-[1600px]:px-[85px] max-[1247px]:px-[67px] max-[932px]:px-[35px] max-[558px]:px-[20px] gap-x-[51px] min-[3644px]:gap-x-[90px] max-[2430px]:gap-x-[32px] gap-y-[40px] min-[3644px]:gap-y-[60px] max-[2430px]:gap-y-[30px] max-[780px]:gap-y-[20px]`}>
            <div className={`flex items-center h-[251px] max-[780px]:flex-col max-[780px]:h-[270px] min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full z-[1]`}>
                <Image src={flash} alt={`flash`} className='min-[2430px]:h-[238px] min-[2430px]:w-[284px]'/>
                <div className={`flex flex-col max-[780px]:items-start min-[3644px]:ml-[80px] ml-[57px] max-[2377px]:ml-[43px]`}>
                    <span className={`relative z-1 w-[43px] h-[3px] right-14 top-16 max-[2430px]:top-[60px] bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Підключення протягом доби</h3>
                    <p className={`font-normal h-[126px] flex items-center leading-[24px] max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Підключимо наступного дня після подачі заявки без довгої паперової тяганини.</p>
                </div>
            </div>
            <div className={`flex items-center h-[251px] max-[780px]:flex-col min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full max-[1180px]:flex-row-reverse  z-[1]`}>
                <Image src={docks} alt={``} className='min-[2430px]:h-[238px] min-[2430px]:w-[284px]'/>
                <div className={`flex flex-col max-[1180px]:text-right max-[780px]:text-left max-[1180px]:items-end max-[780px]:items-start max-[1180px]:mr-[43px] min-[3644px]:ml-[80px] ml-[57px] max-[2377px]:ml-[43px] `}>
                    <span className={`relative z-1 w-[43px] h-[3px] right-14 max-[1180px]:left-14 max-[780px]:right-14 top-16 max-[2430px]:top-[60px] bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Якісний бухгалтерський супровід </h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Електронний документообіг. Надамо документи в зручний для вас час.</p>
                </div>
            </div>
            <div className={`flex items-center h-[251px] max-[780px]:flex-col min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full z-[1]`}>
                <Image src={money} alt={`money`} className='min-[2430px]:h-[212px] min-[2430px]:w-[265px]'/>
                <div className={`flex flex-col max-[780px]:items-start min-[3644px]:ml-[80px] ml-[57px] max-[2377px]:ml-[43px]`}>
                    <span className={`relative z-1 w-[43px] h-[3px] right-14 top-16 max-[2430px]:top-[60px] bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Найбільш адекватні ціни</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Знайдете дешевше - місяць безкоштовно.</p>
                </div>
            </div>
            <div className={`flex items-center h-[251px] max-[780px]:flex-col min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full max-[1180px]:flex-row-reverse z-[1]`}>
                <Image src={speed} alt={`speed`} className='min-[2430px]:h-[258px] min-[2430px]:w-[284px]'/>
                <div className={`flex flex-col max-[1180px]:text-right max-[780px]:text-left max-[1180px]:items-end max-[780px]:items-start max-[1180px]:mr-[43px] min-[3644px]:ml-[80px] ml-[57px] max-[2377px]:ml-[43px]`}>
                    <span className={`relative z-1 w-[43px] h-[3px] right-14 max-[1180px]:left-14 max-[780px]:right-14 top-16 max-[2430px]:top-[60px] bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Найкраща швидкість</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Рівнозначна швидкість в Інтернет для України і Світу, вхідного і вихідного трафику.</p>
                </div>
            </div>

            <div className={`flex items-center h-[251px] max-[780px]:flex-col min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full z-[1]`}>
                <Image src={schema} alt={``} className='min-[2430px]:h-[238px] min-[2430px]:w-[309px]'/>
                <div className={`flex flex-col max-[780px]:items-start min-[3644px]:ml-[60px] ml-[31px] max-[2377px]:ml-[24px]`}>
                    <span className={`relative z-1 w-[43px] h-[3px] right-14 top-16 max-[2430px]:top-[60px] bg-white max-[780px]:hidden`}></span>
                    <h3 className={`text-[24px] mt-10 max-[780px]:mt-1 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Надійність та стабільність</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Швидкість усунення несправностей меньше 3-х годин  із моменту подачі заявки.</p>
                </div>
            </div>
            <div className={`flex items-center h-[251px] max-[780px]:flex-col min-[2430px]:h-[329px] min-[2430px]:w-[706px] max-[910px]:h-full max-[1180px]:flex-row-reverse z-[1]`}>
                <Image src={oper} alt={`oper`} className='min-[2430px]:h-[238px] min-[2430px]:w-[277px]'/>
                <div className={`flex flex-col max-[1180px]:text-right max-[780px]:text-left max-[1180px]:items-end max-[780px]:items-start max-[1180px]:mr-[43px] min-[3644px]:ml-[80px] ml-[57px] max-[2377px]:ml-[43px]`}>
                    <span className={`relative z-1 w-[43px] h-[3px] right-14 max-[1180px]:left-14 max-[780px]:right-14 top-16 max-[2430px]:top-[60px] bg-white max-[780px]:hidden`}></span>
                    <h3 className={` text-[24px] mt-10 max-[780px]:mt-0 max-[780px]:text-[16px] min-[2430px]:text-[32px] font-bold`}>Підтримка</h3>
                    <p className={` font-normal h-[126px] flex items-center max-[780px]:h-full max-[780px]:text-[14px] min-[2430px]:text-[20px] min-[2430px]:w-[365px]`}>Цілодобова підтримка і ваш персональный менеджер.</p>
                </div>
            </div>
        </div>
     );
};
 
export default Advantages;
import money    from '../../public/img/money.svg';
import schema   from '../../public/img/schema.svg';
import docks    from '../../public/img/docks.svg';
import speed    from '../../public/img/speed.svg';
import oper     from '../../public/img/oper.svg';
import flash    from '../../public/img/flash.svg';

import Image    from 'next/image';

const Advantages = () => {
    return ( 
        <div className={`flex justify-between text-white`}>
            <div className={`flex `}>
                <div className={`flex flex-col`}>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={flash} alt={`flash`}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={` text-[24px] mt-10`}>Підключаємо за добу</h3>
                            <p className={` font-normal h-[126px] flex items-center leading-[24px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={money} alt={`money`}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={`text-[24px] mt-10`}>Найбільш адекватні ціни</h3>
                            <p className={` font-normal h-[126px] flex items-center`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={schema} alt={``} className={``}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={`text-[24px] mt-10`}>Надійність та стабільність</h3>
                            <p className={` font-normal h-[126px] flex items-center`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex`}>
                <div className={`flex flex-col`}>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={docks} alt={``} className={``}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={`text-[24px] mt-10`}>Якісний бухгалтерський супровід</h3>
                            <p className={` font-normal h-[126px] flex items-center`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={speed} alt={`speed`} className={``}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={`text-[24px] mt-10`}>Найкраща швидкість</h3>
                            <p className={` font-normal h-[126px] flex items-center`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={oper} alt={`oper`} className={``}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={` text-[24px] mt-10`}>Підтримка</h3>
                            <p className={` font-normal h-[126px] flex items-center`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Advantages;
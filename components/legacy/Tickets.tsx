import Image from 'next/image';
import speedometer from '@/public/img/speedometer_small.svg';
import thumb from '@/public/img/thumb_small.svg';

const Tickets = () => {

    return (
    <>
    <div className='sticky max-[910px]:hidden top-[159px] max-[2377px]:left-[-160px] left-[-210px] h-[139px] max-[2377px]:w-[240px] w-[320px] z-[1]'>
        <div className={`flex h-[76px] w-full max-[2377px]:h-[60px] hover:animate-slide `}>
            <div className={`flex justify-between items-center h-full max-[2377px]:w-[225px] w-[293px] bg-[#56AABF] shadow-[0px_4px_20px_0px_#0B273C]`}>
                <div className={``}>
                    <p className={`text-white max-[2377px]:text-[12px] max-[2377px]:leading-[17px] text-[16px] leading-[22px] max-[2377px]:ml-[20px] ml-[25px] antialiased `}>Найвища якість <br/> ТБ і зображення</p>
                </div>
                <div className={`max-[2377px]:mr-[15px] mr-[24px]`}>
                    <Image src={thumb} className={`size-[42px] max-[2377px]:size-[32px]`} alt='thumb'/>
                </div>
            </div>
            <div className={`h-full`}>
                <div className={`max-[2377px]:border-b-[30px] border-b-[38px] border-t-[0px] max-[2377px]:border-l-[15px] border-l-[27px] border-t-transparent border-b-transparent border-solid border-l-[#56AABF]`}>
                </div>
                <div className={`border-b-[0px] max-[2377px]:border-t-[30px] border-t-[38px] max-[2377px]:border-l-[15px] border-l-[27px] border-t-transparent border-b-transparent border-solid border-l-[#56AABF]`}>
                </div>
            </div>
        </div>
        <div className={`flex h-[76px] w-full max-[2377px]:h-[60px] hover:animate-slide max-[2377px]:mt-[20px] mt-[26px]`}>
            <div className={`flex justify-between items-center h-full max-[2377px]:w-[225px] w-[293px] bg-[#5984B2] shadow-[0px_4px_20px_0px_#0B273C]`}>
                <div className={``}>
                    <p className={`text-white max-[2377px]:text-[12px] max-[2377px]:leading-[17px] text-[16px] leading-[22px] max-[2377px]:ml-[20px] ml-[25px] antialiased `}>Гарантія заявленої <br/> швидкості</p>
                </div>
                <div className={`max-[2377px]:mr-[15px] mr-[24px]`}>
                    <Image src={speedometer} className={`size-[42px] max-[2377px]:size-[32px]`} alt='speedometer'/>
                </div>
            </div>
            <figure className={`h-full `}>
                <div className={`max-[2377px]:border-b-[30px] border-b-[38px] border-t-[0px] max-[2377px]:border-l-[15px] border-l-[27px] border-t-transparent border-b-transparent border-solid border-l-[#5984B2]`}>
                </div>
                <div className={`border-b-[0px] max-[2377px]:border-t-[30px] border-t-[38px] max-[2377px]:border-l-[15px] border-l-[27px] border-t-transparent border-b-transparent border-solid border-l-[#5984B2]`}>
                </div>
            </figure>
        </div>
    </div>

    </>
     );
};
 
export default Tickets;
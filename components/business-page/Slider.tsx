import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useModal } from "@/hooks/use-modal-store";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNextVariation,
    CarouselPreviousVariation,
  } from "@/components/ui/carousel";

import { type CarouselApi } from "@/components/ui/carousel";

import infinity from '../../public/img/infinity.png';
import cable from    '../../public/img/cable.png';
import sign from     '../../public/img/sign.png';
import vector from   '../../public/img/Vector.svg';
import vector2 from   '../../public/img/vector2.svg';
import vector3 from   '../../public/img/vector3.svg';
import vector4 from   '../../public/img/vector4.svg';

import speedometer from '@/public/img/speedometer_small.svg';
import thumb from '@/public/img/thumb_small.svg';




const Slider = () => {

    const { onOpen } = useModal();
    

    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState<number>(0);
    const [count, setCount] = useState<number>(0);
   
    useEffect(() => {
      if (!api) {
        return;
      }
   
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
   
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);

    const timesArray = Array.from({ length: count });

    return (
    <>


<Carousel className={`min-[2430px]:mt-[60px] mt-[45px]`} setApi={setApi}>
    <div className='absolute max-[910px]:hidden top-[159px] max-[2377px]:left-[-160px] left-[-210px] h-[139px] max-[2377px]:w-[240px] w-[320px] z-[1]'>
        <div className={`flex h-[76px] w-full max-[2377px]:h-[60px] hover:animate-slide `}>
            <div className={`flex justify-between items-center h-full max-[2377px]:w-[225px] w-[293px] bg-[#56AABF] shadow-[0px_4px_20px_0px_#0B273C]`}>
                <div className={``}>
                    <p className={`text-white max-[2377px]:text-[12px] max-[2377px]:leading-[17px] text-[16px] leading-[22px] max-[2377px]:ml-[20px] ml-[25px] antialiased font-normal`}>Найвища якість <br/> ТБ і зображення</p>
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
                    <p className={`text-white max-[2377px]:text-[12px] max-[2377px]:leading-[17px] text-[16px] leading-[22px] max-[2377px]:ml-[20px] ml-[25px] antialiased font-normal`}>Гарантія заявленої <br/> швидкості</p>
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
  <CarouselContent className='flex'>
    <CarouselItem className='flex justify-between items-center max-[910px]:flex-col-reverse '>
        <div className='min-[2430px]:ml-[170px] ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-10 max-[910px]:ml-0 max-[910px]:w-fit max-[910px]:px-[35px]'>
            <h1 className={`text-[60px] font-bold text-white shrink-0 whitespace-nowrap z-10 min-[2430px]:text-[80px] max-[910px]:text-[34px]`}>Інтернет <span className={`text-[#56AABF]`}>В офіс</span></h1>
            <div className={`list-none text-white min-[2430px]:my-[40px] my-[30px] min-[2430px]:text-[21px] min-[2430px]:leading-[30px] text-[16px] leading-[24px] max-[910px]:text-[14px]`}>
                <div className={`flex`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={infinity} alt='infinity' className={`mt-[7px] min-[2430px]:mt-[9px] min-[3644px]:mt-[14px] w-[21px] h-[10px] min-[2430px]:w-[27px] min-[2430px]:h-[13px] min-[3644px]:w-[40px] min-[3644px]:h-[19px]`}/>
                    </div>
                    <p className={`font-normal`}>Безлімітні та необмежені тарифні плани</p>
                </div>
                <div className={`flex mt-[15px] min-[2430px]:mt-[20px] min-[3644px]:mt-[30px]`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={sign} alt='sign' className={`ml-[6px] min-[2430px]:ml-[7px] min-[3644px]:ml-[11px] mt-[5px] min-[2430px]:mt-[6px] min-[3644px]:mt-[9px] w-[10px] h-[16px] min-[2430px]:w-[13px] min-[2430px]:h-[20px] min-[3644px]:w-[19px] min-[3644px]:h-[30px]`}/>
                    </div>
                    <p className={`font-normal`}>Гарантована швидкість – симетричний високошвидкісний канал із постійною швидкістю доступу до мережі Інтернет</p>
                </div>
                <div className={`flex mt-[15px] min-[2430px]:mt-[20px] min-[3644px]:mt-[30px]`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={cable} alt='cable' className={`w-[18px] h-[22px] min-[2430px]:w-[24px] min-[2430px]:h-[29px] min-[3644px]:w-[35px] min-[3644px]:h-[43px]`}/>
                    </div>
                    <p className={`font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</p>
                </div>
            </div>
            <button onClick={() => onOpen("call")} className={`text-[18px] min-[2430px]:text-[24px] bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] min-[2430px]:h-[76px] min-[2430px]:w-[200px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80] max-[910px]:w-full`}>Замовити</button>
        </div>
        <div className='mr-[120px] z-1 max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full max-[910px]:flex max-[910px]:justify-center max-[910px]:mr-0'>
            <Image src={vector} className='z-1 whitespace-nowrap max-[559px]:px-[20px]' alt='vector'/>
        </div>
    </CarouselItem>

    <CarouselItem className='flex justify-between items-center max-[910px]:flex-col-reverse'>
        <div className='min-[2430px]:ml-[170px] ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-10 max-[910px]:ml-0 max-[910px]:w-fit max-[910px]:px-[35px]'>
            <h1 className={`text-[60px] font-bold text-white shrink-0 whitespace-nowrap z-10 min-[2430px]:text-[80px] max-[910px]:text-[34px]`}>Інтернет <span className={`text-[#56AABF]`}>В МАГАЗИН</span></h1>
            <div className={`list-none text-white flex flex-col min-[2430px]:my-[40px] my-[30px] min-[2430px]:text-[21px] min-[2340px]:leading-[30px] text-[16px] leading-[24px] max-[910px]:text-[14px]`}>
                <div className={`flex`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={infinity} alt='infinity' className={`mt-[7px] min-[2430px]:mt-[9px] min-[3644px]:mt-[14px] w-[21px] h-[10px] min-[2430px]:w-[27px] min-[2430px]:h-[13px] min-[3644px]:w-[40px] min-[3644px]:h-[19px]`}/>
                    </div>
                    <p className={`font-normal`}>Безлімітні та необмежені тарифні плани</p>
                </div>
                <div className={`flex mt-[15px] min-[2430px]:mt-[20px] min-[3644px]:mt-[30px]`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={sign} alt='sign' className={`ml-[6px] min-[2430px]:ml-[7px] min-[3644px]:ml-[11px] mt-[5px] min-[2430px]:mt-[6px] min-[3644px]:mt-[9px] w-[10px] h-[16px] min-[2430px]:w-[13px] min-[2430px]:h-[20px] min-[3644px]:w-[19px] min-[3644px]:h-[30px]`}/>
                    </div>
                    <p className={`font-normal`}>Гарантована швидкість – симетричний високошвидкісний канал із постійною швидкістю доступу до мережі Інтернет</p>
                </div>
                <div className={`flex mt-[15px] min-[2430px]:mt-[20px] min-[3644px]:mt-[30px]`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={cable} alt='cable' className={`w-[18px] h-[22px] min-[2430px]:w-[24px] min-[2430px]:h-[29px] min-[3644px]:w-[35px] min-[3644px]:h-[43px]`}/>
                    </div>
                    <p className={`font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</p>
                </div>
            </div>
            <button onClick={() => onOpen("call")} className={`text-[18px] min-[2430px]:text-[24px] bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] min-[2430px]:h-[76px] min-[2430px]:w-[200px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80] max-[910px]:w-full`}>Замовити</button>
        </div>
        <div className='mr-[120px] z-1 max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full max-[910px]:flex max-[910px]:justify-center max-[910px]:mr-0'>
            <Image src={vector2} className='z-1 whitespace-nowrap max-[559px]:px-[20px]' alt='vector'/>
        </div>
    </CarouselItem>

    <CarouselItem className='flex justify-between items-center max-[910px]:flex-col-reverse'>
        <div className='min-[2430px]:ml-[170px] ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-10 max-[910px]:ml-0 max-[910px]:w-fit max-[910px]:px-[35px]'>
            <h1 className={`text-[60px] font-bold text-white shrink-0 whitespace-nowrap z-10 min-[2430px]:text-[80px] max-[910px]:text-[34px]`}>Інтернет <span className={`text-[#56AABF]`}>В САЛОН</span></h1>
            <div className={`list-none text-white flex flex-col min-[2430px]:my-[40px] my-[30px] min-[2430px]:text-[21px] min-[2340px]:leading-[30px] text-[16px] leading-[24px] max-[910px]:text-[14px]`}>
                <div className={`flex`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={infinity} alt='infinity' className={`mt-[7px] min-[2430px]:mt-[9px] min-[3644px]:mt-[14px] w-[21px] h-[10px] min-[2430px]:w-[27px] min-[2430px]:h-[13px] min-[3644px]:w-[40px] min-[3644px]:h-[19px]`}/>
                    </div>
                    <p className={`font-normal`}>Безлімітні та необмежені тарифні плани</p>
                </div>
                <div className={`flex mt-[15px] min-[2430px]:mt-[20px] min-[3644px]:mt-[30px]`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={sign} alt='sign' className={`ml-[6px] min-[2430px]:ml-[7px] min-[3644px]:ml-[11px] mt-[5px] min-[2430px]:mt-[6px] min-[3644px]:mt-[9px] w-[10px] h-[16px] min-[2430px]:w-[13px] min-[2430px]:h-[20px] min-[3644px]:w-[19px] min-[3644px]:h-[30px]`}/>
                    </div>
                    <p className={`font-normal`}>Гарантована швидкість – симетричний високошвидкісний канал із постійною швидкістю доступу до мережі Інтернет</p>
                </div>
                <div className={`flex mt-[15px] min-[2430px]:mt-[20px] min-[3644px]:mt-[30px]`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={cable} alt='cable' className={`w-[18px] h-[22px] min-[2430px]:w-[24px] min-[2430px]:h-[29px] min-[3644px]:w-[35px] min-[3644px]:h-[43px]`}/>
                    </div>
                    <p className={`font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</p>
                </div>
            </div>
            <button onClick={() => onOpen("call")} className={`text-[18px] min-[2430px]:text-[24px] bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] min-[2430px]:h-[76px] min-[2430px]:w-[200px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80] max-[910px]:w-full`}>Замовити</button>
        </div>
        <div className='mr-[120px] z-1 max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full max-[910px]:flex max-[910px]:justify-center max-[910px]:mr-0'>
            <Image src={vector3} className='z-1 whitespace-nowrap max-[559px]:px-[20px]' alt='vector'/>
        </div>
    </CarouselItem>

    <CarouselItem className='flex justify-between items-center max-[910px]:flex-col-reverse'>
        <div className='min-[2430px]:ml-[170px] ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-10 max-[910px]:ml-0 max-[910px]:w-fit max-[910px]:px-[35px]'>
            <h1 className={`text-[60px] font-bold text-white shrink-0 whitespace-nowrap z-10 min-[2430px]:text-[80px] max-[910px]:text-[34px]`}>Інтернет <span className={`text-[#56AABF]`}>В РЕСТОРАН</span></h1>
            <div className={`list-none text-white flex flex-col min-[2430px]:my-[40px] my-[30px] min-[2430px]:text-[21px] min-[2340px]:leading-[30px] text-[16px] leading-[24px] max-[910px]:text-[14px]`}>
                <div className={`flex`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={infinity} alt='infinity' className={`mt-[7px] min-[2430px]:mt-[9px] min-[3644px]:mt-[14px] w-[21px] h-[10px] min-[2430px]:w-[27px] min-[2430px]:h-[13px] min-[3644px]:w-[40px] min-[3644px]:h-[19px]`}/>
                    </div>
                    <p className={`font-normal`}>Безлімітні та необмежені тарифні плани</p>
                </div>
                <div className={`flex mt-[15px] min-[2430px]:mt-[20px] min-[3644px]:mt-[30px]`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={sign} alt='sign' className={`ml-[6px] min-[2430px]:ml-[7px] min-[3644px]:ml-[11px] mt-[5px] min-[2430px]:mt-[6px] min-[3644px]:mt-[9px] w-[10px] h-[16px] min-[2430px]:w-[13px] min-[2430px]:h-[20px] min-[3644px]:w-[19px] min-[3644px]:h-[30px]`}/>
                    </div>
                    <p className={`font-normal`}>Гарантована швидкість – симетричний високошвидкісний канал із постійною швидкістю доступу до мережі Інтернет</p>
                </div>
                <div className={`flex mt-[15px] min-[2430px]:mt-[20px] min-[3644px]:mt-[30px]`}>
                    <div className={`flex shrink-0 w-[31px] min-[2430px]:w-[40px] min-[3644px]:w-[60px]`}>
                        <Image src={cable} alt='cable' className={`w-[18px] h-[22px] min-[2430px]:w-[24px] min-[2430px]:h-[29px] min-[3644px]:w-[35px] min-[3644px]:h-[43px]`}/>
                    </div>
                    <p className={`font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</p>
                </div>
            </div>
            <button onClick={() => onOpen("call")} className={`text-[18px] min-[2430px]:text-[24px] bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] min-[2430px]:h-[76px] min-[2430px]:w-[200px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80] max-[910px]:w-full`}>Замовити</button>
        </div>
        <div className='mr-[120px] z-1 max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full max-[910px]:flex max-[910px]:justify-center max-[910px]:mr-0'>
            <Image src={vector4} className='z-1 whitespace-nowrap max-[559px]:px-[20px]' alt='vector'/>
        </div>
    </CarouselItem>

  </CarouselContent>
  <div className={'max-[2429px]:w-[55px] max-[2429px]:h-[258px] w-[72px] h-[321px] absolute top-[84px] min-[2430px]:top-[78px] right-0 max-[910px]:hidden'}>
        <CarouselPreviousVariation className='bg-[#123853] text-white max-[2429px]:size-[40px] size-[52px] -translate-y-0 rotate-90 border-0 relative top-0 left-0'/>
        <div className='max-[2429px]:mr-[23px] mr-[29px] max-[2429px]:pt-[10px] pt-[13px]'>  
            {timesArray.map((_, index) => (
            <span className='' key={index}>
                <span className='text-right text-[26px] leading-[36px] max-[2429px]:text-[20px] max-[2429px]:leading-[32px]'>{index+1==current ? <><p key={index} className='text-[#56AABF] font-bold pb-[13px] max-[2429px]:pb-[10px]'>0{index+1}</p><span className='h-[3px] max-[2429px]:h-[2px] bg-[#56AABF] block w-1/2 relative right-[-49px] max-[2429px]:right-[-38px] top-[-33px] max-[2429px]:top-[-27px]'></span></>:<p key={index} className='text-white pb-[13px] max-[2429px]:pb-[10px]'>0{index+1}</p> }</span>
            </span>
            ))}  
        </div>
        <CarouselNextVariation className='bg-[#123853] text-white max-[2429px]:size-[40px] size-[52px] rotate rotate-90 -translate-y-0 border-0 relative top-0 left-0'/>
    </div>
</Carousel>
    </>
     );
};
 
export default Slider;
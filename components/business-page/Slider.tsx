import infinity from '../../public/img/infinity.png';
import cable from    '../../public/img/cable.png';
import sign from     '../../public/img/sign.png';
import vector from   '../../public/img/Vector.svg';

import vector2 from   '../../public/img/vector2.svg';
import vector3 from   '../../public/img/vector3.svg';
import vector4 from   '../../public/img/vector4.svg';

import Image from 'next/image';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNextVariation,
    CarouselPreviousVariation,
  } from "@/components/ui/carousel"

import { type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from 'react';


const Slider = () => {

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
   
    useEffect(() => {
      if (!api) {
        return
      }
   
      setCount(api.scrollSnapList().length) 
      setCurrent(api.selectedScrollSnap() + 1)
   
      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1)
      })
    }, [api])

    const timesArray = Array.from({ length: count });

    return (
    <>


<Carousel className={`min-[2430px]:mt-[60px] mt-[45px]`} setApi={setApi}>
  <CarouselContent className='flex'>
    <CarouselItem className='flex justify-between items-center max-[910px]:flex-col-reverse pb-[60px] min-[1024px]:pb-[90px] max-[800px]:pb-[20px]'>
        <div className='ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-10 max-[910px]:ml-0 max-[910px]:w-fit max-[910px]:px-[35px]'>
            <h1 className={`text-[60px] font-bold text-white shrink-0 whitespace-nowrap z-10 min-[2430px]:text-[80px] max-[910px]:text-[34px]`}>Інтернет <span className={`text-[#56AABF]`}>В офіс</span></h1>
            <li className={`list-none text-white flex flex-col mb-[30px] min-[2430px]:text-[21px] max-[910px]:text-[14px]`}>
                <div className={`flex items-center mb-[15px]`}>
                <span className={`box-border w-5 flex`}>
                    <Image src={infinity} className={`inline-flex`} alt='infinity'/>
                </span>
                    <ul className={`ml-2 font-normal`}>Безлімітні та необмежені тарифні плани</ul>
                </div>
                
                <div className={`flex items-center mb-[15px]`}>
                <span className={`box-border w-[20px] pl-[5px] flex justify-center self-start pt-[5px]`}>
                    <Image src={sign} className={`inline-flex`} alt={`sign`}/>
                </span>
                <ul className={`ml-3  font-normal`}>Гарантована швидкість – симетричний високошвидкісний канал із постійною швидкістю доступу до мережі Інтернет</ul>
                </div>
                
                <div className={`flex items-center`}>
                <span className={`box-border w-5 flex justify-center self-start`}>
                    <Image src={cable} className={`inline-flex`} alt={`cable`}/>
                </span>
                <ul className={`ml-2 font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</ul>
                </div>
            </li>
            <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80] max-[910px]:w-full`}>Замовити</button>
        </div>
        <div className='mr-[120px] z-1 max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full max-[910px]:flex max-[910px]:justify-center max-[910px]:mr-0'>
            <Image src={vector} className='z-1 whitespace-nowrap max-[559px]:px-[20px]' alt='vector'/>
        </div>
    </CarouselItem>

    <CarouselItem className='flex justify-between items-center max-[910px]:flex-col-reverse pb-[60px] min-[1024px]:pb-[90px] max-[800px]:pb-[20px]'>
        <div className='ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-10 max-[910px]:ml-0 max-[910px]:w-fit max-[910px]:px-[35px]'>
            <h1 className={`text-[60px] font-bold text-white shrink-0 whitespace-nowrap z-10 min-[2430px]:text-[80px] max-[910px]:text-[34px]`}>Інтернет <span className={`text-[#56AABF]`}>В офіс</span></h1>
            <li className={`list-none text-white flex flex-col mb-[30px] min-[2430px]:text-[21px] max-[910px]:text-[14px]`}>
                <div className={`flex items-center mb-[15px]`}>
                <span className={`box-border w-5 flex`}>
                    <Image src={infinity} className={`inline-flex`} alt='infinity'/>
                </span>
                    <ul className={`ml-2 font-normal`}>Безлімітні та необмежені тарифні плани</ul>
                </div>
                
                <div className={`flex items-center mb-[15px]`}>
                <span className={`box-border w-[20px] pl-[5px] flex justify-center self-start pt-[5px]`}>
                    <Image src={sign} className={`inline-flex`} alt={`sign`}/>
                </span>
                <ul className={`ml-3  font-normal`}>Гарантована швидкість – симетричний високошвидкісний канал із постійною швидкістю доступу до мережі Інтернет</ul>
                </div>
                
                <div className={`flex items-center`}>
                <span className={`box-border w-5 flex justify-center self-start`}>
                    <Image src={cable} className={`inline-flex`} alt={`cable`}/>
                </span>
                <ul className={`ml-2 font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</ul>
                </div>
            </li>
            <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80] max-[910px]:w-full`}>Замовити</button>
        </div>
        <div className='mr-[120px] z-1 max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full max-[910px]:flex max-[910px]:justify-center max-[910px]:mr-0'>
            <Image src={vector2} className='z-1 whitespace-nowrap max-[559px]:px-[20px]' alt='vector'/>
        </div>
    </CarouselItem>

    <CarouselItem className='flex justify-between items-center max-[910px]:flex-col-reverse pb-[60px] min-[1024px]:pb-[90px] max-[800px]:pb-[20px]'>
        <div className='ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-10 max-[910px]:ml-0 max-[910px]:w-fit max-[910px]:px-[35px]'>
            <h1 className={`text-[60px] font-bold text-white shrink-0 whitespace-nowrap z-10 min-[2430px]:text-[80px] max-[910px]:text-[34px]`}>Інтернет <span className={`text-[#56AABF]`}>В офіс</span></h1>
            <li className={`list-none text-white flex flex-col mb-[30px] min-[2430px]:text-[21px] max-[910px]:text-[14px]`}>
                <div className={`flex items-center mb-[15px]`}>
                <span className={`box-border w-5 flex`}>
                    <Image src={infinity} className={`inline-flex`} alt='infinity'/>
                </span>
                    <ul className={`ml-2 font-normal`}>Безлімітні та необмежені тарифні плани</ul>
                </div>
                
                <div className={`flex items-center mb-[15px]`}>
                <span className={`box-border w-[20px] pl-[5px] flex justify-center self-start pt-[5px]`}>
                    <Image src={sign} className={`inline-flex`} alt={`sign`}/>
                </span>
                <ul className={`ml-3  font-normal`}>Гарантована швидкість – симетричний високошвидкісний канал із постійною швидкістю доступу до мережі Інтернет</ul>
                </div>
                
                <div className={`flex items-center`}>
                <span className={`box-border w-5 flex justify-center self-start`}>
                    <Image src={cable} className={`inline-flex`} alt={`cable`}/>
                </span>
                <ul className={`ml-2 font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</ul>
                </div>
            </li>
            <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80] max-[910px]:w-full`}>Замовити</button>
        </div>
        <div className='mr-[120px] z-1 max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full max-[910px]:flex max-[910px]:justify-center max-[910px]:mr-0'>
            <Image src={vector3} className='z-1 whitespace-nowrap max-[559px]:px-[20px]' alt='vector'/>
        </div>
    </CarouselItem>

    <CarouselItem className='flex justify-between items-center max-[910px]:flex-col-reverse pb-[60px] min-[1024px]:pb-[90px] max-[800px]:pb-[20px]'>
        <div className='ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-10 max-[910px]:ml-0 max-[910px]:w-fit max-[910px]:px-[35px]'>
            <h1 className={`text-[60px] font-bold text-white shrink-0 whitespace-nowrap z-10 min-[2430px]:text-[80px] max-[910px]:text-[34px]`}>Інтернет <span className={`text-[#56AABF]`}>В офіс</span></h1>
            <li className={`list-none text-white flex flex-col mb-[30px] min-[2430px]:text-[21px] max-[910px]:text-[14px]`}>
                <div className={`flex items-center mb-[15px]`}>
                <span className={`box-border w-5 flex`}>
                    <Image src={infinity} className={`inline-flex`} alt='infinity'/>
                </span>
                    <ul className={`ml-2 font-normal`}>Безлімітні та необмежені тарифні плани</ul>
                </div>
                
                <div className={`flex items-center mb-[15px]`}>
                <span className={`box-border w-[20px] pl-[5px] flex justify-center self-start pt-[5px]`}>
                    <Image src={sign} className={`inline-flex`} alt={`sign`}/>
                </span>
                <ul className={`ml-3  font-normal`}>Гарантована швидкість – симетричний високошвидкісний канал із постійною швидкістю доступу до мережі Інтернет</ul>
                </div>
                
                <div className={`flex items-center`}>
                <span className={`box-border w-5 flex justify-center self-start`}>
                    <Image src={cable} className={`inline-flex`} alt={`cable`}/>
                </span>
                <ul className={`ml-2 font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</ul>
                </div>
            </li>
            <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80] max-[910px]:w-full`}>Замовити</button>
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
}
 
export default Slider;
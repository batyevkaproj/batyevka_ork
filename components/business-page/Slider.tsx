
import infinity from '../../public/img/infinity.png';
import cable from    '../../public/img/cable.png';
import sign from     '../../public/img/sign.png';
import vector from   '../../public/img/Vector.svg';

import Image from 'next/image';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
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


<Carousel className={`h-[446px] mt-[45px]`} setApi={setApi}>
  <CarouselContent className='flex'>
    <CarouselItem className='flex items-center justify-between'>
        <div className='ml-[120px]'>
            <h1 className={` text-[60px] font-bold text-white`}>Інтернет0 <span className={`text-[#56AABF]`}>в офіс</span></h1>
            <li className={`list-none text-white flex flex-col mb-[30px]`}>
                <div className={`flex items-center mb-[15px]`}>
                <span className={`box-border w-5 flex`}>
                    <Image src={infinity} className={`inline-flex`} alt='infinity'/>
                </span>
                    <ul className={`ml-2  font-normal`}>Безлімітні та необмежені тарифні плани</ul>
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
                <ul className={`ml-2  font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</ul>
                </div>
            </li>
            <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]`}>Замовити</button>
        </div>
        <div className='mr-[120px]'>
            <Image src={vector} alt='vector'/>
        </div>
    </CarouselItem>
    <CarouselItem className='flex items-center justify-between'>
        <div className='ml-[120px]'>
            <h1 className={` text-[60px] font-bold text-white`}>Інтернет1 <span className={`text-[#56AABF]`}>в офіс</span></h1>
            <li className={`list-none text-white flex flex-col mb-[30px]`}>
                <div className={`flex items-center mb-[15px]`}>
                <span className={`box-border w-5 flex`}>
                    <Image src={infinity} className={`inline-flex`} alt='infinity'/>
                </span>
                    <ul className={`ml-2  font-normal`}>Безлімітні та необмежені тарифні плани</ul>
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
                <ul className={`ml-2  font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</ul>
                </div>
            </li>
            <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]`}>Замовити</button>
        </div>
        <div className='mr-[120px]'>
            <Image src={vector} alt='vector'/>
        </div>
    </CarouselItem>
    <CarouselItem className='flex items-center justify-between'>
        <div className='ml-[120px]'>
            <h1 className={` text-[60px] font-bold text-white`}>Інтернет2 <span className={`text-[#56AABF]`}>в офіс</span></h1>
            <li className={`list-none text-white flex flex-col mb-[30px]`}>
                <div className={`flex items-center mb-[15px]`}>
                <span className={`box-border w-5 flex`}>
                    <Image src={infinity} className={`inline-flex`} alt='infinity'/>
                </span>
                    <ul className={`ml-2  font-normal`}>Безлімітні та необмежені тарифні плани</ul>
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
                <ul className={`ml-2  font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</ul>
                </div>
            </li>
            <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]`}>Замовити</button>
        </div>
        <div className='mr-[120px]'>
            <Image src={vector} alt='vector'/>
        </div>
    </CarouselItem>
  </CarouselContent>
    <div className='absolute top-40 right-8 w-[25px]'>
        {timesArray.map((_, index) => (
        <span className='' key={index}>
            {index+1==current ? <><p key={index} className='text-[#56AABF] bold text-[20px] leading-[32px] w-[25px]'>0{index+1}</p><span className='w-[18px] h-[2px] bg-[#56AABF] block relative left-[38px] top-[20px]'></span></>:<p key={index} className='bold text-[20px] leading-[32px] w-[25px]'>0{index+1}</p> }
        </span>
        ))}
        <CarouselPrevious className='bg-[#123853] w-[40px] h-[40px] -translate-y-0 rotate-90 border-0 relative left-[1px] bottom-36'/>
        <CarouselNext className='bg-[#123853] w-[40px] h-[40px] rotate rotate-90 border-0 relative top-0 -right-[2px]'/>
    </div>
</Carousel>
    </>
     );
}
 
export default Slider;

import infinity from '../../public/img/infinity.png';
import cable from    '../../public/img/cable.png';
import sign from     '../../public/img/sign.png';
import vector from   '../../public/img/Vector.svg';

import vector2 from   '../../public/img/vector2.svg';
import vector3 from   '../../public/img/vector3.svg';
import vector4 from   '../../public/img/vector4.svg';

import Image from 'next/image';



const fetchedData = [
    { "офіс": "../../public/img/Vector.svg" },
    { "магазин": "../../public/img/vector2.svg" },
    { "салон": "../../public/img/vector3.svg" },
    { "ресторан": "../../public/img/vector4.svg" }
];


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


  {fetchedData.map((data, index) => (
    <CarouselItem key={index} className='flex items-center justify-between'>
        <div className='ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-1 max-[910px]:hidden'>
            <h1 className={`text-[60px] font-bold text-white whitespace-nowrap`}>Інтернет <span className={`text-[#56AABF]`}>в {Object.keys(data)[0].toUpperCase()}</span></h1>
            <li className={`list-none text-white flex flex-col mb-[30px]`}>
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
                    <ul className={`ml-3 font-normal`}>Гарантована швидкість – симетричний високошвидкісний канал із постійною швидкістю доступу до мережі Інтернет</ul>
                </div>
                <div className={`flex items-center`}>
                    <span className={`box-border w-5 flex justify-center self-start`}>
                        <Image src={cable} className={`inline-flex`} alt={`cable`}/>
                    </span>
                    <ul className={`ml-2 font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</ul>
                </div>
            </li>
            <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]`}>Замовити</button>
        </div>
        <div className='mr-[120px] z-10 max-[910px]:pl-[20%] max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full'>
            {/* <Image src={Object.values(data)[0]} alt={`vector`} /> */}
        </div>
    </CarouselItem>
))}



    <CarouselItem className='flex justify-between items-center'>
        <div className='ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-1 max-[910px]:hidden'>
            <h1 className={`text-[60px] font-bold text-white shrink-0 whitespace-nowrap z-10`}>Інтернет <span className={`text-[#56AABF]`}>В офіс</span></h1>
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
        <div className='mr-[120px] z-10 max-[910px]:pl-[20%] max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full'>
            <Image src={vector} className='z-10 whitespace-nowrap' alt='vector'/>
        </div>
    </CarouselItem>
    <CarouselItem className='flex items-center justify-between'>
        <div className='ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-1 max-[910px]:hidden'>
            <h1 className={` text-[60px] font-bold text-white whitespace-nowrap z-1`}>Інтернет <span className={`text-[#56AABF]`}>в МАГАЗИН</span></h1>
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
        <div className='mr-[120px] z-10 max-[910px]:pl-[20%] max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full'>
            <Image src={vector2} alt='vector'/>
        </div>
    </CarouselItem>
    <CarouselItem className='flex items-center justify-between '>
        <div className='ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-1 max-[910px]:hidden'>
            <h1 className={` text-[60px] font-bold text-white whitespace-nowrap`}>Інтернет <span className={`text-[#56AABF]`}>в САЛОН</span></h1>
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
        <div className='mr-[120px] z-10 max-[910px]:pl-[20%] max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full'>
            <Image src={vector3} alt='vector'/>
        </div>
    </CarouselItem>
    <CarouselItem className='flex items-center justify-between'>
        <div className='ml-[120px] max-[1706px]:w-[655px] max-[1400px]:w-[430px] z-1 max-[910px]:hidden'>
            <h1 className={` text-[60px] font-bold text-white flex-shrink-0 whitespace-nowrap`}>Інтернет <span className={`text-[#56AABF]`}>в РЕСТОРАН</span></h1>
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
        <div className='mr-[120px] z-10 max-[910px]:pl-[20%] max-[910px]:box-border max-[910px]:whitespace-nowrap max-[910px]:min-w-full'>
            <Image src={vector4} alt='vector'/>
        </div>
    </CarouselItem>
  </CarouselContent>
    <div className='absolute top-40 right-8 w-[25px] max-[910px]:hidden'>
        {timesArray.map((_, index) => (
        <span className='' key={index}>
            {index+1==current ? <><p key={index} className='text-[#56AABF] bold text-[20px] leading-[32px] w-[25px]'>0{index+1}</p><span className='w-[18px] h-[2px] bg-[#56AABF] block relative left-[38px] -top-[16px]'></span></>:<p key={index} className='bold text-[20px] leading-[32px] w-[25px]'>0{index+1}</p> }
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
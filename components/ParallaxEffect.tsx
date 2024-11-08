import { useEffect, useRef } from 'react';

import line from '../public/img/parallax_line.svg';
import wave from '../public/img/parallax_wave.svg';
import tri from '../public/img/parallax_triangle.svg';

import Image from 'next/image';

const ParallaxEffect = () => {

    const parallaxRef = useRef(null);
    const parallaxRef1 = useRef(null);
    const parallaxRef2 = useRef(null);
    const parallaxRef3 = useRef(null);
    const parallaxRef4 = useRef(null);
    const parallaxRef5 = useRef(null);
    const parallaxRef6 = useRef(null);

    useEffect(() => {
        const getRandomArbitrary = () => {
          return Math.random() * (30 - 10) + 10;
        };
    
        const getRandomDuration = () => {
          return Math.random() * (3 - 1) + 1;
        };
    
        const intervalId = setInterval(() => {
          const offsetX = getRandomArbitrary();
          const offsetY = getRandomArbitrary();
          const dur = getRandomDuration();
    
          const translate = `translate3d(${Math.round(offsetX)}px, ${Math.round(offsetY)}px, 0px)`;
          const duration = `${dur}s`;
    
          if (parallaxRef.current) {
            (parallaxRef.current as HTMLElement).style.transitionDuration = duration;
            (parallaxRef.current as HTMLElement).style.transform = translate;
            (parallaxRef.current as HTMLElement).style.webkitTransform = translate;
            (parallaxRef.current as HTMLElement).style.transform = translate;
            (parallaxRef.current as HTMLElement).style.webkitTransitionDuration = duration;
          }
          if (parallaxRef1.current) {
            (parallaxRef1.current as HTMLElement).style.transitionDuration = duration;
            (parallaxRef1.current as HTMLElement).style.transform = translate;
            (parallaxRef1.current as HTMLElement).style.webkitTransform = translate;
            (parallaxRef1.current as HTMLElement).style.transform = translate;
            (parallaxRef1.current as HTMLElement).style.webkitTransitionDuration = duration;
          }
          if (parallaxRef2.current) {
            (parallaxRef2.current as HTMLElement).style.transitionDuration = duration;
            (parallaxRef2.current as HTMLElement).style.transform = translate;
            (parallaxRef2.current as HTMLElement).style.webkitTransform = translate;
            (parallaxRef2.current as HTMLElement).style.transform = translate;
            (parallaxRef2.current as HTMLElement).style.webkitTransitionDuration = duration;
          }
          if (parallaxRef3.current) {
            (parallaxRef3.current as HTMLElement).style.transitionDuration = duration;
            (parallaxRef3.current as HTMLElement).style.transform = translate;
            (parallaxRef3.current as HTMLElement).style.webkitTransform = translate;
            (parallaxRef3.current as HTMLElement).style.transform = translate;
            (parallaxRef3.current as HTMLElement).style.webkitTransitionDuration = duration;
          }
          if (parallaxRef4.current) {
            (parallaxRef4.current as HTMLElement).style.transitionDuration = duration;
            (parallaxRef4.current as HTMLElement).style.transform = translate;
            (parallaxRef4.current as HTMLElement).style.webkitTransform = translate;
            (parallaxRef4.current as HTMLElement).style.transform = translate;
            (parallaxRef4.current as HTMLElement).style.webkitTransitionDuration = duration;
          }
          if (parallaxRef5.current) {
            (parallaxRef5.current as HTMLElement).style.transitionDuration = duration;
            (parallaxRef5.current as HTMLElement).style.transform = translate;
            (parallaxRef5.current as HTMLElement).style.webkitTransform = translate;
            (parallaxRef5.current as HTMLElement).style.transform = translate;
            (parallaxRef5.current as HTMLElement).style.webkitTransitionDuration = duration;
          }
          if (parallaxRef6.current) {
            (parallaxRef6.current as HTMLElement).style.transitionDuration = duration;
            (parallaxRef6.current as HTMLElement).style.transform = translate;
            (parallaxRef6.current as HTMLElement).style.webkitTransform = translate;
            (parallaxRef6.current as HTMLElement).style.transform = translate;
            (parallaxRef6.current as HTMLElement).style.webkitTransitionDuration = duration;
          }
        }, 2500);   
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);


    return ( 
        <>
            <div className='sticky z-[0] max-[560px]:hidden'>
                <Image src={tri} className={`absolute rotate-[180deg] top-[60px] right-[90px] max-[2377px]:right-[110px] size-[178px] max-[2377px]:size-[133px]`} alt={`tri`} ref={parallaxRef}/>
            </div>
            <div className='sticky z-[0] max-[560px]:hidden w-1/2' ref={parallaxRef1}>
                <Image src={wave} className={`absolute top-[866px] max-[2377px]:top-[796px] left-[135px] max-[2377px]:left-[90px] w-[392px] h-[48px] max-[2377px]:w-[292px] max-[2377px]:h-[36px]`} alt={`wave`} />
                <Image src={wave} className={`absolute top-[900px] max-[2377px]:top-[822px] left-[135px] max-[2377px]:left-[90px] w-[392px] h-[48px] max-[2377px]:w-[292px] max-[2377px]:h-[36px]`} alt={`wave`} />
            </div>    
            <div className='sticky z-[0] max-[560px]:hidden'>
                <Image src={tri} className={`absolute rotate-[0deg] top-[2000px] max-[2377px]:top-[1660px] left-[170px] size-[178px] max-[2377px]:size-[133px]`} alt={`tri`} ref={parallaxRef2}/>
            </div>
            <div className='sticky z-[0] max-[560px]:hidden w-[96%]' ref={parallaxRef3}>
                <Image src={wave} className={`absolute  top-[2746px] max-[2377px]:top-[2166px]  right-[100px] max-[2377px]:right-[130px] w-[392px] h-[48px] max-[2377px]:w-[292px] max-[2377px]:h-[36px]`} alt={`wave`}/>
                <Image src={wave} className={`absolute  top-[2780px] max-[2377px]:top-[2192px]  right-[100px] max-[2377px]:right-[130px] w-[392px] h-[48px] max-[2377px]:w-[292px] max-[2377px]:h-[36px]`} alt={`wave`} />
            </div>
            <div className='sticky z-[0] max-[560px]:hidden w-1/2' ref={parallaxRef4}>
                <Image src={wave} className={`absolute  top-[3186px] max-[2377px]:top-[2606px] max-[1300px]:top-[2706px] left-[15px] max-[2377px]:right-[130px] w-[392px] h-[48px] max-[2377px]:w-[292px] max-[2377px]:h-[36px]`} alt={`wave`}/>
                <Image src={wave} className={`absolute  top-[3220px] max-[2377px]:top-[2632px] max-[1300px]:top-[2732px] left-[15px] max-[2377px]:right-[130px] w-[392px] h-[48px] max-[2377px]:w-[292px] max-[2377px]:h-[36px]`} alt={`wave`}/>
            </div>
            <div className='sticky z-[0] max-[560px]:hidden'>
                <Image src={tri} className={`absolute rotate-[123deg] top-[3400px] max-[2377px]:top-[2800px] max-[1770px]:top-[3100px] right-[100px] size-[178px] max-[2377px]:size-[133px]`} alt={`tri`} ref={parallaxRef5}/>
            </div>
            {/* <div className='sticky z-[0] max-[560px]:hidden'>
                <Image src={tri} className={`absolute rotate-[-40deg] top-[6000px] left-[40px] size-[178px] max-[2377px]:size-[133px]`} alt={`tri`}/>
            </div> */}
            <div className='sticky z-[0] max-[560px]:hidden w-1/2' ref={parallaxRef6}>
                <Image src={line} className={`absolute  top-[2686px] max-[2377px]:top-[2200px] left-[375px] max-[1770px]:left-[200px] size-[60px] max-[2377px]:size-[45px]`} alt={`line`}/>
                <Image src={line} className={`absolute  top-[2686px] max-[2377px]:top-[2200px] rotate-[90deg] left-[375px] max-[1770px]:left-[200px] size-[60px] max-[2377px]:size-[45px]`} alt={`line`}/>
            </div>
        </>
    );
};
 
export default ParallaxEffect;
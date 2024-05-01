import line from '../public/img/parallax_line.svg';
import wave from '../public/img/parallax_wave.svg';
import tri from '../public/img/parallax_triangle.svg';

import Image from 'next/image';

const ParallaxDemo = () => {
    return ( 
        <>
            <div className='sticky z-[-1] '>
                <Image src={tri} className={`absolute rotate-[180deg] top-[20px] right-[80px] size-[15vmin] animate-easyspin`} alt={`tri`}/>
            </div>
            <div className='sticky z-[-1]'>
                <Image src={wave} className={`absolute  top-[686px] left-[135px] size-[30vmin]`} alt={`wave`}/>
                <Image src={wave} className={`absolute  top-[726px] left-[135px] size-[30vmin]`} alt={`wave`}/>
            </div>    
            <div className='sticky z-[-1]'>
                <Image src={tri} className={`absolute rotate-[0deg] top-[1970px] left-[170px] size-[15vmin]`} alt={`tri`}/>
            </div>
            <div className='sticky z-[-1]'>
                <Image src={wave} className={`absolute  top-[2566px] right-[100px] size-[30vmin]`} alt={`wave`}/>
                <Image src={wave} className={`absolute  top-[2606px] right-[100px] size-[30vmin]`} alt={`wave`}/>
            </div>
            <div className='sticky z-[-1]'>
                <Image src={wave} className={`absolute  top-[3186px] left-[15px] size-[30vmin]`} alt={`wave`}/>
                <Image src={wave} className={`absolute  top-[3226px] left-[15px] size-[30vmin]`} alt={`wave`}/>
            </div>
            <div className='sticky z-[-1]'>
                <Image src={tri} className={`absolute rotate-[123deg] top-[20%vh] right-[100px] size-[15vmin]`} alt={`tri`}/>
            </div>
            <div className='sticky z-[-1]'>
                <Image src={tri} className={`absolute rotate-[-40deg] top-[40%vh] left-[40px] size-[15vmin]`} alt={`tri`}/>
            </div>
            <div className='sticky z-[-1]'>
                <Image src={line} className={`absolute  top-[2686px] left-[375px] size-[5vmin]`} alt={`line`}/>
                <Image src={line} className={`absolute  top-[2686px] rotate-[90deg] left-[375px] size-[5vmin]`} alt={`line`}/>
            </div>
        </>
    );
}
 
export default ParallaxDemo;
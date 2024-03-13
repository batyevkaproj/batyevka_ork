import { useModal } from "@/hooks/use-modal-store";

import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/img/logo.svg';
import wallet from '../public/img/wallet.svg'
import _247 from '../public/img/247.svg';
import telephon from '../public/img/phone.svg';
import gear from '../public/img/gear.svg';
import orange_building from '@/public/img/orange_building.svg';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
  


const Sidebar = () => {

    const { onOpen } = useModal();

    

    return ( 
        <div className="w-[375px] h-[100vh] bg-[#0E2D43]"> 
            <div className="w-full h-[60px] bg-[#0D2A40] flex items-center justify-center">
                <Image src={telephon} className={`w-[20px] h-[20px] mr-[9.75px]`} alt={'phone'}/>
                <a className='font-semibold text-white text-[24px] leading-[22px]' href={`tel:0800303230`}>0 800 30 32 30</a>
            </div>
            <div className="ml-[20px] mt-[20px]">
                <Link href='/' className="">
                    <Image src={logo} height={1} className={`flex-shrink-0 min-w-max w-[203px] h-[35px]`} alt={'Batyevka logo'}/>
                </Link>
            </div>
            <div className="mt-[15px] ml-[20px] flex flex-col">
                <Link className="flex mb-[20px] items-center" href={"#"} onClick={() => {onOpen("payment")}} >
                    <Image src={wallet} className={`w-8 h-8 mr-[15px]`} alt={'wallet'}></Image>
                        <span className="ml-[15px]">Оплата</span>
                </Link>
                <Link className="flex mb-[20px] items-center" href={"#"} onClick={() => {onOpen("payment")}} >
                    <Image src={_247} className={`w-8 h-8 mr-[15px]`} alt={'options'}></Image>
                        <span className="ml-[15px]">Підтримка</span>
                </Link>
                <Link className="flex mb-[20px] items-center" href={"#"} onClick={() => {onOpen("payment")}}>
                    <Image src={gear} className={`w-8 h-8 mr-[15px]`} alt={'wallet'}></Image>
                        <span className="ml-[15px]">Опції</span>
                </Link>
            </div>
            <Collapsible>
                <CollapsibleTrigger>
                <div className="h-[48px] bg-[#0E2D43] shadow-[0_4px_29px_0_#081925] flex items-center">
                    <Image src={orange_building} alt={'orange'} className="ml-[24px]"></Image>
                    <span className="ml-[11px] uppercase font-semibold text-[#DC662D]">для багатоповерхівок</span>
                </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col">
                    <Link href={'#'}>
                        Інтернет
                    </Link>
                    <Link href={'#'}>
                        Інтернет + ТВ
                    </Link>
                    <Link href={'#'}>
                        Телебачення
                    </Link>
                    <Link href={'#'}>
                        Комп'ютерна допомога
                    </Link>
                    <Link href={'#'}>
                        Всі опції
                    </Link>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible>
                <CollapsibleTrigger>
                <div className="h-[48px] bg-[#0E2D43] shadow-[0_4px_29px_0_#081925] flex items-center">
                    <Image src={orange_building} alt={'orange'} className="ml-[24px]"></Image>
                    <span className="ml-[11px] uppercase font-semibold text-[#DC662D]">Приватному сектору</span>
                </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col">
                    <Link href={'#'}>
                        Інтернет
                    </Link>
                    <Link href={'#'}>
                        Інтернет + ТВ
                    </Link>
                    <Link href={'#'}>
                        Телебачення
                    </Link>
                    <Link href={'#'}>
                        Комп'ютерна допомога
                    </Link>
                    <Link href={'#'}>
                        Всі опції
                    </Link>
                </CollapsibleContent>
            </Collapsible>
            <Collapsible>
                <CollapsibleTrigger>
                <div className="h-[48px] bg-[#0E2D43] shadow-[0_4px_29px_0_#081925] flex items-center">
                    <Image src={orange_building} alt={'orange'} className="ml-[24px]"></Image>
                    <span className="ml-[11px] uppercase font-bold text-[#DC662D]">бiзнесу</span>
                </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="flex flex-col">
                    <Link href={'#'}>
                        Інтернет
                    </Link>
                    <Link href={'#'}>
                        Інтернет + ТВ
                    </Link>
                    <Link href={'#'}>
                        Телебачення
                    </Link>
                    <Link href={'#'}>
                        Комп'ютерна допомога
                    </Link>
                    <Link href={'#'}>
                        Всі опції
                    </Link>
                </CollapsibleContent>
            </Collapsible>
        </div>
     );
}
 
export default Sidebar;
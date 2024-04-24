import { useModal } from "@/hooks/use-modal-store";
import Image from 'next/image';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import logo from '../public/img/logo.svg';
import wallet from '../public/img/wallet.svg'
import _247 from '../public/img/247.svg';
import telephon from '../public/img/phone.svg';
import gear from '../public/img/gear.svg';
import orange_building from '@/public/img/orange_building.svg';
import orange_house from '@/public/img/house_orange.svg';
import bc_orange from '@/public/img/br_case_orange.svg'
import key from '@/public/img/key_white.svg';
import globe from '@/public/img/globe_white.png';

  


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
                    <Image src={wallet} className={`w-8 h-8`} alt={'wallet'}></Image>
                        <span className="ml-[15px] font-semibold text-[#51B18B]">Оплата</span>
                </Link>
                <Link className="flex mb-[20px] items-center" href={"#"} onClick={() => {onOpen("payment")}} >
                    <Image src={_247} className={`w-8 h-8`} alt={'options'}></Image>
                        <span className="ml-[15px] font-semibold text-[#56AABF]">Підтримка</span>
                </Link>
                <Link className="flex mb-[20px] items-center" href={"#"} onClick={() => {onOpen("payment")}}>
                    <Image src={gear} className={`w-8 h-8`} alt={'wallet'}></Image>
                        <span className="ml-[15px] font-semibold text-[#5984B3]">Опції</span>
                </Link>
            </div>
            <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="h-[48px] bg-[#0E2D43] shadow-[0_4px_29px_0_#081925] flex items-center w-full">
                    <Image src={orange_building} alt={'orange'} className="ml-[24px]"></Image>
                    <span className="ml-[15px] uppercase font-semibold text-[#DC662D]">для багатоповерхівок</span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col ml-[20px] text-white text-[13px] font-semibold">
                    <Link href={'#'} className="mt-[10px]">
                        Інтернет
                    </Link>
                    <Link href={'#'} className="mt-[10px]">
                        Інтернет + ТВ
                    </Link>
                    <Link href={'#'} className="mt-[10px]">
                        Телебачення
                    </Link>
                    <Link href={'#'} className="mt-[10px]">
                        Комп'ютерна допомога
                    </Link>
                    <Link href={'#'} className="mt-[10px]">
                        Всі опції
                    </Link>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="h-[48px] bg-[#0E2D43] shadow-[0_4px_29px_0_#081925] flex items-center w-full">
                    <Image src={orange_house} alt={'orange'} className="ml-[20px]"></Image>
                    <span className="ml-[10px] uppercase font-semibold text-[#DC662D]">Приватному сектору</span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col ml-[20px] text-white text-[13px] font-semibold">
                    <Link href={'#'} className="mt-[10px]">
                        Інтернет
                    </Link>
                    <Link href={'#'} className="mt-[10px]">
                        Інтернет + ТВ
                    </Link>
                    <Link href={'#'} className="mt-[10px]">
                        Комп'ютерна допомога
                    </Link>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="h-[48px] bg-[#0E2D43] shadow-[0_4px_29px_0_#081925] flex items-center w-full">
                    <Image src={bc_orange} alt={'orange'} className="ml-[24px]"></Image>
                    <span className="ml-[13px] uppercase font-semibold text-[#DC662D]">бiзнесу</span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col ml-[20px] text-white text-[13px] font-semibold">
                    <Link href={'#'} className="mt-[10px]">
                        Акції
                    </Link>
                    <Link href={'#'} className="mt-[10px]">
                        Тарифи
                    </Link>
                    <Link href={'#'} className="mt-[10px]">
                        Мапа покриття
                    </Link>
                    <Link href={'#'} className="mt-[10px]">
                        Абоненту
                    </Link>
                    <Link href={'#'} className="mt-[10px]">
                        Всі опції
                    </Link>
                </AccordionContent>
            </AccordionItem>
            </Accordion>

            <div className="ml-[20px] mt-[10px]">
                <Link className="flex mb-[20px] items-center" href={"#"} onClick={() => {onOpen("payment")}} >
                        <Image src={key} alt={'key'}></Image>
                        <span className="ml-[15px] text-white">Вхід   </span>
                </Link>
                <Link className="flex mb-[20px] items-center" href={"#"} onClick={() => {onOpen("payment")}}>
                    <Image src={globe} alt={'globe'}></Image>
                    <span className="ml-[15px] text-white">Укр</span>
                </Link>
            </div>
        </div>
     );
}
 
export default Sidebar;
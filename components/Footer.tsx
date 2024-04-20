import _1 from '../public/img/1.svg';
import _2 from '../public/img/2.svg';
import _3 from '../public/img/3.svg';
import _4 from '../public/img/4.svg';
import orange_mini_phone from '../public/img/orange_mini_phone.svg';
import orange_mini_place_marker from '../public/img/orange_mini_place_marker.svg';
import orange_mini_tg_logo from '../public/img/orange_mini_tg_logo.svg';
import orange_mini_mail from '../public/img/orange_mini_mail.svg';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion_footer";
import Link from 'next/link';

import Image from 'next/image';

const Footer = () => {
    return ( 
        <footer className={`bg-[#0E2D43] shadow-[0_4px_29px_0_rgba(8,35,27)] max-[375px]:shadow-none`}>
            <div className={'max-[932px]:hidden'}>
                <div className={`min-[3840px]:pt-[118px] min-[3840px]:pb-[118px] pt-[78px] pb-[78px] max-[2377px]:pt-[60px] max-[2377px]:pb-[60px] grid grid-cols-6 max-[2377px]:grid-cols-5 max-[1600px]:grid-cols-4 max-[1247px]:grid-cols-3 grid-rows-3 text-white min-[3840px]:text-[27px] text-[18px] max-[2377px]:text-[14px] min-[3840px]:gap-[72.2px] gap-[43.2px] font-normal leading-[38px] min-[3840px]:leading-[57px] max-[2377px]:leading-[30px] mr-[170px] ml-[170px] max-[2377px]:mr-[120px] max-[2377px]:ml-[120px] max-[1600px]:mr-[85px] max-[1600px]:ml-[85px] max-[1247px]:mr-[67px] max-[1247px]:ml-[67px] min-[3840px]:mr-[240px] min-[3840px]:ml-[240px]`}>
                    <div className={'col-span-1 row-span-2'}>
                        <div>
                            <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Ми надаємо послуги:</h3>
                            <ul>
                                <li>Швидкісного доступу в Інтернет</li>
                                <li>Інтерактивне Телебачення</li>
                                <li>ось вже:</li>
                                <div className={'min-[3840px]:h-[72px] h-[48px] max-[2377px]:h-[37px] min-[3840px]:max-w-[423px] max-w-[282px] max-[2377px]:max-w-[216px] min-w-[216px] rounded-xl bg-[#123853] mt-[10px]'}>
                                    <p className={'font-semibold min-[3840px]:ml-[26px] ml-[17px] pt-[6px] max-[2377px]:pt-[3px]'}>24 роки 5 місяців</p>
                                </div>
                            </ul>
                        </div>
                        
                    </div>
                    <div className={'col-span-1 row-start-3'}>
                            <a className={'text-[#56AABF] font-semibold leading-[34px]'}>© Batyevka 2014-2024</a>
                    </div>
                    <div>
                        <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>ТАРИФИ</h3>
                        <ul>
                            <li>Для Бізнесу</li>
                            <li>Для Багатоповерхівок</li>
                            <li>Для Приватних Будинків</li>
                        </ul>
                    </div>
                    <div className={'col-span-1 row-span-2 max-[1600px]:col-start-2 max-[1600px]:row-start-2'}>
                        <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Інформація абонентам</h3>
                        <ul>
                            <li>Публічний договір</li>
                            <li>Мапа покриття</li>
                            <li>Особитстий кабінет</li>
                            <li>Додаткові опції</li>
                            <li>Ще щось цікаве</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Технічна підтримка</h3>
                        <ul>
                            <li><Image className='inline mr-[10px] w-[21px] h-[21px] max-[2377px]:w-[16px] max-[2377px]:h-[16px]' src={orange_mini_phone} alt={``}/>044 49 555 49</li>
                            <li><Image className='inline mr-[10px] w-[21px] h-[16px] max-[2377px]:w-[16px] max-[2377px]:h-[12px]' src={orange_mini_mail} alt={``}/>support@batyevka.net</li>
                            <li><Image className='inline mr-[10px] w-[21px] h-[19px] max-[2377px]:w-[17px] max-[2377px]:h-[15px]' src={orange_mini_tg_logo} alt={``}/>бот в телеграмм</li>
                        </ul>
                    </div>
                    <div className={'col-span-1 max-[1247px]:col-start-3 max-[1247px]:row-start-2 max-[1247px]:row-span-1'}>
                        <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Контакти</h3>
                        <ul>
                            <li><Image className='inline mr-[10px] w-[16px] h-[21px] max-[2377px]:w-[12px] max-[2377px]:h-[16px]' src={orange_mini_place_marker} alt={``}/>03110, м. Київ, а/с 26</li>
                            <li><Image className='inline mr-[10px] w-[21px] h-[21px] max-[2377px]:w-[16px] max-[2377px]:h-[16px]' src={orange_mini_phone} alt={``}/>0 800 30 32 30</li>
                            <li><Image className='inline mr-[10px] w-[21px] h-[16px] max-[2377px]:w-[16px] max-[2377px]:h-[12px]' src={orange_mini_mail} alt={``}/>dogovor@batyevka.net</li>
                        </ul>    
                    </div>
                    <div className={'max-[2377px]:col-start-5 max-[2377px]:row-start-2 max-[2377px]:row-span-1 max-[1600px]:col-start-4 max-[1600px]:row-start-2 max-[1600px]:row-span-1 max-[1247px]:col-start-3 max-[1247px]:row-start-3 max-[1247px]:row-span-1'}>
                        <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[24px] max-[2377px]:mb-[19px]`}>Соціальні мережі</h3>
                        <div className={`flex`}>
                            <a href={``}><Image className='min-[3840px]:w-[59px] min-[3840px]:h-[59px] w-[40px] h-[40px] max-[2377px]:w-[30px] max-[2377px]:h-[30px] mr-[8px]' src={_1} alt={``}/></a>
                            <a href={``}><Image className='min-[3840px]:w-[59px] min-[3840px]:h-[59px] w-[40px] h-[40px] max-[2377px]:w-[30px] max-[2377px]:h-[30px]' src={_3} alt={``}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'min-[932px]:hidden'}>
            <Accordion type="single" collapsible className={'mr-[35px] ml-[35px] max-[375px]:mr-[20px] max-[375px]:ml-[20px] text-[14px] pt-[74px] max-[375px]:pt-[0px]'}>
            <AccordionItem value="item-2">
                <AccordionTrigger className="flex items-center w-full">
                    <h3 className={`w-full font-medium text-left`}>ТАРИФИ</h3>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-white">
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                        для бізнесу 
                    </Link>
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                       для Багатоповерхівок
                    </Link>
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                        для Приватних будинків
                    </Link>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="flex items-center w-full">
                    <h3 className={`w-full font-medium text-left`}>Інформація абонентам</h3>              
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-white">
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                    Публічний договір
                    </Link>
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                        Мапа покриття
                    </Link>
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                        Особистий кабінет
                    </Link>
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                        Додаткові опції
                    </Link>
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                        Ще щось цікаве
                    </Link>
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
                <AccordionTrigger className="flex items-center w-full">
                    <h3 className={`w-full font-medium text-left`}>Технічна підтримка</h3>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-white">
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                        <Image className='inline mr-[10px] w-[16px] h-[16px]' src={orange_mini_phone} alt={``}/>044 49 555 49
                    </Link>
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                        <Image className='inline mr-[10px] w-[16px] h-[12px]' src={orange_mini_mail} alt={``}/>support@batyevka.net
                    </Link>
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                        <Image className='inline mr-[10px] w-[17px] h-[15px]' src={orange_mini_tg_logo} alt={``}/>бот в телеграмм
                    </Link>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger className="flex items-center w-full">
                    <h3 className={`w-full font-medium text-left`}>Соціальні мережі</h3>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-white">
                    <div className={`flex`}>
                        <a href={``}><Image className='w-[30px] h-[30px] mr-[8px]' src={_1} alt={``}/></a>
                        <a href={``}><Image className='w-[30px] h-[30px]' src={_3} alt={``}/></a>
                    </div>
                </AccordionContent>
            </AccordionItem> 
            </Accordion>
            <div className={'mr-[35px] ml-[35px] max-[375px]:mr-[20px] max-[375px]:ml-[20px]'}>
                <div className={'text-white text-[14px] pt-[10px]'}>
                    <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Контакти</h3>
                    <ul className={'leading-[32px]'}>
                        <li><Image className='inline mr-[10px] w-[12px] h-[16px]' src={orange_mini_place_marker} alt={``}/>03110, м. Київ, а/с 26</li>
                        <li className='hover:text-[#DC662D]'><Image className='inline mr-[10px] w-[16px] h-[16px]' src={orange_mini_phone} alt={``}/>0 800 30 32 30</li>
                        <li className='hover:text-[#DC662D]'><Image className='inline mr-[10px] w-[16px] h-[12px]' src={orange_mini_mail} alt={``}/>dogovor@batyevka.net</li>
                    </ul>    
                </div>
                <div className={'text-white text-[14px] pt-[10px] pb-[60px] max-[375px]:pb-[0px]'}>
                    <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Ми надаємо послуги:</h3>
                    <ul className={'leading-[32px]'}>
                        <li>Швидкісного доступу в Інтернет</li>
                        <li>Інтерактивне Телебачення</li>
                        <li className={'pb-[6px]'}>ось вже:</li>
                        <div className={'h-[37px] w-[216px] rounded-[10px] bg-[#123853]'}>
                            <p className={'font-semibold ml-[17px] pt-[3px]'}>24 роки 5 місяців</p>
                        </div>
                        <li className={'text-[#56AABF] font-semibold pt-[8px]'}>© Batyevka 2014-2024</li>
                    </ul>
                </div>
            </div>
            {/*
            <AccordionItem value="item-5">
                <AccordionTrigger className="h-[48px] flex items-center w-full">
                    <h3 className={`w-full font-medium text-left`}>Контакти</h3>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-white">
                    <Link href={'#'}>
                        03110, м. Київ, а/с 26
                    </Link>
                    <Link href={'#'}>
                        0 800 30 32 30
                    </Link>
                    <Link href={'#'}>
                        dogovor@batyevka.net
                    </Link>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-1">
                <AccordionTrigger className="h-[48px] flex items-center w-full">
                    <h3 className={`w-full font-medium text-left`}>Ми надаємо послуги:</h3>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-white">
                    <Link href={'#'}>
                        Швидкісного доступу в Інтернет
                    </Link>
                    <Link href={'#'}>
                        Інтерактивне Телебачення
                    </Link>
                    <Link href={'#'}>
                        ось вже:
                        <div className={'h-[48px] max-w-[282px] max-[2377px]:max-w-[216px] min-w-[216px] rounded-xl bg-[#123853]'}>
                            <p className={'font-semibold ml-[17px] pt-[7px]'}>24 роки 5 місяців</p>
                        </div>
                    </Link>
                </AccordionContent>
            </AccordionItem>
    */}
            </div>
        </footer>
     );
}
 
export default Footer;
import Link from 'next/link';
import Image from 'next/image';
import type { ThemeProps } from '@/types/Theme';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion_footer";


import _1 from '../public/img/1.svg';
import _3 from '../public/img/3.svg';
import orange_mini_phone from '../public/img/orange_mini_phone.svg';
import orange_mini_place_marker from '../public/img/orange_mini_place_marker.svg';
import orange_mini_tg_logo from '../public/img/orange_mini_tg_logo.svg';
import orange_mini_mail from '../public/img/orange_mini_mail.svg';

const Footer = ( {theme}: ThemeProps ) => {
    return ( 
        <footer className={`${theme=='white'?'bg-white text-[#5F6061]':'bg-[#0E2D43] text-white shadow-[0_4px_29px_0_rgba(8,35,27)]'}  max-[558px]:shadow-none`}>
            <div className={'max-[932px]:hidden'}>
                <div className={`min-[3644px]:pt-[118px] min-[3644px]:pb-[118px] pt-[78px] pb-[78px] max-[2377px]:pt-[60px] max-[2377px]:pb-[60px] grid grid-cols-6 max-[2377px]:grid-cols-5 max-[1600px]:grid-cols-4 max-[1247px]:grid-cols-3 grid-rows-2 max-[1247px]:grid-rows-3 min-[3644px]:text-[27px] text-[18px] max-[2377px]:text-[14px] min-[3644px]:gap-[72.2px] gap-[43.2px] font-normal leading-[38px] min-[3644px]:leading-[57px] max-[2377px]:leading-[30px] mr-[170px] ml-[170px] max-[2377px]:mr-[120px] max-[2377px]:ml-[120px] max-[1600px]:mr-[85px] max-[1600px]:ml-[85px] max-[1247px]:mr-[67px] max-[1247px]:ml-[67px] min-[3644px]:mr-[240px] min-[3644px]:ml-[240px]`}>
                    <div className={'col-span-1 row-span-2'}>
                        <div>
                            <h3 className={`${theme=='white' ? 'border-[#D4D4D4]' : 'border-[#56AABF]'} border-b border-solid font-semibold pb-[11px] mb-[8px]`}>Ми надаємо послуги:</h3>
                            <ul>
                                <li>Швидкісного доступу в Інтернет</li>
                                <li>Інтерактивне Телебачення</li>
                                <li>ось вже:</li>
                                <div className={`min-[3644px]:h-[72px] h-[48px] max-[2377px]:h-[37px] min-[3644px]:max-w-[423px] max-w-[282px] max-[2377px]:max-w-[216px] min-w-[216px] rounded-xl mt-[10px] + ${theme=='white'?'bg-white shadow-[0_4px_29px_0_#E6E3E3]':'bg-[#123853] shadow-[0_4px_29px_0_#0B273C]'}`}>
                                    <p className={'font-bold min-[3644px]:ml-[26px] ml-[17px] pt-[6px] max-[2377px]:pt-[3px]'}>24 роки 5 місяців</p>
                                </div>
                            </ul>
                        </div>
                        
                    </div>
                    <div className={'col-span-1 row-start-3'}>
                            <a className={`${theme=='white'?'text-[#BDBDBD]':'text-[#56AABF]'} font-semibold leading-[34px]`}>© Batyevka 2014-2024</a>
                    </div>
                    <div>
                        <h3 className={`${theme=='white' ? 'border-[#D4D4D4]' : 'border-[#56AABF]'} border-b border-solid font-semibold pb-[11px] mb-[8px]`}>ТАРИФИ</h3>
                        <ul>
                            <li className='hover:text-[#DC662D]'>Для Бізнесу</li>
                            <li className='hover:text-[#DC662D]'>Для Багатоповерхівок</li>
                            <li className='hover:text-[#DC662D]'>Для Приватних Будинків</li>
                        </ul>
                    </div>
                    <div className={'col-span-1 row-span-2 max-[1600px]:col-start-2 max-[1600px]:row-start-2'}>
                        <h3 className={`${theme=='white' ? 'border-[#D4D4D4]' : 'border-[#56AABF]'} border-b border-solid font-semibold pb-[11px] mb-[8px]`}>Інформація абонентам</h3>
                        <ul>
                            <li className='hover:text-[#DC662D]'>Публічний договір</li>
                            <li className='hover:text-[#DC662D]'>Мапа покриття</li>
                            <li className='hover:text-[#DC662D]'>
                                <Link href="https://my.batyevka.net/cgi-bin/index.cgi" >Особитстий кабінет</Link>
                                </li>
                            <li className='hover:text-[#DC662D]'>Додаткові опції</li>
                            <li className='hover:text-[#DC662D]'>Ще щось цікаве</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={`${theme=='white' ? 'border-[#D4D4D4]' : 'border-[#56AABF]'} border-b border-solid font-semibold pb-[11px] mb-[8px]`}>Технічна підтримка</h3>
                        <ul>
                            <li className='hover:text-[#DC662D]'><Image className='inline mr-[10px] w-[21px] h-[21px] max-[2377px]:w-[16px] max-[2377px]:h-[16px]' src={orange_mini_phone} alt={``}/>044 49 555 49</li>
                            <li className='hover:text-[#DC662D]'><Image className='inline mr-[10px] w-[21px] h-[16px] max-[2377px]:w-[16px] max-[2377px]:h-[12px]' src={orange_mini_mail} alt={``}/>support@batyevka.net</li>
                            <li className='hover:text-[#DC662D]'><Image className='inline mr-[10px] w-[21px] h-[19px] max-[2377px]:w-[17px] max-[2377px]:h-[15px]' src={orange_mini_tg_logo} alt={``}/>бот в телеграмм</li>
                        </ul>
                    </div>
                    <div className={'col-span-1 max-[1247px]:col-start-3 max-[1247px]:row-start-2 max-[1247px]:row-span-1'}>
                        <h3 className={`${theme=='white' ? 'border-[#D4D4D4]' : 'border-[#56AABF]'} border-b border-solid font-semibold pb-[11px] mb-[8px]`}>Контакти</h3>
                        <ul>
                            <li><Image className='inline mr-[10px] w-[16px] h-[21px] max-[2377px]:w-[12px] max-[2377px]:h-[16px]' src={orange_mini_place_marker} alt={``}/>03110, м. Київ, а/с 26</li>
                            <li className='hover:text-[#DC662D]'><Image className='inline mr-[10px] w-[21px] h-[21px] max-[2377px]:w-[16px] max-[2377px]:h-[16px]' src={orange_mini_phone} alt={``}/>0 800 30 32 30</li>
                            <li className='hover:text-[#DC662D]'><Image className='inline mr-[10px] w-[21px] h-[16px] max-[2377px]:w-[16px] max-[2377px]:h-[12px]' src={orange_mini_mail} alt={``}/>dogovor@batyevka.net</li>
                        </ul>    
                    </div>
                    <div className={'max-[2377px]:col-start-5 max-[2377px]:row-start-2 max-[2377px]:row-span-1 max-[1600px]:col-start-4 max-[1600px]:row-start-2 max-[1600px]:row-span-1 max-[1247px]:col-start-3 max-[1247px]:row-start-3 max-[1247px]:row-span-1'}>
                        <h3 className={`${theme=='white' ? 'border-[#D4D4D4]' : 'border-[#56AABF]'} border-b border-solid font-semibold pb-[11px] mb-[24px] max-[2377px]:mb-[19px]`}>Соціальні мережі</h3>
                        <div className={`flex`}>
                            <a href={``}><Image className='min-[3644px]:w-[59px] min-[3644px]:h-[59px] w-[40px] h-[40px] max-[2377px]:w-[30px] max-[2377px]:h-[30px] mr-[8px] transition ease-in-out duration-100 hover:scale-110' src={_1} alt={``}/></a>
                            <a href={``}><Image className='min-[3644px]:w-[59px] min-[3644px]:h-[59px] w-[40px] h-[40px] max-[2377px]:w-[30px] max-[2377px]:h-[30px] transition ease-in-out duration-100 hover:scale-110' src={_3} alt={``}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'min-[933px]:hidden'}>
            <Accordion type="single" collapsible className={'mr-[35px] ml-[35px] max-[558px]:mr-[20px] max-[558px]:ml-[20px] text-[14px] pt-[74px] max-[558px]:pt-[0px]'}>
            <AccordionItem value="item-2">
                <AccordionTrigger className="flex items-center w-full">
                    <h3 className={`w-full font-medium text-left`}>ТАРИФИ</h3>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col">
                    <Link href={'#'} className='hover:text-[#DC662D]'>
                        для бізнесу 
                    </Link>
                    <Link href={'/'} className='hover:text-[#DC662D]'>
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
                <AccordionContent className="flex flex-col">
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
                <AccordionContent className="flex flex-col">
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
                <AccordionContent className="flex flex-col">
                    <div className={`flex`}>
                        <a href={``}><Image className='w-[30px] h-[30px] mr-[8px]' src={_1} alt={``}/></a>
                        <a href={``}><Image className='w-[30px] h-[30px]' src={_3} alt={``}/></a>
                    </div>
                </AccordionContent>
            </AccordionItem> 
            </Accordion>
            <div className={'mr-[35px] ml-[35px] max-[558px]:mr-[20px] max-[558px]:ml-[20px]'}>
                <div className={'text-[14px] pt-[10px]'}>
                    <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Контакти</h3>
                    <ul className={'leading-[32px]'}>
                        <li><Image className='inline mr-[10px] w-[12px] h-[16px]' src={orange_mini_place_marker} alt={``}/>03110, м. Київ, а/с 26</li>
                        <li className='hover:text-[#DC662D]'><Image className='inline mr-[10px] w-[16px] h-[16px]' src={orange_mini_phone} alt={``}/>0 800 30 32 30</li>
                        <li className='hover:text-[#DC662D]'><Image className='inline mr-[10px] w-[16px] h-[12px]' src={orange_mini_mail} alt={``}/>dogovor@batyevka.net</li>
                    </ul>    
                </div>
                <div className={'text-[14px] pt-[10px] pb-[60px] max-[558px]:pb-[0px]'}>
                    <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Ми надаємо послуги:</h3>
                    <ul className={'leading-[32px]'}>
                        <li>Швидкісного доступу в Інтернет</li>
                        <li>Інтерактивне Телебачення</li>
                        <li className={'pb-[6px]'}>ось вже:</li>
                        <div className={`h-[37px] w-[216px] rounded-[10px] + ${theme=='white'?'bg-white shadow-[0_4px_29px_0_#E6E3E3]':'bg-[#123853] shadow-[0_4px_29px_0_#0B273C]'}`}>
                            <p className={'font-semibold ml-[17px] pt-[3px]'}>24 роки 5 місяців</p>
                        </div>
                        <li className={`${theme=='white'?'text-[#BDBDBD]':'text-[#56AABF]'} font-semibold pt-[8px]`}>© Batyevka 2014-2024</li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
     );
};
 
export default Footer;
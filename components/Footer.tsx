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
        <footer className={`bg-[#0E2D43] shadow-[0_4px_29px_0_rgba(8,35,27)]`}>
            <div className={'max-[800px]:hidden'}>
                <div className={`pt-[60px] grid grid-cols-6 max-[1920px]:grid-cols-5 max-[1280px]:grid-cols-4 max-[1024px]:grid-cols-3 grid-rows-3 text-white text-[18px] max-[1920px]:text-[14px] gap-[43.2px] font-normal leading-[30px] mr-[170px] ml-[170px] pb-[78px] max-[1920px]:mr-[120px] max-[1920px]:ml-[120px]  max-[1280px]:mr-[85px] max-[1280px]:ml-[85px] max-[1024px]:mr-[67px] max-[1024px]:ml-[67px]`}>
                    <div className={'col-span-1 row-span-2'}>
                        <div>
                            <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Ми надаємо послуги:</h3>
                            <ul className={'leading-[36px]'}>
                                <li>Швидкісного доступу в Інтернет</li>
                                <li>Інтерактивне Телебачення</li>
                                <li>ось вже:</li>
                                <div className={'h-[48px] max-w-[282px] max-[1920px]:max-w-[216px] min-w-[216px] rounded-xl bg-[#123853]'}>
                                    <p className={'font-semibold ml-[17px] pt-[7px]'}>24 роки 5 місяців</p>
                                </div>
                            </ul>
                        </div>
                        
                    </div>
                    <div className={'col-span-1 row-start-3'}>
                            <a className={'text-[#56AABF] font-semibold leading-[34px]'}>© Batyevka 2014-2024</a>
                    </div>
                    <div>
                        <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>ТАРИФИ</h3>
                        <ul className={'leading-[36px]'}>
                            <li>Для Бізнесу</li>
                            <li>Для Багатоповерхівок</li>
                            <li>Для Приватних Будинків</li>
                        </ul>
                    </div>
                    <div className={'col-span-1 row-span-2 max-[1280px]:col-start-2 max-[1280px]:row-start-2'}>
                        <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Інформація абонентам</h3>
                        <ul className={'leading-[36px]'}>
                            <li>Публічний договір</li>
                            <li>Мапа покриття</li>
                            <li>Особитстий кабінет</li>
                            <li>Додаткові опції</li>
                            <li>Ще щось цікаве</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Технічна підтримка</h3>
                        <ul className={'leading-[36px]'}>
                            <li><Image className='inline mr-[10px] w-[21px] h-[21px] max-[1920px]:w-[16px] max-[1920px]:h-[16px]' src={orange_mini_phone} alt={``}/>044 49 555 49</li>
                            <li><Image className='inline mr-[10px] w-[21px] h-[16px] max-[1920px]:w-[16px] max-[1920px]:h-[12px]' src={orange_mini_mail} alt={``}/>support@batyevka.net</li>
                            <li><Image className='inline mr-[10px] w-[21px] h-[19px] max-[1920px]:w-[17px] max-[1920px]:h-[15px]' src={orange_mini_tg_logo} alt={``}/>бот в телеграмм</li>
                        </ul>
                    </div>
                    <div className={'col-span-1 max-[1024px]:col-start-3 max-[1024px]:row-start-2 max-[1024px]:row-span-1'}>
                        <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Контакти</h3>
                        <ul className={'leading-[36px]'}>
                            <li><Image className='inline mr-[10px] w-[16px] h-[21px] max-[1920px]:w-[12px] max-[1920px]:h-[16px]' src={orange_mini_place_marker} alt={``}/>03110, м. Київ, а/с 26</li>
                            <li><Image className='inline mr-[10px] w-[21px] h-[21px] max-[1920px]:w-[16px] max-[1920px]:h-[16px]' src={orange_mini_phone} alt={``}/>0 800 30 32 30</li>
                            <li><Image className='inline mr-[10px] w-[21px] h-[16px] max-[1920px]:w-[16px] max-[1920px]:h-[12px]' src={orange_mini_mail} alt={``}/>dogovor@batyevka.net</li>
                        </ul>    
                    </div>
                    <div className={'max-[1920px]:col-start-5 max-[1920px]:row-start-2 max-[1920px]:row-span-1 max-[1280px]:col-start-4 max-[1280px]:row-start-2 max-[1280px]:row-span-1 max-[1024px]:col-start-3 max-[1024px]:row-start-3 max-[1024px]:row-span-1'}>
                        <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[24px] max-[1920px]:mb-[19px]`}>Соціальні мережі</h3>
                        <div className={`flex`}>
                            <a href={``}><Image className='w-[40px] h-[40px] max-[1920px]:w-[30px] max-[1920px]:h-[30px] mr-[8px]' src={_1} alt={``}/></a>
                            <a href={``}><Image className='w-[40px] h-[40px] max-[1920px]:w-[30px] max-[1920px]:h-[30px]' src={_3} alt={``}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'min-[800px]:hidden'}>
            <Accordion type="single" collapsible className={'mr-[35px] ml-[35px] text-[14px] pt-[80px]'}>
            <AccordionItem value="item-2">
                <AccordionTrigger className="flex items-center w-full">
                    <h3 className={`w-full font-medium text-left`}>ТАРИФИ</h3>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-white">
                    <Link href={'#'}>
                        для бізнесу 
                    </Link>
                    <Link href={'#'}>
                       для Багатоповерхівок
                    </Link>
                    <Link href={'#'}>
                        для Приватних будинків
                    </Link>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="flex items-center w-full">
                    <h3 className={`w-full font-medium text-left`}>Інформація абонентам</h3>              
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-white">
                    <Link href={'#'}>
                    Публічний договір
                    </Link>
                    <Link href={'#'}>
                        Мапа покриття
                    </Link>
                    <Link href={'#'}>
                        Особистий кабінет
                    </Link>
                    <Link href={'#'}>
                        Додаткові опції
                    </Link>
                    <Link href={'#'}>
                        Ще щось цікаве
                    </Link>
                </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
                <AccordionTrigger className="flex items-center w-full">
                    <h3 className={`w-full font-medium text-left`}>Технічна підтримка</h3>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-white">
                    <Link href={'#'}>
                    <Image className='inline mr-[10px] w-[21px] h-[21px] max-[1920px]:w-[16px] max-[1920px]:h-[16px]' src={orange_mini_phone} alt={``}/>044 49 555 49
                    </Link>
                    <Link href={'#'}>
                        support@batyevka.net
                    </Link>
                    <Link href={'#'}>
                        бот в телеграмм
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
            
            <div className={'text-white mr-[35px] ml-[35px] text-[14px] pt-[10px]'}>
                <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Контакти</h3>
                <ul className={'leading-[36px]'}>
                    <li><Image className='inline mr-[10px] w-[16px] h-[21px] max-[1920px]:w-[12px] max-[1920px]:h-[16px]' src={orange_mini_place_marker} alt={``}/>03110, м. Київ, а/с 26</li>
                    <li><Image className='inline mr-[10px] w-[21px] h-[21px] max-[1920px]:w-[16px] max-[1920px]:h-[16px]' src={orange_mini_phone} alt={``}/>0 800 30 32 30</li>
                    <li><Image className='inline mr-[10px] w-[21px] h-[16px] max-[1920px]:w-[16px] max-[1920px]:h-[12px]' src={orange_mini_mail} alt={``}/>dogovor@batyevka.net</li>
                </ul>    
            </div>
            <div className={'text-white mr-[35px] ml-[35px] text-[14px] pt-[10px]'}>
                <h3 className={`border-b border-[#56AABF] border-solid font-semibold pb-[11px] mb-[8px]`}>Ми надаємо послуги:</h3>
                <ul className={'leading-[36px]'}>
                    <li>Швидкісного доступу в Інтернет</li>
                    <li>Інтерактивне Телебачення</li>
                    <li>ось вже:</li>
                    <div className={'h-[48px] max-w-[282px] max-[1920px]:max-w-[216px] min-w-[216px] rounded-xl bg-[#123853]'}>
                        <p className={'font-semibold ml-[17px] pt-[7px]'}>24 роки 5 місяців</p>
                    </div>
                </ul>
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
                        <div className={'h-[48px] max-w-[282px] max-[1920px]:max-w-[216px] min-w-[216px] rounded-xl bg-[#123853]'}>
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
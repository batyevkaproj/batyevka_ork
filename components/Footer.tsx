import _1 from '../public/img/1.svg';
import _2 from '../public/img/2.svg';
import _3 from '../public/img/3.svg';
import _4 from '../public/img/4.svg';
import orange_mini_phone from '../public/img/orange_mini_phone.svg';
import orange_mini_place_marker from '../public/img/orange_mini_place_marker.svg';
import orange_mini_tg_logo from '../public/img/orange_mini_tg_logo.svg';
import orange_mini_mail from '../public/img/orange_mini_mail.svg';


import Image from 'next/image';

const Footer = () => {
    return ( 
        <footer className={`bg-[#0E2D43] shadow-[0_4px_29px_0_rgba(8,35,27)]`}>
            <div className={`pt-[60px] grid grid-cols-6 text-white gap-4  font-normal leading-[30px]`}>
                <div>
                    <div>
                        <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Ми надаємо послуги:</h3>
                        <ul>
                            <li>Швидкісного достуру в Інтернет</li>
                            <li>Інтерактивне Телебачення</li>
                            <li>ось вже:</li>

                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Тарифи</h3>
                <ul>
                    <li>Для Бізнесу</li>
                    <li>Для Багатоповерхівок</li>
                    <li>Для Приватних Будинків</li>
                </ul>
                </div>
                <div>
                    <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Інформація абонентам</h3>
                    <ul>
                        <li>Публічний договір</li>
                        <li>Мапа покриття</li>
                        <li>Особитстий кабінет</li>
                        <li>Додаткові опції</li>
                        <li>Ще щось цікаве</li>
                    </ul>
                </div>
                <div>
                    <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Технічна підтримка</h3>
                    <ul>
                        <li><Image className='inline mr-[10px]' src={orange_mini_phone} alt={``}/>044 49 555 49</li>
                        <li><Image className='inline mr-[10px]' src={orange_mini_mail} alt={``}/>support@batyevka.net</li>
                        <li><Image className='inline mr-[10px]' src={orange_mini_tg_logo} alt={``}/>бот в телеграмм</li>
                    </ul>
                </div>
                <div>
                    <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Контакти</h3>
                    <ul>
                        <li><Image className='inline mr-[10px]' src={orange_mini_place_marker} alt={``}/>03110, м. Київ, а/с 26</li>
                        <li><Image className='inline mr-[10px]' src={orange_mini_phone} alt={``}/>0 800 30 32 30</li>
                        <li><Image className='inline mr-[10px]' src={orange_mini_mail} alt={``}/>dogovor@batyevka.net</li>
                    </ul>    
                </div>
                <div>
                    <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Соціальні мережі</h3>
                    <div className={`flex`}>
                        <a href={``}><Image src={_1} alt={``}/></a>
                        <a href={``}><Image src={_3} alt={``}/></a>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
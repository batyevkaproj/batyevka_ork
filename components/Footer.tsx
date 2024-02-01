import _1 from '../public/img/1.svg';
import _2 from '../public/img/2.svg';
import _3 from '../public/img/3.svg';
import _4 from '../public/img/4.svg';
import Image from 'next/image';

const Footer = () => {
    return ( 
        <footer className={`bg-[#0E2D43] shadow-[0_4px_29px_0_rgba(8,35,27)]`}>
            <div className={`mx-auto w-[1110px] pt-[60px] grid grid-cols-5 text-white gap-4  font-normal leading-[30px]`}>
                <div>
                    <div>
                        <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Для квартир</h3>
                        <ul>
                            <li>Інтернет для квартир</li>
                            <li>Інтернет + ТБ для квартир</li>
                            <li>Телебачення для квартир</li>

                        </ul>
                    </div>
                    <div>
                        <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Частным домам</h3>
                        <ul>
                            <li>Интернет + ТВ для частников</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Для бизнеса</h3>
                <ul>
                    <li>Інтернет для бізнесу</li>
                    <li>IT-аутсорсинг</li>
                    <li>Обслуговування оргтехніки</li>
                    <li>IT-аудит</li>
                    <li>Налаштування серверів</li>
                    <li>IT-безпека</li>
                    <li>Організація локальної мережі</li>
                    <li>Відеонагляд</li>
                </ul>
                </div>
                <div>
                    <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Информация абонентам</h3>
                    <ul>
                        <li>Акції</li>
                        <li>Тарифи</li>
                        <li>Карта покриття</li>
                        <li>Абонентові</li>
                    </ul>
                </div>
                <div>
                    <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Дополнительные услуги</h3>
                    <ul>
                        <li>Комп'ютерна допомога</li>
                        <li>Up-grade опції</li>
                        <li>Обладнання</li>
                        <li>Програми</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Контакты</h3>
                        <ul>
                            <li>03110, м. Київ, а/с 26</li>
                            <li>0 800 30 32 30</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={`border-b border-white border-solid font-semibold pb-[11px] mb-[8px]`}>Социальные сети</h3>
                        <div className={`flex`}>
                            <a href={``}><Image src={_1} alt={``}/></a>
                            <a href={``}><Image src={_2} alt={``}/></a>
                            <a href={``}><Image src={_3} alt={``}/></a>
                            <a href={``}><Image src={_4} alt={``}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;
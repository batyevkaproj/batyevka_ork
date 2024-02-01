import Image from 'next/image';
import infinity from '../public/img/infinity.png';
import cable from '../public/img/cable.png';
import sign from '../public/img/sign.png';
import money from '../public/img/money.svg';
import schema from '../public/img/schema.svg';
import docks from '../public/img/docks.svg';
import speed from '../public/img/speed.svg';
import oper from '../public/img/oper.svg';
import galochka from '../public/img/galochka.svg';
import green_galochka from '../public/img/green_galochka.svg';
import vector from '../public/img/Vector.svg';
import flash from '../public/img/flash.svg';
import WhiteGreyIpCheck from './ihorradetskyi/WhiteGreyIpCheck';
import _1 from '../public/img/1.svg';
import _2 from '../public/img/2.svg';
import _3 from '../public/img/3.svg';
import _4 from '../public/img/4.svg';


const Body = () => {
    return ( 
<body className={`bg-[#0E2D43]`}>

    <div id={`mobile-modal`} className={`hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className={`mobile-modal-content`}>
            <div className={`mobile-modal-header`}>
                <h2>Меню</h2>
                <button className={`close-button`} data-modal-toggle={`mobile-modal`}>&times;</button>
            </div>
            <div className={`mobile-modal-body`}>
                <ul className={`mobile-modal-links`}>
                    <li><a href={`#`}>Акції</a></li>
                    <li><a href={`#`}>Мапа покриття</a></li>
                    <li><a href={`#`}>Оплата</a></li>
                    <li><a href={`#`}>Підтримка</a></li>
                    <li><a href={`#`}>Опції</a></li>
                    <li><a href={`#`}>Всі послуги</a></li>
                </ul>
            </div>
        </div>
    </div>
    <main className={`mx-auto w-[1110px] bg-[#0E2D43]`}>
        <div className={`h-[446px] w-[1110px] flex items-center justify-between`}>
            <div>
                <h1 className={` text-[60px] font-bold text-white`}>Інтернет <span className={`text-[#56AABF]`}>в офіс</span></h1>
                <li className={`list-none text-white flex flex-col mb-[30px]`}>
                    <div className={`flex items-center mb-[15px]`}>
                      <span className={`box-border w-5 flex`}><Image src={infinity} className={`inline-flex`} alt='infinity'/></span>
                      <ul className={`ml-2  font-normal`}>Безлімітні та необмежені тарифні плани</ul>
                    </div>
                    
                    <div className={`flex items-center mb-[15px]`}>   
                    <span className={`box-border w-[20px] pl-[5px] flex justify-center self-start pt-[5px]`}><Image src={sign} className={`inline-flex`} alt={`sign`}/></span>
                      <ul className={`ml-3  font-normal`}>Гарантована швидкість – симетричний високошвидкісний канал із постійною швидкістю доступу до мережі Інтернет</ul>
                    </div>
                    
                    <div className={`flex items-center`}>
                      <span className={`box-border w-5 flex justify-center self-start`}><Image src={cable} className={`inline-flex`} alt={`cable`}/></span>
                      <ul className={`ml-2  font-normal`}>Організація доступу в Інтернет за найкращою технологією (Оптоволокно)</ul>
                    </div>
                  </li>
                <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]`}>Замовити</button>
            </div>
            <div>
                <Image src={vector} alt='vector'/>
            </div>
        </div>
        <div className={` text-[42px] font-bold text-white flex items-center justify-center w-[1110px]`}>
            <h1 className={`text-center w-[913px] flex items-center justify-center`}>Ключові переваги для наших бізнес абонентів</h1>
        </div>
        <div className={`flex justify-between text-white`}>
            <div className={`flex `}>
                <div className={`flex flex-col`}>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={flash} alt={`flash`}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={` text-[24px] mt-10`}>Підключаємо за добу</h3>
                            <p className={` font-normal h-[126px] flex items-center leading-[24px]`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={money} alt={`money`}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={`text-[24px] mt-10`}>Найбільш адекватні ціни</h3>
                            <p className={` font-normal h-[126px] flex items-center`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={schema} alt={``} className={``}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={`text-[24px] mt-10`}>Надійність та стабільність</h3>
                            <p className={` font-normal h-[126px] flex items-center`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex`}>
                <div className={`flex flex-col`}>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={docks} alt={``} className={``}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={`text-[24px] mt-10`}>Якісний бухгалтерський супровід</h3>
                            <p className={` font-normal h-[126px] flex items-center`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={speed} alt={`speed`} className={``}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={`text-[24px] mt-10`}>Найкраща швидкість</h3>
                            <p className={` font-normal h-[126px] flex items-center`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                    <div className={`flex items-center h-[251px]`}>
                        <Image src={oper} alt={`oper`} className={``}/>
                        <div className={`flex flex-col w-[279px] ml-[42px]`}>
                            <span className={`relative w-[43px] h-[3px] right-14 top-14 bg-white`}></span>
                            <h3 className={` text-[24px] mt-10`}>Підтримка</h3>
                            <p className={` font-normal h-[126px] flex items-center`}>Підключаємо наступного дня, після подання заявки без попереднього укладання документів.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`text-[42px] font-bold text-white flex items-center justify-center w-[1110px]`}>
            <h1 className={`text-center w-[913px] flex items-center justify-center`}>Бізнес тарифи {`G-PON`}</h1>
        </div>

        <div className={`h-[60px]`}></div>
        <div className={` text-[26px] font-bold text-white flex items-center justify-center w-[1110px]`}>
            <h1 className={`text-center w-[913px] flex items-center justify-center`}>Підключаємо ОПТИЧНИЙ кабель</h1>
        </div>
        <div className={` text-[24px] font-bold text-white flex items-center justify-center w-[1110px]`}>
            <h1 className={`text-center w-[913px] flex items-center justify-center`}>Всього за<span className={` text-[#56AABF] px-[6px]`}>699</span>грн</h1>
        </div>


        <div className={`flex justify-center box-border pt-[60px]`}>
            <div className={`h-[573px] w-[350px] rounded-md bg-[#123853] mr-5`}>
                <h2 className={`text-[#DC662D] font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]`}>
                    1999
                </h2>
                <h2 className={`text-[#DC662D] font-normal text-[20px] justify-center flex pb-[72px]`}>
                    грн/міс
                </h2>

                <h2 className={`text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[7px]`}>
                    Швидкість
                </h2>
                <h2 className={`text-white  font-bold text-[36px] justify-center flex pb-[10px]`}>
                    2000 Мегабіт
                </h2>
                <div className={`flex justify-center text-white text-[18px]`}>
                    <span className={`flex mr-[20px] `}>
                        <Image src={galochka} alt={`galochka`} className={`mr-2 `}/>
                        УКРАЇНА
                    </span>
                    <span className={`flex ml-1.5`}>
                    <Image src={galochka} alt={`galochka`} className={`mr-2`}/>
                        СВІТ
                    </span>
                </div>
                <h2 className={`text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[40px]`}>
                    Одинакові
                </h2>
                <div className={`flex justify-center mb-[30px]`}>
                <WhiteGreyIpCheck/>
                </div>
                <div className={`flex justify-center`}>
                    <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer font-semibold shadow-[0_4px_20px_0_#56AABF80]`}>Прдключення</button>
                </div>
            </div>
        </div>


       
        

        <div className={` text-[42px] font-bold text-white flex items-center justify-center w-[1110px] mt-[120px]`}>
            <h1 className={`text-center w-[913px] flex items-center justify-center`}>Бизнес тарифы {`XG-PON`}</h1>
        </div>

        <div className={`flex justify-center box-border pt-[60px]`}>
            <div className={`h-[573px] w-[350px] rounded-md bg-[#123853] mr-5`}>
                <h2 className={`text-[#DC662D]  font-bold text-[70px] justify-center flex mt-[60px] leading-[70px]`}>
                    1999
                </h2>
                <h2 className={`text-[#DC662D] font-normal text-[20px] justify-center flex pb-[72px]`}>
                    грн/міс
                </h2>

                <h2 className={`text-[#56AABF] font-semibold text-[18px] justify-center flex pb-[7px]`}>
                    Швидкість
                </h2>
                <h2 className={`text-white  font-bold text-[36px] justify-center flex pb-[10px]`}>
                    2000 Мегабіт
                </h2>
                <div className={`flex justify-center text-white text-[18px]`}>
                    <span className={`flex mr-[20px] `}>
                        <Image src={galochka} alt={`galochka`} className={`mr-2 `}/>
                        УКРАЇНА
                    </span>
                    <span className={`flex ml-1.5`}>
                    <Image src={galochka} alt={`galochka`} className={`mr-2`}/>
                        СВІТ
                    </span>
                </div>
                <h2 className={`text-[#56AABF]  font-semibold text-[18px] justify-center flex pb-[40px]`}>
                    Одинакові
                </h2>
                <div className={`flex justify-center mb-[30px]`}>
                <WhiteGreyIpCheck/>
                </div>
                <div className={`flex justify-center`}>
                    <button className={`bg-[#56AABF] text-white rounded-full h-[60px] w-[155px] cursor-pointer  font-semibold shadow-[0_4px_20px_0_#56AABF80]`}>Прдключення</button>
                </div>
            </div>
        </div>



        <div className={` text-[42px] font-bold text-white flex items-center justify-center w-[1110px] mt-[120px]`}>
            <h1 className={`text-center w-[913px] flex items-center justify-center`}>Механіка тарифів та розрахунків</h1>
        </div>

        <div className={` font-normal text-white flex flex-col items-center justify-center w-[1110px] mt-[120px] mb-[120px]`}>
            <div className={`flex mb-[10px]`}>
                <Image src={green_galochka} alt='green_checkArrow' className={`shrink-0 self-start mr-[8px] mt-[2px]`}/>
                <p>При підключенні, Абоненту за замовчуванням надається внутрішня ІР-адреса. Всі тарифи безлімітні по трафіку Мир та Україна – немає поділу. Швидкість Входу та Виходу однакові.</p>
            </div>
            <div className={`flex mb-[10px]`}>
                <Image src={green_galochka} alt='green_checkArrow' className={`shrink-0 self-start mr-[8px] mt-[2px]`}/>
                <p>Абонентна плата нараховується за календарний місяць та оплачується шляхом передоплати. Для безперервного користування послугою Абонент до 1-го числа кожного місяця вносить на свій особовий рахунок суму в розмірі абонентної плати та всіх замовлених додаткових послуг (рекомендуємо внести гроші за 3 дні до вказаної дати).</p>
            </div>
            <div className={`flex mb-[10px]`}>
                <Image src={green_galochka} alt='green_checkArrow' className={`shrink-0 self-start mr-[8px] mt-[2px]`}/>
                <p>Якщо Абонент не сплатив більше 40 днів від останнього дня надання послуг, його договір /ликовий рахунок блокується (дія тарифу, акцій, у яких Абонент брав участь, припиняється). Повторна активація договору платна - у розмірі вартості підключення на обраному тарифі.</p>
            </div>
            <div className={`flex mb-[10px]`}>
                <Image src={green_galochka} alt='green_checkArrow' className={`shrink-0 self-start mr-[8px] mt-[2px]`}/>
                <p>Перехід на тариф Інтернет з меншою вартістю – 100 грн. разово тариф змінюється з 1 числа наступного місяця. Перехід на тариф Інтернет із більшою вартістю – 45 грн. разово тариф змінюється з наступного робочого дня з перерахунком абонентної плати. Увімкнення/вимкнення передплати Телебачення від МЕГОГО – безкоштовно.</p>
            </div>
        </div>


        <div className={` font-normal text-white flex flex-col items-center w-[1110px] h-[326px] bg-[#123853] mb-[120px]`}>
            <h1 className={` font-bold text-white mt-[50px] text-[42px] mb-[25px]`}>Простіше обговорити всі деталі по телефону?</h1>
            <p className={` font-normal text-white text-[24px]`}>Залишіть ваші контактні дані і ми <span className={`text-[#DC662D] font-semibold`}>передзвонимо</ span></p>
            <div className={`flex mt-[49px]`}>
                <input type={`text`} className={`w-[310px] rounded-full bg-transparent border h-[60px] mr-[30px]`}/>
                <input type={`text`} className={`w-[310px] rounded-full bg-transparent border h-[60px] mr-[30px]`}/>
                <button type={`button`} className={`w-[310px] rounded-full bg-[#56AABF] h-[60px] text-white text-[18px]  font-semibold`}>Зв'яжіться зі мною</button>
            </div>
        </div>


        <div className={` font-normal text-white flex flex-col w-[1110px] mb-[120px]`}>
            <h1 className={`font-semibold`}>Про компанію</h1>
            <p className={`mb-5`}>Компанія Batyevka.NET - це надійний постачальник високоякісного інтернету, який перевірений роками. Ми надаємо послуги тисячам задоволених городян, успішно зарекомендувавши себе як хорошого, стабільного провайдера і спеціалізуємося на підключенні до телебачення та Internet.</p>
            <p className={`mb-5`}>Batyevka.NET - інтернет провайдер, який стійко витримує жорстку конкуренцію столиці і при цьому зберігає умови лояльної цінової політики, стосовно своїх клієнтів. Ми працюємо як з фізичними, так і юридичними особами і наші тарифи доступні для всіх мешканців міста. Ми завжди відкриті для співробітництва та готові надати широкий пакет послуг кожному. Наш клієнт - це наш друг, тому ми працюємо так, щоб підключити інтернет у Києві було для вас максимально просто. Наша команда — це команда професіоналів своєї справи, які готові надати безперебійний доступ до всесвітньої мережі з будь-якої точки міста в режимі 24/7. Наша головна мета - задоволений замовник, тому ми знаємо, що таке індивідуальний підхід до кожного.</p>
            <h1 className={`font-semibold`}>Чому варто вибрати саме нас?</h1>
            <p className={`mb-5`}>Існує кілька важливих причин, через які жителям Солом'янського району столиці потрібно вибрати нашу компанію:</p>
            <p>1. Якість</p>
            <p className={`ml-[13px]`}>Головне, чим ми можемо по-праву пишатися — це можливість користувача мати цілодобовий доступ до високоякісного інтернету.</p>
            <p>2. Ціна</p>
            <p className={`ml-[13px]`}>Грамотний підхід до питань цінової політики робить Batyevka.NET доступним усім і кожному.</p>
            <p>3. Вибір</p>
            <p className={`ml-[13px] mb-5`}>Великий спектр тематичних послуг дозволяє нашій команді залишатися затребуваною для замовника. Наприклад, підключивши домашній інтернет, ви завжди можете розраховувати на цілодобову технічну підтримку.</p>
            <p className={`mb-5`}>У роботі ми використовуємо виключно високоякісне технічне обладнання та комплектуючі. Ми уважно стежимо за всіма інноваціями у сфері телекомунікацій. Наші фахівці не перестають удосконалювати себе, свої знання, покращуючи тим самим якість обслуговування та заробляючи необхідний досвід. Ми прагнемо до досконалості постійно оновлюючи та розширюючи перелік послуг та роблячи їх доступнішими для клієнта. Ми пишаємося тим, що довіра столичних жителів зростає з кожним днем, як і кількість задоволених клієнтів фірми.</p>
            <p className={`mb-5`}>Підключення до інтернету Batyevka.NET регулярно проводить у багатоповерхових будинках, використовуючи оптичне волокно GPON або мідний кабель UTP. Наша унікальна технологія підв'язки до глобальної мережі FTTH (волокно в під'їзд та мідний кабель у квартиру) дає можливість досягти швидкості до 1 ГІГАБІТУ!</p>
            <p className={`mb-5`}>Підключивши інтернет ви отримаєте справжнє задоволення від переглядів фільмів онлайн, інтернет серфінгу, а також можливостей грати в улюблені онлайн-ігри з найкоротшим ping у місті.</p>
            <p className={`mb-5`}>Використання маршрутизаторів Cisco дають можливість контролювати трафік, забезпечуючи абонентів максимальну швидкість підключення Internet.</p>
            <p className={`mb-5`}>Якщо у вас виникли питання, ви завжди можете звернутися за консультацією Online, або зателефонувавши до нас по одному з телефонів, вказаних у розділі «контакти». Бажаєте стати нашим новим абонентом? Звертайтесь, ми завжди радо зустрічаємо нових клієнтів!</p>
        </div>
    </main>

    <div className={`bg-[#0E2D43] shadow-[0_4px_29px_0_rgba(8,35,27)]`}>
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

        
    </div>
</body>
    );
}
 
export default Body;